/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { URL, fileURLToPath } from "url";
import { defineConfig } from "vitest/config";

const testingPackagePath = `../../packages/testing`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: process.env.VITEST_ENV || "happy-dom", // happy-dom instead of jsdom
    typecheck: {
      tsconfig: `${testingPackagePath}/tsconfig.json`,
    },
    // setupFiles: ["./src/server/spec/support/setup"],
    globalSetup: [`${testingPackagePath}/support/globalSetup`],
  },
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./src", import.meta.url)),
      "@@": fileURLToPath(new URL("./packages", import.meta.url)),
    },
  },
});
