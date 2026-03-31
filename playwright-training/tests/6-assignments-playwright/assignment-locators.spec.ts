import { test, expect } from '@playwright/test';

test('CSS selector syntax', async ({ page }) => {

    //Launch the application
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    //Left Menu Items

    //Locate the 'Solutions' left menu 
    await page.locator('li[class="Solutions"]');

    //Locate the 'About us' left menu 
    await page.locator('ul[class="leftmenu"] > li >a[href^="about"]');

    //Locate the 'Services' left menu 
    await page.locator('ul[class="leftmenu"] > li > a[href="services.htm"]');

    //Locate the 'Products' left menu 
    await page.locator('ul[class="leftmenu"] > li > a[href*="products"]');

    //Locate the 'Locations' left menu 
    await page.locator('ul[class="leftmenu"] > li > a[href*="contacts"]');

    //Locate the 'Admin Page' left menu 
    await page.locator('li > a[href="admin.htm"]');

    //Locate the 'Username' text left menu 
    await page.locator('form[name="login"] > p > b');

    //Locate the 'Username text box' text left menu 
    await page.locator('input[name="username"]');

    //Locate the 'Password' text left menu -> Both Username and Password have the same parent and child, so not sure how to identify 
    //await page.locator('form[name="login"] > p > b');

    //Locate the 'Password text box' left menu 
    await page.locator('input[name="password"]');

    //Locate the 'Login button' left menu 
    await page.locator('input[type="submit"]');

    //Locate the 'Forgot Login Info' link left menu 
    await page.locator('a[href="lookup.htm"]');

    //Locate the 'Register' link left menu 
    await page.locator('a[href="register.htm"]');

    //Images and Banner section

    //Locate the 'Para Bank' image above the banner
    await page.locator('img[title="ParaBank"');

    //Locate the 'Experience the difference' below the Para Bank image
    await page.locator('p.caption');

    //Locate the 'Background image' or the image banner
    await page.locator('div#headerPanel');

    //Locate the 'Experience the difference' text below the Para Bank image
    await page.locator('p.caption');

    //Locate the 'Home Image" in the right side of the site
    await page.locator('li.home');

    //Locate the 'Experience the difference' below the Para Bank image
    await page.locator('li.aboutus');

    //Locate the 'Experience the difference' below the Para Bank image
    await page.locator('li.contact');

    //Finding the body content of the site

    //Locate the 'Image beside text ATM Services' 
    await page.locator('span.services');

    //Locate the 'ATM Services' text 
    await page.locator('li.captionone');

    //All the options under the ATM Services have same href values which does to chain down to 1 of 1

    //Locate the 'Online Services' text 
    await page.locator('li.captiontwo');

    //All the options under the Online Services have same href values which does to chain down to 1 of 1

    //Locate the image containing the text LatestNews, not able to find this as well
    //await page.locator('');

    //Locate the text near to Latestnews 
    await page.locator('li.captionthree');

    //All the options under the Latestnews have same href values which does to chain down to 1 of 1

    //Locate the '1st Read More' 
    await page.locator('a[href="services.htm"]');

    //Locate the '2nd Read More' 
    await page.locator('a[href="news.htm"]');

    //Validating the Footer Panel links

    //Locate the 'Home' footer link 
    await page.locator('div#footerPanel >ul > li > a[href="index.htm"]');

    //Locate the 'About us' footer link 
    await page.locator('div#footerPanel >ul > li > a[href="about.htm"]');

    //Locate the 'Services' footer link 
    await page.locator('div#footerPanel >ul > li > a[href="services.htm"]');

    //Locate the 'Products' footer link 
    await page.locator('div#footerPanel >ul > li > a[href*="products"]');

    //Locate the 'Location' footer link 
    await page.locator('div#footerPanel >ul > li > a[href*="contacts"]');

    //Locate the 'Forum' footer link 
    await page.locator('div#footerPanel >ul > li > a[href*="forum"]');

    //Locate the 'Site Map' footer link 
    await page.locator('div#footerPanel >ul > li >a[href^="site"]');

    //Locate the 'Contact Us' footer link 
    await page.locator('div#footerPanel >ul > li > a[href^="con"]');

    //Locate the 'Copyright' text 
    await page.locator('p.copyright');

    //Locate the 'Visit Us' footer link 
    await page.locator('ul.visit');

    //Locate whether we have the site address present in the Footer
    await page.locator('a[href="http://www.parasoft.com/"]');

});