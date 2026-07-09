/** @format */

import React from "react";
import ButtonComp from "../ButtonComp/ButtonComp";
import { PUBSUB_TOPICS } from "@/constants";
import PubSub from "pubsub-js";
import Cart from "../Cart/Cart";

const RightSection = () => {
  const handleOpenRegisterModal = () => {
    // Logic to open the register modal
    PubSub.publish(PUBSUB_TOPICS.TOPIC_SIGNUP, {
      open: true,
      title: "Sign Up",
      mode: "signup",
    });
  };

  const handleOpenLoginModal = () => {
    PubSub.publish(PUBSUB_TOPICS.TOPIC_SIGNIN, {
      open: true,
      title: "Sign In",
      mode: "signin",
    });
  };
  return (
    <React.Fragment>
      <ButtonComp
        placeholder='Sign Up'
        className='bg-(--primary-color) text-white px-4 py-2 rounded-lg hover:bg-(--primary-hover-color) transition-all duration-300 font-sans font-normal text-xs cursor-pointer'
        disabled={false}
        type='button'
        onClick={handleOpenRegisterModal}
      />
      <ButtonComp
        placeholder='Sign In'
        className='text-(--primary-color) bg-transparent px-4 py-2 rounded-lg hover:bg-(--primary-color) transition-all duration-300 font-sans font-normal text-xs border border-(--primary-color) hover:text-white cursor-pointer'
        disabled={false}
        type='button'
        onClick={handleOpenLoginModal}
      />

      <Cart />
    </React.Fragment>
  );
};

export default RightSection;
