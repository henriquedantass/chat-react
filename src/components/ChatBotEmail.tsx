import styles from '../styles/components/ChatBot.module.css'
import {Formik, Field, Form} from 'formik';
import { useState, useContext } from 'react';
import {UserContext} from '../contexts/UserContext';



export function ChatBotEmail () {

 
    function onSubmit (values, action) {
        console.log('Submit', values)
        
    }

    const {nextChatBotEmail } = useContext(UserContext);


    return (

        <div className = {styles.chatContainer}>
            <div className = {styles.chatBotMensage}>
                <img src="icons/logo.svg" alt="logo"/>
                <span>
                  Agora me fala teu e-mail, por gentiliza.
                </span>
            </div>

            <div className = {styles.chatUserMensage}>
                <Formik
                    initialValues = {{email:""}}            
                    onSubmit = {onSubmit} 
                    render = {({values}) => (

                        <Form className = {styles.chatBotMensageForm}>
                        <Field name="email" type="email" placeholder= "Digite seu email" className = {styles.chatBotMensageField}/>
                        <button type="submit" onClick={nextChatBotEmail}>  ✅ </button>
                  
                        </Form>        
                    )}

                 /> 

               
            </div>

        </div>

    ) 

}
