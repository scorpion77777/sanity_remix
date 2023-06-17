import React from 'react'
import { CiSearch } from 'react-icons/ci';

function SearchBar() {
    return (
        <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only text-blue-300">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <CiSearch />
                </div>
                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required></input>
            </div>

        </form>

    )
}

export default SearchBar