import puppeteer from "puppeteer";

describe("check type of card", () => {
  let browser;
  let page;

  jest.setTimeout(200000);

  beforeAll(async () => {
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
  test("validation form should render on page start", async () => {
    await page.goto("http://localhost:9000");

    await page.waitForSelector(".validation-form");
  });

  test("type of card should be VISA", async () => {
    await page.goto("http://localhost:9000");

    await page.waitForSelector(".validation-form");

    const validationForm = await page.$(".validation-form");
    const validationFormInput = await validationForm.$(
      ".validation-form__input"
    );
    const validationFormBtn = await validationForm.$(".validation-form__btn");

    await validationFormInput.type("4539580238263850791");
    await validationFormBtn.click();

    await page.waitForSelector(".cards-list__item_visa.checked");
  });

  test("type of card should be Discover", async () => {
    await page.goto("http://localhost:9000");

    await page.waitForSelector(".validation-form");

    const validationForm = await page.$(".validation-form");
    const validationFormInput = await validationForm.$(
      ".validation-form__input"
    );
    const validationFormBtn = await validationForm.$(".validation-form__btn");

    await validationFormInput.type("6011965595227261685");
    await validationFormBtn.click();

    await page.waitForSelector(".cards-list__item_discover.checked");
  });

  test("type of card fail", async () => {
    await page.goto("http://localhost:9000");

    await page.waitForSelector(".validation-form");

    const validationForm = await page.$(".validation-form");
    const validationFormInput = await validationForm.$(
      ".validation-form__input"
    );
    const validationFormBtn = await validationForm.$(".validation-form__btn");

    await validationFormInput.type("***1");
    await validationFormBtn.click();

    await page.waitForSelector(".validation-form__no-type.active");
  });

  //закрыть браузер
  afterAll(async () => {
    await browser.close();
  });
});
