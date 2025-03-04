import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'


const Login = ({login}) => {

    const navigate = useNavigate()

    const validationSchema = Yup.object().shape({
		username: Yup.string().required('Username is required'),
		password: Yup.string().required('Password is required'),
	})

	const initialValues = {
		username: '',
		password: '',
	}


  return (
    <div>
        <h2>Login</h2>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={values => {
					login(values)
                    navigate("/profile")
				}}
			>
				<Form>
					<div>
						<Field type='text' name='username' placeholder='Username' />
						<ErrorMessage name='username' component='div' className='error' />
					</div>
					<div>
						<Field type='password' name='password' placeholder='Password' />
						<ErrorMessage name='password' component='div' className='error' />
					</div>
					<button type='submit'>Login</button>
				</Form>
			</Formik>
    </div>
  )
}

export default Login