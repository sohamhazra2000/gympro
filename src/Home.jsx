import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Ba } from './Redux/Homeslice'
import Carousel from 'react-material-ui-carousel'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import { produc } from './Redux/Helper'
import zIndex from '@mui/material/styles/zIndex'
import Trainer from './Trainer'
import Services from './Services'
import Testimonial from './Testimonials'
import Blogs from './Blogs'
import Car from './Car'
let timer;
export default function Home() {
    
  const[dial,setDial]=useState(0)
    const {pt}=useSelector((state)=>state.Hom)
   // console.log(pt)

    

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(Ba())
  },[])

  useEffect(()=>{
    const a1=()=>{ 
      timer=setInterval(()=>{
     if(dial===89){
       clearInterval(timer)
     
     }
     else{
     setDial(dial+1)
     }
    },10)}
    a1()
       return()=>clearInterval(timer)
  
      }
  ,[dial])
  return (<>
    <div>
      {/* {pt.map((mm)=>{
        return(<><img src={`https://corefitserver.onrender.com/${mm.image}`} alt="vhjvhjbhvhj" />
       
        </>)
      })} */}
    <Carousel autoPlay={true} animation='slide'>
    {
        pt.map((mm) => (
            <Box
                sx={{
                    height:"100vh",
                    width: "100%",
                    position: 'relative',
                }}
            >
                <img src={produc(mm.image)} style={{height: '100vh', width: '100%'}} />
                <Typography variant='h2' style={{zIndex:5, position: 'absolute', bottom: "300px",left:105, color:"wheat"}}>{mm.title}</Typography>
                <Typography variant='h3' style={{zIndex:5, position: 'absolute', bottom:"230px",left:105, color:"wheat"}}>{mm.subtitle}</Typography>
            </Box>
        ))
    }
</Carousel>


  



    </div>
    <div  style={{
            position: 'absolute',
            top: '136%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '95%',
            height: 'auto',
            backgroundColor:'#f4fcfc', 
            zIndex: 5,
            borderRadius:'15px'
        }}>
 <Container>
    <Grid container spacing={6}  sx={{marginTop:"15px"}}>
    <Grid item xs>
          <Box sx=
          {{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'}}
          >
          <Typography   align="centre"sx={{color:"#3993ee", fontSize:"60px"}}>
             {dial}+
          </Typography>
          <Typography variant='h5' sx={{color:"#364968"}}>
             BRANCH
          </Typography>
          <Typography variant='subtitle2' sx={{color:"#9b9fb3",textAlign:"center"}}>
           velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollit
          </Typography>
          </Box>
        
          </Grid>
          <Grid item xs>
          <Box sx=
          {{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'}}
          >
          <Typography   align="centre"sx={{color:"#3993ee", fontSize:"60px"}}>
             {dial*5}+
          </Typography>
          <Typography variant='h5' sx={{color:"#364968"}}>
             TRAINER
          </Typography>
          <Typography variant='subtitle2' sx={{color:"#9b9fb3",textAlign:"center"}}>
           velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollit
          </Typography>
          </Box>
        
          </Grid>
          
          <Grid item xs>
          <Box sx=
          {{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'}}
          >
          <Typography   align="centre"sx={{color:"#3993ee", fontSize:"60px"}}>
             {dial-19}+
          </Typography>
          <Typography variant='h5' sx={{color:"#364968"}}>
            AWARDS
          </Typography>
          <Typography variant='subtitle2' sx={{color:"#9b9fb3",textAlign:"center"}}>
           velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollit
          </Typography>
          </Box>
        
          </Grid>
        
      
    </Grid>

  </Container>
  <Container>

    <Grid container spacing={2} sx={{paddingTop:"65px"}}>
    <Grid item md>
          <Box sx=
          {{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'}}
          >
          <Typography variant='h3' sx={{color:"#364968", marginTop:"35px"}}>
             ABOUT GYM<span style={{color:"red"}}>PRO</span>
          </Typography>
          <div style={{width:"200px",height:"3px", backgroundColor:"#eab870", marginTop:"15px"}}></div>
          <Typography variant='subtitle1' sx={{color:"#9b9fb3",textAlign:"center",marginTop:'15px',marginBottom:"100px"}}>
          Boost Creepers is a car modification company that offers customized solutions for your vehicle. Whether you need a performance upgrade, a cosmetic makeover, or a unique design, Boost Creepers can make it happen. Contact us today and let us transform your car into your dream ride.
            
          </Typography>
          </Box>
        
          </Grid>
    </Grid>
  </Container>

  </div>
  <div style={{
      // backgroundImage: `url(https://img.freepik.com/free-vector/beautiful-decorative-soft-colorful-watercolor-texture-background_1055-14290.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699488000&semt=ais)`,
      // backgroundColor:'#f4fcfc',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      marginTop:"550px",
      height:'115vh',
      // borderTop:'5px solid #364968 ',
      // borderBottom:'5px solid #364968 ',
      // overflow:'auto',
      

  }}>
     <Typography variant='h3' sx={{color:"#364968", textAlign:'center', paddingTop:"45px"}}>
  VIEW OUR <span style={{color:"red"}}>SERVICES</span>
</Typography>

          <div style={{width:'200px',height:'3px',backgroundColor:"#eab870", marginBottom:'5px',marginTop:"15px",marginLeft:"659px"}}></div>

      <Services/>
      </div>
  <div style={{
      // backgroundImage: `url(https://img.freepik.com/free-vector/beautiful-decorative-soft-colorful-watercolor-texture-background_1055-14290.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699488000&semt=ais)`,
      backgroundColor:'#f4fcfc',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      // marginTop:"0px",
      height:'115vh',
      // borderTop:'5px solid #364968 ',
      // borderBottom:'5px solid #364968 ',
      // overflow:'auto',
      

  }}>
   <Typography variant='h3' sx={{color:"#364968", textAlign:'center', paddingTop:"45px"}}>
  VIEW OUR <span style={{color:"red"}}>TRAINERS</span>
</Typography>

          <div style={{width:'200px',height:'3px',backgroundColor:"#eab870", marginBottom:'5px',marginTop:"15px",marginLeft:"659px"}}></div>
          <div style={{marginTop:"100px"}}></div>
      <Trainer/>
      </div>
      <div style={{
      // backgroundImage: `url(https://img.freepik.com/free-vector/beautiful-decorative-soft-colorful-watercolor-texture-background_1055-14290.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699488000&semt=ais)`,
      // backgroundColor:'#f4fcfc',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
       marginTop:"120px",
      height:'115vh',
      // borderTop:'5px solid #364968 ',
      // borderBottom:'5px solid #364968 ',
      // overflow:'auto',
      

  }}>
   <Typography variant='h3' sx={{color:"#364968", textAlign:'center', paddingTop:"45px"}}>
  READ ABOUT THE LATEST  <span style={{color:"red"}}>BLOGS</span>
</Typography>

          <div style={{width:'400px',height:'3px',backgroundColor:"#eab870", marginBottom:'5px',marginTop:"15px",marginLeft:"560px"}}></div>
          <div style={{marginTop:"100px"}}></div>
      <Car/>
      </div>

      <Testimonial/>
      {/* <Car/> */}
    </>
  )
}
