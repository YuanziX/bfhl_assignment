import { Request, Response } from "express";
import { bfhlSchema } from "../validators/bfhl.validator";
import { processArray } from "../services/bfhl.service";

// controller function
export async function bfhl(req: Request, res: Response) {
  try {
    // parse and check payload
    const data = bfhlSchema.safeParse(req.body);

    if (!data.success) {
      // return proper error on no array given
      return res.status(400).json({
        is_success: false,
        error: "Invalid request body.",
        details: data.error,
      });
    }

    // return proper error on zero length array
    if (data.data.arr.length === 0) {
      return res.status(400).json({
        is_success: false,
        error: "Provided array is empty.",
      });
    }

    // call service
    const result = processArray(data.data.arr);

    return res.status(200).json({
      is_success: true,
      user_id: "achyut_badyal_16112004",
      email: "achyut.22bce7776@vitapstudent.ac.in",
      roll_number: "22BCE7776",
      ...result,
    });
  } catch {
    return res.status(500).json({
      is_success: false,
      error: "Internal Server Error.",
    });
  }
}
