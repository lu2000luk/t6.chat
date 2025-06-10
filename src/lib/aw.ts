import { Account, Client } from "appwrite";
import { Client as ServerClient } from "node-appwrite";

export function getClient(): Client {
  return new Client()
    .setEndpoint(
      process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ||
        "https://nyc.cloud.appwrite.io/v1"
    )
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "t6chat");
}

export const client = getClient();
export const account = new Account(client);

export function getClientFromJWT(jwt: string): Client {
  return getClient().setJWT(jwt);
}

export function getServerClient() {
  return new ServerClient()
    .setEndpoint(
      process.env.APPWRITE_ENDPOINT || "https://nyc.cloud.appwrite.io/v1"
    )
    .setProject(process.env.APPWRITE_PROJECT_ID || "t6chat")
    .setKey(process.env.AW_API_KEY || "");
}
