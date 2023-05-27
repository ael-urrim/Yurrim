import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useContext } from "react";
import { darkModeContext } from "./context/darkModeContext";

// Components
import Navbar from "./components/navBar/Navbar";
import Leftbar from "./components/leftBar/Leftbar";
import Rightbar from "./components/rightBar/Rightbar";
import "./style.scss";

// Fonts
import "./fonts/Rubik-Light.ttf"
import "./fonts/Rubik-Regular.ttf"
import "./fonts/Rubik-Medium.ttf"
import "./fonts/Rubik-SemiBold.ttf"
import "./fonts/Rubik-Bold.ttf"

// Pages
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/editProfile/EditProfile";
import Settings from "./pages/settings/Settings";
import Interactions from "./pages/interactions/Interactions";
import Notifications from "./pages/notifications/Notifications";
import Chats from "./pages/chats/Chats";
import PostDetails from "./pages/postDetails/PostDetails";
import AboutUs from "./pages/aboutUs/AboutUs";
import CookiePolicy from "./pages/cookiePolicy/CookiePolicy";
import ContentsPolicy from "./pages/contentsPolicy/ContentsPolicy";
import HelpCenter from "./pages/helpCenter/HelpCenter";
import TermsOfUse from "./pages/termsOfUse/TermsOfUse";
import AdvertisementPolicy from "./pages/advertisementPolicy/AdvertisementPolicy";
import RunAds from "./pages/runAds/RunAds";

function App() {
  const { darkMode } = useContext(darkModeContext);

  // Create my page view layout
  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <Outlet />
          <Rightbar />
        </div>
      </div>
    );
  };

  // Apply my view layout to each page links
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/edit-profile/:userid",
          element: <EditProfile />,
        },
        {
          path: "/settings/:userid",
          element: <Settings />,
        },
        {
          path: "/interactions/:userid",
          element: <Interactions />,
        },
        {
          path: "/notifications/:userid",
          element: <Notifications />,
        },
        {
          path: "/messages/:userid",
          element: <Chats />,
        },
        {
          path: "/post/:postid",
          element: <PostDetails />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/cookie-policy",
          element: <CookiePolicy />,
        },
        {
          path: "/help-center",
          element: <HelpCenter />,
        },
        {
          path: "/contents-policy",
          element: <ContentsPolicy />,
        },
        {
          path: "/terms-of-use",
          element: <TermsOfUse />,
        },
        {
          path: "/adverts-and-ads-policy",
          element: <AdvertisementPolicy />,
        },
        {
          path: "/create-ad",
          element: <RunAds />,
        },
      ],
    },

    // General router link to all href links
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  // Load my app to be visible on the browser
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
