const defaultState = {
  name: 'Rovan',
  platinumPieces: 1,
  goldPieces: 1,
  silverPieces: 1,
  copperPieces: 1
};

const stashReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default stashReducer;
