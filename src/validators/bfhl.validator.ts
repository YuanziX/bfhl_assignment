import z from "zod";

// takes in array
export const bfhlSchema = z.object({
  arr: z.array(z.string()),
});
