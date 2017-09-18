import { createSelector } from 'reselect';

const getPlatinumSelector = state => state.platinumPieces;
const getGoldSelector = state => state.goldPieces;
const getSilverSelector = state => state.silverPieces;
const getCopperSelector = state => state.copperPieces;

export const getTotalCopper = createSelector(
  [getPlatinumSelector, getGoldSelector, getSilverSelector, getCopperSelector],
  (platinum, gold, silver, copper) => {
    return (platinum * 1000) + (gold * 100) + (silver * 10) + (copper);
  }
);
