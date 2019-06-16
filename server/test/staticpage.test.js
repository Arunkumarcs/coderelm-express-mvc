// let app = require('../app')
const puppeteer = require('puppeteer');
const config = {
    "url" : "http://localhost:3000",
    "puppeteer": {
        "launch": {
            "headless": true,
            "devtools": false,
            // "slowMo": 250 // slow down by 250ms
        }
    }
};

function sum(a, b) {
    return a + b;
}

/**
 * Unit Test Cases
 */
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

/**
 * Integration Test Cases
 */
test('testing browser', async() => {
    const browser = await puppeteer.launch(config.puppeteer.launch);
    const page = await browser.newPage();
    await page.goto(config.url);
    let content = await page.content();
    // await page.screenshot({path: './test/screenshot/example.png'});
    await browser.close();

    expect(content).toMatch(/CodeRelm Express MVC/);
}, 11000);

 /**
  * Full Flow Test 
  */