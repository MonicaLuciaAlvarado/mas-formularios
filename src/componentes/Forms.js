import React,{ useState } from 'react';

const Forms= ({inputs,setInputs}) => {
    const [titleNameError, SetTitleNameError]=useState("");
    const [titleLastError, SetTitleLastError]=useState("");
    const [titleEmailError, SetTitleEmailError]=useState("");
    const [titlePasswordError, SetTitlePasswordError]=useState("");
    const [titleConPasswordError, SetTitleConPasswordError]=useState("");
    const cambio = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
        if(e.target.name==='firstName'){
            if(e.target.value.length<2){
                SetTitleNameError("First Name should be at least 2 characters");
            }
            else{
                SetTitleNameError("");
            }
        }
        if(e.target.name==='lastName'){
            if(e.target.value.length<2){
                SetTitleLastError("Last Name should be at least 2 characters");
            }
            else{
                SetTitleLastError("");
            }
        }
        if(e.target.name==='email'){
            if(e.target.value.length<2){
                SetTitleEmailError("Email must be at least 2 characters");
            }
            else{
                SetTitleEmailError("");
            }
        }
        if(e.target.name==='password'){
            if(e.target.value.length<8){
                SetTitlePasswordError("Password must be at least 8 characters");
            }
            else{
                SetTitlePasswordError("");
            }
        }
        console.log(inputs);
        if(e.target.name==='conPassword'){
            if(inputs.password===e.target.value){
                SetTitleConPasswordError("");
            }
            else{
                SetTitleConPasswordError("Passwords must match");
            }
            console.log("password: "+inputs.password)
            console.log("Conpassword: "+e.target.value)
        }
    }
    return (
        <form>
        <div className='formulario'>


            <div className='paquete'>
                <div className='entrada'>
                    <label htmlFor='firstName'>First Name: </label>
                    <input type="text" onChange={cambio} name='firstName'/>
                </div>
                {
                titleNameError?
                <p className="alerta">{titleNameError}</p>:''
                }
            </div>


            <div className='paquete'>
                <div className='entrada'>
                    <label htmlFor='lastName'>Last Name: </label>
                    <input type="text" onChange={cambio} name='lastName'/>
                </div>
                {
                titleLastError?
                <p className="alerta">{titleLastError}</p>:''
                }
            </div>


            <div className='paquete'>
                <div className='entrada'>
                    <label htmlFor='email'>Email: </label>
                    <input type="email" onChange={cambio} name='email'/>
                </div>
                {
                titleEmailError?
                <p className="alerta">{titleEmailError}</p>:''
                }
            </div>


            <div className='paquete2'>
                <div className='entrada'>
                    <label htmlFor='password'>Password: </label>
                    <input type="password" onChange={cambio} name='password'/>
                </div>
                {
                titlePasswordError?
                <p className="alerta">{titlePasswordError}</p>:''
                }
                {
                titleConPasswordError?
                <p className="alerta">{titleConPasswordError}</p>:''
                }
            </div>

            <div className='paquete'>
                <div className='entrada'>
                    <label htmlFor='conPassword'>Confirm Password: </label>
                    <input type="password" onChange={cambio} name='conPassword'/>
                </div>
            </div>
        </div>
        </form>
    );
}

export default Forms;