import { useNavigate, useSearchParams } from "@remix-run/react"

export function SearchBar() {
    const navigate = useNavigate()
    let [searchParams] = useSearchParams();

    const clearFilters = () => {
        searchParams.delete('filter')
        searchParams.delete('sort')
        navigate('/')
    }

    return (
        <form className="flex gap-x-4 border-b-blue-900 border-opacity-30">
            <div className={`flex items-center w-3/4`}>
                <input type="text" name="filter" className="w-full rounded-xl px-3 py-2 text-black text-sm bg-gray-50" placeholder="Search..." />
            </div>

            <button type="submit" className="text-sm rounded-2xl bg-yellow-300 dark:bg-gray-400 font-semibold dark:text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1 items-center align-middle">
                Search
            </button>
            {searchParams.get('filter') &&
                <button onClick={clearFilters} className="rounded-xl bg-red-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1">
                    Clear Filters
                </button>
            }
            <div className="flex-1" />

        </form>
    )
}