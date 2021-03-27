export default function DownloadApp() {
    return (
        <div className="bg-blue-700">
            <div className="container mx-auto mt-32 px-6">
                <div className="grid grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-4xl text-white font-bold">
                            Download the American Airline app for easy access to
                            travel
                        </h2>
                        <p className="text-white mt-2">
                            Make your next experience one smooth ride with the
                            american airline app. Use it to discover your
                            destination, plan on the go, store your tickets
                            offline and enjoy exclusive, app-user perks.
                        </p>
                        <div className="flex space-x-2 mt-10">
                            <img
                                src="/images/android.png"
                                alt="Download Android"
                            />
                            <img src="/images/iphone.png" alt="Download iOS" />
                        </div>
                    </div>
                    <div className="pt-16 pb-9">
                        <img src="/images/download-app.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
