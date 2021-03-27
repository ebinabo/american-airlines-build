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
        <footer className="mt-64">
            <div className="bg-blue-100">
                <div className="container mx-auto px-6 pt-12 pb-16">
                    <div className="grid grid-cols-4">
                        {categories.map(category => (
                            <div key={category.name}>
                                <h3 className="text-blue-700">
                                    {category.name}
                                </h3>
                                <ul className="mt-4 space-y-4">
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
                    <p>Something here</p>
                </div>
            </div>
        </footer>
    )
}
