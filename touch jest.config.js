module.exports = {
    preset: "ts-jest", 
    testEnvironment: "node", 
    testMatch: ["**/tests/**/*.test.ts"], 
    moduleFileExtensions: ["ts", "js"],
    clearMocks: true, 
    coverageDirectory: "coverage",
    collectCoverageFrom: [
      "src/**/*.ts", 
      "!src/server.ts", 
      "!src/config/**",
      "!src/routes/**", 
    ],
    setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"], // Setup global test configs
  };
  