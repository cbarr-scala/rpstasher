export const getTotalValue = state => {
  return (state.platinum * 1000) + (state.gold * 100) + (state.silver * 10) + (state.copper);
};
