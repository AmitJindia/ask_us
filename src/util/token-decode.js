import jwt from 'jwt-decode' 
import { useContext } from 'react';

export function tokenDecode(value) {
    
    return jwt(value)
    
}
