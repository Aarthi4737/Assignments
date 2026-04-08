/*Assignment - 4*/

import {test, expect} from '@playwright/test'

test('Assignment-4 Frames', async({page}) => {

//1. Enter URL and Launch the application (https://demoqa.com/frames)
await page.goto("https://demoqa.com/frames");

//2. Locate Main window element
const mainWindow = page.locator('h1.text-center');
await expect(mainWindow).toBeVisible();

//Identify the frame
const frame = page.frameLocator('iframe#frame1');

//3. Locate Frame Element
const frameElement = frame.locator('h1#sampleHeading')
//4. Copy and Print text from frame element
console.log(await frameElement.textContent());

//5. Copy and Print text from main window element
console.log(await mainWindow.textContent());

});