import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import AppContextProvider from './context/AppContextProvider';
import Home from './Home';

const App = () => {
  
  return (
    <AppContextProvider>
     <Home/>
    </AppContextProvider>
  )
}

export default App