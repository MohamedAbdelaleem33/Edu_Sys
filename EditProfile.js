import {useNavigate} from "react-router-dom";
import "./Profile.css";
import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon,MDBBtn, MDBInput  } from 'mdb-react-ui-kit';


export default function EditProfile() {
    return (
      <body >
      <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
        <MDBContainer className="py-5 h-100" >
          <MDBRow className="justify-content-center align-items-center h-100 ">
            <MDBCol lg="6" className="mb-4 mb-lg-0 " style={{width:"70%",height:"100%"}}>
              <MDBCard className="mb-3" style={{ borderRadius: '.5rem' ,height:"60%"}} >
                <MDBRow className="g-0" style={{height:"100%"}}>
                  <MDBCol md="4" className="gradient-custom text-center text-white"
                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                    <MDBCardImage src="https://static.vecteezy.com/system/resources/previews/008/442/086/large_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                      alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                    <MDBTypography tag="h5">Edit Profile</MDBTypography>
                    
                    <MDBCol>
                    <MDBBtn  color='light' style={{marginTop:20}} href="/profile">
                       Save
                      </MDBBtn>
                      </MDBCol>
                      <MDBBtn  color='light' style={{marginTop:20}} href="/profile">
                       Delete Profile
                      </MDBBtn>
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                   
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">First name</MDBTypography>
                          <MDBInput ></MDBInput>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Last name</MDBTypography>
                          <MDBInput ></MDBInput>
                        </MDBCol>
                      </MDBRow>
  
                      
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBInput ></MDBInput>
                        </MDBCol>
                      </MDBRow>
                      
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Username</MDBTypography>
                          <MDBInput ></MDBInput>
                        </MDBCol>
                        </MDBRow>

                        <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Password</MDBTypography>
                          <MDBInput type="password" ></MDBInput>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Confirm Password</MDBTypography>
                          <MDBInput type="password" ></MDBInput>
                        </MDBCol>
                        </MDBRow>
                      
                     
  
                      <div className="d-flex justify-content-start">
                        <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                        <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                        <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                      </div>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      </body>
    );
  }