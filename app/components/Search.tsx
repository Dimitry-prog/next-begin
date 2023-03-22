'use client'

import React, {FormEvent, useState} from 'react';
import {useRouter} from "next/navigation";

const Search = () => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/${search}/`);
  }

  return (
    <form onSubmit={handleSubmit} className="w-50 flex justify-center md:justify-between">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search..."
        className="w-80 p-2 text-xl bg-white rounded-xl outline-none focus:bg-slate-200 transition-all duration-500"
      />
      <button
        type="submit"
        className="p-2 ml-2 text-xl font-bold bg-slate-300 rounded-xl active:scale-75 transition-all duration-500"
      >
        🔎
      </button>
    </form>
  );
};

export default Search;