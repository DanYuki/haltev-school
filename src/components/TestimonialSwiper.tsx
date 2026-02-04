import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// @ts-expect-error: Will not error
import "swiper/css";

// @ts-expect-error: Will not error
import "swiper/css/pagination";

import { testimonials } from "../data/testimonials";

export default function TestimonialSwiper() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Title */}
                <h3 className="text-3xl font-bold text-center mb-16 uppercase">
                    Testimoni
                </h3>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 7000, disableOnInteraction: false }}
                    loop
                    className="pb-12"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="grid md:grid-cols-[200px_1fr] gap-10 items-center">

                                {/* Avatar */}
                                <div className="flex justify-center">
                                    <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center text-4xl font-bold text-white">
                                        {item.name.charAt(0)}
                                    </div>
                                </div>

                                {/* Content */}
                                <div>
                                    <p className="text-gray-600 italic leading-relaxed mb-6">
                                        “{item.message}”
                                    </p>

                                    <p className="font-semibold text-lg">
                                        {item.name}
                                    </p>
                                    <p className="text-sm text-secondary">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
