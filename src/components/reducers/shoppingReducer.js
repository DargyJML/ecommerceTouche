import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {
    products: [
        {id:1, image:"zkitdebordado.jpg", name:"Kit de Bordado", price:120000, categoria: "para bordar", descripcion:"fnjihdsfnjdsnjldsljndslnjdsdsf"},
        {id:2,image:"zkitderainbow.jpg", name:"Kit de RAINBOW", price:90000, categoria: "para bordar", descripcion:"fnjihdsfnjdsnjldsljndslnjdsdsf"},
        {id:3,image:"zportabastidor.jpg", name:"Portabastidor", price:180000, categoria: "para bordar", descripcion:"fnjihdsfnjdsnjldsljndslnjdsdsf"},
        {id:4,image:"zbordadop1.jpg", name:"Bordado Outline", price:120000, categoria: "bordado personalizado", descripcion:"fnjihdsfnjdsnjldsljndslnjdsdsf"},
        {id:5, image:"zbordadop2.jpg", name:"Bordado Outline + ilustración", price:170000, categoria: "bordado personalizado", descripcion:"fnjihdsfnjdsnjldsljndslnjdsdsf"},
        {id:6, image:"zbordadop3.jpg", name:"Bordado de mascotas", price:230000, categoria: "productos bordados", descripcion:"fnjihdsfnjdsnjldsljndslnjdsdsf"},
        
    
    ],
    cart:[],

    filteredItems: [],

    categoryFilter: "",
};


export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(
                (product) => product.id === action.payload);
            /*  console.log(newItem); */
            let itemInCart = state.cart.find(item=> item.id === newItem.id)
            return  itemInCart
                 ? {
                    ...state,
                    cart: state.cart.map((item) =>
                      item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    ),
                  }
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }],
                  }; 
        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find((item) => item.id === action.payload);
            return itemToDelete.quantity > 1
            ? {
                ...state,
                cart: state.cart.map((item) =>
                  item.id === action.payload
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                ),
              }
            : {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
              };
        }
        case TYPES.REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
              };
              };
        case TYPES.SORT_BY_PRICE_ASC: {
            return {
              ...state,
              categoryFilter: "",
              products: state.products.sort(function(a,b){
                return a.price-b.price
              })
          }    
        }
        case TYPES.SORT_BY_PRICE_DESC:{
          return {
            ...state,
            categoryFilter: "",
            products: state.products.sort(function(a,b){
              return b.price-a.price
            })
          }
        }
        case TYPES.FILTER_BY_CATEGORY:{
          return {
            ...state,
            categoryFilter: action.payload

          }
        }

        case TYPES.CLEAR_CART: 
          return shoppingInitialState;
        default:
            return state
    }
}