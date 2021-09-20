import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Nav} from 'react-bootstrap';
import { useState } from "react";
import Swal from 'sweetalert2'
import './login.css';

const MyLogin = (props) =>{

   const [data , setData] = useState({emailId : "", password : ''});
   //const Swal = require('sweetalert2');

   return(
      <>
         <Form className="bg"/>
         <Form className ="login-Effect" >

            <Form.Label className="mt-3" size="lg">Login</Form.Label>
            <Form.Group className="shadow-sm mt-3 bg-white rounded" controlId="loginEmail">
               <Form.Control type="email" 
                  placeholder="Enter email"
                  value ={data.emailId} 
                  onChange ={e => setData({ ...data,emailId: e.target.value})} />
            </Form.Group>

            <Form.Group className="mt-3" controlId="loginPassword">
               <Form.Control type="password" placeholder="Enter Password"
                  value ={data.password} 
                  onChange ={e => setData({ ...data,password : e.target.value})} />
            </Form.Group>
                
            <Nav className="justify-content-end">
              <Nav.Link  href="/ForgotPassword">Forgot password?</Nav.Link>
            </Nav>
               
            <Button className="mt-3" type="button" onClick={() =>{
               if('admin' === data.emailId && 'admin' === data.password)
               {
                  props.history.push('/Profile',{
                     emailID : data.emailId
                  });
               }else{
                  Swal.fire({
                     icon: 'error',
                     title: 'Oops...',
                     text: 'Credentials Wrong!',
                     footer: '<a href="/ForgotPassword">do you went to change password?</a>'
                   })
                  }
            }}>Login</Button>

            <Nav.Item>
               <Nav.Link href="/Signup">Create a new account</Nav.Link>
            </Nav.Item>  

         </Form>  
      </>
   );

}
export default MyLogin