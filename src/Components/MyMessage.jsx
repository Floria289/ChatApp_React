import React from 'react'

const MyMessage = ({ message }) => {
    if(message?.attachments?.length > 0) {
        return (
            <img 
                src={message.attachments[0].file}
                alt="message-attachment" 
                className='message-image'
                style={{ float: 'right' }}
            />
        )
    }
  return (
    <div className='message-row' style={{marginLeft: '600px'}}>
        <div className='message' style={{marginRight: '4px', color: 'white', backgroundColor: '#3B2A50' }}>
            {message.text}
        </div>

        <div 
            className='message-avatar'
            style={{backgroundImage: `url(${message?.sender?.avatar})`}}
        />
    </div>
  )
}

export default MyMessage