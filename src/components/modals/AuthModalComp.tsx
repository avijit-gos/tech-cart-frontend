/** @format */

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PubSub from "pubsub-js";
import { PUBSUB_TOPICS } from "../../constants/index";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import SignUp from "./SignUp";
import AuthButton from "../ButtonComp/AuthButton";
import SignIn from "./SignIn";

type ModalSize = "sm" | "md" | "lg" | "xl" | "full";

const sizes: Record<ModalSize, string> = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  full: "max-w-[95vw]",
};

export default function AuthModal({
  size,
}: {
  size: ModalSize;
  showCloseButton: boolean;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [mode, setMode] = useState<"signup" | "signin">("signup");
  const [showDisableRegisterBtn, setShowDisableRegisterBtn] =
    useState<boolean>(true);
  const [showDisableLoginBtn, setShowDisableLoginBtn] = useState<boolean>(true);
  const reduceMotion = useReducedMotion();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token = PubSub.subscribe(
      PUBSUB_TOPICS.TOPIC_SIGNUP,
      (_, data: { open: boolean; title: string; mode: string }) => {
        console.log("SIGNUP", data);
        setOpen(data.open);
        setTitle(data.title);
        setMode(data.mode as "signup" | "signin");
      }
    );

    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);

  useEffect(() => {
    const token = PubSub.subscribe(
      PUBSUB_TOPICS.TOPIC_SIGNIN,
      (_, data: { open: boolean; title: string; mode: string }) => {
        console.log("SIGNIN:", data);
        setOpen(data.open);
        setTitle(data.title);
        setMode(data.mode as "signup" | "signin");
      }
    );

    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);

  // Lock body scroll
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onClose = () => {
    setOpen(false);
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center p-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          {/* Overlay */}

          <motion.div className='absolute inset-0 bg-black/40 backdrop-blur-sm' />

          {/* Modal */}

          <motion.div
            ref={modalRef}
            role='dialog'
            aria-modal='true'
            initial={
              reduceMotion
                ? {}
                : {
                    opacity: 0,
                    y: 40,
                    scale: 0.95,
                  }
            }
            animate={
              reduceMotion
                ? {}
                : {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }
            }
            exit={
              reduceMotion
                ? {}
                : {
                    opacity: 0,
                    y: 20,
                    scale: 0.95,
                  }
            }
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full ${sizes[size]} rounded-2xl bg-white shadow-2xl`}>
            {/* Modal Header */}
            <motion.div className='p-4 flex items-center justify-between'>
              <div>
                <p className='text-xl font-bold antialiased'>{title}</p>
                {mode === "signup" ? (
                  <p className='text-xs text-gray-500 font-light'>
                    Sign up to access exclusive deals and manage your orders
                    with ease
                  </p>
                ) : (
                  <p className='text-xs text-gray-500 font-light'>
                    Welcome back! Sign in to continue your shopping journey.
                  </p>
                )}
              </div>
              <Button
                variant='ghost'
                className='cursor-pointer'
                onClick={onClose}>
                <X />
              </Button>
            </motion.div>

            {/* Modal Body */}
            <motion.div className='p-4 '>
              {mode === "signup" ? (
                <SignUp setShowDisableRegisterBtn={setShowDisableRegisterBtn} />
              ) : (
                <SignIn setShowDisableLoginBtn={setShowDisableLoginBtn} />
              )}
            </motion.div>

            {/* Modal Footer */}
            <motion.div className='p-4 '>
              {mode === "signup" ? (
                <AuthButton
                  placeholder='Sign Up'
                  showDisableRegisterBtn={showDisableRegisterBtn}
                  className='w-full h-10 bg-(--primary-color) hover:bg-(--primary-hover-color) cursor-pointer text-white font-semibold rounded-md transition duration-300'
                  disableclassName='w-full h-10 bg-gray-400 text-white font-semibold rounded-md cursor-not-allowed bg-(--primary-disable-color) hover:bg-(--primary-disable-color)'
                />
              ) : (
                <AuthButton
                  placeholder='Sign In'
                  showDisableRegisterBtn={showDisableLoginBtn}
                  className='w-full h-10 bg-(--primary-color) hover:bg-(--primary-hover-color) cursor-pointer text-white font-semibold rounded-md transition duration-300'
                  disableclassName='w-full h-10 bg-gray-400 text-white font-semibold rounded-md cursor-not-allowed bg-(--primary-disable-color) hover:bg-(--primary-disable-color)'
                />
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
