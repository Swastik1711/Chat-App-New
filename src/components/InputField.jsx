import React, { useState } from 'react'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const InputField = ({ label, isPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
      <div className='inputField'>
        <input placeholder={label} type={isPassword && !showPassword ? "password" : "text"} />
        {isPassword && (
        <div className='visibilityIcon' onClick={handleTogglePassword}>
          {showPassword ? (
            <VisibilityOutlinedIcon />
          ) : (
            <VisibilityOffOutlinedIcon />
          )}
        </div>
        )}
      </div>
  )
}

export default InputField