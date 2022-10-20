require("chromedriver");
const {Builder} =require('selenium-webdriver');
const {expect} = require("chai");

describe("selenium tests", function () {
    this.timeout(30_000);

it ("should open browser", async () => {
    let driver = await new Builder().forBrowser("chrome").build();
try{
    await driver.get("https:www.automationpractice.com/index.php");
    const search = await driverfindElement(By.id("SearchBox"));
    await search.sendKeys("jacket");
    await search.sendKeys(Key.Enter);
    const result = await driver.findElement(By.css('<a class="product-name" href="http://automationpractice.com/index.php?id_product=5&amp;controller=product&amp;search_query=dress&amp;results=7" title="Printed Summer Dress" itemprop="url">Printed Summer Dress</a>')); 
    expect(await result.getText()).to.equal("Summer Dress");
     
    }finally {
        await driver.quit();
    }
})

return;
});