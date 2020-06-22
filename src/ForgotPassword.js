import React from 'react'
import { Link } from 'react-router-dom';
import useForm from 'react-hook-form';

function ForgotPassword(props) {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = res => {
      console.log('Password Data:', res);
    };
    return (
        <div>
            
        </div>
    )
}

export default ForgotPassword
