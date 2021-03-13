import styles from '../styles/components/ChatBot.module.css';
import {Formik, Field, Form,} from 'formik';
import { useState, useContext } from 'react';
import {UserContext} from '../contexts/UserContext';
import * as yup from 'yup';

export function ChatBotName () {

    const schema = yup.string().required().matches(new RegExp("'/^[A-Za-z][A-Za-z'-]+([\ A-Za-z][A-Za-z'-]+)'"));

    const [name, setName] = useState();

    const {setUserName , nextChatBot } = useContext(UserContext);

    

    function onSubmit () {

        setUserName(name);
        nextChatBot();
        
    }

    return (
        
        <div className = {styles.chatContainer}>
            <div className = {styles.chatBotMensage}>
                <img src="icons/logo.svg" alt="logo"/>
                <span>
                    Olá, eu sou o chat de testes,
                    tudo bem?<br/> Para
                    começarmos, preciso
                    saber seu nome.
                </span>
            </div>

            <div className = {styles.chatUserMensage}>
            <Formik

                    validationSchema={schema}
                    initialValues= {{name: ''}}
                    onSubmit = {onSubmit} 

                    render = {({errors, touched}) => (

                        <Form className = {styles.chatBotMensageForm}>
                        <Field 

                        name="name" 
                        type="text" 
                        placeholder= "Digite seu nome" 
                        className = {styles.chatBotMensageField} 
                        onChange= {(event) => { setName(event.target.value) }}
                        value = {name}

                        />
                            {errors.name && touched.name ? <div>{errors.name}</div> : null}

                        <button type="submit">  ✅ </button>
                        </Form>        
                    )}

                 /> 
              </div>
        </div>
    ) 

}
