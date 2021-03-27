export default function Hero() {
    return (
        <div className="aspect-w-2 aspect-h-1 bg-hero">
            <div className="container mx-auto px-6">
                <div className="h-full grid content-center">
                    <h2 className="text-white font-bold text-5xl">
                        Travel with peace of mind
                    </h2>
                    <p className="text-white text-2xl mt-4">
                        Visit your favourite countries in happiness and get
                        ticket at affordable price.
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <div className="relative flex items-center">
                            <img
                                src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.319 14.4326C20.7628 11.2941 20.542 6.75345 17.6569 3.86827C14.5327 0.744075 9.46734 0.744075 6.34315 3.86827C3.21895 6.99246 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8744 16.9497 15.8891L21.1924 20.1317C21.5829 20.5222 22.2161 20.5222 22.6066 20.1317C22.9971 19.7412 22.9971 19.108 22.6066 18.7175L18.364 14.4749C18.3493 14.4602 18.3343 14.4461 18.319 14.4326ZM16.2426 5.28248C18.5858 7.62563 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62563 7.75736 5.28248C10.1005 2.93934 13.8995 2.93934 16.2426 5.28248Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A"
                                alt="search button"
                                className="absolute ml-1"
                            />
                            <label htmlFor="search" className="sr-only">
                                Search AA.com
                            </label>
                            <input
                                placeholder="Search AA.com"
                                type="text"
                                className="w-112 h-12 pl-8 rounded-lg"
                            />
                        </div>
                        <button className="uppercase text-white bg-blue-500">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
