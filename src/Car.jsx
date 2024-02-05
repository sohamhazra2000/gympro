

import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { blogs } from './Redux/BlogSlice';
import { produc } from './Redux/Helper';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

export default function Car() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    //dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    
    beforeChange: (current, next) => {
      console.log("before change", current, next);
    },
    afterChange: current => {
      console.log("after change", current);
      setCurrentSlide(current);
    }
  };

  useEffect(() => {
    console.log("Component did mount/update");
  }, [currentSlide]);
  const dispatch=useDispatch()
  useEffect(()=>{
      dispatch(blogs())
  },[dispatch])
  const{items}=useSelector((state)=>state.Blo)
  const theme = useTheme();
  console.log(theme)

  return (
    <div style={{height:'500px'}}>
      <Slider {...settings}>
      {Array.isArray(items)&&items?.map((mm,index)=> (
    //           <Grid item xs={2} sm={4} md={12} key={index}>
    //              <Card sx={{ display: 'flex' ,height:"350px" }}>
    //   <Box sx={{ display: 'flex', flexDirection: 'column' }}>

    //     <CardContent sx={{ flex: '1 0 auto' ,width:800 ,backgroundColor:'#f4fcfc'}}>
    //       <Typography component="div" variant="h3" sx={{ color:"#364968"}}>
    //         {mm.title}
    //       </Typography>
    //       <Typography variant="h4" color="text.secondary" component="div">
    //         {mm.subtitle}
    //       </Typography>
    //       <Typography variant="h6" color="text.secondary" component="div">
    //         {mm.content}
    //       </Typography>
    //     </CardContent>
        
    //   </Box>
    //   <CardMedia
    //     component="img"
    //     sx={{ width: 700}}
    //     image={produc(mm.image)}
    //     alt="Live from space album cover"
    //   />
    // </Card>
    //           </Grid>
    <Card sx={{ display: 'flex' }}>
    <Box sx={{ display: 'flex', flexDirection: 'row',height:'500px' }}>
      <CardContent sx={{ flex: '1 0 auto',width:800  }}>
      <Typography component="div" variant="h3" sx={{ color:"#364968"}}>
           {mm.title}
          </Typography>
          <Typography variant="h4" color="text.secondary" component="div" sx={{marginTop:"55px"}}>
             {mm.subtitle}
           </Typography>
           <Typography variant="h6" color="text.secondary" component="div"sx={{marginTop:"25px"}}>
             {mm.content}
         </Typography>
         <Button  variant="contained" color='secondary' sx={{marginTop:'25px'}}> <Link  to={`/blogd/${mm?._id}`} style={{textDecoration:'none',color:'white'}}>READ MORE  </Link></Button>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width:700}}
        image={produc(mm.image)}
        alt="Live from space album cover"
      />
    </Box>
</Card>



            ))}
      </Slider>
    </div>
  );
}
