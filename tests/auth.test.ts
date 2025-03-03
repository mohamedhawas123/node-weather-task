import request from "supertest";
import app from "../src/app";

describe("Auth API Tests", () => {
  it("should register a new user", async () => {
    const response = await request(app).post("/api/auth/register").send({
      email: "testuser@example.com",
      password: "testpassword",
    });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("User registered successfully");
  });

  it("should log in a user", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "testuser@example.com",
      password: "testpassword",
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });
});
