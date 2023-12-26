import React from 'react';
// import '../App.css'
import FormLayout from './FormaLayoutReg';
import './Registration.css'

export const Registration: React.FC = () => (
 <div className='row'>
       <div className='column left' >
              <h1 style={{marginLeft:185}}>Register to EyeDesk</h1>
              <FormLayout/>
       </div>
       <div className='column right'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhMZxaknowE4DkGwaUx-kpyrcIGbVkJxTSA&usqp=CAU" alt="" />
       </div>
 </div>
);

// export default App;
