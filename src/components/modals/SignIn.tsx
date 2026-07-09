/** @format */

import { useState, useEffect } from "react";
import InputComp from "../Inputs/InputComp";

const SignIn = ({
  setShowDisableLoginBtn,
}: {
  setShowDisableLoginBtn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (email && password) {
      setShowDisableLoginBtn(false);
    } else {
      setShowDisableLoginBtn(true);
    }
  }, [email, password]);
  return (
    <div>
      {/* Email */}
      <InputComp
        fieldLabel='Email'
        type='email'
        placeholder='Enter your email'
        value={email}
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        className='w-full mb-2 h-10 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2'
      />

      {/* Password */}
      <InputComp
        fieldLabel='Password'
        type='password'
        placeholder='Choose password'
        value={password}
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        className='w-full mb-2 h-10 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2'
      />
    </div>
  );
};

export default SignIn;
