import { makeStyles } from "@material-ui/core/styles";
import { useStateValue } from "../store/store";
import { Paper, Grid, Typography, Box, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  console.log(basket);
  const classes = useStyles();

  return (
    <Grid key={id} item xs={8} sm={6} md={3}>
      <Paper className={classes.paper}>
        <Box component="div" textAlign="left">
          <Typography component="h2" variant="h6">
            Product Title:{title}
          </Typography>
          <Typography component="span">Product Price:{price}</Typography>
          <br />
          <Typography component="span">Product Rating:{rating}</Typography>
        </Box>
        <Box component="div">
          <img src={image} alt="bas" width="100%" />
        </Box>
        <Box component="div">
          <Button onClick={addToBasket} variant="contained" color="primary">
            Add to Basket
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
}

export default Product;
