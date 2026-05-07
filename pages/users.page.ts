export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  retries: 1,

  workers: process.env.CI ? 2 : 4,

  reporter: [
    ['list'],
    ['allure-playwright']
  ],

  use: {
    baseURL: 'http://localhost:3000', // React Admin
    headless: true,
    trace: 'on-first-retry'
  },
});