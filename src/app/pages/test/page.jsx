'use client'

import axios from 'axios';
import { useState } from "react"

const Test = () =>{

    const [names, setNames] = useState('') 
    const [company, setCompany] = useState('')
    const [jobT, setJobT] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const seeForm = () =>{
        console.log('Supuetamente estos son los nombres', names)
        console.log('Supuetamente estos son los nombres', company)
        console.log('Supuetamente estos son los nombres', jobT)
        console.log('Supuetamente estos son los nombres', phone)
        console.log('Supuetamente estos son los nombres', email)
        console.log('Supuetamente estos son los nombres', message)

        const text = `*Nombres:* ${names} \n*Compañía:* ${company} \n*Cargo:* ${jobT} \n*Teléfono:* ${phone} \n*Correo:* ${email} \n*Mensaje:* ${message}`
        // text.parse_mode = 'markdown'
        return text
    }

    const sendM = async() =>{
        try {
            const response = await fetch('https://api.telegram.org/bot6141496256:AAEC6NaZuk8OCe4tg1NOVajVrZIFZoqzERE/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: '-4160581262',
                text: seeForm(),
                parse_mode: 'markdown',
            }),
            })
            const data = await response.json();
            // console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return(
        <>
            <div className="mx-5  my-5">
                <span className="mr-5">NOMBRE</span>
                <input className='text-black' onChange={e => setNames(e.target.value)}/> <br /> <br />
                <span className="mr-5">Compania</span>
                <input className='text-black' onChange={e => setCompany(e.target.value)}/> <br /> <br />
                <span className="mr-5">Cargo</span>
                <input className='text-black' onChange={e => setJobT(e.target.value)}/> <br /> <br />
                <span className="mr-5">Celular</span>
                <input className='text-black' onChange={e => setPhone(e.target.value)}/> <br /> <br />
                <span className="mr-5">email</span>
                <input className='text-black' onChange={e => setEmail(e.target.value)}/> <br /> <br />
                <span className="mr-5">mensaje</span>
                <input className='text-black' onChange={e => setMessage(e.target.value)}/> <br /> <br />
                <button className='mx-3' onClick={sendM}>el prro boton</button> <br />
            </div>
        </>
    )
}

export default Test