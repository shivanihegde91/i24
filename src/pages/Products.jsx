import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
//import img from './img/home2img.jpg';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Icon } from '@mui/material';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import FindInPageRoundedIcon from '@mui/icons-material/FindInPageRounded';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Products() {
  const [expanded, setExpanded] = React.useState(false);

  const [products,setproducts]=useState([])

  useEffect(()=>{
axios.get('https://dummyjson.com/products').then((res)=>{
  console.log(res);
  setproducts(res.data.products)
  
})
.catch((error)=>{
  console.log(error)
});
  },[])
  console.log(products,"productdetails")

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
const handleSearch=(e)=>{//searching
  
  let data=e.target.value;
  data=data.toLowerCase()
  console.log(data);
  axios.get(`https://dummyjson.com/products/search?q=${data}`).then((res)=>{
    console.log(res);
    setproducts(res.data.products)
  }).catch((error)=>{
    console.log(error);
  })

  }

  return (
    <>
    <Typography gutterBottom variant="h5" component="div" sx={{color:"040000",textAlign:'center',margin:"10px"}}>
    <h1> Shop Product</h1>
    </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-end',alignItems:"center",justifyContent:"center", margin:"10pxs" }}>
        <FindInPageRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Search for Product" variant="standard" sx={{display:"flex"}} 
        onChange={handleSearch} />
      </Box>

    <div style={{display:'flex',alignItems:"center",flexWrap:"wrap",justifyContent:"center",gap:"20px"}}>
      
    
    {products.length>0?products.map((item,index)=>{

      return(<Card sx={{ maxWidth: 345,display:"flex",flexWrap:"wrap",justifyItems:"center" }}>
        <CardHeader 
       // action{
         // <IconButton aria-label='setting'
       // }
         
          action={
            <IconButton aria-label="settings" style={{color:"rgb(32, 178, 170)"}}>
              <MoreVertIcon />
            </IconButton>
          }
          title={item.title}
          subheader={item.category}
          sx={{color:"rgb(32, 178, 170)"}}
        />
        <CardMedia
          component="img"
          height="194"
          image={item.thumbnail}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           
          {item.discription}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           <h2>
           RS-/{item.price}</h2>
           </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon sx={{}}/>
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <div style={{display:"flex",gap:"20px"}}>
            <Typography paragraph sx={{color:""}}>Brand</Typography>
            <Typography paragraph>
            {item.brand}
            </Typography>
            <Typography paragraph sx={{color:"blue"}}>
           Shiping Information:
            </Typography>
            <Typography paragraph>
            {item.shippingInformation}
            </Typography>
            
            </div>
          </CardContent>
        </Collapse>
      </Card>)
 
    }    ):"no products found "}
    </div>
    </>
    
  );
}
