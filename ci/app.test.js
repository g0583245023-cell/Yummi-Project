const request = require("supertest");
const app = require("./app");

describe("Yummi API", () => {
  test("GET /health reports that the application is healthy", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "OK" });
  });

  test("GET /api-docs/ serves the API documentation", async () => {
    const response = await request(app).get("/api-docs/");

    expect(response.status).toBe(200);
    expect(response.text).toContain("swagger-ui");
  });
});
