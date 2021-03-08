import styles from '../styles/components/ChatBot.module.css'
import {Formik, Field, Form} from 'formik';
import { useContext, useState } from 'react';
import {UserContext} from '../contexts/UserContext';


export function ChatBotAdress () {

    const {name} = useContext(UserContext);
    const [adress, setAdress] = useState("");
    const { setUserAdress , nextChatBotAdress } = useContext(UserContext);

    function onSubmit () {
       setUserAdress(adress);
       nextChatBotAdress();
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
                        <Field 

                        value= {adress}
                        name="adress" 
                        placeholder= "Cidade e estado"
                        onChange= {(event) => { setAdress(event.target.value) }}
                        className = {styles.chatBotMensageField}
                        />

                        <button type="submit" >  ✅ </button>

                        </Form>        
                    )}

                 /> 

               
            </div>

        </div>

    ) 

}
