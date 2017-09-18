import { createSelector } from 'reselect';

const getPlatinumSelector = state => state.stash.platinumPieces;
const getGoldSelector = state => state.stash.goldPieces;
const getSilverSelector = state => state.stash.silverPieces;
const getCopperSelector = state => state.stash.copperPieces;

export const getTotalCopper = createSelector(
  [getPlatinumSelector, getGoldSelector, getSilverSelector, getCopperSelector],
  (platinum, gold, silver, copper) => {
    return (platinum * 1000) + (gold * 100) + (silver * 10) + (copper);
  }
);
