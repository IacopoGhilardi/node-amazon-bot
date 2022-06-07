Record

import { test, expect } from '@playwright/test';

const login = ((username = 'iacopo.ghila@gmail.com', password = 'bastardiec') => {
    test('test', async ({ page }) => {
        // Go to https://www.amazon.it/
        await page.goto('https://www.amazon.it/');
        // Click #nav-signin-tooltip >> text=Accedi
        await page.locator('#nav-signin-tooltip >> text=Accedi').click();
      
        // await expect(page).toHaveURL('https://www.amazon.it/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.it%2F%3Fref_%3Dnav_custrec_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=itflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&');
        // Click input[name="email"]
        await page.locator('input[name="email"]').click();
        // Fill input[name="email"]
        await page.locator('input[name="email"]').fill(`${username}`);
        // Click input[type="submit"]
        await page.locator('input[type="submit"]').click();
        await expect(page).toHaveURL('https://www.amazon.it/ap/signin');
        // Fill input[name="password"]
        await page.locator('input[name="password"]').fill(`${password}`);
      });
})


module.exports = login;