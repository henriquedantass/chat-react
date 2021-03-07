import styles from '../styles/components/ChatBot.module.css';
import { Formik, Field, Form } from 'formik';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';

export function ChatBotEnd() {

    const {name,email,data,adress} = useContext(UserContext);
  
    async function onSubmit () {
        await axios.post("https://60452e94c0194f00170bca91.mockapi.io/users", { name,email,address:adress, date:data})
        console.log(name,email,data,adress)

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
                    initialValues={{ media: "" }}
                    onSubmit={onSubmit}
                    render={({ values }) => (

                        <Form className={styles.chatBotMensageForm}>
                            <Field name="media" type="number"  className={styles.chatBotMensageField}  />
                            <button type="submit">📨</button>    
                        </Form>
                        
                    )}
                />
            </div>
        </div>
    )
}
