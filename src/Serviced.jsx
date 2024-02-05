import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Bass } from './Redux/Homeslice'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { produc } from './Redux/Helper';

export default function Serviced() {
    const{id}=useParams()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(Bass(id))
    },[])
    const{Serdet}=useSelector((state)=>state.Hom)
    console.log(Serdet)

    return (
        <Box display="flex" justifyContent="center" marginTop="100px" marginBottom="100px">
        <Card sx={{ maxWidth:2000 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="800"
              image={produc(Serdet.image)}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h2" component="div"sx={{color:"#364968"}}>
                {Serdet.service_name}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {Serdet.service_description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Box>
      );
}
