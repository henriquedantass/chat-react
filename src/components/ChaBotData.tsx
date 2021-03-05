import styles from '../styles/components/ChatBot.module.css';
import {Formik, Field, Form} from 'formik';
import { useState, useContext } from 'react';
import {UserContext} from '../contexts/UserContext';

export function ChatBotData () {

    const { nextChatBotDate } = useContext(UserContext);

    function onSubmit (values, action) {
        console.log('Submit', values)
        
    }



    return (

        <div className = {styles.chatContainer}>
            <div className = {styles.chatBotMensage}>
                <img src="icons/logo.svg" alt="logo"/>
                <span>
                     Legal, agora que sabemos
                    sua cidade e estado.
                    Quando foi que você
                    nasceu?
                </span>
            </div>

            <div className = {styles.chatUserMensage}>
                <Formik
                    initialValues= {{date:""}}
                    onSubmit = {onSubmit} 
                    render = {({values}) => (

                        <Form className = {styles.chatBotMensageForm}>
                        <Field name="date" type="date" placeholder= "dia/mes/ano" className = {styles.chatBotMensageField}/>
                        <button type="submit" onClick={nextChatBotDate}>  ✅ </button>
                        </Form>        
                    )}

                 /> 

               
            </div>

        </div>

    ) 

}