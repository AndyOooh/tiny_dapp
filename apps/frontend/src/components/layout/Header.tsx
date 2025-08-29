"use client";

import { Flex } from "@radix-ui/themes";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaSink } from "react-icons/fa";
import Link from "next/link";
import { useAccount } from "wagmi";
import { CustomConnectButton } from './CustomConnectButton';

export function Header() {
  const { address } = useAccount();

  return (
    <Flex py='3' justify='between' align='center' gap='1' className='sticky top-0 z-50 shadow-lg shadow-[--shadow-1]' style={{ backgroundColor: "var(--gray-1)" }}>
      <Link href='/'>
        <FaSink color='var(--accent-9)' size={24} />
      </Link>
      {/* <ConnectButton
        label='Connect'
        // chainStatus="none"
        chainStatus='icon'
        accountStatus='avatar'
        // accountStatus="full"
      /> */}
      <CustomConnectButton />
    </Flex>
  );
}
