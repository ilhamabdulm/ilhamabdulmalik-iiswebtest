export const changeSelected = (state, row) => {
  const newState = state.map((el) =>
    el.name === row.name ? { ...el, selected: !el.selected } : el
  );
  return newState;
};

export const selectAll = (state) => {
  const notSelected = state.findIndex((el) => !el.selected);
  if (notSelected >= 0) {
    return state.map((el) => ({ ...el, selected: true }));
  } else {
    return state.map((el) => ({ ...el, selected: false }));
  }
};
