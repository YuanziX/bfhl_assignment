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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
let server;
beforeAll((done) => {
    server = app_1.default.listen(4000, () => {
        done();
    });
});
afterAll((done) => {
    server.close(done);
});
describe("POST /bfhl", () => {
    // test 1 for correct request
    it("should return correct response", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(server)
            .post("/bfhl")
            .send({ arr: ["a", "1", "334", "4", "R", "$"] });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            is_success: true,
            user_id: "achyut_badyal_16112004",
            email: "achyut.22bce7776@vitapstudent.ac.in",
            roll_number: "22BCE7776",
            odd_numbers: ["1"],
            even_numbers: ["334", "4"],
            alphabets: ["A", "R"],
            special_characters: ["$"],
            sum: "339",
            concat_string: "Ra",
        });
    }));
    // test 2 for correct request
    it("should return correct response", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(server)
            .post("/bfhl")
            .send({ arr: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"] });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            is_success: true,
            user_id: "achyut_badyal_16112004",
            email: "achyut.22bce7776@vitapstudent.ac.in",
            roll_number: "22BCE7776",
            odd_numbers: ["5"],
            even_numbers: ["2", "4", "92"],
            alphabets: ["A", "Y", "B"],
            special_characters: ["&", "-", "*"],
            sum: "103",
            concat_string: "ByA",
        });
    }));
    // test for empty array
    it("should properly handle empty array", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(server).post("/bfhl").send({ arr: [] });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            is_success: false,
            error: "Provided array is empty.",
        });
    }));
    // test for no array
    it("should properly handle no array provided", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(server)
            .post("/bfhl")
            .send({ data: ["a", "b"] });
        expect(response.status).toBe(400);
        expect(response.body.is_success).toBe(false);
        expect(response.body.error).toBe("Invalid request body.");
    }));
    // test for invalid array
    it("should return a 400 error if arr is not an array", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(server)
            .post("/bfhl")
            .send({ arr: "not-an-array" });
        expect(response.status).toBe(400);
        expect(response.body.is_success).toBe(false);
        expect(response.body.error).toBe("Invalid request body.");
    }));
});
