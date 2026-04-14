import { Page } from "@playwright/test";
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
    async launchTheApplication(): Promise<void>{
        await this.web.launchApplication(config.app.url, config.app.title);
    }

}
