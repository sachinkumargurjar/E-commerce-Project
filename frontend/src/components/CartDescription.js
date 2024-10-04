import React, { useState, useEffect } from "react";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";
import { useSelector, connect } from "react-redux";

export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "100px 0px 20px 0px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px",
  },
  productHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "10px",
  },
  imageContainer: {
    flex: "0 0 150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: "10px",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "5px",
  },
  detailsContainer: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    marginRight: "10px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  priceSizeContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "10px 0",
  },
  price: {
    fontWeight: "bold",
    color: "#333",
  },
  size: {
    margin: "10px 0",
  },
  quantityWrapper: {
    display: "flex",
    alignItems: "center",
    flex: "1",
    justifyContent: "center",
    margin: "0 10px",
  },
  quantityContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "16px",
    margin: "0 5px",
  },
  quantity: {
    margin: "0 10px",
    fontSize: "18px",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    cursor: "pointer",
    fontSize: "16px",
  },
  summaryContainer: {
    display: "flex",
    flexDirection: "column",
    // width:'100%',
    // alignItems: "flex-end",
    // marginTop: "20px",
  },
  cartSummary: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // padding: "10px",
    // border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#f8f9fa",
  },
  summaryItem: {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px 0",
    paddingBottom: "10px",
    borderBottom: "1px dashed rgba(0, 0, 0, 0.3)",
  },
  summaryTotal: {
    fontWeight: "bold",
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "10px",
    borderBottom: "2px solid #333",
  },
  checkoutButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    textAlign: "center",
  },
};

const mapStateToProps = (state) => {
  console.log("Redux State:", state);
  return {
    cartItems: state.cartItems?.cartItems ?? [],
  };
};

const mapDispatchToProps = (dispatch) => ({
  ADD: (product) => dispatch({ type: "ADD", payload: product }),
  DELETE: (productId) => dispatch({ type: "DELETE", payload: productId }),
  MODIFY: (productId, newQuantity) =>
    dispatch({ type: "MODIFY", payload: {productId, newQuantity} }),
});

const CartDescription = ({ DELETE, cartItems, MODIFY }) => {
  // const cartItems = useSelector((state) => state.cartItems.cartItems);
  console.log("cartItems", cartItems);
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * (item.quantity || 0);
  }, 0);

  const handleQuantity = ({ productId, newQuantity }) => {
    console.log("productId    ", productId);
    console.log("newQuantity  ", newQuantity);
    MODIFY(productId, newQuantity);
  };

  const handleDelete = (productId) => {
    DELETE(productId);
  };

  // useEffect(() => {
  //   MODIFY(id, quantity);
  // }, [id]);

  const handleCheckout = () => {
    console.log("Proceed to checkout");
  };

  return (
    <div style={styles.container}>
      {cartItems?.map((product) => (
        <div key={product.id} style={styles.productHeader}>
          <div style={styles.imageContainer}>
            <img
              src={product?.image}
              alt={product?.name}
              style={styles.image}
            />
          </div>
          <div style={styles.detailsContainer}>
            <div style={styles.name}>{product?.name}</div>
            <div style={styles.priceSizeContainer}>
              <p style={styles.size}>Size: {product?.size}</p>
              <p style={styles.price}>Price: ₹{product?.price}</p>
            </div>
          </div>
          <div style={styles.quantityWrapper}>
            <div style={styles.quantityContainer}>
              <button
                onClick={() =>
                  handleQuantity({
                    productId: product._id,
                    newQuantity: Math.max(product?.quantity - 1, 1)
                  })
                }
                style={styles.button}
              >
                -
              </button>
              <span style={styles.quantity}>{product?.quantity}</span>
              <button
                onClick={() =>
                  handleQuantity({
                    productId: product._id,
                    newQuantity: (product?.quantity + 1)
                  })
                }
                style={styles.button}
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={() => handleDelete(product._id)}
            style={styles.deleteButton}
          >
            Delete
          </button>
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        <CartSummary price={totalPrice} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <Link
          to="/place-order"
          state={ {price: totalPrice }}
          style={{
            textDecoration: "none",
          }}
        >
          <div style={{ display: "inline-block" }}>
            <button style={styles.checkoutButton}>PROCEED TO CHECKOUT</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDescription);
