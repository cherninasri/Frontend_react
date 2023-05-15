import React, { useState ,useEffect} from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useDispatch , useSelector } from "react-redux";
import { SendEmail } from "../redux/authSlice";
import notify from "./notify";
import { ToastContainer } from "react-toastify";

const Forgotpassword = () => {
const navigate = useNavigate()


  const dispatch =useDispatch()
  
  const data=useSelector(state=>state.auth.Semail)
  console.log(data)
  const [email, setemail] = useState('');

  const [loading, setloading] = useState(false);


  


  const send =async ()=>{
    if(email===''){

    notify("please enter your email","error")
      

    }else{

    await dispatch(SendEmail({email}))

    setloading(true)
    }
  }
  useEffect(()=>{
    if(data){
      if(data.message=="Reset code sent to email") {
        notify("Reset code sent to email","success")

        setTimeout(() => {
         window.location.pathname="/Rest-Code"
   
          }, 2000);
         return

      }
      if(data.message =="Request failed with status code 404"
        ){

        notify("Incorrect email ","error")
 
 
        setTimeout(() => {
        
      window.location.pathname="/forgot-password"
    }
               
           , 2000);

           return
      
      }

      
  
  
    }else{
  
    }
  
  
   },[loading])
  
 










  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">
                We will send you an email to reset your password
              </p>
              
                <input type="email" name="email" placeholder="Email"
                className="user-input my-4 text-center mx-auto"
                value={email}
                onChange={(e)=>{setemail(e.target.value)}}
              
                />

                <div>
                  <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                    <button className="button border-0" type="submit"
                    onClick={send}
                    >
                      Submit
                    </button>
                    <Link to="/login">Cancel</Link>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
    <ToastContainer/>

      </Container>
    </>
  );
};

export default Forgotpassword;
