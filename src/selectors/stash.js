import { createSelector } from 'reselect';

const getPlatinumSelector = state => state.stash.platinum;
const getGoldSelector = state => state.stash.gold;
const getSilverSelector = state => state.stash.silver;
const getCopperSelector = state => state.stash.copper;

export const getTotalCopper = createSelector(
  [getPlatinumSelector, getGoldSelector, getSilverSelector, getCopperSelector],
  (platinum, gold, silver, copper) => {
    return (platinum * 1000) + (gold * 100) + (silver * 10) + (copper);
  }
);
