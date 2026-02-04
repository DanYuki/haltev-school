import ProfileHero from "../components/profile/ProfileHero";
import PrincipalWelcome from "../components/profile/PrincipalWelcome";
import WhyHaltevProfile from "../components/profile/WhyHaltevProfile";
import ProfileAccordion from "../components/profile/ProfileAccordion";
import ProfileGallery from "../components/profile/ProfileGallery";

export default function Profile() {
    return (
        <>
            <ProfileHero />
            <PrincipalWelcome />
            <WhyHaltevProfile />
            <ProfileAccordion />
            <ProfileGallery />
        </>
    );
}
