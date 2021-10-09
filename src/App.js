import { useState } from 'react';
import './App.css';
import Main from './Containers/Layout/Main';
import { TemplateContext } from "./context/templateContext";

function App() {
  const [loggedin, setLogin] = useState(false);
  const [username, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");

  return (
    <div className="App" >
      <TemplateContext.Provider value={{
        loggedin: loggedin,
        setLogin: setLogin,
        username: username,
        setUserName: setUserName,
        userEmail: userEmail,
        setUserEmail: setUserEmail,
        userRole: userRole,
        setUserRole: setUserRole
      }}>
        <Main />
      </TemplateContext.Provider>
    </div>
  );
}

export default App;
