import { test, expect } from '@playwright/test';

test('assignment-1', async ({ page }) => {

    //Launch the application
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');


    //Verify application logo is displayed
    //Locate the image element
    const image = page.locator('//img[contains(@src, "logo")]');

    //Verify the image is displayed within the page. 
    await expect(image).toBeVisible();

    //Verify the image is valid or not based on the source path. 
    let imageSource = await image.getAttribute('src');
    await expect(imageSource).toContain('images/logo.gif');


    //Verify application caption displayed as "Experience the difference"
    //Locate the text element
    const textElement = page.locator('//p[@class = "caption"]');

    //Extract the text value and compare it with the expected value. 
    let text = await textElement.textContent();
    await expect(text).toBe('Experience the difference');


    //Enter invalid username
    //Locate the Username textbox
     const usernameTextBox = page.locator('//input[@name= "username"]');

    //Clear the existing text value from the text box. 
    await usernameTextBox.clear();

    //Type the text into the text box. 
    await usernameTextBox.fill('test123');


    //Enter empty Password
    //Locate the Password textbox
    const passwordTextBox = page.locator('//input[@name= "password"]');

    //Clear the existing text value from the text box. 
    await passwordTextBox.clear();

    //Type the text into the text box. 
    await passwordTextBox.fill('');

    //Click on Login button
    //Locate the Login button
    const loginButton = page.locator('//input[@type = "submit"]');

    //Extract the label of the Login button
    const buttonLabelValue = await loginButton.getAttribute('value');
    
    //Check the label of the button. 
    await expect(loginButton).toHaveAttribute('value', 'Log In'); 

    //Click on the button
    await loginButton.click();

    //Verify the error message "Please enter a username and password."
    //Locate the error message in the page
    const errorMessage = page.locator('//p[text() = "Please enter a username and password."]');

    //Extract and verify the text displayed of the error message
    let errorText = await errorMessage.textContent();
    await expect(errorText).toBe('Please enter a username and password.');

    //Click on admin page link
    //Locate the element Admin page link
    const adminPageLink = page.locator('//ul[@class = "leftmenu"]//a[@href = "admin.htm"]');

    //Verify the hyperlink. (method 1)
    await expect(adminPageLink).toHaveAttribute('href', 'admin.htm');

    //Click on the Hyerlink identified
    await adminPageLink.click();

    //Select the option "REST" from dba mode radio button, since Default had SOAP using this option
    //Locate the radio button element
    const damRadio = page.locator('//input[@id = "accessMode2"]');

    //Select the checkbox before clicking. 
    await damRadio.check();

    //Scroll to element(Loan Provider) dropdown
    //Locate the Loan Provider drop down
    const loanProvider = page.locator('//select[@id = "loanProvider"]');

    //Select an option JMS from the dropdown (since web service was by default changed to this option)
    await loanProvider.selectOption({ label: 'JMS' });

    //Click on submit button
    //Locate the submit button
    const submitButton = page.locator('//input[@value="Submit"]');

    //Check the label of the button. 
    await expect(submitButton).toHaveAttribute('value', 'Submit'); 

    //Click on the button
    await submitButton.click();

    //Verify submission is successful by validating success message
    //Locate the sucess message
    const successMessage = page.locator('//b[text() = "Settings saved successfully."]');

    //Extract and verify the text displayed of the error message
    let successText = await successMessage.textContent();
    await expect(successText).toBe('Settings saved successfully.');


    //Click on Services Page link
    //Locate the Services page link
    const serviceLink = page.locator('//ul[@class = "leftmenu"]//a[@href = "services.htm"]');

    //Click on the Services Link
    await serviceLink.click();

    //Wait for the Services Page
    await page.waitForURL('https://parabank.parasoft.com/parabank/services.htm');

    //Scroll down till bookstore services table
    const bookstoreHeading = page.locator('//span[text() = "Bookstore services:"]');
    await page.locator('//span[text() = "Bookstore services:"]').scrollIntoViewIfNeeded();

    //Check if the heading is visible
    await expect(bookstoreHeading).toBeVisible();

    // Locate the table following the heading
    const bookstoreTable = bookstoreHeading.locator('xpath=following-sibling::table[1]');
    await expect(bookstoreTable).toBeVisible();

    //Get the row count including the heading
    const rowCount = await bookstoreTable.locator('tr').count();
    console.log("Number of rows:" +rowCount);

    //Get the column count of the table
    const columnCount = await bookstoreTable.locator('tr').first().locator('td,th').count();
    console.log("Number of Columns:" +columnCount);
});