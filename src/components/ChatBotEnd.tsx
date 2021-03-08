import styles from '../styles/components/ChatBot.module.css';
import { Formik, Field, Form } from 'formik';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';

export function ChatBotEnd() {

    const [avaliation, setAvaliation] = useState("");
    const {name,email,data,adress,setUserAvaliation} = useContext(UserContext);
    
  
    

    async function onSubmit () {
        
        setUserAvaliation(avaliation)
        await axios.post("https://60452e94c0194f00170bca91.mockapi.io/users", { name,email,address:adress, date:data,avaliation:avaliation})
       

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
                            <Field 
                            name="avaliation" 
                            type="number"
                            onChange= {(event) => { setAvaliation(event.target.value) }}
                            value={avaliation}
                            className={styles.chatBotMensageField}  />
                            <button type="submit">📨</button>    
                        </Form>
                        
                    )}
                />
            </div>
        </div>
    )
}
