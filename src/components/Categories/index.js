import React,{useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Active,decUpdate} from "../../data/action"
import {Add} from "../../data/action"

import Category from "../../data/category";
import Products from "../../data/products";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

export default function  Categories(){
    const state = useSelector((state) => {
        return {
            Category:state.Category,
            Products:state.Products,
            Cart:state.Cart,
        };
    });
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(0);

    // useEffect(()=>{
    //
    //
    //
    // },[state.Inventory])
    const handleChange = (event, newValue) => {
        console.log(newValue)
        setValue(newValue);

        if(newValue===0){
            // console.log(props.Category.category)
            dispatch(Active("console"))

        }else if (newValue===1){
            dispatch(Active("mobile"))


        }
    };
    const useStyles = makeStyles({
        root: {
            maxWidth: 300,
        },
        media: {
            height: 140,
        },
    });
                const classes = useStyles();
    // useEffect(()=>{
    //     console.log("mount")
    // },[])

    return(
    <>
        <Paper square>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"

                onChange={handleChange}
            >
                <Tab label="Consoles"  />
                <Tab label="Mobiles" />
            </Tabs>
        </Paper>


{console.log(state.Products,"laaaaaaaaaaaaaaaaast")}
        {state.Category.activeCategory ?  <>
            <h4>{state.Category.activeCategory.toUpperCase()}</h4>
            {state.Category.category.category.map((ele)=>{
if(ele.name===state.Category.activeCategory){
    return(
        <h5 key={ele.name}>{ele.description}</h5>
    )
}else{return null}
            })}
            <div className="section">

            {state.Products.Products.map((ele)=> {

                    // console.log(ele ,"----",props.Category.activeCategory)
                if (ele.category === state.Category.activeCategory) {
return (
                    <Card key={ele.name} className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={ele.description.split("!")[0]}
                                title={ele.name}
                            />
                            <CardContent>
                                <Typography  gutterBottom variant="h5" component="h2">
                                    {ele.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {ele.description.split("!")[1]}
                                </Typography>
                                <Typography gutterBottom className="price"  component="h3">
                                   Price: {ele.price}$
                                </Typography>
                                <Typography gutterBottom className="stock"  component="h3">
                                    inStock:{ele.inStock}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button onClick={()=>{
                                dispatch(decUpdate(ele._id,ele.inStock))
                                dispatch(Add(ele))

                                console.log(state.Cart)
                            }} size="small" color="primary">
                                Add to cart
                            </Button>
                            <Button size="small" color="primary">
                                View Details
                            </Button>
                        </CardActions>
                    </Card>
)
                } else {
                    return false
                }
                // console.log(ele.image)

            })}
            </div>
            </> : null}
    </>

)}
//
// const mapStateToProps=(state)=>{
//     return {Category:state.Category,Products:state.Products,Cart:state.Cart,Inventory:state.Inventory}
// }
// const mapDispatchToProps={Active,Add,decreaseStock,getData}
// export default connect(mapStateToProps,mapDispatchToProps)(Categories)