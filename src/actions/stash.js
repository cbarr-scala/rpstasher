export const actionTypes = {
  DEPOSIT: 'STASH_DEPOSIT',
  WITHDRAWAL: 'STASH_WITHDRAWAL'
};

export const deposit = (platinumPieces, goldPieces, silverPieces, copperPieces) => ({
  type: actionTypes.DEPOSIT,
  platinumPieces,
  goldPieces,
  silverPieces,
  copperPieces
});

export const withdrawal = (platinumPieces, goldPieces, silverPieces, copperPieces) => ({
  type: actionTypes.WITHDRAWAL,
  platinumPieces,
  goldPieces,
  silverPieces,
  copperPieces
});
