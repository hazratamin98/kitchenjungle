import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "src/context/AuthContext";
import { db, setDoc, doc } from "src/firebase";

const SignUp = () => {
  const { signIn } = useContext(AuthContext);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handlesubmit = (e) => {
    e.preventDefault();
    setError("");

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        const data = {
          uid: user.uid,
          name: firstname + " " + lastname,
          email,
          phone,
        };

        setDoc(doc(db, "users", user.uid), data)
          .then(() => {
            console.log("saved");
            history.push("/Login");
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);

        console.log({ errorCode, errorMessage });
      });
  };

  return (
    <div className="  md:grid grid-cols-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-full w-full    "
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        ></path>
      </svg>
      {/* <img
        src={Image}
        class="  flex align-center justify-center h-full p-22 w-3/5 bg-yellow-300  sm:h-16"
        alt="junglefood"
      /> */}
      <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          {error && (
            <alert className="bg-red-400 py-4 px-2 rounded text-black text-2xl">
              {error}
            </alert>
          )}
          <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create account
            </h2>
            <p className="text-center">
              Already have an account?{" "}
              <a
                className="underline cursor-pointer text-blue-700"
                href="SignIn"
              >
                Sign in
              </a>{" "}
            </p>
          </div>
          <form class="mt-8 space-y-6" action="#">
            <input type="hidden" name="remember" value="true" />
            <div class="rounded shadow-sm  space-y-4 ">
              <div className="space-y-4">
                <span className="text-1xl font-semi-bold italic">
                  First name
                </span>
                {/* <label for="email-address" class="sr-only">
                First name
              </label> */}
                <input
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                  id="Frist_name"
                  name="name"
                  type="text"
                  required
                  class="  rounded shadow-md  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
            <div class="rounded shadow-sm  space-y-4 ">
              <div className="space-y-4">
                <span className="text-1xl font-semi-bold italic">
                  Last name
                </span>

                <input
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                  id="last_name"
                  name="name"
                  type="text"
                  required
                  class="  rounded shadow-md  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div class="rounded shadow-sm  space-y-4 ">
              <div className="space-y-4">
                <span className="text-1xl font-semi-bold italic">Email</span>

                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="  rounded shadow-md  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div class="rounded shadow-sm  space-y-4 ">
              <div className="space-y-4">
                <span className="text-1xl font-semi-bold italic">
                  Phone (optional)
                </span>

                <input
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  id="number"
                  name="number"
                  type="number"
                  class="  rounded shadow-md  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div class="rounded shadow-sm  space-y-4 ">
              <div className="space-y-4">
                <span className="text-1xl font-semi-bold italic">Password</span>

                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                  name="password"
                  type="password"
                  class="  rounded shadow-md  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handlesubmit}
                type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
