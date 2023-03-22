'use client';

import React, {useEffect} from 'react';
import Link from "next/link";

const Error = ({error, reset}: {
  error: Error;
  reset: () => void;
}) => {

  useEffect(() => {
    console.error(error);
  }, [error])

  return (
    <main className="max-w-lg min-h-screen py-1 px-4 mx-auto bg-slate-200">
      <h2 className="my-4 text-2xl font-bold">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        type="button"
        className="p-4 mb-4 text-white bg-red-500 rounded-xl hover:opacity-70 transition-all duration-500"
      >
        Try again
      </button>
      <p className="text-xl">
        Or go to back{' '}
        <Link href="/" className="underline hover:opacity-70 transition-all duration-500">Home 🏡</Link>
      </p>
    </main>
  );
};

export default Error;