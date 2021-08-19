import React from "react";
import PropTypes from "prop-types";

const styleObject={color:"#11324D",textAlign: "center"};
const styleObject1={color:"#6B7AA1",textAlign: "center"};
const styleObject2={color:"#C1CFC0",textAlign: "center"};



const Profile = props =>{
    return (
        [
         <div> {props.children}</div>,
        <h1 style={styleObject}>  {props.name}</h1>,
        <h2 style={styleObject1}>  {props.profession}</h2>,
        <h3 style={styleObject2}>  {props.bio}</h3>,
        <button onClick={() => props.handleName(props.name)}  style={{backgroundColor:"#5F939A",  border: "none" , borderRadius: "17px",   color: "white",  fontSize: "22px", width:"100px",height:"42px" , margin:"18px"
    }}>
        My Name
      </button>
        
        ]
        )
   };

 Profile.defaultProps = {
 name: "amine dakhlia",
 profession: "Student",
 bio: "Software Engineer Student at ESPRIT",
};
Profile.propTypes ={
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
}
   export default  Profile;