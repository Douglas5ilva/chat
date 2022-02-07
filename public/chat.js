

const socket = io('http://localhost:3000/')

let us = null

socket.on('update_messages',(messages)=>{
    updateMessagesOnScreen(messages)
})

function updateMessagesOnScreen(messages){
    const div_messages = document.querySelector('#messages');

    let list_messages = '<ul>'
    messages.forEach(message => {
        list_messages +=
                        `<li style="color: green; font-size: 36px;">${message.user}</li>
                        <li style="color: white; margin-bottom: 10px;">${message.msg}</li>`
    });
    list_messages += '</ul>'

    div_messages.innerHTML = list_messages
}


document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('#message_form')
    form.addEventListener('submit', (e)=>{
        e.preventDefault()

        

        let ms = document.querySelector('#message').value
        document.querySelector('#message').value = ''
        socket.emit('new_message', {user: us, msg: ms})
        console.log(ms)
    })

    let us = prompt('seu nome')

    
})

