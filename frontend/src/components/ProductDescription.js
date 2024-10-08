import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Size from "./Size";
import RelatedProducts from "./RelatedProducts";
import { connect } from "react-redux";
import { products } from "../assets/assets/assets";

// const mapStateToProps = (state) => ({
//   cartItems: state.cartItems.cartItems,
// });

const mapStateToProps = (state) => {
  console.log("Redux State:", state);
  return {
    cartItems: state.cartItems.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => ({
  ADD: (product) => dispatch({ type: "ADD", payload: product }),
  DELETE: (productId) => dispatch({ type: "DELETE", payload: productId }),
});

const ProductDescription = ({ productId, ADD, DELETE, cartItems }) => {
  const [value, setValue] = useState(0);
  const [size, setSize] = useState("");
  const [product, setProduct] = useState(null);

  const handleAddtoCart = (product) => {
    if (size === "") {
      alert("Please Select Size");
      // <Stack sx={{ width: "100%" }} spacing={2}>
      //   <Alert variant="filled" severity="error">
      //     This is an error Alert.
      //   </Alert>
      // </Stack>;
      return;
    }
    const modifiedProduct = {
      _id: product._id,
      name: product.name,
      price: product.price,
      size: size,
      quantity: 1,
      image: product.image[0],
    };
    console.log("Product to add:", modifiedProduct);
    ADD(modifiedProduct);
    // console.log("Current cart items:", cartItems);
  };

  useEffect(() => {
    console.log("Current cart items:", cartItems);
  }, [cartItems]);

  useEffect(() => {
    const fetchedProduct = products?.find((p) => p._id === productId);
    console.log("fetchedProduct:    ", fetchedProduct);
    setProduct(fetchedProduct);
  }, [productId]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", paddingTop: "40px" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "50px",
        }}
      >
        <div>
          <img src={product?.image[0]} alt="Product Image" />
        </div>
        <div>
          <h2>{product?.name}</h2>
          <div>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <p style={{ fontSize: "26px", fontWeight: "700" }}>
            ₹{product?.price}
          </p>
          <p>{product?.description}</p>
          <Size sizes={product?.sizes} setSize={setSize} selectedSize={size}/>
          {/* <Link
            to="/cart"
            state={{size,productId}}
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" style={{ backgroundColor: "#161718" }}>
              ADD TO CART
            </Button>
          </Link> */}
          <Button
            variant="contained"
            style={{ backgroundColor: "#161718" }}
            onClick={() => handleAddtoCart(product)}
          >
            ADD TO CART
          </Button>
          <p>
            100% Original product. <br />
            Cash on delivery is available on this product <br />
            Easy return and exchange policy within 7 days.
          </p>
        </div>
      </div>
      <div></div>
      <RelatedProducts
        category={product?.category}
        subCategory={product?.subCategory}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription);
