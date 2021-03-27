interface News {
    thumbnail: string
    title: string
    news: string
}

const news: News[] = [
    {
        thumbnail: "/images/news-1.png",
        title: "Travel benefit",
        news:
            "From seasonal deals to early-bird discounts, find more ways to culture and save when you book them!",
    },
    {
        thumbnail: "/images/news-2.png",
        title: "England best places",
        news:
            "From seasonal deals to early-bird discounts, find more ways to culture and save when you book them!",
    },
    {
        thumbnail: "/images/news-3.png",
        title: "New York City",
        news:
            "From seasonal deals to early-bird discounts, find more ways to culture and save when you book them!",
    },
]

export default function TravelNews() {
    return (
        <div className="container mx-auto mt-40 px-6">
            <h2 className="text-blue-700 text-3xl">Travel News</h2>
            <div className="grid grid-cols-3 gap-4 mt-8">
                {news.map(item => (
                    <div>
                        <div className="w-full aspect-w-2 aspect-h-1">
                            <img
                                className="absolute inset-0"
                                src={item.thumbnail}
                                alt=""
                            />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.news}</p>
                        <button>Read More</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
