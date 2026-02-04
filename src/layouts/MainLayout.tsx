import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function MainLayout() {
    return (
        <>
            <Navbar />

            {/* Page Content */}
            <main className="">
                <Outlet />
            </main>

            <Footer />

            {/* Floating WhatsApp Button */}
            <WhatsAppButton />
        </>
    );
}
