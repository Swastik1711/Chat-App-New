import React, { useState } from 'react'
import InputField from '../../components/InputField'
import Button from '@mui/material/Button';

const Signup = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  return (
    
  <div className='signupBox'>
    <form>
      <h2>Create Account</h2>
        <InputField label={"Full Name"}/>
        <InputField label={"Username"}/>
        <InputField label={"Create Password"} isPassword={true}/>
        <InputField label={"Confirm Password"} isPassword={true}/>
        <div className="genderDateInfobox">
          <select>
            <option value="" disabled selected hidden>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            placeholder="Date of Birth"
            pattern="\d{0,2}/\d{0,2}/\d{0,4}"
            inputMode="numeric"
            type={showDatePicker ? 'date' : 'text'}
            onFocus={() => setShowDatePicker(true)}
            onBlur={() => setShowDatePicker(false)}
            id="date" />
        </div>
        <Button variant='contained' size='large' sx={{ marginTop: "15px",marginBottom: "5px", height: '50px', width: '320px' }}>Sign Up</Button>
        <div  style={{width:"320px" ,display:"flex",justifyContent:"flex-start", fontSize:"13px", color:"#1565C0"}}>
          <p>Already have an account!</p>
        </div>
      </form>
    </div>
  )
}

export default Signup