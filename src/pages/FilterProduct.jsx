import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import img from './image/home2img.png';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

//import { useState } from 'react';

export default function FilterProduct() {
    const{beautyname}=useParams()
    console.log(beautyname,"beautyname")

    const [product,setProduct]=React.useState([])

    useEffect(()=>{
    axios.get(`https://dummyjson.com/products/category/${beautyname}`)
    .then((res)=>{
        console.log(res,"res");
        setProduct(res.data.products )

    })
    .catch((error)=>{
        console.log(error);
    })
    },[])
    console.log(product,"productsdetails")
return(
  <>

    <div style={{display:"flex",flexWrap:"wrap", alignItems:"center" ,gap:25,justifyContent:"center"}}>

    {product.length>0?product?.map((item,i)=>{
  return (
    <Card sx={{ maxWidth: 345 ,marginTop:"12px" }}>
      <CardMedia
        component="img"
        alt="fether light"
        height="150"
        image={item.thumbnail}
      />
      <CardContent>
      <Link to={`/Beauty-product/${item.name}`}>

      <Typography gutterBottom variant="h5" component="div" sx={{margin:"10px",justifyContent:"center"}}
      > 
      {beautyname} Products 
      </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {item.name}
        watch
        </Typography></Link>
        <Typography variant="body2" color="text.secondary">
          
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          Rs-/{item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{background:"",color:"rgb(32, 178, 170)"}}> Share</Button>
        <Button size="small"sx={{background:"",color:"rgb(32, 178, 170)"}}>Learn More</Button>
      </CardActions>
    </Card>
  );
    }):"No data found for this category"}
  </div>
  </>
)
}
