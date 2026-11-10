import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  reporter: [["list"], ["html", { open: "never" }]],

  use: {
    baseURL: "http://localhost:5173",
  },

  // Sobe o Vite automaticamente antes dos testes
  webServer: {
    command: "npm run dev",
    url: "http://localhost:5173",
    reuseExistingServer: true,
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
