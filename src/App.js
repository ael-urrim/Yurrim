import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useContext } from "react";
import { darkModeContext } from "./context/darkModeContext";

// Components
import Navbar from "./components/navBar/Navbar";
import Leftbar from "./components/leftBar/Leftbar";
import Rightbar from "./components/rightBar/Rightbar";
import HelpCenterNavbar from "./components/helpCenterNavBar/HelpCenterNavBar";
import HelpCenterLeftbar from "./components/helpCenterLeftBar/HelpCenterLeftBar";
import HelpCenterFooter from "./components/helpCenterFooter/HelpCenterFooter";
import AdvertsLeftBar from "./components/advertsLeftbar/AdvertsLeftBar";

// General styles
import "./style.scss";

// Fonts
import "./fonts/Rubik-Light.ttf";
import "./fonts/Rubik-Regular.ttf";
import "./fonts/Rubik-Medium.ttf";
import "./fonts/Rubik-SemiBold.ttf";
import "./fonts/Rubik-Bold.ttf";

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
import AdsOverview from "./pages/AdsOverview/AdsOverview";
import Menu from "./pages/menuPage/Menu";
import SupportInbox from "./pages/supportInbox/SupportInbox";
import ContactUs from "./pages/contactUs/ContactUs";
import HelpCenterMenu from "./pages/helpCenterMenu/HelpCenterMenu";
import PersonalChat from "./pages/personalChat/PersonalChat";
import AdsCampaign from "./pages/adsCampaign/AdsCampaign";
import CreateAd from "./pages/createAd/CreateAd";
import FundAccount from "./pages/fundAccount/FundAccount";
import AccountSettings from "./pages/adAccountSettings/AccountSettings";
import ReportProblem from "./pages/reportAdProblem/ReportProblem";
import AdDetails from "./pages/adDetails/AdDetails";



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

  // Create other page view layout
  const HelpLayouts = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <HelpCenterNavbar />
        <div style={{ display: "flex" }}>
          <HelpCenterLeftbar/>
          <Outlet />
        </div>
        <HelpCenterFooter/>
      </div>
    );
  };

  // Ads page view
  const AdsPageLayouts = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <AdvertsLeftBar/>
          <Outlet />
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
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/support-inbox",
          element: <SupportInbox />,
        },
        {
          path: "/personal-chat/:id",
          element: <PersonalChat />,
        },
      ],
    },

    // other layouts
    {
      path: "/",
      element: <HelpLayouts />,
      children: [
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/help-center",
          element: <HelpCenter />,
        },
        {
          path: "/help-center-menu",
          element: <HelpCenterMenu />,
        },
      ],
    },

    // Ads page layout
    {
      path: "/",
      element: <AdsPageLayouts />,
      children: [
        {
          path: "/ads-overview/:id",
          element: <AdsOverview />,
        },
        {
          path: "/campaigns/:id",
          element: <AdsCampaign />,
        },
        {
          path: "/create-ad",
          element: <CreateAd />,
        },
        {
          path: "/fund-account/:id",
          element: <FundAccount />,
        },
        {
          path: "/ad-details/:id",
          element: <AdDetails />,
        },
        {
          path: "/account-settings/:id",
          element: <AccountSettings />,
        },
        {
          path: "/report-ad-problem",
          element: <ReportProblem />,
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
