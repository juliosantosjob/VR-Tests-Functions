import { APIResponse, expect, test } from '@playwright/test';
import { dominios, typeOfEstablishment } from '../sampledata/establishment.json';
import { getRandomNumber } from '../utils/radom';

test.describe('Testes de servico na VR', () => {
  const url_Portal: string = 'https://portal.vr.com.br';
  const route: string = '/api-web/comum/enumerations/VRPAT';
  let response: APIResponse;

  test('Imprimindo um novo estabelecimento pela chave "typeOfEstablishment"', async ({ request }) => {
    const r: number = getRandomNumber(0, 56);

    response = await request.get(url_Portal + route);
    const responseBody = JSON.parse(await response.text());

    console.log('Um novo estabelecimento: ', responseBody.typeOfEstablishment[r].name);
    expect(response).toBeOK();
    expect(response).toBeTruthy();
    expect(response.status()).toBe(200);

    expect(responseBody.typeOfEstablishment[r].key).toEqual(typeOfEstablishment[r].key);
    expect(responseBody.typeOfEstablishment[r].name).toEqual(typeOfEstablishment[r].name);
    expect(responseBody.typeOfEstablishment[r].label).toEqual(typeOfEstablishment[r].label);
  });

  test.skip('Buscando pela chave "dominios"', async ({ request }) => {
    const r: number = getRandomNumber(0, 26);

    response = await request.get(url_Portal + route);
    const responseBody = JSON.parse(await response.text());

    expect(response).toBeOK();
    expect(response).toBeTruthy();
    expect(response.status()).toBe(200);

    expect(responseBody.dominios.TIPO_LOGRADOURO[r].key).toEqual(dominios.TIPO_LOGRADOURO[r].key);
    expect(responseBody.dominios.TIPO_LOGRADOURO[r].name).toEqual(dominios.TIPO_LOGRADOURO[r].name);
    expect(responseBody.dominios.TIPO_LOGRADOURO[r].label).toEqual(dominios.TIPO_LOGRADOURO[r].label);
  });
});