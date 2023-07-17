import { APIResponse, expect, test } from '@playwright/test';

test.describe('Testes de servico na VR', () => {
  const url_Portal: string = 'https://portal.vr.com.br';
  let response: APIResponse;

  test('Imprimindo um novo estabelecimento pela chave "typeOfEstablishment"', async ({ request }) => {
    response = await request.get(url_Portal + '/api-web/comum/enumerations/VRPAT');
    const responseBody = JSON.parse(await response.text());

    console.log('O nome do estabelecimento: ' + responseBody.typeOfEstablishment[0].name);
    expect(response).toBeOK();
    expect(response).toBeTruthy();
    expect(response.status()).toBe(200);

    expect(responseBody.typeOfEstablishment[0].key).toEqual('REFEICAO|PIZZARIA');
    expect(responseBody.typeOfEstablishment[0].name).toEqual('PIZZARIA');
    expect(responseBody.typeOfEstablishment[0].label).toEqual('Refeição - Pizzaria');
  });

  test('Buscando novos dominios', async ({ request }) => {
    response = await request.get(url_Portal + '/api-web/comum/enumerations/VRPAT');
    const responseBody = JSON.parse(await response.text());

    expect(response).toBeOK();
    expect(response).toBeTruthy();
    expect(response.status()).toBe(200);

    expect(responseBody.dominios.TIPO_LOGRADOURO[1].key).toEqual(1);
    expect(responseBody.dominios.TIPO_LOGRADOURO[1].name).toEqual('AL');
    expect(responseBody.dominios.TIPO_LOGRADOURO[1].label).toEqual('Alameda');
  });
});