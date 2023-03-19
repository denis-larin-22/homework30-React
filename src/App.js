import './App.css';
import Layout from './components/Layout.jsx';
import { useState, createContext } from 'react';

//There is InputContext in the List and the Input components 
export const InputContext = createContext(null)

function App() {
  const [string, setString] = useState('Hello useContext!');
  const value = {
    string,
    setString
  }

  return (
    <InputContext.Provider value={value}>
      <div className="App">
        App
        <Layout/>
      </div>
    </InputContext.Provider>
  );
}

export default App;
