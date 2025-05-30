import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import lang from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/");
      });
  };

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
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
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscibe when component unmounts
    return () => unsubscibe();
  }, []);

  const handleGptSearchClick =() => {
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange =(e) => {
     dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between ">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user && ( 
        
       
        <div className="flex p-2">
         { showGptSearch && ( <select className="p-2 m-2 bg-black text-white" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
         </select> )} 
          <button className="py-2 px-4 my-4 mx-4 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>{showGptSearch  ? "HomePage" : "GPt Search" }</button>
          <img className="w-12 h-12 " alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="bg-white font-bold">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
