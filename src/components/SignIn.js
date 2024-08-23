import Header from "./Header";
import { useState, useRef } from "react";
import { validateFormData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, USER_ICON } from "../utils/constant";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignInToggle = () => {
    setIsSignIn(!isSignIn);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = validateFormData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      // SignUp logic and create a user
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCrendetial) => {
          const user = userCrendetial.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_ICON,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMessage(errorCode);
        });
    } else {
      // SignIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCrendetial) => {
          const user = userCrendetial.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMessage(errorCode);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMG} alt="bg-img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute bg-black p-12 my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="rounded-sm p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="rounded-sm p-4 my-4 w-full bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="rounded-sm p-4 my-4 w-full bg-gray-800"
        />
        <p className="text-red-600">{errorMessage}</p>
        <button
          className="bg-red-700 font-medium p-4 my-6 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="font-semibold cursor-pointer"
          onClick={handleSignInToggle}
        >
          {isSignIn
            ? "New to Netflix ? SignUp Now"
            : "Already registerd ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default SignIn;
