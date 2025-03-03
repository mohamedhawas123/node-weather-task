import request from "supertest";
import app from "../src/app";

describe("Weather API Tests", () => {
  it("should fetch weather by coordinates", async () => {
    const response = await request(app).get(
      "/api/weather/current?lat=40.7128&lon=-74.0060"
    );

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("coord");
    expect(response.body).toHaveProperty("weather");
  });

  it("should fetch weather by city name", async () => {
    const response = await request(app).get("/api/weather/city/London");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name", "London");
    expect(response.body).toHaveProperty("weather");
  });

  it("should return 400 for missing coordinates", async () => {
    const response = await request(app).get("/api/weather/current");
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Latitude and Longitude are required");
  });

  it("should return 400 for missing city name", async () => {
    const response = await request(app).get("/api/weather/city/");
    expect(response.status).toBe(404); 
  });

  it("should return 500 for invalid city name", async () => {
    const response = await request(app).get("/api/weather/city/invalidcityname");
    expect(response.status).toBe(500);
  });
});
