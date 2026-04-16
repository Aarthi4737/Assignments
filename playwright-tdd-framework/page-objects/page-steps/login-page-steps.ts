import { Page, Locator } from "@playwright/test";
import { WebCommons } from "../../commons/ui/web-commons.ts";
import loginPage from '../page-elements/login-page-elements.json' with {type:'json'};
import config from '../../config/config.json' with {type:'json'};


export class LoginPageSteps{

    page : Page;
    web : WebCommons;

    constructor(page:Page)
    {
        this.page = page;
        this.web = new WebCommons(this.page);
    }

    //Method to launch the application
    async launchTheApplication(): Promise<void> {
        await this.web.launchApplication(config.app.url, config.app.title);
    }
    
    //Method to Verify login page is displayed. 
    async verifyLoginPageIsDisplayed() : Promise<void> {
        await this.web.isElementVisible(loginPage.loginTitle);
    }

    //Method to verify the Business Email, Password Label elements
    async verifyLabelElements(): Promise<void>{
        await this.web.isElementVisible(loginPage.businessEmailLabel);
        await this.web.isElementVisible(loginPage.passwordLabel);
    }

    //Method to Verify the Business Email & Password text box elements
    async verifyTextBoxElements(): Promise<void>{
        await this.web.isElementVisible(loginPage.businessEmailTextBox);
        await this.web.isElementVisible(loginPage.passwordTextBox);
    }
   
    //Method to enter the Username and Password
    async enterUsernameAndPassword(Username:string, Password:string):Promise<void>{
        await this.web.enterText(loginPage.businessEmailTextBox,Username);
        await this.web.enterText(loginPage.passwordTextBox, Password);
    }

    //Method to click on login button
    async clickOnLoginButton(): Promise<void> {
        await this.web.clickElement(loginPage.loginButton);
    }

    //Method to verify whether the Forgot Password Link is displayed
    async verifyForgotPasswordLink(): Promise<void>{
        await this.web.isElementVisible(loginPage.forgotPasswordLink);
    }

    //Method to click on the Forgot Password link
    async clickForgotPasswordLink(): Promise<void>{
        await this.web.clickElement(loginPage.forgotPasswordLink);
    }

    //Method to verify the forgot password confirmation message
    async verifyForgotPasswordConfirmationMsg(): Promise<void>{
        await this.web.isElementVisible(loginPage.forgotPasswordConfirmationMsg);
    }

    //Method to verify social media login icons & Labels
    async verifySocialMediaIconsLabels(): Promise<void>{
        await this.web.isElementVisible(loginPage.linkedinIcon);
        await this.web.isElementVisible(loginPage.linkedinLabel);
        await this.web.isElementVisible(loginPage.googleIcon);
        await this.web.isElementVisible(loginPage.googleLabel);
    }

    //Method to verify whether SignUp & Don't have an Account text
    async verifySignUpDontAccount(): Promise<void>{
        await this.web.isElementVisible(loginPage.singupButton);
        await this.web.isElementVisible(loginPage.noAccountLabel);
    }

    //Method to verify Footer section of Loginpage is displayed
    async verifyFooterDivision(): Promise<void>{
        await this.web.isElementVisible(loginPage.footerDivsion);
    }

    //Method to verify FooterLabels in the Login Page
    async verifyFooterLabels(): Promise<void>{
        await this.web.isElementVisible(loginPage.footerFreedomLabel);
        await this.web.isElementVisible(loginPage.footerGeniuneCareLabel);
        await this.web.isElementVisible(loginPage.footerOnePlatformLabel);
    }

    //Method to verify the Cookie Bot link 
    async verifyFooterCookieBotLink(): Promise<void>{
        await this.web.isElementVisible(loginPage.footerCookieBotLink)
    }

    //Method to click the Cookie Bot link 
    async clickFooterCookieBotLink(): Promise<void>{
        await this.web.clickElement(loginPage.footerCookieBotLink)
    }

    //Method to check whether Cookie Widget is displayed
    async verifyCookieWidgetDisplay(): Promise<void>{
        await this.web.isElementVisible(loginPage.cookieWidget);
    }

    //Method to verify all Elements are displayed in cookie widget
    async verifyAllCookieWidgetElements(): Promise<void>{
        await this.web.isElementVisible(loginPage.cookieWidgetClose);
        await this.web.isElementVisible(loginPage.cookieWidgetShowDetails);
        await this.web.isElementVisible(loginPage.cookieWidgetWithdrawConsent);
        await this.web.isElementVisible(loginPage.cookieWidgetChangeConsent);
    }

    //Method to verify click on the Show Details link
    async clickCookieWidgetShowDetails(): Promise<void>{
        await this.web.clickElement(loginPage.cookieWidgetShowDetails);
    }

    //Method to verify consent details area displayed
    async verifyConsentDetailsDisplay(): Promise<void>{
        await this.web.isElementVisible(loginPage.cookieWidgetConsentDetails);
    }

    //Method to click on the Close button on CookieWidget
    async clickCloseButtonCookieWidget() : Promise<void>{
        await this.web.clickElement(loginPage.cookieWidgetClose);
    }

    //Method to verify login error message
    async verifyLoginErrorMessage(): Promise<void>{
        await this.web.isElementVisible(loginPage.loginErrorMessage);
    }

    //Method to verify user is logged out successfully
    async verifyUserIsLoggedOut(): Promise<void> {
        await this.web.isElementVisible(loginPage.loginTitle);
    }

    
}