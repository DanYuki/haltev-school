export default function PrincipalWelcome() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

                {/* Text */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">
                        Sambutan dari Kepala Sekolah
                    </h2>

                    <p className="italic mb-4">
                        Assalamu’alaikum warahmatullahi wabarakatuh
                    </p>

                    <p className="text-sm leading-relaxed mb-4">
                        Selamat datang di SMA Haltev, sekolah yang berkomitmen
                        memberikan layanan pendidikan terbaik dengan pembinaan karakter
                        dan keterampilan abad 21.
                    </p>

                    <p className="text-sm leading-relaxed mb-6">
                        Kami percaya pendidikan bukan hanya tentang akademik,
                        tetapi juga pembentukan kepribadian, tanggung jawab,
                        dan kesiapan menghadapi masa depan.
                    </p>

                    <p className="font-semibold">
                        Kepala Sekolah, M.Pd
                    </p>
                    <p className="text-sm text-gray-500">
                        Kepala Sekolah
                    </p>
                </div>

                {/* Photo */}
                <div className="flex justify-center">
                    <div className="p-4 rounded">
                        <img
                            src="https://placehold.co/300x380"
                            alt="Kepala Sekolah"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
