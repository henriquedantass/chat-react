import styles from '../styles/components/ChatBot.module.css';
import {Formik, Field, Form} from 'formik';

function onSubmit (values, action) {
    console.log('Submit', values)
    
}

export function ChatBotTeste () {

    <Formik
        initialValues= {{name:""}}
        onSubmit = {onSubmit} >
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
        </div>
        
        <Form className = {styles.chatBotMensageForm}>
        <Field name="name" type="text" placeholder= "Digite seu nome" className = {styles.chatBotMensageField}/>
        <button type="submit">  ✅ </button>
        </Form> 


    </Formik>


}