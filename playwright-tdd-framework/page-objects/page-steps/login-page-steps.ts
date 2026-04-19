import { Page, Locator, expect } from "@playwright/test";
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

    //Method to Verify login page is displayed. 
    async verifyLinkedInPageIsDisplayed() : Promise<void> {
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

    //Method to enter the Username 
    async enterUsername(Username:string):Promise<void>{
        await this.web.enterText(loginPage.businessEmailTextBox,Username);
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

    //Method to hover over a web element
    async verifyHoverAction(): Promise<void> {
        await this.web.hoverElement(loginPage.invalidEmailIconToolTip);
    }

    //Method to check the tool tip displayed when incorrect email is given
    async verifyToolTipInvalidEmail(): Promise<void>{
        await this.web.hoverToolTipText(loginPage.toolTipErrorMessage);
    }

    //Method to check the tool tip displayed when email is not provided and Forgot Password is clicked
    async verifyToolTipNoEmailForgotPassword(): Promise<void>{
        await this.web.hoverToolTipText(loginPage.forgotPasswordToolTip);
    }

    //Method to click on the eye icon 
    async verifyEyeIconClick(): Promise<void>{
        await this.web.clickElement(loginPage.viewPasswordIcon);
    }

    //Method to compare the extracted text with the expected value - getText
    async verifyExtractedTextPassword(expectedText:string) : Promise<void>{
        await this.web.clickElement(loginPage.viewPasswordIcon);
        const actualText = await this.web.getText(loginPage.passwordTextBox);
        await this.web.compareText(actualText,expectedText);
        await this.web.clickElement(loginPage.viewPasswordIcon);
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

    //Method to check the title of a web page
    async verifyNewPageTitle(title:string): Promise<void>{
        await this.web.checkTitle(title);
    }
   
    //Method to click on LinkedIn Icon
    async verifyClickLinkedinIcon(): Promise<void>{
        await this.web.clickElement(loginPage.linkedinIcon);
    }

    //Method to click on Google Icon
    async verifyClickGoogleIcon(): Promise<void>{
        await this.web.clickElement(loginPage.googleIcon);
    }

    //Method to click on Sign Up 
    async verifyClickSignUp(): Promise<void>{
        await this.web.clickElement(loginPage.singupButton);
    }

    //Method to verify additional security page header
    async verifyAdditonalSecurityHeader(): Promise<void>{
        await this.web.isElementVisible(loginPage.additionSecurityHeader);
    }

}