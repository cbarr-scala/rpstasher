import numeral from 'numeraljs';

export const withStashCurrency = (amount) => {
  return numeral(amount).format('0,0');
};
