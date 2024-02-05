import Slider from "react-slick";
import Avatar from '@mui/material/Avatar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { produc } from "./Redux/Helper";
import { Testm } from "./Redux/Homeslice";

const PreviousBtn = (props) => {
 // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowBack style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowForward  style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonial = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(Testm())
    },[dispatch])
    const{Tmonial}=useSelector((state)=>state.Hom)

  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50,backgroundColor:'#f4fcfc',height:'550px' }}
    >
      <div style={{ width: "50%", textAlign: "center",marginTop:"30px" }}>
        <Typography  variant="h3"style={{ color:"#364968"}}>testimonial</Typography> 
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          {Tmonial.map((mm)=>(
             <Card img={produc(mm.image)} name={mm.client_name}  review={mm.review}/>
          ))}

          
        
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img ,name,designation,review}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>
        {review}
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>{name}</span> ,
        
      </p>
    </div>
  );
};

export default Testimonial;