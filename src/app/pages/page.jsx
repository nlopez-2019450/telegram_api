

'use client'
import React, { useEffect } from 'react';


const telegram = () =>{

    const sendM = async() =>{
        try {
            const response = await fetch('https://api.telegram.org/bot6141496256:AAEC6NaZuk8OCe4tg1NOVajVrZIFZoqzERE/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: '1250269533',
                text: 'Entonces esto es lo que manda el mensaje a la otra persona.',
            }),
            })
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const getInfo = async() =>{
        try {
            const response = await fetch('https://api.telegram.org/bot6141496256:AAEC6NaZuk8OCe4tg1NOVajVrZIFZoqzERE/getUpdates', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: '1250269533',
                
            }),
            })
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }




    
    
    
    return(
        <>
            <span>HOLA PRRAS</span> <br />
            <button onClick={sendM}>EL BOTON Para mandar info</button> <br />
            <button onClick={getInfo}>MOSTRAR LA INFO</button> <br />
        </>
    )
}

export default telegram