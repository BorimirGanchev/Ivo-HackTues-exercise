'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Cookie from 'js-cookie';

interface InputData {
  label: string;
  type?: string;
  name: string;
}

interface FormData {
  [key: string]: string;
}

interface FormProps {
  button_text: string;
  input_data_arr: InputData[];
}

function Form({ button_text, input_data_arr }: FormProps) {
    const [formData, setFormData] = useState<FormData>({});
    const [isFormEmpty, setIsFormEmpty] = useState(false);
    
    const handleInputChange = (inputName: string, value: string) => {
      setFormData({
        ...formData,
        [inputName]: value,
      });
    };
  
    const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
    
      Object.values(formData).some(value => value.trim().length == 0) ? setIsFormEmpty(true) : setIsFormEmpty(false);
      console.log(isFormEmpty);
    
      if (isFormEmpty) {
        console.log("At least one form field is empty");
      } else {
        console.log("Form is not empty");
        const formDataString = JSON.stringify(formData);
        Cookie.set('formData', formDataString);
        console.log('Form submitted with data:', Object.entries(formData));
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
        {input_data_arr.map((input, index) => (
          <div key={index} className='relative z-0 w-full mb-5 mt-5 group'>
            <input
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              type={input.type || 'text'}
              value={formData[input.name] || ''}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange(input.name, e.target.value)  
              }
            />
            <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>{input.label}</label>
          </div>
        ))}

        {isFormEmpty && (
        <div className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400' role='alert'>
          <span className='font-medium'>Error!</span> Please fill the empty forms.
        </div>
      )}
        <button type="submit" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>{button_text}</button>
      </form>
    );
  }
  
export default Form;