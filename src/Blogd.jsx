import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { blogdet } from './Redux/BlogSlice'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { produc } from './Redux/Helper'

export default function Blogd() {
    const params=useParams()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(blogdet(params.id))

    },[])
    const{det}=useSelector((state)=>state.Blo)
  return (
  <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <Card sx={{ width:'1000px',marginTop:'100px' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="350"
        image={produc(det.image)}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {det.title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
        {det.subtitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {det.content}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </div>
  )
}
