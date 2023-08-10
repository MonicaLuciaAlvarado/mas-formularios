import './App.css';
import React,{ useState } from 'react';
import Forms from './componentes/Forms';
import Results from './componentes/Results';

const App=(props) => {
  const[state, setState]=useState(
    {
      firstName:"", lastName:"", email:"",password:"",conPassword:""
    }
    );
  return(
    <div className='App'>
    <Forms inputs={state} setInputs={setState}/>
    <Results data={state}/>
    </div>
  )
}

export default App;

