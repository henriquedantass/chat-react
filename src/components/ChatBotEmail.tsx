import styles from '../styles/components/ChatBot.module.css'
import {Formik, Field, Form} from 'formik';
import { useContext, useState } from 'react';
import {UserContext} from '../contexts/UserContext';



export function ChatBotEmail () {

    
    const [email, setEmail] = useState("");

    const { setUserEmail , nextChatBotEmail } = useContext(UserContext);

    function onSubmit () {
       
        setUserEmail(email)
        console.log(email)
        
    }

  


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
                        <Field 
                        name="email" 
                        type="email" 
                        placeholder= "Digite seu email" 
                        onChange= {(event) => { setEmail(event.target.value) }}
                        value={email}
                        className = {styles.chatBotMensageField}/>
                        <button type="submit" onClick={nextChatBotEmail}>  ✅ </button>
                  
                        </Form>        
                    )}

                 /> 

               
            </div>

        </div>

    ) 

}
