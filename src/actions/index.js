import uuidv4 from 'uuid/v4';

export const addStash = (name, platinum = 1, gold = 10, silver = 5, copper = 154) => {
  return {
    type: 'ADD_STASH',
    id: uuidv4(),
    platinum,
    gold,
    silver,
    copper
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};
