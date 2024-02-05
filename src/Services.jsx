import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Card,Typography,Button, Box} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardMedia from '@mui/material/CardMedia';
import { Bas } from "./Redux/Homeslice";
import { produc } from "./Redux/Helper";
import { Link } from "react-router-dom";

function Services() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Bas());
   }, [dispatch]);
   const {Ser} = useSelector((state) => state.Hom);
   const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
  };

  return (
    <div style={{ width: '75%', margin: 'auto', marginTop: '5rem' }}>
      <Slider {...settings}>
        {Ser.map((mm) => (
          <div>
            <Card sx={{ maxWidth: 345,backgroundColor:"#364968" ,borderRadius:10,position:'relative'}}>
              

                <CardMedia
                  component="img"
                  height="400"
                  image={produc(mm.image)}
                  alt="green iguana"
                />
                <Box  sx={{ position: 'absolute',
      top: '270px',
      left: '20px',
      color: 'black',}}>
                  <Typography gutterBottom variant="h3"sx={{color:"#364968"}}>
                    {mm.service_name}
                  </Typography>
                  <Button variant="contained" color="secondary">
                    <Link to={`./serviced/${mm._id}`} style={{textDecoration:'none',color:'white'}}>DETAILS</Link>
                  </Button>
                  </Box>
                  
              
              
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default  Services;

