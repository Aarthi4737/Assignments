import { Page } from "@playwright/test";
import { WebCommons } from "../../commons/ui/web-commons.ts";
import cookiesPage from '../page-elements/cookies-page-elements.json' with {type:'json'};

export class CookiesPageSteps{

    page : Page;
    web : WebCommons;

    constructor(page : Page){
        this.page = page;
        this.web = new WebCommons(this.page);
    }


    //Method to verify whether the Cookie Dialog box is displayed
    async verifyCookieDialogIsVisible(){
        await this.web.isElementVisible(cookiesPage.cookieDialogCheck);
    }

    //Method to verify the content of the cookies page
    async verifyCookiePopUpContent(expectedContent:string){
        await this.web.isElementVisible(cookiesPage.cookiesContent);
        const actualContent = await this.web.getElementText(cookiesPage.cookiesContent);
        await this.web.compareText(actualContent,expectedContent);
    }

    //Method to verify if the logos are displayed in the cookies page
    async verifyLogosDisplayed(){
        await this.web.isElementVisible(cookiesPage.creatioImage);
        await this.web.isElementVisible(cookiesPage.cookieBotLink);
    }

    //Method to verify all the Toggle Labels are displayed in the cookies popup. 
    async verifyAllToggleLables(){
        await this.web.isElementVisible(cookiesPage.necessaryToggleLabel);
        await this.web.isElementVisible(cookiesPage.preferencesToggleLabel);
        await this.web.isElementVisible(cookiesPage.marketingToggleLabel);
        await this.web.isElementVisible(cookiesPage.statisticsToggleLabel);
    }

    //Method to verify all the Toggle buttons displayed in the cookies popup. 
    async verifyAllToggleButtons(){
        await this.web.isElementVisible(cookiesPage.necessaryToggle);
        await this.web.isElementVisible(cookiesPage.preferencesToggle);
        await this.web.isElementVisible(cookiesPage.marketingToggle);
        await this.web.isElementVisible(cookiesPage.statisticsToggle);
    }

    //Method to verify all the selection buttons displayed in the cookies popup. 
    async verifyAllSelectionButtons(){
        await this.web.isElementVisible(cookiesPage.allowAllButton);
        await this.web.isElementVisible(cookiesPage.allowSelectionButton);
        await this.web.isElementVisible(cookiesPage.denyButton);
    }

    //Method to check whether user is able to click on Cookie Bot Logo
    async verifyClickOnCookieBotLink(){
        await this.web.clickElement(cookiesPage.cookieBotLink);
    }

    //Method to click on the show details link in the cookies pop-up. 
    async clickOnShowDetailsLink(){
        await this.web.clickElement(cookiesPage.showDetailsLink);
    }

    //Method to check whether the Tabs of expanded view of Cookie pop up is displayed
    async verifyTabsOfExpandedViewCookiePopUp(){
        await this.web.isElementVisible(cookiesPage.consentTabExpandedView);
        await this.web.isElementVisible(cookiesPage.detailsTabExpandedView);
        await this.web.isElementVisible(cookiesPage.aboutTabExpandedView);
    }

    //Method to check whether the Expanded View tabs are clickable
    async verifyTabClick(){
        await this.web.clickElement(cookiesPage.consentTabExpandedView);
        await this.web.clickElement(cookiesPage.detailsTabExpandedView);
        await this.web.clickElement(cookiesPage.aboutTabExpandedView);
    }

    //Method two: click on the specific selection button. 
    async clickOnSelectionButton(buttonName:string){
        switch(buttonName.toLowerCase()){
            case 'allow all':
                await this.web.clickElement(cookiesPage.allowAllButton);
                break;
            case 'allow selection':
                await this.web.clickElement(cookiesPage.allowSelectionButton);
                break;
            case 'deny':
                await this.web.clickElement(cookiesPage.denyButton);
                break;
            default:
                throw new Error(`Invalid button name: ${buttonName}`);
        }
    } 

    //Method to check whether the cookies pop up is closed
    async verifyCookiePopUpIsClosed(){
        await this.web.isElementDisappeared(cookiesPage.cookieDialogCheck);
    }
}
