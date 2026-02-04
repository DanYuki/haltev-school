import HomeAnnouncements from "../components/HomeAnnouncements";
import WhyUs from "../components/WhyUs";
import TestimonialSwiper from "../components/TestimonialSwiper";
import PrincipalGreeting from "../components/PrincipalGreeting";
import Hero from "../components/Hero";

export default function Home() {
    return (
        <>
            <Hero />
            <HomeAnnouncements />
            <WhyUs />
            <TestimonialSwiper />
            <PrincipalGreeting />
        </>
    );
}
