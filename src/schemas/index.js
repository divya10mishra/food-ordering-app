import * as Yup from 'yup'

export const singnUpSchema = Yup.object({
    email: Yup.string().email().required('Please enter your email'),
    password: Yup.string().min(6).required('Please enter the password')
})

export const registerSchema = Yup.object({
    email: Yup.string().email().required('Please enter your email'),
    password: Yup.string().min(6).required('Please enter the password'),
    confirmpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
})