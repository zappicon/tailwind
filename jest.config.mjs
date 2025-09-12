export default {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/tests"],
  moduleFileExtensions: ["ts", "js", "json"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
      },
    ],
  },
  testMatch: ["**/?(*.)+(spec|test).[tj]s"],

  moduleNameMapper: {
    "^@core/(.*)$": "<rootDir>/core/$1",
  },
}
