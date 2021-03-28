import Link from "next/link"

interface Category {
    name: string
    links: string[]
}

const categories: Category[] = [
    {
        name: "About American",
        links: [
            "About Us",
            "Careers",
            "Investor relations",
            "Newsroom",
            "Legal, privacy, copyright",
            "Environmental, social and governance",
            "Combating Human Trafficking",
        ],
    },
    {
        name: "Help",
        links: [
            "Contact American",
            "Reciepts and refund",
            "FAQs",
            "Agency reference",
            "Cargo",
            "Bags and optional fees",
            "Conditions of carriage",
        ],
    },
    {
        name: "Extras",
        links: [
            "Business programs",
            "Gift cards",
            "American Airline Credit card",
            "Trip insurance",
        ],
    },
]

export default function Footer() {
    return (
        <footer className="mt-12 sm:mt-20 md:mt-32">
            <div className="bg-blue-100">
                <div className="container mx-auto px-6 pt-12 pb-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
                        {categories.map(category => (
                            <div key={category.name}>
                                <h3 className="text-blue-700 text-xl">
                                    {category.name}
                                </h3>
                                <ul className="mt-4 space-y-4 text-blue-300 text-base">
                                    {category.links.map(link => (
                                        <li key={link}>{link}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div>
                            <img src="/images/aa-cards.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-blue-700">
                <div className="container mx-auto px-6 py-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-0">
                        <p className="text-white">
                            <Link href="https://kemiadeleke.com">
                                <a className="underline" target="_blank">
                                    Kem Kem
                                </a>
                            </Link>
                            <span> x </span>
                            <Link href="mailto:edgarjohn95@gmail.com">
                                <a className="underline" target="_blank">
                                    ebinabo
                                </a>
                            </Link>
                        </p>
                        <p className="sm:justify-self-center col-start-1 sm:col-start-2 text-white">
                            <span className="hidden sm:inline-block">
                                &copy; 2020 American Airline
                            </span>
                            <span className="sm:hidden inline-block">
                                &copy; 2020 AA
                            </span>
                        </p>
                        <div className="justify-self-end row-start-1 col-start-2 sm:col-start-3 row-span-2 grid items-center">
                            <svg
                                width="124"
                                height="24"
                                viewBox="0 0 124 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.00201 12.002C2.00318 16.9214 5.58042 21.1101 10.439 21.881V14.892H7.90201V12.002H10.442V9.80204C10.3285 8.75958 10.6845 7.72064 11.4137 6.96698C12.1428 6.21332 13.1694 5.82306 14.215 5.90204C14.9656 5.91417 15.7142 5.98101 16.455 6.10205V8.56104H15.191C14.7559 8.50405 14.3184 8.64777 14.0018 8.95171C13.6852 9.25566 13.5238 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8175 21.0506 22.5021 16.2518 21.9475 10.9611C21.3929 5.67041 16.7933 1.73997 11.4808 2.01722C6.16838 2.29447 2.00286 6.68235 2.00201 12.002Z"
                                    fill="white"
                                />
                                <path
                                    d="M69.995 6.68799C70.8914 6.15208 71.5622 5.30823 71.882 4.31399C71.0396 4.81379 70.118 5.16587 69.157 5.35499C67.8246 3.94552 65.7135 3.60251 64.0034 4.51764C62.2933 5.43277 61.4075 7.37948 61.841 9.26999C58.3906 9.09676 55.176 7.4669 52.997 4.78599C51.8598 6.74741 52.4409 9.25477 54.325 10.516C53.6437 10.4941 52.9775 10.3096 52.382 9.97799C52.382 9.99599 52.382 10.014 52.382 10.032C52.3824 12.0751 53.8224 13.8351 55.825 14.24C55.193 14.4119 54.5302 14.4372 53.887 14.314C54.4502 16.0613 56.0605 17.2583 57.896 17.294C56.3758 18.4871 54.4985 19.1342 52.566 19.131C52.2235 19.1315 51.8812 19.1118 51.541 19.072C53.5034 20.333 55.7874 21.0023 58.12 21C61.3652 21.0223 64.484 19.7429 66.7787 17.448C69.0734 15.1531 70.3525 12.0342 70.33 8.78899C70.33 8.60299 70.3257 8.41799 70.317 8.23399C71.1574 7.62659 71.8828 6.87414 72.459 6.01199C71.676 6.35905 70.8455 6.58691 69.995 6.68799Z"
                                    fill="white"
                                />
                                <path
                                    d="M112.006 19.012H111.986C111.924 19.012 105.721 19 104.156 18.575C103.295 18.3432 102.623 17.6707 102.392 16.81C102.111 15.2224 101.975 13.6123 101.986 12C101.979 10.385 102.118 8.77271 102.403 7.183C102.641 6.32151 103.31 5.64595 104.169 5.4C105.691 5 111.723 5 111.979 5H112C112.063 5 118.282 5.012 119.831 5.437C120.69 5.67001 121.36 6.3411 121.593 7.2C121.883 8.79354 122.02 10.4113 122 12.031C122.007 13.644 121.867 15.2543 121.582 16.842C121.348 17.7016 120.675 18.3726 119.815 18.605C118.295 19.008 112.262 19.012 112.006 19.012ZM110.006 9.005L110.001 15.005L115.213 12.005L110.006 9.005Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
