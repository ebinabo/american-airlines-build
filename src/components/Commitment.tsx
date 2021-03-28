export default function Commitment() {
    return (
        <div className="container mx-auto mt-20 xl:mt-40 px-6">
            <div className="grid xl:grid-cols-5 gap-4 xl:gap-10 items-center">
                <div className="xl:col-span-3 aspect-w-10 aspect-h-6">
                    <img
                        className="absolute inset-0"
                        src="/images/commitment.png"
                        alt="American Airlines Commitment"
                    />
                </div>
                <div className="xl:col-span-2">
                    <h2 className="text-blue-500 font-bold text-3xl">
                        American Airline Commitment
                    </h2>
                    <p className="mt-4 xl:mt-6 text-blue-300">
                        We’ve enhanced our cleaning procedures and added new
                        protocols at every step to reduce risks when you fly.
                        Amerian airline cares about your health and everything
                        that belongs to you. We are here to give you the best
                        commitment to your flight.
                    </p>
                    <p className="mt-4 xl:mt-6 text-blue-300">
                        We’ve enhanced our cleaning procedures and added new
                        protocols at every step to reduce risks when you fly.
                        Amerian airline cares about your ealth and everything
                        that belongs to you. We are here to give you the best
                        commitment to your flight.
                    </p>
                    <button className="w-full sm:w-auto mt-6 xl:mt-10 px-8 py-4 rounded-md font-bold tracking-wide bg-blue-500 text-white">
                        SEE COMMITMENT
                    </button>
                </div>
            </div>
        </div>
    )
}
