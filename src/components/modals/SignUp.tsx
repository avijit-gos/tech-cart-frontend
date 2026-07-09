/** @format */

import React, { useEffect, useState } from "react";
import InputComp from "../Inputs/InputComp";

const SignUp = ({
  setShowDisableRegisterBtn,
}: {
  setShowDisableRegisterBtn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  useEffect(() => {
    if (name && email && password && cPassword && password === cPassword) {
      setShowDisableRegisterBtn(false);
    } else {
      setShowDisableRegisterBtn(true);
    }
  }, [name, email, password, cPassword]);

  return (
    <div>
      {/* Name */}
      <InputComp
        fieldLabel='Name'
        type='text'
        placeholder='Enter your name'
        value={name}
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        className='w-full mb-2 h-10 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2'
      />

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

      {/* Confirm Password */}
      <InputComp
        fieldLabel='Confirm password'
        type='password'
        placeholder='Confirm password'
        value={cPassword}
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCPassword(e.target.value)
        }
        className='w-full mb-2 h-10 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2'
      />
    </div>
  );
};

export default SignUp;
