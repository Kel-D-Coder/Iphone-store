export const initialState = {
  phones: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        phones: action.payload,
      };
    case "remove":
      return {
        ...state,
        phones: action.payload,
      };
    default:
      return state;
  }
};