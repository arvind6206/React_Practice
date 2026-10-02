import { Film, Search, User } from "lucide-react";
import React from "react";


const Navbar = ({setSearch}: any) => {
  return (
    <div className="bg-slate-200 h-13 flex items-center justify-between pl-5 pr-5">
      <div className='flex gap-2 items-center'>
        <Film />
        <h2 className='text-xl font-bold text-'>Reelo</h2>
      </div>
      <div className='flex text-md font-semibold gap-3'>
        <p>Movies</p>
        <p>TV shows</p>
        <p>Watchlist</p>
      </div>
      <div className='relative'>
        <input
            className='border rounded-md pl-10 pr-4 py-2'
            type='search'
            placeholder='Search movies'
            onChange={(e) => setSearch(e.target.value)}
            />
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500'/>

      </div>
      <div>
        <User />
      </div>
    </div>
  );
};

export default Navbar;
