import React from 'react';
import './Login.css'
import FormLayout from './FormLayoutLogin';


const App: React.FC = () => (
 <div className='row'>
       <div className='column left' >
              <h1 style={{marginLeft:185}}>Sign in to EyeDesk</h1>
              <FormLayout/>
       </div>
       <div className='column right'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhMZxaknowE4DkGwaUx-kpyrcIGbVkJxTSA&usqp=CAU" alt="" />
       </div>
 </div>
);

export default App;
