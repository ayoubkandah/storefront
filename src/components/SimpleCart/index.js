import {connect} from "react-redux"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import {deleteC} from "../../data/action";
import {incUpdate} from "../../data/action";

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
      function deleteHandler(index,id,stock) {
          props.deleteC(index)
          props.incUpdate(id,stock)
      }
      return (
         <Paper id="cart" component="ul" className={classes.root}>
              {props.Cart.map((ele,index)=>(
                  <Chip key={index}
                      label={ele.name}
                      onDelete={()=>{deleteHandler(index,ele._id,ele.inStock)}}
                      className={classes.chip}
                  />

              ))}

         </Paper>
     );
}
const mapStateToProps=(state)=>{
     return {Cart:state.Cart}
}
const mapDispatchToProps={deleteC,incUpdate}

export default connect(mapStateToProps,mapDispatchToProps)(SimpleCart)




