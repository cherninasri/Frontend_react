import React, { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import Header from "../components/Header";
import { Col, Row } from "react-bootstrap";
import notify from "./notify";
import { ToastContainer } from 'react-toastify';

const Login = () => {
const navigate = useNavigate()

  const [email, setemail] = useState('');
  const [password, setpaswword] = useState('');
  const [loading, setloading] = useState(false);



  const dispatch =useDispatch()
  const data=useSelector(state=>state.auth.data)

  console.log(data)

  const onchangeEmail = (e)=>{
    setemail(e.target.value)
    console.log(e.target.value)
  

    

  }
  const onchangepassword = (e)=>{
    setpaswword(e.target.value)
    console.log(e.target.value)



  }
  const send =async ()=>{
    if(email===''||password===''){

      console.log('error')
        notify("please dont forget your password or email","error")
    }else{

    await dispatch(login({email,password}))

    
    setloading(true)
    
    }

  }
 
  
 
  useEffect(()=>{

   if(data.token) {

    localStorage.setItem("user", JSON.stringify(data.data));
    localStorage.setItem("token", data.token);
   
        notify("email and password are correct","success")


        setTimeout(() => {
          const path= window.location.pathname;

    if (path!='/'){
      window.location.pathname="/"
    }
               
           }, 2000);
    



    

    

   }else {

    if(data.message=='Request failed with status code 401') 

{
    notify("Incorrect email or password","error")


    setTimeout(() => {
    
  window.location.pathname="/login"
}
           
       , 2000);
     
    
     
    
    }
   
  
    
  
  }


   
    
    
    
  },[loading])






  return (
    <>
   
    <Container style={{ minHeight: "680px" }}>
    <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">Login</label>
            <input
                placeholder="email..."
                type="text"
                className="user-input my-3 text-center mx-auto"
                onChange={onchangeEmail}
                value={email}
            />
            <input
                placeholder=" Password..."
                type="password"
                className="user-input text-center mx-auto"
                onChange={onchangepassword}
                value={password}
            />
            <button className="btn-login mx-auto mt-4" onClick={send}> Login</button>
            <label className="mx-auto my-4">
                  u dont have acount?   
                <Link  to="/signup"  style={{textDecoration:'none'}}>
                    <span style={{ cursor: "pointer" }} className="b">
                       Sing UP
                    </span>
                </Link>
            </label>
            <label className="mx-auto my-0">
            U forget your password 
          <Link  to="/forgot-password"  style={{textDecoration:'none'}}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                 Click here 
              </span>
          </Link>
      </label>



        </Col>


      
    </Row>
    <ToastContainer/>

</Container>
    </>
  );
};

export default Login;
