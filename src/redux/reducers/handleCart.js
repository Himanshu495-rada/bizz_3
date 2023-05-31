const cart = [];

const handleCart = (state = cart, action) => {
  switch (action.type) {
    case "ADDITEM":
      // Check if product already in cart
      const exist = state.find((x) => x.id === action.payload.id);
      if (exist) {
        // Increase the quantity
        return state.map((x) =>
          x.id === action.payload.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [...state, { ...action.payload, qty: 1 }];
      }
      break;
    case "DELITEM":
      const exist2 = state.find((x) => x.id === action.payload.id);
      if (exist2.qty === 1) {
        return state.filter((x) => x.id !== exist2.id);
      } else {
        return state.map((x) =>
          x.id === action.payload.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    case "RESET":
      return [];
      break;

    default:
      return state;
      break;
  }
};

export default handleCart;
