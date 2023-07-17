import { expect } from '@playwright/test';
import { AccessibilityPage } from '../pages/accessibility.pages';

export class AccessibilityActions extends AccessibilityPage {

    async go() {
        await this.page.goto('/');
        await expect(this.page).toHaveTitle('VR Benefícios - Vale Refeição, Vale Alimentação e Transporte');
    }

    async tapWhereToUse() {
        await this.btnForYou.hover();
        await this.btnWhereToUser.click();
    }

    async viewMap() {
        await this.iptYAddress.waitFor();
        await expect(this.iptYAddress).toBeVisible();
    }
}