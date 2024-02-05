import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blogs } from './Redux/BlogSlice'
import { Link } from 'react-router-dom'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { produc } from './Redux/Helper'

export default function Blogs() {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(blogs())
    },[])
    const{items}=useSelector((state)=>state.Blo)
    
    return (
        
        <Box sx={{ flexGrow: 1 }}> 
        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
        {Array.isArray(items)&&items?.map((mm,index)=> (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Card  sx={{ maxWidth: 500 ,maxHeight:800,marginLeft:{ xs:'15px',md:'60px'},marginTop:"20px",marginBottom:"15px",backgroundColor:"#9b9fb3",border:"2px solid black"}}>
                
                <CardMedia
                sx={{borderBottom:"2px solid black",borderRadius: '0 0 26px 26px '}}
                component="img"
                height="200"
                image={produc(mm.image)}
                alt="green iguana"
                />
          
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    {mm.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                   {mm.subtitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {mm.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='outlined' color="success">  <Link  to={`/update/${mm?._id}`} style={{textDecoration:'none',color:"green"}}>update  </Link></Button>
                  
                
                  <Button variant="outlined" color="error">
                    <Link to={`/blogd/${mm._id}`}> READ MORE</Link>
                     </Button>
                </CardActions>
              </Card>
              </Grid>
            ))}
              </Grid>
            </Box>
            
    
        
      
      );
}
