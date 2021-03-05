import styles from '../styles/components/ChatBot.module.css'
import {Formik, Field, Form} from 'formik';
import { useState, useContext } from 'react';
import {UserContext} from '../contexts/UserContext';

export function ChatBotAdress () {

    const {name} = useContext(UserContext);

    const {nextChatBotAdress } = useContext(UserContext);

    function onSubmit (values, action) {
        console.log('Submit', values)
        
    }



    return (
        
        <div className = {styles.chatContainer}>

            <div className = {styles.chatBotMensage}>
                <img src="icons/logo.svg" alt="logo"/>
                <span>
                   Que satisfação{name && ` ${name}`}. Agora que sei o seu nome,<br/> qual cidade e estado que você mora?
                </span>
            </div>

            <div className = {styles.chatUserMensage}>
                <Formik
                    initialValues= {{adress:""}}
                    onSubmit = {onSubmit} 
                    render = {({values}) => (

                        <Form className = {styles.chatBotMensageForm}>
                        <Field name="adress" type="text" placeholder= "Cidade e estado" className = {styles.chatBotMensageField}/>
                        <button type="submit" onClick={nextChatBotAdress} >  ✅ </button>
                        </Form>        
                    )}

                 /> 

               
            </div>

        </div>

    ) 

}
