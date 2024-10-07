"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Header() {
  return (
    <header className='flex justify-between items-center p-4 bg-gray-800 text-white'>
      Header here
      <ConnectButton
        label='Connect'
        showBalance={false}
        accountStatus={"address"}
        chainStatus={"icon"}
        // className='bg-orange-200'
      />
    </header>
  );
}
