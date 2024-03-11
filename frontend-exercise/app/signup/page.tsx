'use client'

import React from 'react'
import Form from '../components/form';
import Cookie from 'js-cookie';

const Signup = () => {
  const inputData = [
    { label: 'Name', name: 'name' },
    { label: 'Email', type: 'email', name: 'email' },
    { label: 'Password', type: 'password', name: 'password' },
  ];

  const getData = () => {
    try {
      
      const Data = Cookie.get('formData');

      if( Data !== undefined ){
      
      const formData = JSON.parse(Data);

      console.log('Data from cookie:', formData);
      
      }else{
        console.log('No items');
      }

    } catch (error) {
      console.error('Error');
    }
  };


  return (
    <div className='min-h-screen justify-center dark:bg-slate-800 ring-slate-900/5'>
      <div className='bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5'>
        <Form button_text='Sign Up' input_data_arr={inputData} />
        <button type='submit' onClick={getData} > click</button>
      </div>
    </div>
  )
}

export default Signup