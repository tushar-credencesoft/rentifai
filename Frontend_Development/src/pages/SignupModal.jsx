import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const SignupModal = ({ state, setState }) => {
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    repeat_password: "",
    emailOtp: "",
    drivingLicense: "",
  });
  const [hasIntlLicense, setHasIntlLicense] = useState(false);

  const [signUpSteps, setSignUpSteps] = useState({
    fullNameSection: true,
    emailAndPhoneSection: false,
    passwordAndRepeatPasswordSection: false,
    licenceSection: false,
    otpSection: false,
  });

  const [timer, setTimer] = useState(120);
  const [canResend, setCanResend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resendOTPLoader, setResendOTPLoader] = useState(false);

  // console.log(state.userSelected);
  // console.log(userDetails);
  // console.log(timer);

  useEffect(() => {
    if (signUpSteps.otpSection) {
      let timerId;
      if (timer > 0) {
        timerId = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
      } else {
        setCanResend(true);
        clearInterval(timerId);
      }
      return () => clearInterval(timerId);
    }
  }, [timer, signUpSteps.otpSection]);

  const handleResendOtp = async () => {
    // Logic to resend OTP
    // Reset timer
    setTimer(120);
    setCanResend(false);

    //configuring the loader
    setResendOTPLoader((prev) => !prev);

    // Resending the OTP Again to the Email
    await axios
      .post(
        "https://rentifai-dev-node.coinbitwallet.com/rentifai/auth/verify-email",
        {
          email: userDetails.email,
        }
      )
      .then((res) => {
        if (res.status === 201) {
          toast.success(res.data.message);
          setResendOTPLoader((prev) => !prev);
        } else {
          console.log(res.status);
          setResendOTPLoader((prev) => !prev);
          toast.error("Error during OTP verification. Please try again.");
        }
      })
      .catch((error) => {
        console.log(error);
        setResendOTPLoader((prev) => !prev);
        toast.error(error.message);
      });
  };

  // NZ phone verification
  function validateNewZealandPhoneNumber(phoneNumber) {
    // New Zealand phone number regular expression
    const nzPhoneRegex = /^02[0-2,6-9][\s-]?\d{3,4}[\s-]?\d{3,4}$/;

    // Test the phone number against the regular expression
    return nzPhoneRegex.test(phoneNumber);
  }

  const handleNext = async () => {
    if (signUpSteps.fullNameSection) {
      if (userDetails.fullName === "") {
        return toast.warn("Please enter the Full Name.");
      }
      setSignUpSteps((prev) => {
        return { ...prev, fullNameSection: false };
      });
      setSignUpSteps((prev) => {
        return { ...prev, emailAndPhoneSection: true };
      });
    } else if (signUpSteps.emailAndPhoneSection) {
      if (userDetails.email === "" || userDetails.phone === "") {
        return toast.warn("Please enter both email and phone.");
      } else if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
        return toast.warn("Please enter Valid email address.");
      } else if (!validateNewZealandPhoneNumber(userDetails.phone)) {
        return toast.warn("Please enter a valid phone number.");
      }
      setSignUpSteps((prev) => {
        return { ...prev, emailAndPhoneSection: false };
      });
      setSignUpSteps((prev) => {
        return { ...prev, passwordAndRepeatPasswordSection: true };
      });
    } else if (signUpSteps.passwordAndRepeatPasswordSection) {
      if (userDetails.password === "" || userDetails.repeat_password === "") {
        return toast.warn("Please enter both password and repeat password.");
      } else if (userDetails.password.length < 8) {
        return toast.warn("Password must be atleast 8 characters.");
      } else if (userDetails.password !== userDetails.repeat_password) {
        return toast.warn("Password and repeat password didn't match.");
      }

      //configuring the loader
      setIsLoading((prev) => !prev);

      const userRole = state.userSelected === "rent-a-car" ? "user" : "owner";

      // Sending OTP to the email
      await axios
        .post(
          "https://rentifai-dev-node.coinbitwallet.com/rentifai/auth/verify-email",
          {
            email: userDetails.email,
            role: userRole,
          },
          {
            validateStatus: function (status) {
              return (
                (status >= 200 && status < 300) ||
                [400, 401, 403, 404].includes(status)
              );
            },
          }
        )
        .then((res) => {
          // console.log(res);
          if (res) {
            // If the user is previously registered.
            if (res.status === 403) {
              setIsLoading((prev) => !prev);
              // Future Todo
              // Redirection to Login Page
              // ...
              return toast.warn(res.data.message);
            }

            if (res.status === 201) {
              toast.success(res.data.message);
              setSignUpSteps((prev) => {
                return { ...prev, passwordAndRepeatPasswordSection: false };
              });
              setSignUpSteps((prev) => {
                return { ...prev, otpSection: true };
              });
              setIsLoading((prev) => !prev);
            } else {
              console.log(res.status);
              toast.error("Error during OTP verification. Please try again.");
            }
          }
        })
        .catch((error) => {
          console.log(error);
          setIsLoading((prev) => !prev);
          toast.error(error.message);
        });
    } else if (signUpSteps.otpSection) {
      if (userDetails.emailOtp === "") {
        return toast.warn("Please enter the OTP.");
      }

      //configuring the loader
      setIsLoading((prev) => !prev);
      const userRole = state.userSelected === "rent-a-car" ? "user" : "owner";

      // API Work
      await axios
        .post(
          "https://rentifai-dev-node.coinbitwallet.com/rentifai/auth/verify-otp",
          {
            otp: userDetails.emailOtp,
            email: userDetails.email,
            full_name: userDetails.fullName,
            password: userDetails.password,
            phone: userDetails.phone,
            role: userRole,
            driving_license_number: "",
          },
          {
            validateStatus: function (status) {
              return (
                (status >= 200 && status < 300) ||
                [400, 401, 403, 404].includes(status)
              );
            },
          }
        )
        .then((res) => {
          if (res) {
            if (res.status === 400) {
              setIsLoading((prev) => !prev);
              return toast.warn(res.data.message);
            }

            if (res.status === 200) {
              setIsLoading((prev) => !prev);
              toast.success(res.data.message);
              // Navigating pages
              setSignUpSteps((prev) => {
                return { ...prev, otpSection: false };
              });

              // Licence is not needed for the owner
              if (state.userSelected === "list-a-car") {
                setState((prev) => {
                  return {
                    ...prev,
                    isSignInModalOpen: false,
                    isSignupModalOpen: false,
                  };
                });
                return;
              }

              setSignUpSteps((prev) => {
                return { ...prev, licenceSection: true };
              });
            }
          }
        })
        .catch((error) => {
          console.log(error);
          setIsLoading((prev) => !prev);
          toast.error(error.message);
        });
    } else if (signUpSteps.licenceSection) {
      if (userDetails.drivingLicense === "") {
        return toast.warn("Please Enter the Licence.");
      }

      // Future Todo
      // Licence Verification
      // ...
      setState((prev) => {
        return { ...prev, isSignInModalOpen: false, isSignupModalOpen: false };
      });
    }
  };

  const handleSkip = () => {
    setState((prev) => {
      return { ...prev, isSignInModalOpen: false, isSignupModalOpen: false };
    });
  };

  const openSignInModal = () => {
    setState((prev) => {
      return { ...prev, isSignInModalOpen: true, isSignupModalOpen: false };
    });
  };

  const SignUpWithGoogle = () => {
    const role = state.userSelected === "list-a-car" ? "owner" : "user";
    window.open(
      `https://rentifai-dev-node.coinbitwallet.com/rentifai/auth/google/callback?role=${role}`,
      "_self"
    );
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${
        state.isSignupModalOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => {
        const modalContent = document.querySelector(".bg-white");
        if (modalContent && !modalContent.contains(e.target)) {
          setState((prev) => {
            return {
              ...prev,
              isSignInModalOpen: false,
              isSignupModalOpen: false,
            };
          });
        }
      }}
    >
      <div className="fixed inset-0 transition-transform transform">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-white rounded-lg absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-0 border-2 border-purple-400 w-full ">
          <div className="bg-white p-6 py-11 mt-10 rounded-lg flex flex-col items-center">
            <h1 className="text-5xl font-black text-gray-800 mb-12 text-center">
              Create Account
            </h1>

            {signUpSteps.fullNameSection && (
              <input
                className={`border border-gray-400 rounded-2xl p-1 text-center font-bold mb-2 w-80 py-2 text-xl ${
                  userDetails.fullName.trim() !== ""
                    ? "text-black"
                    : "text-gray-500"
                }`}
                placeholder="Full Name"
                value={userDetails.fullName}
                onChange={(e) =>
                  setUserDetails((prev) => {
                    return { ...prev, fullName: e.target.value };
                  })
                }
              />
            )}

            {signUpSteps.emailAndPhoneSection && (
              <>
                <input
                  className={`border border-gray-400 rounded-2xl p-1 text-center font-bold mb-5 px-10 w-80 py-2 text-xl ${
                    userDetails.email.trim() !== ""
                      ? "text-black"
                      : "text-gray-500"
                  }`}
                  placeholder="Email"
                  value={userDetails.email}
                  onChange={(e) =>
                    setUserDetails((prev) => {
                      return { ...prev, email: e.target.value.trim() };
                    })
                  }
                />
                <input
                  className={`border border-gray-400 rounded-2xl p-1 text-center font-bold mb-5 px-10 w-80 py-2 text-xl ${
                    userDetails.phone.trim() !== ""
                      ? "text-black"
                      : "text-gray-500"
                  }`}
                  placeholder="Phone Number"
                  value={userDetails.phone}
                  onChange={(e) =>
                    setUserDetails((prev) => {
                      return { ...prev, phone: e.target.value };
                    })
                  }
                />
              </>
            )}

            {signUpSteps.passwordAndRepeatPasswordSection && (
              <>
                <input
                  className={`border border-gray-400 rounded-2xl p-1 text-center font-bold mb-5 px-10 w-80 py-2 text-xl ${
                    userDetails.email.trim() !== ""
                      ? "text-black"
                      : "text-gray-500"
                  }`}
                  placeholder="Password"
                  value={userDetails.password}
                  onChange={(e) =>
                    setUserDetails((prev) => {
                      return { ...prev, password: e.target.value };
                    })
                  }
                />
                <input
                  className={`border border-gray-400 rounded-2xl p-1 text-center font-bold mb-5 px-10 w-80 py-2 text-xl ${
                    userDetails.phone.trim() !== ""
                      ? "text-black"
                      : "text-gray-500"
                  }`}
                  placeholder="Repeat Password"
                  value={userDetails.repeat_password}
                  onChange={(e) =>
                    setUserDetails((prev) => {
                      return { ...prev, repeat_password: e.target.value };
                    })
                  }
                />
              </>
            )}

            {signUpSteps.licenceSection && (
              <>
                <input
                  className={`border border-gray-400 rounded-2xl p-1 text-center font-bold mb-7 px-10 w-80 py-2 text-xl ${
                    userDetails.drivingLicense.trim() !== ""
                      ? "text-black"
                      : "text-gray-500"
                  }`}
                  placeholder="Enter Driving License"
                  value={userDetails.drivingLicense}
                  onChange={(e) =>
                    setUserDetails((prev) => {
                      return { ...prev, drivingLicense: e.target.value };
                    })
                  }
                />

                <div className="flex items-center mt-2 ">
                  <input
                    type="checkbox"
                    id="intlLicense"
                    checked={hasIntlLicense}
                    onChange={() => setHasIntlLicense(!hasIntlLicense)}
                    className="mr-2"
                  />
                  <label htmlFor="intlLicense" className="text-black">
                    Do you have an international driving license?
                  </label>
                </div>
              </>
            )}

            {signUpSteps.otpSection && (
              <>
                <input
                  className={`border border-gray-400 rounded-2xl p-1 text-center font-bold mb-5 px-10 w-80 py-2 text-xl ${
                    userDetails.emailOtp.trim() !== ""
                      ? "text-black"
                      : "text-gray-500"
                  }`}
                  placeholder="Email OTP"
                  value={userDetails.emailOtp}
                  onChange={(e) =>
                    setUserDetails((prev) => {
                      return { ...prev, emailOtp: e.target.value };
                    })
                  }
                />

                {timer > 0 && (
                  <p>
                    Resend OTP in {Math.floor(timer / 60)}:
                    {timer % 60 < 10 ? `0${timer % 60}` : timer % 60} seconds
                  </p>
                )}
                {canResend && (
                  <button
                    onClick={handleResendOtp}
                    className="hover:text-purple-600 cursor-pointer duration-100 flex items-center justify-center"
                  >
                    {resendOTPLoader && (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-300"
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
                    Resend OTP
                  </button>
                )}
              </>
            )}

            {signUpSteps.fullNameSection ||
            signUpSteps.emailAndPhoneSection ||
            signUpSteps.passwordAndRepeatPasswordSection ? (
              <button
                className="bg-purple-400 hover:bg-purple-500 text-white px-14 py-1 mt-8 rounded-3xl flex justify-center items-center mb-10"
                onClick={handleNext}
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
                Next
              </button>
            ) : null}

            {signUpSteps.otpSection && (
              <button
                className="bg-purple-400 hover:bg-purple-500 text-white px-14 py-1 mt-8 rounded-3xl items-center mb-10"
                onClick={handleNext}
              >
                Verify
              </button>
            )}

            {signUpSteps.licenceSection ? (
              <button
                className="bg-purple-400 hover:bg-purple-500 text-white px-14 py-1 mt-4 rounded-3xl items-center"
                onClick={handleNext}
              >
                Submit
              </button>
            ) : null}

            {signUpSteps.fullNameSection && (
              <>
                <p className="text-gray-400 font-Bebas text-[25px] mb-3">
                  OR LOGIN WITH
                </p>
                <div className="flex justify-center space-x-2 mb-2 gap-2">
                  {/* Google Logo */}
                  <img
                    onClick={SignUpWithGoogle}
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
                </div>
              </>
            )}

            {(signUpSteps.fullNameSection ||
              signUpSteps.passwordAndRepeatPasswordSection) && (
              <p className="text-black mt-10 text-sm mb-8">
                Already have an account?
                <span
                  className="text-purple-400 hover:text-purple-500 cursor-pointer no-underline hover:underline ml-1"
                  onClick={openSignInModal}
                >
                  Log in
                </span>
              </p>
            )}

            {signUpSteps.licenceSection && (
              <p className="text-black mt-2 text-sm mb-5">
                <span
                  className="cursor-pointer no-underline hover:underline text-purple-400 hover:bg-purple-500"
                  onClick={handleSkip}
                >
                  Skip
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
