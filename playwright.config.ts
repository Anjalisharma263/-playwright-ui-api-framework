import { defineConfig } from '@playwright/test';
import 'dotenv/config';
export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  retries: 0,
  workers:2,
  reporter: [
  ['line'],
  ['allure-playwright']
],
  use: {
  baseURL: 'https://marmelab.com/ra-enterprise-demo/',
  headless: false, // keep visible initially for debugging
  trace: 'retain-on-first-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 0
    
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
});


