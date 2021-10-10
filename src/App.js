import { useState } from 'react';
import './App.css';
import Main from './Containers/Layout/Main';
import { TemplateContext } from "./context/templateContext";
import LoadingOverlay from "react-loading-overlay";


function App() {
  const [loggedin, setLogin] = useState(false);
  const [username, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");
  const [loading, setLoading] = useState(false);


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
        setUserRole: setUserRole,
        loading: loading,
        setLoading: setLoading
      }}>
        <LoadingOverlay
          active={loading}
          spinner
        >
          <Main />
        </LoadingOverlay>
      </TemplateContext.Provider>
    </div>
  );
}

export default App;
