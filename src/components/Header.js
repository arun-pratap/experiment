import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import { useStateValue } from "./../store/store";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={2}>
          <Typography component="h2" variant="h5">
            Amazon
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="subtitle2">Search Box</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle2">Hello, Sign In </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="subtitle2">Return and Orders</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="subtitle2">Your Prime</Typography>
        </Grid>
        <Grid item xs={1}>
          <Link to="/checkout">
            <Typography variant="subtitle2">
              Baskets {basket?.length}
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
