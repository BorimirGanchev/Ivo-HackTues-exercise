import React from 'react';
import Form from '../components/form';

const Login = () => {
  const inputData = [
    { label: 'Name', name: 'name' },
    { label: 'Email', type: 'email', name: 'email' },
    { label: 'Password', type: 'password', name: 'password' },
  ];

  return (
    <div className='min-h-screen justify-center dark:bg-slate-800 ring-slate-900/5'>
      <div className='bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5'>
        <Form button_text='Log in' input_data_arr={inputData} />
      </div>
    </div>
  );
};

export default Login;
