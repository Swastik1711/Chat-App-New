import React from 'react'
import InputField from '../../components/InputField'
import { Button } from '@mui/material'

const Login = () => {
  return (
      <div className='signupBox'>
    <form>
      <h2>Log In</h2>
        <InputField label={"Username"}/>
        <InputField label={"Password"} isPassword={true}/>
        <div style={{width:"320px",display:"flex",alignItems:"center", justifyContent:"space-between", fontSize:"13px",height:"40px"}}>
            <div className='rememberMe'>
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox">Remember me</label>
            </div>
            <p style={{color:"#1565C0"}}>Forget Password?</p>   
        </div>
        <Button variant='contained' size='large' sx={{ marginTop: "0px",marginBottom: "5px", height: '50px', width: '320px' }}>Log In</Button>
        <div  style={{width:"320px" ,display:"flex",justifyContent:"flex-start", fontSize:"13px"}}>
          <p>Don't have an account? <span style={{color:"#1565C0"}}>Sign up</span></p>
        </div>
      </form>
    </div>
  )
}

export default Login