const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const {
  Given,
  When,
  Then,
  BeforeAll,
  AfterAll,
  setDefaultTimeout,
} = require("cucumber");
const { chromium } = require("playwright");
//const { expect } = require("expect-playwright");
// eslint-disable-next-line no-unused-vars
const should = require("chai").should();

const { assert } = require("console");
const Assert = require("assert");
const { expect } = require("chai");
const { array } = require('assert-plus');

let page;
let browser;

setDefaultTimeout(50 * 1000);

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  const createCsvWriter = require('csv-writer').createObjectCsvWriter;

});

AfterAll(() => {
  if (!page.isClosed()) {
    browser.close();
  }
});

Given("Navigate to the webpage", async () => {
  await page
    .goto(
      "https://www.amazon.com/",
      {
        waitUntil: "networkidle0",
      }
    )
    .catch(() => {});
});

When("I am on the page", async () => {
  //await page.waitForSelector('//input[@id="twotabsearchtextbox"]');
  const title = await page.title();

  title.should.eql("Amazon.com. Spend less. Smile more.");
});

When('I provide the {string} in searchbar', async (data) => {
  await page.click('//input[@id="twotabsearchtextbox"]');
  await page.fill('//input[@id="twotabsearchtextbox"]',data);
  await page.click('//input[@id="nav-search-submit-button"]')
});
Then('capture first {int} values', async function (int) {
  const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'output.csv',
  append:true,
  header: [
    {id: 'name', title: 'ProductName'},
    {id: 'url', title: 'url'},
    {id: 'price1', title: 'Price1'},
    {id: 'price2', title: 'Price2'},
    {id: 'price3', title: 'Price3'},
    {id:'time',title:'Date'}
  ]
});

  console.log(await page.innerText('//title'))
  title2 = await page.innerText('//title')
  productname = title2.split(":")
  
  const arr = [];

  for(var i = 1;i<=int;i++){
  //console.log
  //console.log(productname[1].trim())
  price = await page.innerText('(//span[@class="a-price"]/span[@class="a-offscreen"])['+i+']')

  console.log(price)
  arr[i-1] = price
  }
  console.log(arr)
  
//const createCsvWriter = require('csv-writer').createObjectCsvWriter;
//append
const data = [{
name: productname[1].trim(),
url: await page.url(),
price1:arr[0],
price2:arr[1],
price3:arr[2],
time:new Date().toLocaleDateString()
}];
    csvWriter
    .writeRecords(data)
    .then(()=> console.log('The CSV file was written successfully'));
} 

);



