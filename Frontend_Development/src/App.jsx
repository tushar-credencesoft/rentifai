import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StarterPage from "./pages/StarterPage";
import NavigationPage from "./pages/NavigationPage";
import UserLandingPage from "./pages/userPages/UserLandingPage";
import OwnerLandingPage from "./pages/ownerPages/OwnerLandingPage";
import CarListingDashboard from "./pages/ownerPages/CarListingDashboard";
import CarListingCalendar from "./pages/ownerPages/CarLsitingCalendar";
import CarListing from "./pages/ownerPages/CarListing";
import TransactionDetails from "./pages/ownerPages/TransactionDetails";
import SharingEarning from "./pages/ownerPages/SharingEarning";
import HearHost from "./pages/ownerPages/HearHost";
import StillQuestions from "./pages/ownerPages/StillQuestions";
import SigninandSignup from "./pages/SigninandSignup";
import HomePage from "./pages/userPages/HomePage";
import AboutUs from "./pages/userPages/AboutUs";
import AdminLandingPage from "./pages/adminPages/adminLandingPage";
import CarLicensepage from "./pages/ownerPages/CarLicensepage";
import SearchResultPage from "./pages/userPages/SearchResultPage";

function App() {
  return (
    <div className="h-screen overflow-y-scroll scrollbar-hide">
      <Routes>
        <Route path="/" element={<StarterPage />} />
        <Route path="/nav-page" element={<NavigationPage />} />
        <Route path="/owner-list" element={<OwnerLandingPage />} />
        <Route path="/owner-list/dashboard" element={<CarListingDashboard />} />
        <Route
          path="/owner-list/dashboard/carlist-calendar"
          element={<CarListingCalendar />}
        />
        <Route path="/owner-list/dashboard/car-listing"
          element={<CarListing />}
        />
        <Route path="/owner-list/dashboard/transaction-details"
          element={<TransactionDetails />} />
        <Route path="admin-dash" element={<AdminLandingPage />} />
        {/* <Route path="/sharing-earning" element={<SharingEarning />} /> */}
        <Route path="/hear-host" element={<HearHost />} />
        <Route path="/still-questions" element={<StillQuestions />} />
        <Route path="/signup-signin" element={<SigninandSignup />} />
        <Route path="/sharing-earning" element={<SharingEarning />} />
        <Route path="/owner-list/car-license" element={<CarLicensepage />} />
        <Route path="user-rent" element={<UserLandingPage />}>
          <Route path="home" element={<HomePage />} />
          <Route path="search-result" element={<SearchResultPage />} />
          <Route path="about-us" element={<AboutUs />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
