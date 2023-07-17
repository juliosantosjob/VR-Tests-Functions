import { test } from '@playwright/test';
import { AccessibilityActions } from '../actions/accessibility.actions';

test.describe('Acessibilidade no website VR', () => {
  let acsPgs: AccessibilityActions;
  
  test.beforeEach(async ({ page }) => { 
    acsPgs = new AccessibilityActions(page); 
  });

  test('Acessando o mapa de busca para estabelecimentos', async () => {
    await acsPgs.go();
    await acsPgs.tapWhereToUse();
    await acsPgs.viewMap();
  });
});