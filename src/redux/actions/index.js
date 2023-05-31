export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

export const resetCart = () => {
  return {
    type: "RESET",
  };
};

export const addCompare = (product) => {
  return {
    type: "ADDCOMPARE",
    payload: product,
  };
};

export const delCompare = (product) => {
  return {
    type: "DELCOMPARE",
    payload: product,
  };
};
