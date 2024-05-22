import React, { createContext, useContext, useEffect, useState } from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';
import { Book } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { AuthRoutes } from './AuthRoutes';
import axios from 'axios';
import { authenticatedFetch } from '../services/AuthService';

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [role, setRole] = useState("");
    const [token, setToken] = useState("");
    const [authenticated, setAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            setIsLoading(true);
            try {
                const authToken = localStorage.getItem("access-token");
                if (!authToken) {
                    setAuthenticated(false);
                    setIsLoading(false);
                    return;
                }
                const response = await authenticatedFetch(authToken);
                setUser(response.data);
                setRole(response.data.accountRole);  // Set role based on response
                setAuthenticated(true);
                setToken(authToken);
            } catch (error) {
                localStorage.clear();
                setAuthenticated(false);
                navigate("/login");
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        checkAuth();
    }, [navigate]);

    const handleAuth = (response) => {
        setAuthenticated(true);
        setUser(response.account);
        setToken(response.token);
        setRole(response.account.accountRole);
        localStorage.setItem("access-token", response.token);
        if (response.account.accountRole === "COMMUNITY") {
            navigate(`/community/${response.account.id}`);
        } else if (response.account.accountRole === "USER") {
            navigate("/home");
        }
    };

    const handleLogOut = () => {
        localStorage.clear();
        setUser({});
        setToken("");
        setRole("");
        navigate("/login");
    };

    if (isLoading) {
        return (
            <Stack justifyContent="center" alignItems="center" height="100vh">
                <Stack justifyContent="center" alignItems="center">
                    <CircularProgress />
                    <Box mt={2}>
                        <Book sx={{ width: 50, height: 50, color: "primary.main" }} />
                    </Box>
                </Stack>
            </Stack>
        );
    }

    return (
        <UserContext.Provider
            value={{ isLoading, user, token, setToken, authenticated, setAuthenticated, handleAuth, handleLogOut }}
        >
            <AuthRoutes />
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;
