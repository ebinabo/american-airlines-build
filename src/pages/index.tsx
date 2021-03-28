import Head from "next/head"
import {
    BookingSection,
    Commitment,
    DownloadApp,
    Footer,
    Hero,
    Navigation,
    TodaysOffers,
    ToursAndActivities,
    TravelNews,
    WhyFlyWithUs,
} from "../components"

export default function Home() {
    return (
        <>
            <Head>
                <title>American Airlines Rebuild</title>
            </Head>
            <Navigation />
            <main>
                <Hero />
                <BookingSection />
                <WhyFlyWithUs />
                <TodaysOffers />
                <Commitment />
                <DownloadApp />
                <ToursAndActivities />
                <TravelNews />
                <Footer />
            </main>
        </>
    )
}
