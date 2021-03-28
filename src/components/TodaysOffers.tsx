interface Offer {
    thumbnail: string
    title: string
    offer: string
}

const offers: Offer[] = [
    {
        thumbnail: "/images/offers-1.png",
        title: "Trip to Paris",
        offer:
            "From seasonal deals to early-bird discounts, find more ways to culture and save when you book them!",
    },
    {
        thumbnail: "/images/offers-2.png",
        title: "Trip to California",
        offer:
            "From seasonal deals to early-bird discounts, find more ways to culture and save when you book them!",
    },
    {
        thumbnail: "/images/offers-3.png",
        title: "Trip to Los Angeles",
        offer:
            "From seasonal deals to early-bird discounts, find more ways to culture and save when you book them!",
    },
]

export default function TodaysOffers() {
    return (
        <div className="container mx-auto mt-12 md:mt-32 px-6">
            <h2 className="text-blue-700 text-3xl">Today's Offers</h2>
            <div className="grid md:grid-cols-3 gap-4 mt-6 md:mt-8">
                {offers.map(({ offer, thumbnail, title }) => (
                    <div key={title} className="shadow-md rounded-md">
                        <div className="aspect-w-2 aspect-h-1">
                            <img src={thumbnail} alt="" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-blue-700">{title}</h3>
                            <p className="mt-3 text-blue-300">{offer}</p>
                            <button className="mt-6 px-4 py-1 border rounded-md text-blue-500 border-blue-500">
                                See Deal
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full sm:w-auto uppercase text-white tracking-wide font-bold px-8 py-4 rounded-md bg-blue-500 mt-12 block mx-auto">
                View All Deals
            </button>
        </div>
    )
}
