import { sum } from './sum';

describe('github-secrets', () => {
  it('get normal tests done', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('retrieves secrets', () => {
    const secrets = process.env;
    console.log(secrets);

    expect(secrets.TEST_SECRET).toBe('supersecretsecret');
  });
});
