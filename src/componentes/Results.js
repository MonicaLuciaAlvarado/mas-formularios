import React from 'react';
const Results=(props)=>{
    const {firstName, lastName,email,password,conPassword}=props.data;
    return(
        <div className='data'>
        <h1>Your Form Data</h1>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {conPassword}</p>
        </div>
    )
}
export default Results;