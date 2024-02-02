import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const SignInModal = ({ state, setState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isForgotPasswordLoading, setIsForgotPasswordLoading] = useState(false);
  const [emailForMagicLink, setEmailForMagicLink] = useState("");
  const [openMagicLinkAuth, setOpenMagicLinkAuth] = useState(false);
  const [magicLinkLoader, setMagicLinkLoader] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Check if the click target is outside the modal content
      if (!e.target.closest(".bg-white")) {
        setState((prev) => {
          return {
            ...prev,
            isSignInModalOpen: false,
            isSignupModalOpen: false,
          };
        });
      }
    };

    // Add event listener when the modal is open
    if (state.isSignInModalOpen || state.isSignupModalOpen) {
      document.body.addEventListener("mousedown", handleOutsideClick);
    }

    // Remove event listener when the component is unmounted or modal is closed
    return () => {
      document.body.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [state, setState]);

  const openSignupModal = () => {
    setState((prev) => {
      return {
        ...prev,
        isSignupModalOpen: true,
        isSignInModalOpen: false,
      };
    });
  };

  // Login
  const handleSignIn = async () => {
    if (email.trim() === "" || password === "") {
      return toast.warn("Please enter both email and password.");
    }

    // Loader
    setIsLoading((prev) => !prev);
    const role = state.userSelected === "list-a-car" ? "owner" : "user";
    await axios
      .post(
        "https://rentifai-dev-node.coinbitwallet.com/rentifai/auth/login",
        { email: email, password: password, role: role },
        {
          validateStatus: function (status) {
            return (
              (status >= 200 && status < 300) ||
              [400, 401, 403, 404].includes(status)
            );
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.status === 400 || res.status === 401) {
          setIsLoading((prev) => !prev);
          return toast.warn(res.data.message);
        }
        if (res.status === 200) {
          setIsLoading((prev) => !prev);
          toast.success(res.data.message);

          // Setting the Access token in Local Storage
          localStorage.setItem(
            "ACCESS_TOKEN",
            JSON.stringify(res.data.accessToken)
          );

          setState((prev) => {
            return {
              ...prev,
              isSignInModalOpen: false,
              isSignupModalOpen: false,
            };
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading((prev) => !prev);
        toast.error(error.message);
      });
  };

  // Reset or Forgot password
  const handelForgotPassword = async () => {
    if (email.trim() === "") {
      return toast.warn(
        "Email Address is required to reset the password. Please enter the email address then click Forgot password."
      );
    }

    const role = state.userSelected === "list-a-car" ? "owner" : "user";

    // loader
    setIsForgotPasswordLoading((prev) => !prev);

    await axios
      .post(
        "https://rentifai-dev-node.coinbitwallet.com/rentifai/auth/forgot-password",
        {
          email: email,
          role: role,
        },
        {
          withCredentials: true,
          validateStatus: function (status) {
            return (
              (status >= 200 && status < 300) ||
              [400, 401, 403, 404].includes(status)
            );
          },
        }
      )
      .then((res) => {
        if (res.status === 400 || res.status === 404 || res.status === 401) {
          setIsForgotPasswordLoading((prev) => !prev);
          return toast.warn(res.data.message);
        }

        if (res.status === 200) {
          setIsForgotPasswordLoading((prev) => !prev);
          return toast.success(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading((prev) => !prev);
        toast.error(error.message);
      });
  };

  // Magic Link Authentication
  const handelMagicLinkSignIn = async () => {
    if (emailForMagicLink.trim() === "") {
      return toast.warn("Please Enter your email address.");
    }

    // Loader
    setMagicLinkLoader((prev) => !prev);

    const role = state.userSelected === "list-a-car" ? "owner" : "user";
    await axios
      .post(
        "https://rentifai-dev-node.coinbitwallet.com/rentifai/auth/password-less-login",
        { email: emailForMagicLink, role: role },
        {
          validateStatus: function (status) {
            return (
              (status >= 200 && status < 300) ||
              [400, 401, 403, 404].includes(status)
            );
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.status === 400 || res.status === 403 || res.status === 404) {
          setMagicLinkLoader((prev) => !prev);
          return toast.warn(res.data.message);
        }

        if (res.status === 200) {
          setMagicLinkLoader((prev) => !prev);
          return toast.success(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        setMagicLinkLoader((prev) => !prev);
        toast.error(error.message);
      });
  };

  // Google Sign In
  const SignInWithGoogle = async () => {
    const role = state.userSelected === "list-a-car" ? "owner" : "user";
    window.open(
      `https://rentifai-dev-node.coinbitwallet.com/rentifai/auth/google/callback?role=${role}`,
      "_self"
    );
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${
        state.isSignInModalOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="fixed inset-0 transition-transform transform">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-white rounded-lg absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-0 border-2 border-purple-400 w-full ">
          {!openMagicLinkAuth ? (
            <div className="bg-white p-4 rounded-lg flex flex-col items-center mt-7">
              <h1 className="text-4xl font-bold text-purple-500 mb-2 ">
                Welcome Back
              </h1>

              <p className="text-base font-bold text-purple-500 mb-6 ">
                Please enter your details
              </p>

              <div className="mb-10">
                <input
                  className={`font-bold mb-2 w-80 pr-10 focus:outline-none ${
                    email.trim() !== "" ? "text-purple-500" : "text-purple-500"
                  }`}
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.trim())}
                />
                <div className="border border-purple-400"></div>
              </div>

              <div className="mb-10">
                <input
                  type="password"
                  className={` p-1 w-80 font-bold mb-2 pr-10 focus:outline-none ${
                    password.trim() !== "" ? "text-purple-500" : "text-gray-500"
                  }`}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="border border-purple-400"></div>
              </div>

              <div className="flex items-center mb-4 space-x-10">
                <div className="flex items-center  text-sm mr-5">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="mr-2"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="text-black font-bold text-sm mr-10"
                  >
                    Remember Me
                  </label>
                </div>

                <div className="flex items-center ml-5">
                  <span
                    onClick={handelForgotPassword}
                    className="cursor-pointer no-underline hover:underline text-black font-bold text-sm hover:text-purple-600 duration-200 flex items-center"
                  >
                    {isForgotPasswordLoading && (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    )}{" "}
                    Forgot Password
                  </span>
                </div>
              </div>

              <button
                className="bg-purple-400 hover:bg-purple-500 text-white px-14 py-1 mt-5 rounded-3xl flex items-center justify-center mb-7"
                onClick={handleSignIn}
              >
                {isLoading && (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                Sign In
              </button>

              <p className="text-gray-400 font-Bebas text-[25px] mb-3">
                OR LOGIN WITH
              </p>
              <div className="flex justify-center space-x-4 mb-2 gap-4">
                {/* Google Logo */}
                <img
                  onClick={SignInWithGoogle}
                  src="/assets/images/starter_page_images/icons8-google.svg"
                  alt="Google"
                  className="h-10 cursor-pointer hover:scale-110 duration-150"
                  title="Google"
                />
                {/* Facebook Logo */}
                <img
                  src="/assets/images/starter_page_images/icons8-facebook.svg"
                  alt="Facebook"
                  className="h-10 cursor-pointer hover:scale-110 duration-150"
                  title="Facebook"
                />
                {/* Magic Link Logo */}
                <img
                  onClick={() => setOpenMagicLinkAuth(true)}
                  src="/assets/images/starter_page_images/icons8-link-48.png"
                  alt="Magic Link"
                  className="h-10 cursor-pointer hover:scale-110 duration-150"
                  title="Magic Link"
                />
              </div>

              <p className="text-black text-sm font-bold mt-5 mb-10">
                NEW HERE?{" "}
                <b
                  className="cursor-pointer no-underline hover:underline text-purple-500"
                  onClick={openSignupModal}
                >
                  SIGN UP
                </b>
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl max-sm:text-3xl text-center mt-16 font-bold text-purple-500 mb-1.5 ">
                MagicLink Authentication
              </h1>
              <p className="mb-12 max-sm:text-sm text-center text-gray-400 font-medium">
                You will get a magic Link through your provided email.
              </p>
              <input
                className={`border border-gray-400 rounded-2xl p-1 mb-5 text-center font-bold px-10 w-96 max-sm:w-80 py-2 text-xl ${
                  emailForMagicLink.trim() !== ""
                    ? "text-black"
                    : "text-gray-500"
                }`}
                placeholder="Email"
                value={emailForMagicLink}
                onChange={(e) => setEmailForMagicLink(e.target.value.trim())}
              />
              <button
                className="bg-purple-400 hover:bg-purple-500 text-white px-14 py-1 rounded-3xl flex items-center justify-center mb-7"
                onClick={handelMagicLinkSignIn}
              >
                {magicLinkLoader && (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                Send Magic Link
              </button>

              <p className="text-black text-sm font-bold mt-5 mb-10">
                BACK TO?{" "}
                <b
                  className="cursor-pointer no-underline hover:underline text-purple-500"
                  onClick={() => {
                    setOpenMagicLinkAuth(false);
                  }}
                >
                  LOGIN
                </b>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
