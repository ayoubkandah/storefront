import {connect} from "react-redux"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import {Active} from "../../data/category";
import {deleteC} from "../../data/cart";
import {increaseStock} from "../../data/products";

const useStyles = makeStyles((theme) => ({
     root: {
          display: 'absolute',
          justifyContent: 'center',
          listStyle: 'none',
          padding: theme.spacing(0.5),
          margin: 0,
     },
     chip: {
          margin: theme.spacing(0.5),
     },
}));

  function SimpleCart(props) {
     const classes = useStyles();

      function deleteHandler(index,name) {
          props.deleteC(index)
          props.increaseStock(name)
      }

      return (
         <Paper id="cart" component="ul" className={classes.root}>
              {props.Cart.map((ele,index)=>(
                  <Chip
                      label={ele.name}
                      onDelete={()=>{deleteHandler(index,ele.name)}}
                      className={classes.chip}
                  />

              ))}

         </Paper>
     );
}
const mapStateToProps=(state)=>{
     return {Cart:state.Cart}
}
const mapDispatchToProps={deleteC,increaseStock}

export default connect(mapStateToProps,mapDispatchToProps)(SimpleCart)




