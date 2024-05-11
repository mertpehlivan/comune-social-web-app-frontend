
import CommunityPage from "../pages/CommunityPage";
import ExplorePage from "../pages/ExplorePage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import FollowRoute from "../pages/routers/FollowRoute";




export const nav = [
    {
        path: "/",
        element: <HomePage />,

        isMenu: false,
        isPrivate: false
    },
    {
        path: "/home",
        element: <ExplorePage />,
        children: [
            {
                path: "",
                element: <FollowRoute />,
            }
        ],
        isMenu: false,
        isPrivate: false
    },
    {
        path: "/login",
        element: <LoginPage/>,
        children: [
            {
                path: "",
                element: <FollowRoute />,
            }
        ],
        isMenu: false,
        isPrivate: false
    },
    {
        path: "/signup",
        element: <SignUpPage/>,
        children: [
            {
                path: "",
                element: <FollowRoute />,
            }
        ],
        isMenu: false,
        isPrivate: false
    },
    {
        path: "/community",
        element: <CommunityPage />,
        children: [

        ],
        isMenu: false,
        isPrivate: false
    },

]


