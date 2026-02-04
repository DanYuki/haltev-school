import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// @ts-expect-error: Will not error
import "swiper/css";

// @ts-expect-error: Will not error
import "swiper/css/pagination";

const slides = [
    {
        image:
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
        title: "Selamat Datang di Sekolah Haltev",
        subtitle: "Membangun Generasi Unggul dan Berkarakter",
    },
    {
        image:
            "https://images.unsplash.com/photo-1509062522246-3755977927d7",
        title: "Lingkungan Belajar Nyaman",
        subtitle: "Fasilitas modern dan pendidik profesional",
    },
    {
        image:
            "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
        title: "Pendidikan Berbasis Nilai",
        subtitle: "Ilmu, iman, dan akhlak berjalan seimbang",
    },
];

export default function Hero() {
    return (
        <section className="h-screen">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="h-screen flex items-center justify-center text-center text-white relative"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60" />

                            {/* Content */}
                            <div className="relative max-w-3xl px-6">
                                <p className="italic text-sm mb-4">
                                    Assalamualaikum Warahmatullahi Wabarakatuh
                                </p>

                                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                    {slide.title}
                                </h2>

                                <p className="mb-6 text-lg">
                                    {slide.subtitle}
                                </p>

                                <div className="flex justify-center gap-4">
                                    <button className="bg-secondary px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
                                        Datangi Sekolah
                                    </button>
                                    <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-primary transition">
                                        Lihat Profil
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
