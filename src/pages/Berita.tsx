import { beritaList } from "../data/berita";

export default function Berita() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-primary text-white py-20 text-center">
                <h1 className="text-3xl font-bold mb-2">
                    Berita Sekolah
                </h1>
                <p className="text-blue-200">
                    Informasi dan kegiatan terbaru SMA Haltev
                </p>
            </section>

            {/* Articles */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {beritaList.map((item, index) => (
                        <article
                            key={index}
                            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <p className="text-sm text-secondary mb-2">
                                    🕒 {item.date}
                                </p>

                                <h2 className="font-bold text-lg mb-3 leading-snug">
                                    {item.title}
                                </h2>

                                <p className="text-sm text-gray-600 mb-4">
                                    {item.excerpt}
                                </p>

                                <button className="text-secondary font-medium hover:underline">
                                    Baca Selengkapnya →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}
