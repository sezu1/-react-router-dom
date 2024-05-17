import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

export function LoginPage() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        },3000)
    }, []);

    return (
        <div>
            <h2>Login page</h2>
        </div>
    );
}

