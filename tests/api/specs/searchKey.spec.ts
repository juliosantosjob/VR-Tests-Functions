import { getRandomNumber } from '../../support/utils/radom';
import { APIResponse, expect, test } from '@playwright/test';
import { dominios, typeOfEstablishment } from '../../support/sampledata/establishment.json';

test.describe('Testes de Api na VR', () => {
  const url_Portal: string = 'https://portal.vr.com.br';
  const route: string = '/api-web/comum/enumerations/VRPAT';
  let response: APIResponse;
  let responseBody: any;

  test.beforeEach(async ({ request }) => {
    response = await request.get(url_Portal + route);
    responseBody = JSON.parse(await response.text());
  });

  test('Imprimindo um novo estabelecimento pela chave "typeOfEstablishment"', async () => {
    const r: number = getRandomNumber(typeOfEstablishment.lenght);

    expect(response).toBeTruthy();
    expect(response.status()).toBe(200);

    expect(responseBody.typeOfEstablishment[r].key).toEqual(typeOfEstablishment[r].key);
    expect(responseBody.typeOfEstablishment[r].name).toEqual(typeOfEstablishment[r].name);
    expect(responseBody.typeOfEstablishment[r].label).toEqual(typeOfEstablishment[r].label);
    console.log('Um novo estabelecimento: ', responseBody.typeOfEstablishment[r].name);
  });

  test('Buscando pela chave "dominios"', async () => {
    const r: number = getRandomNumber(dominios.lenght);

    expect(response).toBeTruthy();
    expect(response.status()).toBe(200);

    expect(responseBody.dominios.TIPO_LOGRADOURO[r].key).toEqual(dominios.TIPO_LOGRADOURO[r].key);
    expect(responseBody.dominios.TIPO_LOGRADOURO[r].name).toEqual(dominios.TIPO_LOGRADOURO[r].name);
    expect(responseBody.dominios.TIPO_LOGRADOURO[r].label).toEqual(dominios.TIPO_LOGRADOURO[r].label);
  });
});