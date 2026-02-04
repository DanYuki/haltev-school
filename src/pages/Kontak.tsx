import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Kontak() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-primary text-white py-20 text-center">
                <h1 className="text-3xl font-bold mb-2">
                    Kontak Kami
                </h1>
                <p className="text-blue-200">
                    Hubungi Sekolah Haltev untuk informasi lebih lanjut
                </p>
            </section>

            {/* Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">
                            Informasi Kontak
                        </h2>

                        <ul className="space-y-4 text-sm">
                            <li className="flex gap-3 items-start">
                                <MapPinIcon className="w-6 h-6 text-secondary" />
                                <span>
                                    Jl.Boulevard Raya Barat Blok RGA no.30 Ruko Grand Galaxy City RT.001, RT.001/RW.002, Jaka Setia, Bekasi Selatan, Bekasi, West Java 17147
                                </span>
                            </li>

                            <li className="flex gap-3 items-center">
                                <PhoneIcon className="w-6 h-6 text-secondary" />
                                <span>0878-0009-2728</span>
                            </li>

                            <li className="flex gap-3 items-center">
                                <EnvelopeIcon className="w-6 h-6 text-secondary" />
                                <span>admin@haltev.id</span>
                            </li>
                        </ul>

                        {/* Map */}
                        <div className="mt-8 rounded-lg overflow-hidden border">
                            <iframe
                                title="Map Sekolah Haltev"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4716.271073216716!2d106.97112677026477!3d-6.277475921267072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d539b46c9af%3A0xff8faea93bde772!2sHaltev%20IT%20Kursus%20Programming%2CCoding%2CKelas%20AI%2C%20Cyber%20Security%2C%20Game%20Dev%2C%20Data%20Science%2C%20Digital%20Marketing%20dan%20Microsoft%20Office!5e0!3m2!1sen!2sid!4v1770162376558!5m2!1sen!2sid"
                                className="w-full h-40"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">
                            Kirim Pesan
                        </h2>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Nama Lengkap"
                                className="w-full border rounded px-4 py-3"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border rounded px-4 py-3"
                            />

                            <textarea
                                placeholder="Pesan"
                                rows={5}
                                className="w-full border rounded px-4 py-3"
                            />

                            <button
                                type="submit"
                                className="bg-secondary text-white px-6 py-3 rounded hover:bg-blue-700 transition"
                            >
                                Kirim Pesan
                            </button>
                        </form>

                        <p className="text-xs text-gray-500 mt-3">
                            * Form ini masih dummy (belum terkoneksi backend)
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
