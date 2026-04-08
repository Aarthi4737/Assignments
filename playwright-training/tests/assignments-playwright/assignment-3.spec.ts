/*Assignment - 3*/

import {test, expect} from '@playwright/test'

test('Assignment-3', async({page}) => {

//1. Enter URL and Launch the application (https://demoqa.com/alerts)
await page.goto("https://demoqa.com/alerts");
console.log("Application launched");

//2. Locate Alert buttons to trigger the alerts
const alertButton = page.locator('button#alertButton');
//const informationAlert = page.locator('button#timerAlertButton');
const confirmationAlert = page.locator('button#confirmButton');
const promptAlert = page.locator('button#promtButton');

page.once('dialog', async dialog => {

    //Copy the message from the alert. 
    console.log("Information Alert message"+dialog.message());

    //Click on the OK button in the alert
    await dialog.accept();
})

//Trigger the information alert
await alertButton.click();

//Wait for 2 sec for the Playwright to complete the action
await page.waitForTimeout(2000);

//await informationAlert.click();
page.once('dialog', async dialog => {

    //Copy the message from the alert. 
    console.log(dialog.message())

    //Click on the cancel button in the alert. 
    await dialog.dismiss();
})
//Trigger the Confirmation alert
await confirmationAlert.click();

//Wait for 2 sec for the Playwright to complete the action
await page.waitForTimeout(2000);

page.once('dialog', async dialog => {

    //Copy the message from the alert. 
    console.log(dialog.message());

    //Enter text within the alert, and then click on "Accept" or "Dismiss." 
    await dialog.accept("Hi Checking the functionality!");

})

//Trigger the Prompt alert
await promptAlert.click();

//Wait for 2 sec for the Playwright to complete the action
await page.waitForTimeout(2000);

});