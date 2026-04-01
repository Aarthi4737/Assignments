import { test, expect } from '@playwright/test';

test('Web Actions with Assertions', async ({ page }) => {

    //Launch the application
    await page.goto('https://accounts.creatio.com/login/alm');

    //Locate the image Creatio in the CookieContentWrapper
    await page.locator('//img[contains(@id,"Cybot")]');

    //Locate the text Cookiebot in the CookieContentWrapper
    await page.locator('//a[contains(@id,"Cybot") and starts-with(@aria-label,"Cookiebot")]');

    //Locate the 1st sentence in the CookieContentWrapper
    await page.locator('//div[text()="This website uses cookies"]');

    //Locate the Paragraph in the CookieContentWrapper
    await page.locator('//span[starts-with(text(),"We may use")]');

    //Locate the text 'Necessary' present below the paragraph
    await page.locator('//label[contains(@for, "Necessary")]');

    //Locate the Button near the text Necessary
    await page.locator('//input[@id="CybotCookiebotDialogBodyLevelButtonNecessary"]');

    //Locate the text 'Preferences' present below the paragraph
    await page.locator('//label[contains(@for, "Preferences")]');

    //Locate the Button near the text Preferences
    await page.locator('//input[@id="CybotCookiebotDialogBodyLevelButtonPreferences"]');

    //Locate the text 'Statistics' present below the paragraph
    await page.locator('//label[contains(@for, "Statistics")]');

    //Locate the Button near the text Statistics
    await page.locator('//input[@id="CybotCookiebotDialogBodyLevelButtonStatistics"]');

    //Locate the text 'Marketing' present below the paragraph
    await page.locator('//label[contains(@for, "Marketing")]');

    //Locate the Button near the text Marketing
    await page.locator('//input[@id="CybotCookiebotDialogBodyLevelButtonMarketing"]');

    //Locate the Show Details link at the end of the CookieContentWrapper
    await page.locator('//a[contains(@id,"EdgeMore")]');

    //Locate the greater than symbol next to Show Details link, its just shown as ::after need to check on this
    //await page.locator('"]');

    //Locate the 'Deny' button at the end of the CookieContentWrapper
    await page.locator('//button[contains(@id,"Decline")]');

    //Locate the 'Allow Selection' button at the end of the CookieContentWrapper
    await page.locator('//button[contains(@id,"Selection")]');

    //Locate the 'Allow All' button at the end of the CookieContentWrapper
    await page.locator('//button[text() = "Allow all"]]');
});