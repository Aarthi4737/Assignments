/*Assignment - 3*/

import {test, expect} from '@playwright/test'

test('Assignment-3', async({page}) => {

//1. Enter URL and Launch the application (https://demoqa.com/alerts)
await page.goto("https://demoqa.com/alerts");
console.log("Application launched");

//2. Locate Alert buttons to trigger the alerts
const alertButton = page.locator('button#alertButton');
const informationAlert = page.locator('button#timerAlertButton');
const confirmationAlert = page.locator('button#confirmButton');
const promptAlert = page.locator('button#promtButton');

page.on('dialog', async dialog => {

    //Copy the message from the alert. 
        console.log(dialog.message())

        //Click on the OK button in the alert
        dialog.accept();

        //Click on the cancel button in the alert. 
        dialog.dismiss();

        //Enter text within the alert, and then click on "Accept" or "Dismiss." 
        dialog.accept("Hi Checking the functionality!");

})

await alertButton.click();
await informationAlert.click();
await confirmationAlert.click();
await promptAlert.click();

});