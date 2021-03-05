import styles from '../styles/components/ChatBot.module.css';
import {Formik, Field, Form} from 'formik';
import { useState, useContext } from 'react';
import {UserContext} from '../contexts/UserContext';

export function ChatBotName () {

    const [name, setName] = useState();

    const {setUserName , nextChatBot } = useContext(UserContext);

    function onSubmit (values, action) {

        setUserName (name);
    }

    return (
        
        <div className = {styles.chatContainer}>
            <div className = {styles.chatBotMensage}>
                <img src="icons/logo.svg" alt="logo"/>
                <span>
                    Olá, eu sou o chat de testes da Workalove,
                    tudo bem?   <br/> Para
                    começarmos, preciso
                    saber seu nome.
                </span>
            </div>

            <div className = {styles.chatUserMensage}>
                <Formik
                    initialValues= {{}}
                    onSubmit = {onSubmit} 
                    render = {({values}) => (

                        <Form className = {styles.chatBotMensageForm}>
                        <Field 
                        name="name" 
                        type="text" 
                        placeholder= "Digite seu nome" 
                        className = {styles.chatBotMensageField} 
                        onChange= {(event) => { setName(event.target.value) }}
                        value = {name}
                        />

                        <button type="submit" onClick={ nextChatBot }>  ✅ </button>
                        </Form>        
                    )}

                 /> 
              </div>
        </div>
    ) 

}