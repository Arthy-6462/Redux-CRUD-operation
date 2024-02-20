import * as Yup from 'yup';
export const signUpSchema=Yup.object({
    name:Yup.string().min(2).max(10).required('Please enter your name'),
    email:Yup.string().email().required("please enter email"),
    // password:Yup.string().min(4).matches(/^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%#?&]/,'password must contain atleast one uppercase,one number,one special character').required('please enter password'),
    password:Yup.string().min(4).max(10).required('please enter password'),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'),null],'password must match')
})