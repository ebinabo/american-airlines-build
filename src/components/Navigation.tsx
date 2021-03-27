import Link from "next/link"

const routes: string[] = ["Plan Travel", "Travel Information", "AAdvantage"]

export default function Navigation() {
    return (
        <nav className="container mx-auto px-6">
            <div className="flex items-center justify-between">
                <div>
                    <img
                        src="/images/aa-logo.png"
                        alt="American Airlines Logo"
                    />
                </div>
                <div>
                    <ul className="flex items-center text-blue-500 space-x-8 uppercase">
                        {routes.map(route => (
                            <li key={route}>
                                <Link href="/">
                                    <a>{route}</a>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <select
                                className="border-none pr-8 uppercase"
                                name=""
                                id=""
                            >
                                <option value="">English</option>
                                <option value="">French</option>
                            </select>
                        </li>
                        <li>
                            <button className="px-8 py-1.5 rounded-md bg-blue-500 uppercase text-white">
                                Login
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
