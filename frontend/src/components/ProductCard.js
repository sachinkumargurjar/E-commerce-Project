import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// Import CardActions and Button if you want to use them
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          maxWidth: "345px",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" component="div" color="textSecondary">
              <CurrencyRupeeIcon sx={{ fontSize: "12px" }} />
              {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
      </Card>
    </Link>
  );
};

export default ProductCard;
