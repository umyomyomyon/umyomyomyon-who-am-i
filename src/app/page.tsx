'use client';

import { Header } from './components/Header/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-[200vh] flex-col items-center justify-between p-24 z-10">
        <p className="text-type">portfolio content</p>
      </main>
    </>
  );
}
