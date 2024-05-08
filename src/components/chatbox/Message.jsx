import React from 'react'

const Message = ({isSender, message}) => {
  return (
      <div className={`messagebox  ${isSender ? "sender":"receiver"}`}>
          <p>{message}</p>
          <span className='messagebox__time'>23:44</span>
      </div>
  )
}

export default Message