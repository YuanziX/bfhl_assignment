"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bfhl = bfhl;
const bfhl_validator_1 = require("../validators/bfhl.validator");
const bfhl_service_1 = require("../services/bfhl.service");
// controller function
function bfhl(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // parse and check payload
            const data = bfhl_validator_1.bfhlSchema.safeParse(req.body);
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
            const result = (0, bfhl_service_1.processArray)(data.data.arr);
            return res.status(200).json(Object.assign({ is_success: true, user_id: "achyut_badyal_16112004", email: "achyut.22bce7776@vitapstudent.ac.in", roll_number: "22BCE7776" }, result));
        }
        catch (_a) {
            return res.status(500).json({
                is_success: false,
                error: "Internal Server Error.",
            });
        }
    });
}
