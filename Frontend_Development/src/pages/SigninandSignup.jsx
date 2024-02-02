import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupModal from './SignupModal';
import SignInModal from './SignInModal';

const SigninandSignup = () => {
  const navigate = useNavigate();
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };
  
  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  return (
    <div className='h-screen flex flex-col items-center mt-7 justify-center text-white'>
  
      <button
        className="bg-blue-600 font-bold px-10 py-4 rounded-lg hover:bg-blue-700 cursor-pointer mb-3"
        onClick={openSignupModal}
      >
        Signup
      </button>
      <button
        className="bg-blue-600 font-bold px-10 py-4 rounded-lg hover:bg-blue-700 cursor-pointer mb-3"
        onClick={openSignInModal}
      >
        Sign In
      </button>
      <SignupModal isOpen={isSignupModalOpen} closeModal={closeSignupModal} />
      <SignInModal isOpen={isSignInModalOpen} closeModal={closeSignInModal} />
    </div>
  );
};

export default SigninandSignup;
