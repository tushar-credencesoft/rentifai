import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import SignupModal from "../pages/SignupModal";
import SignInModal from "../pages/SignInModal";

const Header = () => {
  const currentURL = window.location.href;
  const is_loggedin = 0;
  const userSelectedNav =
    currentURL.indexOf("/owner-list") > -1 ? "list-a-car" : "rent-a-car";

  const [state, setState] = useState({
    openDropwDown: "dropdown",
    userSelected: userSelectedNav,
    isSignupModalOpen: false,
    isSignInModalOpen: false,
  });

  function openDropwDown() {
    let value = "dropdown open";
    if (state.openDropwDown === "dropdown open") {
      value = "dropdown";
    }
    setState((prev) => {
      return { ...prev, openDropwDown: value };
    });
  }
  function openSignupModal() {
    setState((prev) => {
      return {
        ...prev,
        isSignupModalOpen: true,
        isSignInModalOpen: false,
      };
    });
  }

  function openSignInModal() {
    setState((prev) => {
      return { ...prev, isSignInModalOpen: true, isSignupModalOpen: false };
    });
  }

  return (
    <header
      className={
        "shadow-[0px_4px_7px_#00000029] " +
        (is_loggedin == 1 ? " logged-in" : "")
      }
    >
      <div
        className={
          state.userSelected == "rent-a-car"
            ? "rent-a-car"
            : "rent-a-car hidden"
        }
      >
        <div className="container px-[20px] xl:px-[70px]">
          <div className="flex flex-wrap flex items-center justify-between">
            <div className="w-2/3 lg:w-1/4">
              <h2 className="logo-txt text-start text-[35px] md:text-[41px] text-[#023863] leading-[44px] font-bold">
                <Link to="/">
                  RENTIF{" "}
                  <span className="inner-txt bg-[#A64AC9] leading-[40px] rounded-[10px] inline-block text-white">
                    AI
                  </span>
                </Link>
              </h2>
            </div>
            <div className="w-3/4 ms-auto flex items-center justify-end hidden xl:block">
              <div className="flex items-center justify-end">
                <ul className="menu flex">
                  <li className="relative py-9 active">
                    <Link
                      to="/user-rent/home"
                      className="hover:text-[#A64AC9] transition-all ease-in-out duration-[300ms] text-[#707070] text-xl"
                    >
                      HOME
                    </Link>
                  </li>
                  <li className="relative py-9 mx-7 xl:mx-14">
                    <Link
                      to="/owner-list"
                      className="hover:text-[#A64AC9] transition-all ease-in-out duration-[300ms] text-[#707070] text-xl font-normal"
                    >
                      LIST YOUR CAR
                    </Link>
                  </li>
                  <li className="relative py-9 mr-10 xl:mr-14">
                    <Link
                      to="/user-rent/about-us"
                      className="hover:text-[#A64AC9] transition-all ease-in-out duration-[300ms] text-[#707070] text-xl font-normal"
                    >
                      ABOUT US
                    </Link>
                  </li>
                </ul>
                <div>
                  <p
                    onClick={openSignInModal}
                    className=" hover:bg-[#A64AC9] hover:text-white uppercase border-[4px] border-[#A64AC9] py-[7px] px-[50px] rounded-[10px] text-[#A64AC9] transition-all ease-in-out duration-[300ms] text-xl font-bold mr-3 inline log-out"
                  >
                    Log in
                  </p>
                  <p
                    onClick={openSignupModal}
                    className="uppercase bg-[#A64AC9] py-[7px] px-[48px] rounded-[10px] h-[49px] hover:bg-transparent hover:text-[#A64AC9] text-xl text-white border-[4px] border-[#A64AC9] transition-all ease-in-out duration-[300ms] inline log-out"
                  >
                    Sign Up
                  </p>
                  <div className="sign-in">
                    <div className="flex">
                      <p
                        onClick={openSignInModal}
                        className="hover:bg-[#A64AC9] hover:text-white uppercase border-[4px] border-[#A64AC9] py-[7px] px-[38px] rounded-[10px] text-[#A64AC9] transition-all ease-in-out duration-[300ms] text-xl font-bold mr-3 inline"
                      >
                        LOG OUT
                      </p>
                      <p
                        onClick={openSignupModal}
                        className="bg-[#A64AC9] py-[7px] px-[13px] font-bold rounded-[10px] h-[49px] hover:bg-transparent hover:text-[#A64AC9] text-xl text-white border-[4px] border-[#A64AC9] transition-all ease-in-out duration-[300ms] flex p-btn font-bold"
                      >
                        Ashwani{" "}
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 257 257"
                          className="ms-[15px]"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M112.8 2.8C79.0667 11.8667 58.1333 46.9333 66.6667 80C75.6 114.133 110.533 135.333 144 126.667C178.133 117.733 199.333 82.8 190.667 49.6C181.733 15.0667 146.267 -6.26667 112.8 2.8Z"
                            fill="#fff"
                          />
                          <path
                            d="M112.667 161.467C110.8 161.733 104.8 162.667 99.3333 163.467C62.6667 168.667 24.5333 184.8 10.8 200.8C2.26666 210.933 1.33333 213.867 0.933325 236.4L0.533325 256.667H128.667H256.8L256.4 236.4C256 213.867 255.067 210.933 246.533 200.8C232.267 184.133 193.867 168.4 153.6 162.667C141.2 160.933 120.8 160.267 112.667 161.467Z"
                            fill="#fff"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                "custom-hamburger block xl:hidden py-9 " + state.openDropwDown
              }
            >
              <div
                className="bg-[#A64AC9] h-[50px] w-[50px] flex items-center justify-center rounded-[10px]"
                onClick={openDropwDown}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#fff"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="close hidden"
                  width="35"
                  height="35"
                  fill="#fff"
                >
                  <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
                </svg>
              </div>
            </div>
            <div
              className={
                "mobile-menu xl:hidden w-full px-[-70px] pb-[30px] " +
                state.openDropwDown
              }
            >
              <ul className="text-start pr-2.5">
                <li className="relative pb-6">
                  <Link
                    to="/user-rent/home"
                    className="text-[#707070] text-xl hover:text-[#A64AC9] transition-all ease-in-out duration-[300ms]"
                  >
                    HOME
                  </Link>
                </li>
                <li className="relative pb-6">
                  <Link
                    to="/owner-list"
                    className="text-[#707070] text-xl hover:text-[#A64AC9] transition-all ease-in-out duration-[300ms] font-normal"
                  >
                    LIST YOUR CAR
                  </Link>
                </li>
                <li className="relative pb-10 mr-10 xl:mr-14">
                  <Link
                    to="/user-rent/about-us"
                    className="text-[#707070] hover:text-[#A64AC9] transition-all ease-in-out duration-[300ms] text-xl font-normal"
                  >
                    ABOUT US
                  </Link>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <p
                  onClick={openSignInModal}
                  className="log-out hover:bg-[#A64AC9] hover:text-white uppercase border-[4px] border-[#A64AC9] py-[7px] px-[50px] rounded-[10px] text-[#A64AC9] transition-all ease-in-out duration-[300ms] text-xl font-bold"
                >
                  Log in
                </p>
                <p
                  onClick={openSignupModal}
                  className="log-out uppercase bg-[#A64AC9] py-[7px] px-[48px] rounded-[10px] h-[49px] hover:bg-transparent hover:text-[#A64AC9] text-xl text-white border-[4px] border-[#A64AC9] transition-all ease-in-out duration-[300ms]"
                >
                  Sign Up
                </p>
                <div className="sign-in">
                  <div className="flex flex-wrap gap-4">
                    <p
                      onClick={openSignInModal}
                      className="hover:bg-[#A64AC9] hover:text-white uppercase border-[4px] border-[#A64AC9] py-[7px] px-[50px] rounded-[10px] text-[#A64AC9] transition-all ease-in-out duration-[300ms] text-xl font-bold"
                    >
                      LOG OUT
                    </p>
                    <p
                      onClick={openSignupModal}
                      className="uppercase bg-[#A64AC9] py-[7px] px-[48px] rounded-[10px] h-[49px] hover:bg-transparent hover:text-[#A64AC9] text-xl text-white border-[4px] border-[#A64AC9] transition-all ease-in-out duration-[300ms] inline-flex p-btn font-bold"
                    >
                      Ashwani{" "}
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 257 257"
                        className="ms-[15px]"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M112.8 2.8C79.0667 11.8667 58.1333 46.9333 66.6667 80C75.6 114.133 110.533 135.333 144 126.667C178.133 117.733 199.333 82.8 190.667 49.6C181.733 15.0667 146.267 -6.26667 112.8 2.8Z"
                          fill="#fff"
                        />
                        <path
                          d="M112.667 161.467C110.8 161.733 104.8 162.667 99.3333 163.467C62.6667 168.667 24.5333 184.8 10.8 200.8C2.26666 210.933 1.33333 213.867 0.933325 236.4L0.533325 256.667H128.667H256.8L256.4 236.4C256 213.867 255.067 210.933 246.533 200.8C232.267 184.133 193.867 168.4 153.6 162.667C141.2 160.933 120.8 160.267 112.667 161.467Z"
                          fill="#fff"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          state.userSelected == "rent-a-car"
            ? "list-a-car hidden"
            : "list-a-car"
        }
      >
        <div className="container px-[20px] xl:px-[70px]">
          <div className="flex flex-wrap flex items-center justify-between">
            <div className="w-2/3 lg:w-1/4 text-start">
              <h2 className="logo-txt inline-block text-[35px] md:text-[41px] text-[#023863] leading-[44px] font-bold">
                <Link to="/">
                  RENTIF{" "}
                  <span className="inner-txt bg-[#A64AC9] leading-[40px] rounded-[10px] inline-block text-white">
                    AI
                  </span>
                  <p className="text-end font-bold text-[26px] mt-[-4px] leading-7 flex items-center justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="15"
                      viewBox="0 0 80 15"
                      fill="none"
                    >
                      <rect
                        x="47"
                        y="6"
                        width="33"
                        height="3"
                        rx="1"
                        fill="#A64AC9"
                      />
                      <rect width="80" height="3" rx="1" fill="#A64AC9" />
                      <rect
                        x="47"
                        y="12"
                        width="33"
                        height="3"
                        rx="1"
                        fill="#A64AC9"
                      />
                    </svg>
                    HOST
                  </p>
                </Link>
              </h2>
            </div>
            <div className="w-3/4 flex items-center justify-end hidden 2xl:block">
              <div className="flex items-center justify-end">
                <ul className="menu flex pr-2.5">
                  <li className="relative py-9 mx-10">
                    <Link to="#" className="text-[#707070] text-xl">
                      FAQS
                    </Link>
                  </li>
                  <li className="relative py-9 mx-10">
                    <Link
                      to="/user-rent/home"
                      className="text-[#707070] text-xl font-normal"
                    >
                      RENT NOW
                    </Link>
                  </li>

                  <li className="relative py-9 mx-10">
                    <Link
                      to="/owner-list/car-license"
                      className="text-[#707070] text-xl font-normal"
                    >
                      LIST NOW
                    </Link>
                  </li>

                  <li className="relative py-9 log-out mx-10">
                    <span
                      onClick={openSignInModal}
                      className="text-[#707070] text-xl font-normal"
                    >
                      LOG IN
                    </span>
                  </li>
                  <li className="relative py-9 log-out ms-16 mr-20">
                    <span
                      onClick={openSignupModal}
                      className="text-[#707070] text-xl font-normal"
                    >
                      SIGN UP
                    </span>
                  </li>
                  <li className="relative py-9 mr-20 sign-in">
                    <span
                      onClick={() => navigate("/owner-list/car-license")} 
                      className="text-[#707070] text-xl font-normal"
                    >
                      LIST NOW
                    </span>
                  </li>
                </ul>

                <div className="flex items-center">
                  <Link
                    to="#"
                    className="sign-up hover:bg-transparent hover:text-[#A64AC9] text-[29px] px-[23px] py-[1px] uppercase text-xl font-bold bg-[#A64AC9] py-[7px] px-[48px] rounded-[10px] h-[49px] text-white border-[4px] border-[#A64AC9] transition-all ease-in-out duration-[300ms] log-out"
                  >
                    DOWNLOAD THE APP
                  </Link>
                  <div className="sign-in">
                    <div className="flex">
                      <p
                        onClick={openSignInModal}
                        className="sign-up hover:bg-transparent hover:text-[#A64AC9] text-[29px] px-[23px] py-[1px] uppercase text-xl font-bold  bg-[#A64AC9] py-[7px] px-[37px] me-5 rounded-[10px] h-[49px] text-white border-[4px] border-[#A64AC9] transition-all ease-in-out duration-[300ms] sign-in"
                      >
                        LOG OUT
                      </p>
                      <Link
                        to="#"
                        className="sign-up hover:bg-transparent hover:text-[#A64AC9] text-[29px] font-bold  bg-[#A64AC9] py-[7px] px-[8px] rounded-[10px] h-[49px] text-white border-[4px] border-[#A64AC9] transition-all ease-in-out duration-[300ms] flex p-btn font-bold items-center"
                      >
                        Ashwani{" "}
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 257 257"
                          className="ms-[15px]"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M112.8 2.8C79.0667 11.8667 58.1333 46.9333 66.6667 80C75.6 114.133 110.533 135.333 144 126.667C178.133 117.733 199.333 82.8 190.667 49.6C181.733 15.0667 146.267 -6.26667 112.8 2.8Z"
                            fill="#fff"
                          />
                          <path
                            d="M112.667 161.467C110.8 161.733 104.8 162.667 99.3333 163.467C62.6667 168.667 24.5333 184.8 10.8 200.8C2.26666 210.933 1.33333 213.867 0.933325 236.4L0.533325 256.667H128.667H256.8L256.4 236.4C256 213.867 255.067 210.933 246.533 200.8C232.267 184.133 193.867 168.4 153.6 162.667C141.2 160.933 120.8 160.267 112.667 161.467Z"
                            fill="#fff"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                "custom-hamburger block 2xl:hidden py-9 " + state.openDropwDown
              }
            >
              <div
                className="bg-[#A64AC9] h-[50px] w-[50px] flex items-center justify-center rounded-[10px]"
                onClick={openDropwDown}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#fff"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="close hidden"
                  width="35"
                  height="35"
                  fill="#fff"
                >
                  <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
                </svg>
              </div>
            </div>
            <div
              className={
                "mobile-menu xl:hidden w-full px-[-70px] pb-[30px] " +
                state.openDropwDown
              }
            >
              <ul className="text-start pr-2.5">
                <li className="relative pb-6 cursor-pointer">
                  <Link
                    to="#"
                    className="text-[#707070] hover:text-[#A64AC9] transition-all ease-in-out duration-[300ms] text-xl"
                  >
                    FAQS
                  </Link>
                </li>
                <li className="relative pb-6 cursor-pointer">
                  <Link
                    to="/user-rent/home"
                    className="text-[#707070] hover:text-[#A64AC9] transition-all ease-in-out duration-[300ms] text-xl font-normal"
                  >
                    RENT NOW
                  </Link>
                </li>

                <li className="relative pb-6 cursor-pointer">
                  <Link
                    to="/owner-list/car-license"
                    className="text-[#707070] hover:text-[#A64AC9] transition-all ease-in-out duration-[300ms] text-xl font-normal"
                  >
                    LIST NOW
                  </Link>
                </li>


                <li className="relative pb-6 log-out">
                  <p
                    onClick={openSignInModal}
                    className="text-[#707070] cursor-pointer hover:text-[#A64AC9] transition-all ease-in-out duration-[300ms] text-xl font-normal"
                  >
                    LOG IN
                  </p>
                </li>
                <li className="relative pb-10 log-out cursor-pointer">
                  <p
                    onClick={openSignupModal}
                    className="text-[#707070] cursor-pointer hover:text-[#A64AC9] transition-all ease-in-out duration-[300ms] text-xl font-normal"
                  >
                    SIGN UP
                  </p>
                </li>
                <li className="relative pb-10 sign-in">
                  <p onClick={() => navigate("/owner-list/car-license")} className="text-[#707070] hover:text-[#A64AC9] transition-all ease-in-out duration-[300ms] text-xl font-normal">
                    LIST NOW
                  </p>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link
                  to=""
                  className="sign-up hover:bg-transparent hover:text-[#A64AC9] text-[16px] md:text-[29px] px-[23px] py-[1px] uppercase text-xl font-bold bg-[#A64AC9] py-[7px] px-6 sm:px-[48px] rounded-[10px] h-[49px] text-white border-[4px] border-[#A64AC9] transition-all ease-in-out duration-[300ms] log-out"
                >
                  DOWNLOAD THE APP
                </Link>
                <p
                  onClick={openSignInModal}
                  className="sign-up hover:bg-transparent hover:text-[#A64AC9] text-[29px] px-[23px] py-[1px] uppercase text-xl font-bold bg-[#A64AC9] py-[7px] px-[37px] me-5 rounded-[10px] h-[49px] text-white border-[4px] border-[#A64AC9] transition-all ease-in-out duration-[300ms] sign-in"
                >
                  LOG OUT
                </p>
                <div className="sign-in">
                  <Link
                    to="#"
                    className="sign-up hover:bg-transparent hover:text-[#A64AC9] text-[29px] px-[23px] py-[1px] text-xl font-bold bg-[#A64AC9] py-[7px] px-[48px] rounded-[10px] h-[49px] text-white border-[4px] border-[#A64AC9] transition-all ease-in-out duration-[300ms] flex p-btn font-bold"
                  >
                    Ashwani{" "}
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 257 257"
                      className="ms-[15px]"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M112.8 2.8C79.0667 11.8667 58.1333 46.9333 66.6667 80C75.6 114.133 110.533 135.333 144 126.667C178.133 117.733 199.333 82.8 190.667 49.6C181.733 15.0667 146.267 -6.26667 112.8 2.8Z"
                        fill="#fff"
                      />
                      <path
                        d="M112.667 161.467C110.8 161.733 104.8 162.667 99.3333 163.467C62.6667 168.667 24.5333 184.8 10.8 200.8C2.26666 210.933 1.33333 213.867 0.933325 236.4L0.533325 256.667H128.667H256.8L256.4 236.4C256 213.867 255.067 210.933 246.533 200.8C232.267 184.133 193.867 168.4 153.6 162.667C141.2 160.933 120.8 160.267 112.667 161.467Z"
                        fill="#fff"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {state.isSignupModalOpen && (
        <SignupModal setState={setState} state={state} />
      )}
      {state.isSignInModalOpen && (
        <SignInModal setState={setState} state={state} />
      )}
    </header>
  );
};

export default Header;
