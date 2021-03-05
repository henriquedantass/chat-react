import styles from '../styles/components/ChatBot.module.css'
import {Formik, Field, Form} from 'formik';
import * as yup from 'yup';


export function ChatBotEmail () {

 
    function onSubmit (values, action) {
        console.log('Submit', values)
        
    }

    const emailSchema = yup.object().shape({

        email: yup
            .string()
            .email()
            .required(),

    })


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
                    validationSchema = {emailSchema}
                    
                    onSubmit = {onSubmit} 
                    render = {({values}) => (

                        <Form className = {styles.chatBotMensageForm}>
                        <Field name="email" type="email" placeholder= "Digite seu email" className = {styles.chatBotMensageField}/>
                        <button type="submit">  ✅ </button>
                  
                        </Form>        
                    )}

                 /> 

               
            </div>

        </div>

    ) 

}
