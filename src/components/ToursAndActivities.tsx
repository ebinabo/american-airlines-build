const images: { city: string; image: string }[] = [
    { city: "Germany Tours", image: "/images/germany.png" },
    { city: "California", image: "/images/california.png" },
    { city: "Paris", image: "/images/paris.png" },
    { city: "Australia", image: "/images/australia.png" },
    { city: "France", image: "/images/france.png" },
]

export default function ToursAndActivities() {
    return (
        <div className="container mx-auto mt-12 md:mt-32 px-6">
            <h2 className="text-blue-700 text-3xl">Tours and Activities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-x-5 gap-y-6 mt-6 md:mt-8">
                {images.map(({ city, image }, index) => (
                    <div
                        key={city}
                        className={`${
                            index
                                ? "row-span-1 aspect-h-1"
                                : "row-span-2 aspect-h-2"
                        } ${index > 2 ? "hidden md:block" : ""} aspect-w-1`}
                    >
                        <img
                            className="w-full object-cover rounded-md"
                            src={image}
                            alt=""
                        />
                        <div className="relative">
                            <p className="absolute top-16 transform translate-x-1/2 right-1/2 pb-6 border-b-4 border-white text-2xl text-white">
                                {city}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
