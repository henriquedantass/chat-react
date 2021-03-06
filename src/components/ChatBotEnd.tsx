import styles from '../styles/components/ChatBot.module.css';
import { Formik, Field, Form } from 'formik';


export function ChatBotEnd() {

    function onSubmit (values, action) {
        console.log(values)
    }

    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatBotMensage}>
                <img src="icons/logo.svg" alt="logo" />
                <span>
                Você finalizou o teste Faça
                uma avaliação sobre o
                processo que realizou até
                chegar aqui. Nós
                agradecemos!  <br/>
                <br/>
                1 - ruim <br/>
                2 - regular <br/>
                3 - bom <br/>
                4 - ótimo <br/> 
                5 - sensacional                           
                </span>
            </div>

            <div className={styles.chatUserMensage}>
                <Formik
                    initialValues={{ data: "" }}
                    onSubmit={onSubmit}
                    render={({ values }) => (

                        <Form className={styles.chatBotMensageForm}>
                            <Field name="data" type="number"  className={styles.chatBotMensageField}  maxlength="1" />
                            <button type="submit">📨</button>    
                        </Form>
                        
                    )}
                />
            </div>
        </div>
    )
}
