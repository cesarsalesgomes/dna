const accessTokenLocalStorageKey = 'dna-access-token';

export function setAccessTokenToLocalStorage(accessToken: string) {
  localStorage.setItem(accessTokenLocalStorageKey, accessToken);
}

export function getAccessTokenFromLocalStorage() {
  return localStorage.getItem(accessTokenLocalStorageKey);
}
