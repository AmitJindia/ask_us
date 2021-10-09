import React, { useEffect } from 'react';
import { useTemplate } from '../../context/templateContext';
import { tokenDecode } from '../../util/token-decode';
import { Header } from '../Header/Header';

function Main(props) {
    const { setLogin, setUserName, setUserEmail, setUserRole } = useTemplate();
    let data;
    if(sessionStorage.getItem("token"))
        data = tokenDecode(sessionStorage.getItem("token") && (sessionStorage.getItem("token")));
    
    useEffect(() => {
        if (data?.exp * 1000 > new Date().getTime()) {
            setLogin(true);
            setUserEmail(data.email);
            setUserRole(data?.role);
            setUserName(data?.name);
        }
    }, [data])
    return (
        <div>
            <Header />
        </div>
    );
}

export default Main;