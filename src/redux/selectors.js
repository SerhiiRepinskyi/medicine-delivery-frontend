// === Атомарні селектори ===
export const selectListDrugs = (state) => state.drugs.listDrugs;
export const selectFavoriteDrugs = (state) => state.drugs.favoriteDrugs;
export const selectIsLoading = (state) => state.drugs.isLoading;
export const selectError = (state) => state.drugs.error;
export const selectSelectedShop = (state) => state.drugs.selectedShop;
export const selectListCart = (state) => state.drugs.listCart;
export const selectQuantityById = (state, drugId) =>
  state.drugs.quantityById[drugId] || 1;
