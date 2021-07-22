
const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    {
      name: 'book', 
      id: 1, 
      count: 3, 
      total: 250
    },
    {
      name: 'book 2', 
      id: 2, 
      count: 5, 
      total: 150
    },
  ],
    orderTotal: 220
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return{
        ...state,
        books: [],
        loading: true,
        error: null
      }
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_BOOKS_FAILURE':
      return{
        ...state,
        books: [],
        loading: false,
        error: action.payload
      }

    default:
      return state;
  }
};

export default reducer;
