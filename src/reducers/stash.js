const defaultState = {
  name: 'Rovan',
  platinum: 1,
  gold: 3,
  silver: 34,
  copper: 432
};

const stash = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default stash;
