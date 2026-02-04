export default function ProfileHero() {
    return (
        <section
            className="h-[360px] flex items-center justify-center text-white relative"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative text-center px-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    Profil SMA Haltev
                </h1>
                <p className="text-sm text-gray-200">
                    Sekolah SMA Berbasis Keterampilan
                </p>
            </div>
        </section>
    );
}
