import { AccessibilityActions } from '../actions/accessibility.actions';
import { test } from '@playwright/test';

test.describe('Acessibilidade no website VR', () => {
  let actions: AccessibilityActions;

  test.beforeEach(async ({ page }) => {
    actions = new AccessibilityActions(page);
  });

  test('Acessando o mapa de busca para estabelecimentos', async () => {
    await actions.go();
    await actions.tapWhereToUse();
    await actions.viewMap();
  });
});