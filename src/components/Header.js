import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, PREFERED_LANGUAGE } from "../utils/constant";
import { toggleGeminiSearch } from "../utils/geminiSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const showGeminiSearch = useSelector(
    (store) => store.gemini.showGeminiSearch
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGeminiSearchButton = () => {
    dispatch(toggleGeminiSearch());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed top-0 left-0 right-0 px-6 py-4 bg-gradient-to-b from-black to-transparent z-50 flex justify-between items-center w-full h-16">
      <img
        className="w-32 cursor-pointer"
        src={LOGO}
        alt="logo"
        onClick={() => navigate("/browse")}
      />

      {user && (
        <div className="flex items-center">
          {showGeminiSearch && (
            <select
              className="m-2 p-2 bg-gray-700 text-white rounded-lg"
              onChange={handleLangChange}
            >
              {PREFERED_LANGUAGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="mx-2 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500"
            onClick={handleGeminiSearchButton}
          >
            {showGeminiSearch ? "Home" : "Gemini Search"}
          </button>
          <img
            className="w-10 h-10 rounded-full mx-2"
            alt="userIcon"
            src={user.photoURL}
          />
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-500"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
