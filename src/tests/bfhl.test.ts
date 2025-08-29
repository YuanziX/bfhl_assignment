import request from "supertest";
import app from "../app";
import { Server } from "http";

let server: Server;

beforeAll((done) => {
  server = app.listen(4000, () => {
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

describe("POST /bfhl", () => {
  // test 1 for correct request
  it("should return correct response", async () => {
    const response = await request(server)
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
  });

  // test 2 for correct request
  it("should return correct response", async () => {
    const response = await request(server)
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
  });

  // test for empty array
  it("should properly handle empty array", async () => {
    const response = await request(server).post("/bfhl").send({ arr: [] });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      is_success: false,
      error: "Provided array is empty.",
    });
  });

  // test for no array
  it("should properly handle no array provided", async () => {
    const response = await request(server)
      .post("/bfhl")
      .send({ data: ["a", "b"] });

    expect(response.status).toBe(400);
    expect(response.body.is_success).toBe(false);
    expect(response.body.error).toBe("Invalid request body.");
  });

  // test for invalid array
  it("should return a 400 error if arr is not an array", async () => {
    const response = await request(server)
      .post("/bfhl")
      .send({ arr: "not-an-array" });

    expect(response.status).toBe(400);
    expect(response.body.is_success).toBe(false);
    expect(response.body.error).toBe("Invalid request body.");
  });
});
