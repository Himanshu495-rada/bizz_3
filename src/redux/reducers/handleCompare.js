const compare = [];

const handleCompare = (state = compare, action) => {
  switch (action.type) {
    case "ADDCOMPARE":
      // Check if product already in cart
      const exist = state.find((x) => x.id === action.payload.id);
      if (!exist) {
        return [...state, { ...action.payload }];
      } else {
        return state;
      }
      break;
    case "DELCOMPARE":
      const exist2 = state.find((x) => x.id === action.payload.id);
      if (exist2) {
        return state.filter((x) => x.id !== exist2.id);
      } else {
        return state;
      }
      break;

    default:
      return state;
  }
};

export default handleCompare;
