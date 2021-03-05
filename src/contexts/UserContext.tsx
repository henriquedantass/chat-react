import { createContext, ReactNode, useState } from 'react';
import { string } from 'yup/lib/locale';
import { ChatBotData } from '../components/ChaBotData';
import { ChatBotAdress } from '../components/ChatBotAddres';
import { ChatBotEmail } from '../components/ChatBotEmail';

interface UserContextData {

    name: string;
    email: string;
    data: string;
    adress: string;
    setUserName: (name:string) => void;
    setUserEmail: (email:string) => void;
    setUserAdress: (adress:string) => void;
    setUserData: (data:string) => void;
    nextChatBot: () => void;
    nextChatBotAdress: () => void;
    nextChatBotDate: () => void;
}

interface UserProviderProps {

    children: ReactNode;

}


export const UserContext = createContext ( {} as UserContextData) 

export function UserContextProvider ({children, ...rest}: UserProviderProps) {
    const [isNameUser, setIsNameUser] = useState(false);
    const [isAdressUser, setIsAdressUser] = useState(false);
    const [isDateUser, setIsDateUser] = useState(false);
    const [isEmailUser, setIsEmailUser] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState("");
    const [adress, setAdress] = useState("");

    function setUserName (name:string) {
        setName (name);
    }

    function setUserEmail (email:string) {
        setEmail (email);
    }

    function setUserAdress (adress:string) {
        setAdress (adress);
    }

    function setUserData (data:string) {
        setData (data);
    }

    function nextChatBot () {
        setIsNameUser (true);
    }

    function nextChatBotAdress () {
        setIsAdressUser (true);
    }

    function nextChatBotDate () {
        setIsDateUser (true);
    }

    return (

        <UserContext.Provider value={{name,email,data,adress,setUserName,setUserEmail,setUserAdress,setUserData, nextChatBot, nextChatBotAdress,nextChatBotDate}}>

            {children}

        {isNameUser && <ChatBotAdress/>}
        {isAdressUser && <ChatBotData/>}
        {isDateUser && <ChatBotEmail/>}
        </UserContext.Provider>


    )


}

