import React, { createContext, useContext, useEffect, useState } from 'react';

import { Box, CircularProgress, Container, Stack, Typography } from '@mui/material';
import { Book } from '@mui/icons-material';


import { Navigate, useNavigate } from 'react-router-dom';
import { AuthRoutes } from './AuthRoutes';

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);
    const [user, setUser] = useState([]);
    const [token, setToken] = useState("");
    const [authenticated, setAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);




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
                setIsLoading(true)
                // const responseUser = await getUserBox(authToken);
                // setUser(responseUser.data)

                // setAuthenticated(true);
                // setIsLoading(false)
                // console.log("yeniden başlatıldı")
                setToken(authToken);
            } catch (error) {
                setAuthenticated(false);
                console.error("user not found")
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, [authenticated]);

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
        )

    }

    return (
        <UserContext.Provider
            value={{ isLoading, user, userId, setUserId, token, setToken, authenticated, setAuthenticated }}
        >
            <>
                <AuthRoutes />
            </>
        </UserContext.Provider>
    );
};

export default AuthProvider;
