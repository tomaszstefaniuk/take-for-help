// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  preset: "ts-jest",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
