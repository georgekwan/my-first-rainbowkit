import Head from 'next/head';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <>
      <Head></Head>
      <main>
        <h1>My First RainbowKit Button</h1>
        <ConnectButton />
      </main>
    </>
  );
}
