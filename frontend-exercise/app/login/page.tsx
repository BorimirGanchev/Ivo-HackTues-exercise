import React from 'react'
import Form from '../components/form';

const Login = () => {
  const inputData = [
    { label: 'Name', name: 'name' },
    { label: 'Email', type: 'email', name: 'email' },
    { label: 'Password', type: 'password', name: 'password' },
  ];

  return (
    <Form button_text='Log in' input_data_arr={inputData} />
  )
}

export default Login