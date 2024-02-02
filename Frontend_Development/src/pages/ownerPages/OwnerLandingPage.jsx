import React, { useEffect } from "react";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import "./list_car.css";
import HearHost from "./HearHost.jsx";
import SharingEarning from "./SharingEarning.jsx";
import PromoteApplication from "./PromoteApplication.jsx";
import WhyShareCar from "./WhyShareCar.jsx";
import CarAtFingertips from "./CarAtFingertips.jsx";
import StillQuestions from "./StillQuestions.jsx";

const LandingPage = () => {
  // On Every First Render of the home page it will check for the access token in the query params.
  // This helps us to interact with the access token get through the magic link login.
  useEffect(() => {
    // Function to get access token from URL
    const getAccessTokenFromURL = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get("accessToken");
      return accessToken;
    };

    // Get access token from URL
    const accessToken = getAccessTokenFromURL();

    // Check if access token exists and set it in local storage
    if (accessToken) {
      localStorage.setItem("ACCESS_TOKEN", JSON.stringify(accessToken));
    }
  }, []);

  return (
    <>
      <Header />
      <PromoteApplication />
      <WhyShareCar />
      <SharingEarning />
      <HearHost />
      <StillQuestions />
      <CarAtFingertips />
      <Footer />
    </>
  );
};

export default LandingPage;
