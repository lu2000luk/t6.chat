import { clsx, type ClassValue } from "clsx";
import { Databases } from "node-appwrite";
import { twMerge } from "tailwind-merge";
import { getServerClient } from "./aw";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

async function sha256(message: string) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

export async function getRatelimitKey(
  authenticated: string | false | null,
  request: Request
) {
  if (!authenticated) {
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip");
    if (!ip) {
      return null;
    }
    return "ip-" + (await sha256(ip));
  } else {
    return "auth-" + (await sha256(`user-${authenticated}`));
  }
}

export async function isRatelimited(
  rateLimitKey: string,
  ip_limit = 10,
  auth_limit = 50,
  interval = 86400000
) {
  const databases = new Databases(getServerClient());
  const db_id = "misc";
  const collection_id = "ratelimits";
  const document_id = rateLimitKey.substring(rateLimitKey.indexOf('-') + 1).substring(0, 36);
  const now = Date.now();

  const isIp = rateLimitKey.startsWith("ip-");
  const limit = isIp ? ip_limit : auth_limit;

  try {
    const doc = await databases.getDocument(db_id, collection_id, document_id);
    const requests: string[] = Array.isArray(doc.requests) ? doc.requests : [];
    const cutoff = now - interval;
    const filteredRequests = requests
      .map(Number)
      .filter((ts) => ts >= cutoff)
      .map(String);

    const isLimited = filteredRequests.length >= limit;
    if (!isLimited) {
      filteredRequests.push(now.toString());
      await databases.updateDocument(db_id, collection_id, document_id, {
        requests: filteredRequests,
      });
    }

    return isLimited;
  } catch (error: any) {
    await databases.createDocument(db_id, collection_id, document_id, {
      requests: [now.toString()],
    });
    return false;
  }
}
