import styles from '../styles/components/ChatBot.module.css';
import {Formik, Field, Form} from 'formik';
import { useState, useContext } from 'react';
import {UserContext} from '../contexts/UserContext';
import * as yup from 'Yup';

export function ChatBotName () {

   
    const [name, setName] = useState();

    const {setUserName , nextChatBot } = useContext(UserContext);

    

    function onSubmit () {
        console.log(name)
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
                    
                    initialValues= {{name: ''}}
                    onSubmit = {onSubmit} 
                    render = {({}) => (

                        <Form className = {styles.chatBotMensageForm}>
                        <Field 
                        name="name" 
                        type="text" 
                        required
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