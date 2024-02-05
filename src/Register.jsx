import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { reg } from "./Redux/AuthSlice";
import { Box, Button, CardHeader, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
//import styled from "styled-components";
import { useState } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// const VisuallyHiddenInput = styled("input")({
//     clip: "rect(0 0 0 0)",
//     clipPath: "inset(50%)",
//     height: 1,
//     overflow: "hidden",
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     whiteSpace: "nowrap",
//     width: 1,
//   });
  
  export default function Register() {
    const [img,setImg] = useState("");
    const ans="node"
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
      
      
      const formData=new FormData();
      formData.append("name",data.name)
      formData.append("email",data.email)
      formData.append("phone",data.phone)
      formData.append("password",data.password)
      formData.append("answer",ans);
      formData.append("image",img);
      
        
    
  
      dispatch(reg(formData));
    };
    const se=useSelector((state)=>state.Aut)
    console.log(se.status)
    if(se.status!=="idle")
    {
  
    return (
      <div style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1696185570507-2d1283399560?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height:'auto',
        position:'relative',
        top:15,
      
    }}>
      
  
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ margin:"auto",marginTop:"50px" }}>
          <Paper elevation={24}  square={false}sx={{ padding: 2,   backgroundColor: 'rgba(255, 255, 255, 0.5)', border:'2px solid' ,borderColor:'#3fb572',marginTop:"30px",marginBottom:"50px"}}>
            <CardHeader title="Registrations"    style={{ 
                  color: '#3fb572',
                  borderBottom: '2px solid #3fb572',
                  padding: '10px',
                }}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  {...register("name", { required: true, maxLength: 20 })}
                  label="name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.name}
                  helperText={errors.name && "Name is required"}
                  InputLabelProps={{
                    sx: {
                      color: '#3fb572',
                      
                    },
                  }}
                />
                  <TextField
                  {...register("email", {
                    required: true,
                    pattern:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                    
                  })}
                  label="Your Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.email}
                  helperText={errors.email?.type === "required" ? "Email is required." : errors.email?.type === "pattern" ? "Valid email is required" : ""}
                  InputLabelProps={{
                    sx: {
                      color: '#3fb572',
                      
                    },
                  }}
                />
                 <TextField
                  {...register("phone", { required: true, maxLength: 20 })}
                  label="phone"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.phone}
                  helperText={errors.phone && "phone is required"}
                  InputLabelProps={{
                    sx: {
                      color: '#3fb572',
                      
                    },
                  }}
                />
                
              
                <TextField
                  {...register("password", { required: true })}
                  label="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={!!errors.password}
                  helperText={errors.password && "password is required"}
                  InputLabelProps={{
                    sx: {
                      color: '#3fb572',
                      
                    },
                  }}
                />
                <Box>
                  <Button
                variant="contained"
                component="label"
                fullWidth
                startIcon={<CloudUploadIcon />}
              >
                Upload Image
                <input
                  type="file"
                  hidden
                  onChange={(e) => setImg(e.target.files[0])}
                  name="img"
                  accept="image/*"
                />
                </Button>


      </Box>
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                  sx={{ marginTop: 2 ,marginBottom:6}}
                >
                  Register
                </Button>
                <Typography variant="body1">
          Do you have an account? 
          <Link to="/log" style={{ textDecoration: 'none', color: '#3fb572' }}>
            Login
          </Link>
        </Typography>
               </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      </div>
    );}
    else{
      return(
        <div style={{
          backgroundImage:`url(https://images.unsplash.com/photo-1696185570507-2d1283399560?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          height:'100vh',
          position:'relative',
          top:15,
      }}>
      <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ margin: "0 auto",marginTop:"250px" }}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.9)', border:'2px solid' ,borderColor:'#3fb572' }}>
          <CardHeader title="Registrations complete"    style={{ 
                color: '#3fb572',
                borderBottom: '2px solid #3fb572',
                padding: '10px'
              }}/>
          
              <Typography variant="body1">
        your registration is completet please procede to{' '} 
        <Link to="/log" style={{ textDecoration: 'none', color: 'green'}}>
            Login
        </Link>
      </Typography>
        
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </div>
    )
    }
  
  }
  