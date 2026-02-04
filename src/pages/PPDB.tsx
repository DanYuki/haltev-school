export default function PPDB() {
    return (
        <>
            {/* Header */}
            <section className="bg-primary text-white py-20 text-center">
                <h1 className="text-3xl font-bold mb-2">
                    PPDB SMA Haltev
                </h1>
                <p className="text-blue-200">
                    Penerimaan Peserta Didik Baru Tahun Ajaran 2026 / 2027
                </p>
            </section>

            {/* Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 space-y-20">

                    {/* Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">
                            Informasi Pendaftaran
                        </h2>
                        <p className="text-gray-600 leading-relaxed max-w-3xl">
                            SMA Haltev membuka Penerimaan Peserta Didik Baru (PPDB)
                            untuk tahun ajaran 2026 / 2027. Proses pendaftaran
                            dilakukan secara online dan offline dengan sistem
                            seleksi yang transparan dan adil.
                        </p>

                        <ul className="mt-6 list-disc pl-5 text-gray-600 space-y-2">
                            <li>Jenjang: Sekolah Menengah Atas (SMA)</li>
                            <li>Tahun Ajaran: 2026 / 2027</li>
                            <li>Gelombang: Gelombang 1 & Gelombang 2</li>
                            <li>Kuota Terbatas</li>
                        </ul>
                    </div>

                    {/* Flow */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8">
                            Alur Pendaftaran
                        </h2>

                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                "Mengisi Formulir Pendaftaran",
                                "Verifikasi Data",
                                "Tes Seleksi & Wawancara",
                                "Pengumuman & Daftar Ulang",
                            ].map((step, index) => (
                                <div
                                    key={index}
                                    className="border rounded-lg p-6 text-center"
                                >
                                    <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <p className="text-sm font-medium">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">
                            Formulir Pendaftaran
                        </h2>

                        <form className="grid md:grid-cols-2 gap-6 max-w-4xl">
                            <input
                                type="text"
                                placeholder="Nama Lengkap Calon Siswa"
                                className="border rounded px-4 py-3"
                            />

                            <input
                                type="text"
                                placeholder="Asal Sekolah"
                                className="border rounded px-4 py-3"
                            />

                            <input
                                type="text"
                                placeholder="Nama Orang Tua / Wali"
                                className="border rounded px-4 py-3"
                            />

                            <input
                                type="tel"
                                placeholder="Nomor WhatsApp"
                                className="border rounded px-4 py-3"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="border rounded px-4 py-3 md:col-span-2"
                            />

                            <textarea
                                placeholder="Catatan Tambahan (opsional)"
                                rows={4}
                                className="border rounded px-4 py-3 md:col-span-2"
                            />

                            <button
                                type="submit"
                                className="bg-secondary text-white px-6 py-3 rounded hover:bg-blue-700 transition md:col-span-2 w-fit"
                            >
                                Daftar Sekarang
                            </button>
                        </form>

                        <p className="text-sm text-gray-500 mt-4">
                            * Form ini masih dummy dan belum terhubung ke sistem pendaftaran resmi.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
