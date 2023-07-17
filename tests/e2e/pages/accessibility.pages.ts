import { Locator, Page } from '@playwright/test';

export class AccessibilityPage {
  readonly page: Page;
  readonly btnForYou: Locator;
  readonly btnWhereToUser: Locator;
  readonly iptYAddress: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnForYou = page.locator('#cabecalho > ul > li:nth-child(3)');
    this.btnWhereToUser = page.locator('#cabecalho > ul > li:nth-child(3) > ul > li:nth-child(2) > a');
    this.iptYAddress = page.locator('[placeholder="Digite o nome ou endereço de um lugar"]');
  }
}