import { Route, Routes } from "react-router-dom";
import { nav } from "./navigations";
import { useUserContext } from "./AuthProvider";

import { Grid } from "@mui/material";

import { useState } from "react";

export const AuthRoutes = () => {
    const { authenticated, user } = useUserContext();

    return (
        <>
       
            <Grid>
                <Routes>
                    {nav.map((r, i) => {
                        if (r.isPrivate && authenticated && r.role.includes(user.accountRole)) {
                            return (
                                <Route key={i} path={r.path} element={r.element}>
                                    {r.children && r.children.length > 0 &&
                                        r.children.map((child, index) => (
                                            <Route key={index} path={child.path} element={child.element} />
                                        ))
                                    }
                                </Route>
                            );
                        } else if (!r.isPrivate && !authenticated) {
                            return <Route key={i} path={r.path} element={r.element}>
                                {r.children && r.children.length > 0 &&
                                    r.children.map((child, index) => (
                                        <Route key={index} path={child.path} element={child.element} />
                                    ))
                                }
                            </Route>;
                        } else return false;
                    })}
                </Routes>
            </Grid>
        </>
    );
};