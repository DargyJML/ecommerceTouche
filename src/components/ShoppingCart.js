import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";
import { TYPES } from "./actions/shoppingAction";
import CartItem from "./CartItem";
import Productitem from "./Productitem";
import { shoppingReducer, shoppingInitialState } from "./reducers/shoppingReducer";
import Filtro from "./Filtro";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id) => {
    /* console.log(id);  */
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  }
  const delFromCart = (id, all = false) => {
    console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else { dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id }) }

  }
  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => {
      const { quantity, price } = currentValue;
      return accumalator + quantity * price;
    };
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  const handleChange = (e) => {
    if(e.target.value==="lower"){
      dispatch({ type: TYPES.SORT_BY_PRICE_ASC})
    }else if(e.target.value==="higher"){
      dispatch({type: TYPES.SORT_BY_PRICE_DESC})
    }else{
      dispatch({type: TYPES.FILTER_BY_CATEGORY, payload:e.target.value})
    }

  }

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART })
  }


  return (
    <div>
      <div> <h1 className="text-center text-5xl font-bold text-black "> Productos</h1> </div>
      {/*  <Filtro/> */}

      <div className="right-full">
        <select onChange={handleChange} className="select select-bordered border-black text-black bg-transparent w-full max-w-xs right-full">
          <option disabled selected> </option>
          <option value="lower">Menor Precio</option>
          <option value="higher">Mayor Precio</option>
          <option value="para bordar">Para Bordar</option>
          <option value="bordado personalizado">Bordados personalizados</option>
          <option value="productos bordados">Productos Bordados</option>
        </select>

      </div>
      <article className='box grid-responsive'>

        {products.map((product) => {
          if(product.categoria===state.categoryFilter || state.categoryFilter===""){
            return <Productitem key={product.id} data={product} addToCart={addToCart} />
          }
        }
        )}



      </article>
      <h3>Carrito</h3>
      <article className='box flex flex-col gap-4 text-black'>

        <button className="border-2 border-black px-2 bg-gray-300 hover:bg-gray-400 rounded" onClick={clearCart}> Limpiar Carrito </button>
        {cart.map((item, index) =>
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        )}
        <h1 className="font-bold">Total:${sumTotal()} COP</h1>
      </article>
    </div>
  );
};

export default ShoppingCart;