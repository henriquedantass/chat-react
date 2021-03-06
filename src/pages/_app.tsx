import '../styles/global.css'

import {UserContextProvider} from '../contexts/UserContext';

function MyApp({ Component, pageProps }) {
  return (
  
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
  


   )
}

export default MyApp
