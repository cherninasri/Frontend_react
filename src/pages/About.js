import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
  <>
  <Container>
    <div class="container container-fluid">
        <h2 class="mt-5 ml-5">My Profile</h2>
        <div class="row justify-content-around mt-5 user-info">
            <div class="col-12 col-md-3">
                <figure class='avatar avatar-profile'>
                    <img class="rounded-circle img-fluid" src='' alt='' />
                </figure>
                <a href="#" id="edit_profile" class="btn btn-primary btn-block my-5">
                    Edit Profile
                </a>
            </div>
     
            <div class="col-12 col-md-5">
                 <h4>Full Name</h4>
                 <p>Ghulam Abbas</p>
     
                 <h4>Email Address</h4>
                 <p>ghulamabbas258@gmail.com</p>

                 <a href="#" class="btn btn-danger btn-block mt-5">
                    My Orders
                </a>

                <a href="#" class="btn btn-primary btn-block mt-3">
                    Change Password
                </a>
            </div>
        </div>
    </div>
   

</Container>
</>)
};

export default About;
