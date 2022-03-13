const CartItem = ({ data, delFromCart }) => {
  let { id, name, price, quantity } = data;

  return (
    <div className="flex flex-col gap-2 text-black" style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>
        ${price}COP x {quantity} = ${price * quantity}COP
      </h5>
      <div className="flex gap-3">
      <button className="border-2 border-black px-1 bg-gray-300 hover:bg-gray-400 rounded" onClick={() => delFromCart(id)}>Eliminar Uno</button>
      <button className="border-2 border-black px-1 bg-gray-300 hover:bg-gray-400 rounded" onClick={() => delFromCart(id, true)}>Eliminar Todos</button>

      </div>

    </div>
  );
};

export default CartItem