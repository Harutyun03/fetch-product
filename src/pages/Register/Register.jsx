import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import './Register.css'


const Register = ({registerUser,users}) => {

    const navigate = useNavigate()

    const validationSchema = Yup.object().shape({
		username: Yup.string().required('Username is required'),
		email: Yup.string().email('Invalid email').required('Email is required'),
		password: Yup.string()
			.min(6, 'Password min 6 characters')
			.required('Password is required'),
	})

	const initialValues = {
		username: '',
		email: '',
		password: '',
	}


  return (
    <div className='register-box'>
        <h1 className='register-h1'>Register</h1>
        <Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={values => {
					registerUser(values)
                    navigate("/profile", {state : users})
				}}
			>
				<Form>
					<div>
						<Field type='text' name='username' placeholder='Username' />
						<ErrorMessage name='username' component='div' className='error' />
					</div>
					<div>
						<Field type='email' name='email' placeholder='Email' />
						<ErrorMessage name='email' component='div' className='error' />
					</div>
					<div>
						<Field type='password' name='password' placeholder='Password' />
						<ErrorMessage name='password' component='div' className='error' />
					</div>
					<button type='submit' className='btn'>Register</button>
				</Form>
			</Formik>

    </div>

  )
}

export default Register