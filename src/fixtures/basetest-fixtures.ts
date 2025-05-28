import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { HomePage } from '../pages/home-page';
import dotenv from 'dotenv';
import { LeftMenu } from '../pages/leftmenu';

// Declare the types of your fixtures.
type MyFixtures = {
    dealerAccount: object;
    loginPage: LoginPage;
    homePage: HomePage;
    leftmenu: LeftMenu;
};

export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        // Use the fixture value in the test.

        const { BASE_URL, ADMIN_USERNAME, ADMIN_PASSWORD } = process.env;

        if (!BASE_URL || !ADMIN_USERNAME || !ADMIN_PASSWORD) {
        throw new Error('Missing environment variables');
        }

        const loginPage = new LoginPage(page);

        await loginPage.loginWithValidAccount(BASE_URL,ADMIN_USERNAME,ADMIN_PASSWORD);

        await use(loginPage);
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    leftmenu: async ({ page }, use) => {
        await use(new LeftMenu(page));
    }
});

export { expect } from '@playwright/test';