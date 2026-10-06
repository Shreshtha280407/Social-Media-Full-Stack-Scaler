const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  console.log('Navigating to Login page...');
  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(1000); // Wait for render
  
  await page.screenshot({ path: '/home/Shreshtha/.gemini/antigravity-cli/brain/47625749-684b-48ff-9bd1-55eeb8d9b60e/login.png' });
  console.log('Login screenshot saved as login.png');

  console.log('Navigating to Signup page...');
  await page.click('text="Sign up"');
  await page.waitForTimeout(1000); // Wait for render
  
  await page.screenshot({ path: '/home/Shreshtha/.gemini/antigravity-cli/brain/47625749-684b-48ff-9bd1-55eeb8d9b60e/signup.png' });
  console.log('Signup screenshot saved as signup.png');

  await browser.close();
})();
