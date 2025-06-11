import { tool } from 'ai';
import { z } from 'zod';

export const tools = {
    calculator: tool({
        description: "Allows for calculations such as addition, subtraction, multiplication, division, square root, and power operations.",
        parameters: z.object({
            firstNumber: z.number().describe("The first number to calculate with"),
            secondNumber: z.number().describe("The second number to calculate with").optional(),
            operation: z.enum(["add", "subtract", "multiply", "divide", "square_root", "power"]).describe("The operation to perform on the two numbers")
        }),
        execute: async ({ firstNumber, secondNumber, operation }) => {
            switch (operation) {
                case "add":
                    if (secondNumber === undefined) throw new Error("secondNumber is required for add");
                    return firstNumber + secondNumber;
                case "subtract":
                    if (secondNumber === undefined) throw new Error("secondNumber is required for subtract");
                    return firstNumber - secondNumber;
                case "multiply":
                    if (secondNumber === undefined) throw new Error("secondNumber is required for multiply");
                    return firstNumber * secondNumber;
                case "divide":
                    if (secondNumber === undefined) throw new Error("secondNumber is required for divide");
                    if (secondNumber === 0) throw new Error("Cannot divide by zero");
                    return firstNumber / secondNumber;
                case "square_root":
                    if (firstNumber < 0) throw new Error("Cannot take square root of negative number");
                    return Math.sqrt(firstNumber);
                case "power":
                    if (secondNumber === undefined) throw new Error("secondNumber is required for power");
                    return Math.pow(firstNumber, secondNumber);
                default:
                    throw new Error("Unknown operation");
            }
        }
    }),
    
}