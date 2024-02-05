
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Bat } from './Redux/Homeslice'
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { produc } from './Redux/Helper';
import Slider from 'react-slick';

export default function Trainer() {
    let dispatch=useDispatch()
    useEffect(()=>{dispatch(Bat())},[dispatch])
    const {t}=useSelector((state)=>state.Hom)

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      dots: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };

  return (
    <div>
      <Slider {...settings}>
        {t.map((mm) => (
          <div>
            <Card sx={{ maxWidth: 345,backgroundColor:"#364968" ,borderRadius:10}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="340"
                  image={produc(mm.image)}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div" sx={{color:'#9b9fb3'}}>
                    {mm.name}
                  </Typography>
                  <Typography variant="body2" sx={{color:'#9b9fb3'}}>
                    {mm.speciality}
                  </Typography>
                  <Typography variant="body2" sx={{color:'#9b9fb3'}}>
                    {mm.experience}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  )
}
