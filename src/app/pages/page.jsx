'use client'
import axios from 'axios';
import React, { useState, useEffect } from 'react';


const telegram = () =>{

    const [datos, setDatos] = useState([])
    const [mensaje, setMensaje] = useState('')

    const getChat = async() =>{
        try {
            axios({
                method: 'get',
                url: 'https://api.telegram.org/bot6141496256:AAEC6NaZuk8OCe4tg1NOVajVrZIFZoqzERE/getChat',
                responseType: 'json',
                params: {
                    chat_id: '1250269533'
                }
            }).then(function (response){
                console.log('ESta es la respuesta', response)
            })
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    const sendM = async() =>{
        try {
            const response = await fetch('https://api.telegram.org/bot6141496256:AAEC6NaZuk8OCe4tg1NOVajVrZIFZoqzERE/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: '1250269533',
                text: mensaje,
            }),
            })
            const data = await response.json();
            // console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const getMessageUser = async() =>{
        try {
            axios({
                method: 'get',
                url: 'https://api.telegram.org/bot6141496256:AAEC6NaZuk8OCe4tg1NOVajVrZIFZoqzERE/getUpdates',
                responseType: 'json'
            }).then(function (response){
                // console.log('Prueba de getInfo----->', response)

                const infoArray = response.data.result
                // console.log('Contenedor de los Arrays xxxxxxxxxxxx>', infoArray)
                
                const infoMessages = infoArray.map((item)=>{
                    return item.message
                })
                // console.log('Los Array Mapeados Por El Message ////////////////>', infoMessages)

                const onlyMessage = infoMessages.map((item)=>{
                    return item.text
                    
                })
                setDatos(infoMessages)
                // console.log('QUIERO VER QUE RETORNA EL ITEM !!!!!!!!!!!!!!!!!!!!!>', onlyMessage)
                
            })
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(()=>{
        getMessageUser()
    },[])

    return(
        <>
            <span>HOLA PRRAS</span> <br /><br />

            <button onClick={getChat}>Info del chat</button>

            <div className='flex my-5'>
                <input className='text-black' value={mensaje} onChange={e => setMensaje(e.target.value)}/>
                <button className='mx-3' onClick={()=>{sendM(); getMessageUser()}}>EL BOTON Para mandar info</button> <br />
            </div>
            
            <div className='flex my-5'>
                <button className='' onClick={getMessageUser}>MOSTRAR LA INFO</button> <br />
            </div>

            <div className='flex'>
                <div className='w-1/2 border-2 '>
                    <span className='border-b-2 border-b-red-200 mb-5 flex justify-center'>Mensajes del Usuario al BOT</span>
                    <div className='flex justify-start'>
                        <ul>
                            <li>ESTA SHIT</li>
                            {datos.map(msg => <li key={msg.message_id}>{msg.text}</li>)}
                        </ul>
                    </div>
                </div>
                <div className='w-1/2 border-2'>
                    <span className='border-b-2 border-b-red-200 mb-5  flex justify-center'>Mensajes del BOT</span>
                </div>
            </div>
        </>
    )
}

export default telegram