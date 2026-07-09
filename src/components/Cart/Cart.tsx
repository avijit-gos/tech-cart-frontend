/** @format */

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ShoppingCart, X } from "lucide-react";
import ButtonComp from "../ButtonComp/ButtonComp";

const Cart = () => {
  return (
    <Drawer direction='right'>
      <DrawerTrigger asChild>
        <Button
          variant='outline'
          className='bg-transparent hover:bg-transparent'>
          <ShoppingCart />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='bg-(--primary-color) border-b'>
          <div className='flex items-center justify-between'>
            <DrawerTitle className='flex items-center gap-2 text-white'>
              <span className='text-2xl font-semibold'>Cart</span>
              <ShoppingCart className='h-5 w-5 animate-bounce' />
            </DrawerTitle>

            <DrawerClose asChild>
              <ButtonComp
                placeholder={<X className='h-5 w-5' />}
                className='text-white bg-white/10 hover:bg-white/30 ease-linear duration-300 transition-all hover:text-white'></ButtonComp>
            </DrawerClose>
          </div>
        </DrawerHeader>
        <div className='no-scrollbar overflow-y-auto px-4'>CART BODY</div>
        <DrawerFooter>FOOTER</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
