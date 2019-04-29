const expect = require('chai').expect
const puppeteer = require('puppeteer')

const launchOption = {headless: false}

describe('tooth-selector test', async function () {
  it('Be able to pop the window correctly', async function () {
    const browser = await puppeteer.launch(launchOption)
    const page = await browser.newPage()
    await page.goto('http://localhost:8080')
    await page.click('.btn')
    const target = await page.$(".btn-container")
    await browser.close()
    expect(target).to.an('object')
  })
  it('Three buttons for selecting all are associated', async function () {
    const browser = await puppeteer.launch(launchOption)
    const page = await browser.newPage()
    await page.goto('http://localhost:8080')
    await page.click('.btn')
    await page.click('.container .header input:nth-child(2)')
    const target = await page.evaluate((sel) => {
      return document.querySelector(sel).classList[0]
    }, '.container .header input:nth-child(3)')
    await page.click('.container .header input:nth-child(3)')
    const target2 = await page.evaluate((sel) => {
      return document.querySelector(sel).classList[0]
    }, '.container .header input:nth-child(2)')
    await browser.close()
    expect(target).to.equal('active')
    expect(target2).to.be.undefined
  })
  it('Can be closed', async function () {
    const browser = await puppeteer.launch(launchOption)
    const page = await browser.newPage()
    await page.goto('http://localhost:8080')
    await page.click('.btn')
    await page.click('#close')
    const target = await page.$('.container')
    await browser.close()
    expect(target).to.be.null
  })
  it('The coordinates can be displayed correctly on the right', async function () {
    const browser = await puppeteer.launch(launchOption)
    const page = await browser.newPage()
    await page.goto('http://localhost:8080')
    await page.click('.btn')
    await page.click('.tooth')
    const target = await page.evaluate((sel) => {
      return document.querySelector('.right-header-center li').textContent
    }, '.right-header-center li')
    const target2 = await page.evaluate((sel) => {
      return document.querySelector('.right-header-center li:nth-child(2)').textContent
    }, '.right-header-center li:nth-child(2)')
    await browser.close()
    expect(target).to.equal('8')
    expect(target2).to.equal('')
  })
  it('The coordinates can be displayed correctly in the button', async function () {
    const browser = await puppeteer.launch(launchOption)
    const page = await browser.newPage()
    await page.goto('http://localhost:8080')
    await page.click('.btn')
    await page.click('.tooth')
    await page.click('.right-body input')
    await page.click('.interval')
    const target = await page.evaluate((sel) => {
      return document.querySelector(sel).innerHTML
    }, '.btn td')
    await browser.close()
    expect(target).to.equal('8<sup>L</sup>,&lt;8|7&gt;<sup></sup>')
  })
  it('Tooth gap cannot select tooth position', async function () {
    
  })
})