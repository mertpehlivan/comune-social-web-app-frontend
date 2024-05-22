
import CommunityPage from "../pages/CommunityPage";
import DetailRoute from "../pages/routers/DetailRoute";
import ExplorePage from "../pages/ExplorePage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import CommunitySignUpPage from "../pages/CommunitySignUpPage";
import MessagesPage from "../pages/MessagePages";
import FollowRoute from "../pages/routers/FollowRoute";
import NotificationRoute from "../pages/routers/NotificationRoute";
import SearchRotue from "../pages/routers/SearchRotue";
import LiveStremingPage from "../pages/LiveStremingPage";




export const nav = [
    {
        path: "/",
        element: <HomePage />,

        isMenu: false,
        isPrivate: false,
        role:["USER","COMMUNITY"]
    },

    {

        path: "/home",
        element: <ExplorePage />,
        children: [
            {
                path: "",
                element: <FollowRoute />,
            },
            {
                path: "search",
                element: <SearchRotue />,
            },
            {
                path: "notifications",
                element: <NotificationRoute />,
            },
            {
                path: "detail",
                element: <DetailRoute />,

                isMenu: false,
                isPrivate: false
            },
        ],
        isMenu: true,
        isPrivate: true,
        role:["USER"]

    },
    {
        path: "/messages",
        element: <MessagesPage />,
        isMenu: true,
        isPrivate: true,
        role:["USER"]
    },
    {
        path: "/comunelive",
        element: <LiveStremingPage />,
        isMenu: true,
        isPrivate: true,
        role:["USER","COMMUNITY"]
    },
    {
        path: "/login",
        element: <LoginPage />,
        isMenu: false,
        isPrivate: false,
        role:["USER","COMMUNITY"]
    },
    {
        path: "/signup-community",
        element: <CommunitySignUpPage />,
        isMenu: false,
        isPrivate: false,
        role:["USER","COMMUNITY"]
    },
    {
        path: "/signup",
        element: <SignUpPage />,
        isMenu: false,
        isPrivate: false,
        role:["USER","COMMUNITY"]
    },
    {
        path: "/community/:id",
        element: <CommunityPage />,
        children: [
        ],
        isMenu: true,
        isPrivate: true,
        role:["COMMUNITY","USER"]
    },

]


