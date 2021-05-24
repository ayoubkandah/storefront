import {connect} from "react-redux"
import React,{useState} from "react";
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
import  {Active} from "../../data/category"
import Category from "../../data/category";
import Products from "../../data/products";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

const Categories =(props)=>{
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log(newValue)
        setValue(newValue);

        if(newValue===0){
            console.log(props.Category.category)
            props.Active("console")

        }else if (newValue===1){
            props.Active("mobile")


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



        {props.Category.activeCategory ?  <>
            <h4>{props.Category.activeCategory.toUpperCase()}</h4>
            {props.Category.category.category.map((ele)=>{
if(ele.name===props.Category.activeCategory){
    return(
        <h5>{ele.description}</h5>
    )
}else{return null}
            })}
            <div className="section">

            {props.Products.Products.map((ele)=> {

                    // console.log(ele ,"----",props.Category.activeCategory)
                if (ele.category === props.Category.activeCategory) {
return (
                    <Card key={ele.name} className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={ele.image}
                                title={ele.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {ele.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {ele.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
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

const mapStateToProps=(state)=>{
    return {Category:state.Category,Products:state.Products}
}
const mapDispatchToProps={Active}
export default connect(mapStateToProps,mapDispatchToProps)(Categories)