import puppeteer from "puppeteer";

describe("page start", () => {
  let browser;
  let page;

  jest.setTimeout(200000);

  beforeEach(async () => {
    //открыть браузер
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 100,
      // devtools: true,
      // env: {
      //   DISPLAY: ":10.0",
      // },
    });

    //просим браузер открыть новую страницу
    page = await browser.newPage();
  });

  //тесты
  test("page rendering", async () => {
    await page.goto("http://localhost:9000");

    await page.waitForSelector("body");
  });

  //закрыть браузер
  afterEach(async () => {
    await browser.close();
  });
});
