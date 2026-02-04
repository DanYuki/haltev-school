const items = [
    "Visi SMA Haltev",
    "Misi SMA Haltev",
    "Tujuan SMA Haltev",
    "Bantuan bagi Siswa SMA Haltev",
];

export default function ProfileAccordion() {
    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-6 space-y-4">
                {items.map((title) => (
                    <details
                        key={title}
                        className="bg-primary px-6 py-4 rounded cursor-pointer text-white"
                    >
                        <summary className="font-semibold text-sm uppercase">
                            {title}
                        </summary>
                        <p className="mt-3 text-sm text-white">
                            Konten {title.toLowerCase()} (dummy).
                        </p>
                    </details>
                ))}
            </div>
        </section>
    );
}
