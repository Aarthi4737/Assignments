import { test, expect, TestInfo } from "@playwright/test";
import { LoginPageSteps } from "../../page-objects/page-steps/login-page-steps.ts";
import { CookiesPageSteps } from "../../page-objects/page-steps/cookies-page-steps.ts";
import { HomePageSteps } from "../../page-objects/page-steps/home-page-steps.ts";
import data from '../../testdata/ui/data.json' with {type :'json'};

let loginPage: LoginPageSteps;
let cookiesPage: CookiesPageSteps;
let homePage: HomePageSteps;
let testData: any;

test.describe('UI Application Tests', () => {

    test.beforeEach(async ({page, context}) => {
        loginPage = new LoginPageSteps(page);
        cookiesPage = new CookiesPageSteps(page, context);
        homePage = new HomePageSteps(page);
    });

    //Test Case 1: Verify Cookies page is displayed
    test('Verify Cookies PopUp', async() => {
        await loginPage.launchTheApplication();
        await cookiesPage.verifyCookieDialogIsDisplayed();
    });

    //Test Case 2: Verify Cookies pop up content
    test('Verify Cookies Popup Content', async({}, testInfo: TestInfo) => {
        testData = data["Verify Cookies Popup Content"];
        await loginPage.launchTheApplication();
        await cookiesPage.verifyCookieDialogIsDisplayed();
        await cookiesPage.verifyCookiePopUpContent(testData.content);
    });

    //Test Case 3: Verify if Logos are displayed in Cookies Page
    test('Verify Logos displayed in Cookies Page', async() => {
        await loginPage.launchTheApplication();
        await cookiesPage.verifyCookieDialogIsDisplayed();
        await cookiesPage.verifyLogosDisplayed();
    });

    //Test Case 4: Verify Toggle Buttons and Labels displayed in Cookies Page
    test('Verify the Toggle Buttons and Labels in Cookies Page', async() => {
        await loginPage.launchTheApplication();
        await cookiesPage.verifyCookieDialogIsDisplayed();
        await cookiesPage.verifyAllToggleButtons();
        await cookiesPage.verifyAllToggleLables();
    });

    //Test Case 5: Verify Seletion Buttons displayed in the Cookies Page
    test('Verify Selection Buttons in the Cookies Page', async() => {
        await loginPage.launchTheApplication();
        await cookiesPage.verifyCookieDialogIsDisplayed();
        await cookiesPage.verifyAllSelectionButtons();
    });

    //Test Case 6: Verify show details link in the cookies page
    test('Verify display of ShowDetails link in Cookies page', async() => {
        await loginPage.launchTheApplication();
        await cookiesPage.verifyCookieDialogIsDisplayed();
        await cookiesPage.verifyShowDetailsLink();
    });

    //Test Case 7: Verify Expanded view displayed in the cookies page
    test('Verify Expanded view displayed in the cookies page', async() => {
        await loginPage.launchTheApplication();
        await cookiesPage.verifyCookieDialogIsDisplayed();
        await cookiesPage.verifyShowDetailsLink();
        await cookiesPage.clickOnShowDetailsLink();
    });

    //Test Case 8: Verify whether user is able to select the 'Statistics' toggle button
    test('Verify user is able to select the Statistics toggle button', async() => {
        await loginPage.launchTheApplication();
        await cookiesPage.verifyCookieDialogIsDisplayed();
        await cookiesPage.clickOnToggleButton('statistics');
    });


    //Test Case 9: Verify cookies pop-up getting closed after clicking on 'allow all' button
    test('Verify Cookies Popup is Closed after Clicking Allow All Button', async() => {
        await loginPage.launchTheApplication();
        await cookiesPage.verifyCookieDialogIsDisplayed();
        await cookiesPage.verifyShowDetailsLink();
        await cookiesPage.clickOnShowDetailsLink();
        await cookiesPage.clickOnSelectionButton('allow all');
        await cookiesPage.verifyCookiePopUpIsClosed();
    });

    //Test Case 10: Verify whether a new tab is opened on click of CookieBot link in the Cookies Page
    test('Verify new Page title', async ({ page, context }, testInfo: TestInfo) => {       
        testData = data[testInfo.title as keyof typeof data];
        await loginPage.launchTheApplication();
        await cookiesPage.verifyCookieDialogIsDisplayed();
        await cookiesPage.openLinkInNewTab(testData.titleText);;
    });

    //Test Case 11: Verify Login Functionality with valid credentials.
    test('Verify Login with Valid Credentials', async ({}, testInfo: TestInfo) => {
        //test.slow();
        testData = data[testInfo.title as keyof typeof data];
        await loginPage.launchTheApplication();
        await cookiesPage.verifyCookieDialogIsDisplayed();
        await cookiesPage.verifyAllSelectionButtons();
        await cookiesPage.clickOnSelectionButton("allow all");
        await cookiesPage.verifyCookiePopUpIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterUsernameAndPassword(testData.username, testData.password);
        await loginPage.clickOnLoginButton();
        await homePage.verifyHomePageIsDisplayed();
    });

    //Test Case 12: Verify Login Functionality with invalid credentials.
    test('Verify Login with Invalid Credentials', async ({}, testInfo: TestInfo) => {
        //test.slow();
        testData = data[testInfo.title as keyof typeof data];
        await loginPage.launchTheApplication();
        await cookiesPage.verifyCookieDialogIsDisplayed();
        await cookiesPage.verifyAllSelectionButtons();
        await cookiesPage.clickOnSelectionButton("allow all");
        await cookiesPage.verifyCookiePopUpIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterUsernameAndPassword(testData.username, testData.password);
        await loginPage.clickOnLoginButton();
        await loginPage.verifyLoginErrorMessage();
    });

    //Test Case 13: Verify hover text while provuding invalid email
    test('Verify Hover text with Invalid email', async ({}, testInfo: TestInfo) => {
        //test.slow();
        testData = data[testInfo.title as keyof typeof data];
        await loginPage.launchTheApplication();
        await cookiesPage.verifyCookieDialogIsDisplayed();
        await cookiesPage.verifyAllSelectionButtons();
        await cookiesPage.clickOnSelectionButton("allow all");
        await cookiesPage.verifyCookiePopUpIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterUsernameAndPassword(testData.username, testData.password);
        await loginPage.verifyHoverAction();
        await loginPage.verifyToolTipInvalidEmail();
    });

    //Test Case 14: Verify password text by extracting
    test('Verify password extraction on click of Eye Icon', async ({}, testInfo: TestInfo) => {
        //test.slow();
        testData = data[testInfo.title as keyof typeof data];
        await loginPage.launchTheApplication();
        await cookiesPage.verifyCookieDialogIsDisplayed();
        await cookiesPage.verifyAllSelectionButtons();
        await cookiesPage.clickOnSelectionButton("allow all");
        await cookiesPage.verifyCookiePopUpIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterUsernameAndPassword(testData.username, testData.password);
        await loginPage.verifyExtractedTextPassword(testData.password);
    });
  
    //Test Case 15: Verify the hover text on click of Forgot Password without giving mail id
    test('Verify hover text on click of Forgot Password without giving emailid', async () => {
        await loginPage.launchTheApplication();
        await cookiesPage.verifyCookieDialogIsDisplayed();
        await cookiesPage.verifyAllSelectionButtons();
        await cookiesPage.clickOnSelectionButton("allow all");
        await cookiesPage.verifyCookiePopUpIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.clickForgotPasswordLink();
        await loginPage.verifyHoverAction();
        await loginPage.verifyToolTipNoEmailForgotPassword();
    });

    //Test Case 16: Verify forgot password confirmation message
    test('Verify forgot password confirmation message', async ({}, testInfo: TestInfo) => {
        testData = data[testInfo.title as keyof typeof data];
        await loginPage.launchTheApplication();
        await cookiesPage.verifyCookieDialogIsDisplayed();
        await cookiesPage.verifyAllSelectionButtons();
        await cookiesPage.clickOnSelectionButton("allow selection");
        await cookiesPage.verifyCookiePopUpIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterUsername(testData.username);
        await loginPage.clickForgotPasswordLink();
        await loginPage.verifyForgotPasswordConfirmationMsg();
    });

    //Test Case 17: Verify whether LinkedIn page is opened when user clicks on LinkedIn icon
    test('Verify whether LinkedIn page is opened when user clicks on LinkedIn icon', async ({}, testInfo: TestInfo) => {
        testData = data[testInfo.title as keyof typeof data];
        await loginPage.launchTheApplication();
        await cookiesPage.verifyCookieDialogIsDisplayed();
        await cookiesPage.verifyAllSelectionButtons();
        await cookiesPage.clickOnSelectionButton("allow selection");
        await cookiesPage.verifyCookiePopUpIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.verifyClickLinkedinIcon();
        await loginPage.verifyNewPageTitle(testData.linkedinTitle);
    });

    //Test Case 18: Verify whether Google page is opened when user clicks on Google icon
    test('Verify whether Google page is opened when user clicks on Google icon', async ({}, testInfo: TestInfo) => {
        testData = data[testInfo.title as keyof typeof data];
        await loginPage.launchTheApplication();
        await cookiesPage.verifyCookieDialogIsDisplayed();
        await cookiesPage.verifyAllSelectionButtons();
        await cookiesPage.clickOnSelectionButton("allow selection");
        await cookiesPage.verifyCookiePopUpIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.verifyClickGoogleIcon();
        await loginPage.verifyNewPageTitle(testData.googleTitle);
    });

    //Test Case 19: Verify new page displayed when Sign Up button is clicked
    test('Verify whether new page displayed on click of Sign up button', async () => {
        test.slow();
        await loginPage.launchTheApplication();
        await cookiesPage.verifyCookieDialogIsDisplayed();
        await cookiesPage.verifyAllSelectionButtons();
        await cookiesPage.clickOnSelectionButton("allow selection");
        await cookiesPage.verifyCookiePopUpIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.verifyClickSignUp();
        await loginPage.verifyAdditonalSecurityHeader();
    });


});