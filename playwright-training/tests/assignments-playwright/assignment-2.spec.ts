/*Assignment - 2*/

import {test, expect} from '@playwright/test';

test('Assignment 2 - demoqa.com', async ({page}) => {

//1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
await page.goto('https://demoqa.com/automation-practice-form');
console.log("Application launched");

//2. Wait for Page-load
const formLoad = page.locator('form#userForm');
await expect(formLoad).toBeVisible();
console.log("Page Loaded for the user");

//3. Enter First name and Last name
const firstnameTextBox = page.locator('input#firstName');
const lastnameTextBox = page.locator('input#lastName');

await firstnameTextBox.fill('Aarthi');
await lastnameTextBox.fill('Ashok');
console.log("User has entered the First Name and Last name");

//4. Enter Email
const emailIdTextBox = page.locator('input#userEmail');
await emailIdTextBox.fill("test@gmail.com");
console.log("Email value entered successfully");

//5. Select Gender (Male)
await genderSelect(page,"Female");
console.log("Gender Selected in the form");

//6. Enter mobile number
const mobileTextBox = page.locator('input#userNumber');
await mobileTextBox.fill("5678794456");
console.log("Mobile Number entered for the user");

//7.Select DOB (1-Feb-1991)
dobSelect(page, "1991","February","1");
console.log("DOB selected successfully");

//8.Search and Select Computer Science and English
const subjects:string [] = ["Computer Science", "English"];
await subjectSelect(page,subjects);
console.log("Subjects Entered successfully");

//9.Select Hobbies as Sports and Reading
const Hobbies:string [] = ["Sports", "Reading"];
await hobbySelect(page,Hobbies);
console.log("Hobbies selected successfully");

//10.Upload photo
const chooseButton = page.locator('input#uploadPicture');
const filePath = "files/Test.jpeg";
await chooseButton.setInputFiles(filePath);
console.log("Photo uploaded successfully");

//11.Submit Details
const submitButton = page.locator("button#submit");
await submitButton.click();
console.log("Form submitted successfully");

});


async function genderSelect(page:any, option:string) {
    const gender = page.locator(`input[value="${option}"]`);
    await gender.check();
}

async function dobSelect(page:any, year:string, month:string, date:string) {

    //Launch the calendar
    const dobTextBox = page.locator('input#dateOfBirthInput');   
    await dobTextBox.click();

    //Select the Month from the drop down
    const monthDropDown = page.locator('div[class*="month-dropdown-cont"]');
    //select.react-datepicker__month-select
    await monthDropDown.selectOption({label:month});
    
    //Select the Year from the drop down
    const yearDropDown = page.locator('select.react-datepicker__year-select');
    await yearDropDown.selectOption({label:year});

    //Select the day from the calendar
    const dateElement = page.locator(`//div[text()="${date}" and contains(@aria-label,"${month}")]`);
    await dateElement.click();
}

async function subjectSelect(page:any, subjects:string []) {
    //Locate the subject input text box and click on it
    const subjectTextBox = page.locator('div[class *="subjects-auto-complete__input-container"]');
    await subjectTextBox.click();

    //Locate the subject input Internal container
    const subjectInternal = page.locator('input#subjectsInput');
    
    //Select the subjects
    for(let subject of subjects){
        
        //Fill the subject
        await subjectInternal.fill(subject);

        //press 'Enter' button
        await subjectInternal.press('Enter');

    }
}

async function hobbySelect(page:any, Hobbies:string[]) {

    for(let hobby of Hobbies){
    const hobbyCheckbox = page.locator(`//label[text() = "${hobby}"]/preceding-sibling::input`);
    await hobbyCheckbox.check();
    }
}