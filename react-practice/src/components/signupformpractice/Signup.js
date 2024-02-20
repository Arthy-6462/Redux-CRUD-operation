import React from 'react';
import { signUpSchema } from './Signupvalidation';
import {Formik, useFormik} from 'formik';
const initialValues={
  name:'',
  email:'',
  password:'',
  confirm_password:'',
}

const Signup = () => {
  const{values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(values,action)=>{
      console.log(values)
      localStorage.setItem('UserDetails',JSON.stringify(values))
      action.resetForm()
    }
  });
  return (
    <div className='col-lg-6 p-3 border rounded m-3'>
    
  <form onSubmit={handleSubmit} action='#'>
    <div className='text-center'>Signup form</div>
  <div className="form-group">
    <label for="name">Name</label>
    <input type="text" className="form-control" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder='enter name' id="name" />
  {errors.name&& touched.name? <p style={{color:'red'}}>{errors.name}</p>:null}
  </div>
  <div className="form-group">
    <label for="email">Email address</label>
    <input type="email" className="form-control"value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='enter email' id="email" aria-describedby="emailHelp"/>
    {errors.email && touched.email? <p style={{color:'red'}}>{errors.email}</p>:null}
 
  </div>
  <div className="form-group">
    <label for="password">Password</label>
    <input type="password" className="form-control" value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder='enter password' id="password"/>
    {errors.password && touched.password? <p style={{color:'red'}}>{errors.password}</p>:null}
  
  </div>
  <div className="form-group">
    <label for="confirm_pasword">Confirm password</label>
    <input type="password" className="form-control" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} placeholder='enter confirmpassword' id="confirm_password" />
    {errors.confirm_password && touched.confirm_password? <p style={{color:'red'}}>{errors.confirm_password}</p>:null}
  
  </div>
  <button type="submit" className="btn btn-primary mt-2">Submit</button>
</form>
</div>
  )
}

export default Signup;