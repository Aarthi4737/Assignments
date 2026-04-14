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

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPageSteps(page);
        cookiesPage = new CookiesPageSteps(page);
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

    //Test Case 8: Verify cookies pop-up getting closed after clicking on 'allow all' button
    test('Verify Cookies Popup is Closed after Clicking Allow All Button', async() => {
        await loginPage.launchTheApplication();
        await cookiesPage.verifyCookieDialogIsDisplayed();
        await cookiesPage.verifyShowDetailsLink();
        await cookiesPage.clickOnShowDetailsLink();
        await cookiesPage.clickOnSelectionButton('allow all');
        await cookiesPage.verifyCookiePopUpIsClosed();
    });

    //Test Case 9: Verify Login Functionality with valid credentials.
    test('Verify Login with Valid Credentials', async ({}, testInfo: TestInfo) => {
        test.slow();
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
});