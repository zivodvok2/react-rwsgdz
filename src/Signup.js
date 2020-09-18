import React,{Component,useRef} from 'react';
import {Button} from 'react-bootstrap';
import { Formik, Form, useField } from 'formik';
import styled from '@emotion/styled';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Signupval from "./Signupval";

export default function signup(){
  const inputRef=useRef(null);
   const formik = useFormik({
     initialValues: {
      firstName: '',
       email: '',
       PASSWORD: '',
     },
     Signupval,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

  return(
    <div>
    <h1> WELCOME TO SOMA </h1>
    <h2> SIGNUP TO CONTINUE </h2>

<form name="sign" onSubmit={formik.handleSubmit} className='sign' >

<p> ENTER YOUR  FIRST NAME:</p>
<input ref={inputRef} 
type="text"
id="firstName"
name="firstName"
onChange={formik.handleChange}
onBlur={formik.handleBlur}
/>
{formik.touched.firstName && formik.errors.firstName ? ( <div>{formik.errors.firstName}</div>) : null}
<br /><br />

<p> ENTER YOUR LAST NAME:</p>
<label htmlFor="lastName"></label>
<input ref={inputRef} 
id="lastName"
name="lastName"
type="text"
onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.lastName} />
{formik.touched.lastName && formik.errors.lastName ? (
 <div>{formik.errors.lastName}</div>
 ) : null}
<br /><br />

<p>ENTER YOUR EMAIL ADDRESS: </p>
<input ref={inputRef}
id="email"
name="email"
type="email"
placeholder="email"
onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.email}
 />
{formik.touched.email && formik.errors.email ? ( <div>{formik.errors.email}</div>
) : null}
<br /> <br />

<p> ENTER YOUR PASSWORD: </p>
<input ref={inputRef} 
type="password" 
id="PASSWORD"
name="PASSWORD"
onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.PASSWORD}
placeholder="password" />
<br />< br />

<p>CONFIRM YOUR PASSWORD :</p>
<input ref={inputRef} 
type="password" 
placeholder="Confirm password" 
id="CONFIRM"
name="CONFIRM"
type="password"
onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.CONFIRM}/>
<br /><br />
<br />

<Button variant="primary"
 size="lg"
 type="submit"
 block>    SIGNUP
  </Button>
</ form>
    </div>
  );
}

 const Signupval= values => {
   const errors = {};
   if (!values.firstName) {
     errors.firstName = 'Required';
   } else if (values.firstName.length > 15) {
     errors.firstName = 'Must be 15 characters or less';
   }
 
   if (!values.lastName) {
     errors.lastName = 'Required';
   } else if (values.lastName.length > 20) {
     errors.lastName = 'Must be 20 characters or less';
   }
 
   if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
 
   return errors;
 };
   