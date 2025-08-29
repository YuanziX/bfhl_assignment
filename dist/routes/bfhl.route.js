"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bfhlRouter = void 0;
const express_1 = require("express");
const bfhl_controller_1 = require("../controllers/bfhl.controller");
exports.bfhlRouter = (0, express_1.Router)();
// setup route
/**
 * @openapi
 * /bfhl:
 *   post:
 *     summary: Process an array of strings into categorized data
 *     tags:
 *       - BFHL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               arr:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Array of strings containing numbers, alphabets, or special characters
 *             required:
 *               - arr
 *           example:
 *             arr: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
 *     responses:
 *       200:
 *         description: Processed data successfully returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 is_success:
 *                   type: boolean
 *                   example: true
 *                 user_id:
 *                   type: string
 *                   example: achyut_badyal_16112004
 *                 email:
 *                   type: string
 *                   format: email
 *                   example: achyut.22bce7776@vitapstudent.ac.in
 *                 roll_number:
 *                   type: string
 *                   example: 22BCE7776
 *                 odd_numbers:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["1", "3"]
 *                 even_numbers:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["2", "4"]
 *                 alphabets:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["A", "B"]
 *                 special_characters:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["@", "#"]
 *                 sum:
 *                   type: string
 *                   example: "10"
 *                 concat_string:
 *                   type: string
 *                   example: "aBcD"
 *       400:
 *         description: Invalid input or empty array
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 is_success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: Provided array is empty.
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 is_success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: Internal Server Error.
 */
exports.bfhlRouter.post("/", bfhl_controller_1.bfhl);
