import Link from "next/link"

const routes: string[] = ["Plan Travel", "Travel Information", "AAdvantage"]

export default function Navigation() {
    return (
        <nav className="container mx-auto px-6">
            <div className="flex items-center justify-between space-x-4">
                <div className="flex-shrink-0 -ml-10 sm:ml-0">
                    <img
                        className="sm:inline-block hidden"
                        src="/images/aa-logo.png"
                        alt="American Airlines Logo"
                    />
                    <img
                        className="h-14 p-2 pl-0 inline-block sm:hidden"
                        src="/images/aa-logo-mini.png"
                        alt="American Airlines Logo"
                    />
                </div>

                <ul className="flex items-center overflow-x-auto text-blue-500 space-x-4 lg:space-x-8 uppercase py-2">
                    {routes.map(route => (
                        <li className="flex-shrink-0" key={route}>
                            <Link href="/">
                                <a>{route}</a>
                            </Link>
                        </li>
                    ))}
                    <li className="flex-shrink-0">
                        <select
                            className="border-none pr-8 uppercase"
                            name=""
                            id=""
                        >
                            <option value="">English</option>
                            <option value="">French</option>
                        </select>
                    </li>
                    <li className="flex-shrink-0">
                        <button className="px-8 py-1.5 rounded-md bg-blue-500 uppercase text-white">
                            Login
                        </button>
                    </li>
                </ul>
                {/* <div></div> */}
            </div>
        </nav>
    )
}
