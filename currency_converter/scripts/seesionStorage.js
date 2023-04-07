const CURRENCY = 'CURRENCY';

const setSession = (value) => {
  window.sessionStorage.setItem(CURRENCY, value);
}

const getSession = () => {
  return window.sessionStorage.getItem(CURRENCY);
}

export { setSession, getSession }