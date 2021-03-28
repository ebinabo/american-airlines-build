import Link from "next/link"
import { useState } from "react"
import { Transition } from "@headlessui/react"

const routes: string[] = ["Plan Travel", "Travel Information", "AAdvantage"]

export default function Navigation() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <div className="relative">
            <nav className="container mx-auto px-6">
                <div className="flex items-center justify-between space-x-4">
                    <div className="flex-shrink-0">
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

                    <button
                        className="block md:hidden"
                        onClick={() => setMenuIsOpen(true)}
                    >
                        <svg
                            className="w-10 h-10 fill-current text-gray-800"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    <ul className="hidden md:flex items-center overflow-x-auto text-blue-500 space-x-4 lg:space-x-8 uppercase py-2">
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

            {/* Mobile Menu */}
            {/* 
            Entering: ""
              From: ""
              To: ""
            Leaving: ""
              From: ""
              To: ""
               */}
            <Transition
                as="div"
                show={menuIsOpen}
                className="absolute w-full inset-0"
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div className="mx-2 mt-2 bg-white rounded-lg pt-4 pb-8">
                    <div className="flex justify-between items-center px-4">
                        <img
                            className="h-14 p-2 pl-0 inline-block sm:hidden"
                            src="/images/aa-logo-mini.png"
                            alt="American Airlines Logo"
                        />
                        <button onClick={() => setMenuIsOpen(false)}>
                            <svg
                                className="w-10 h-10 fill-current text-gray-800"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <ul className="mt-6 text-center text-3xl text-blue-500 space-y-4">
                        {routes.map(route => (
                            <li className="" key={route}>
                                <Link href="/">
                                    <a>{route}</a>
                                </Link>
                            </li>
                        ))}
                        <li className="">
                            <select
                                className="border-none pr-12 uppercase text-3xl"
                                name=""
                                id=""
                            >
                                <option value="">English</option>
                                <option value="">French</option>
                            </select>
                        </li>
                        <li className="px-4">
                            <button className="w-full py-1.5 rounded-md bg-blue-500 uppercase text-white">
                                Login
                            </button>
                        </li>
                    </ul>
                </div>
            </Transition>
        </div>
    )
}
