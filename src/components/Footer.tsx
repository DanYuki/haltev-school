import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
    return (
        <footer className="bg-primary text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">

                {/* Brand */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">
                        Sekolah Haltev
                    </h3>
                    <p className="text-sm text-blue-200 leading-relaxed">
                        Sekolah Haltev berkomitmen membentuk generasi
                        berakhlak, berprestasi, dan siap menghadapi masa depan.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold mb-4">
                        Tautan Cepat
                    </h4>
                    <ul className="space-y-2 text-sm text-blue-200">
                        <li><a href="#" className="hover:text-white">Profil Sekolah</a></li>
                        <li><a href="#" className="hover:text-white">PPDB</a></li>
                        <li><a href="#" className="hover:text-white">Kegiatan</a></li>
                        <li><a href="#" className="hover:text-white">Kontak</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-semibold mb-4">
                        Kontak
                    </h4>
                    <ul className="space-y-3 text-sm text-blue-200">
                        <li className="flex gap-2 items-start">
                            <MapPinIcon className="w-5 h-5 flex-shrink-0" />
                            <span>
                                Jl.Boulevard Raya Barat Blok RGA no.30 Ruko Grand Galaxy City RT.001, RT.001/RW.002, Jaka Setia, Bekasi Selatan, Bekasi, West Java 17147
                            </span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <PhoneIcon className="w-5 h-5" />
                            <span>0878-0009-2728</span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <EnvelopeIcon className="w-5 h-5" />
                            <span>admin@haltev.id</span>
                        </li>
                    </ul>
                </div>

                {/* Map */}
                <div>
                    <h4 className="font-semibold mb-4">
                        Lokasi
                    </h4>
                    <div className="rounded-lg overflow-hidden border border-blue-700">
                        <iframe
                            title="Map Sekolah Haltev"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4716.271073216716!2d106.97112677026477!3d-6.277475921267072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d539b46c9af%3A0xff8faea93bde772!2sHaltev%20IT%20Kursus%20Programming%2CCoding%2CKelas%20AI%2C%20Cyber%20Security%2C%20Game%20Dev%2C%20Data%20Science%2C%20Digital%20Marketing%20dan%20Microsoft%20Office!5e0!3m2!1sen!2sid!4v1770162376558!5m2!1sen!2sid"
                            className="w-full h-40"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-blue-800 py-4 text-center text-sm text-blue-200">
                © {new Date().getFullYear()} Haltev IT Learning Center. All rights reserved.
            </div>
        </footer>
    );
}


{/* <iframe  width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}