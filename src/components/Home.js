import Product from "./Product";
import image from "../bas.jpg";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={3} justifyContent="flex-start">
          <Product id="1" title="title1" price={1} rating={4} image={image} />
          <Product id="2" title="title2" price={2} rating={4} image={image} />
          <Product id="3" title="title3" price={3} rating={4} image={image} />
          <Product id="4" title="title4" price={4} rating={4} image={image} />
          <Product id="5" title="title5" price={5} rating={4} image={image} />
          <Product id="6" title="title6" price={6} rating={4} image={image} />
        </Grid>
      </Container>
    </div>
  );
}
