import { AcademicCapIcon, BuildingLibraryIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const items = [
    {
        title: "Kurikulum",
        desc: "Menggabungkan kurikulum nasional dan penguatan karakter.",
        icon: AcademicCapIcon
    },
    {
        title: "Guru Berkualitas",
        desc: "Tenaga pendidik berpengalaman dan dekat dengan siswa.",
        icon: UserGroupIcon,
    },
    {
        title: "Fasilitas",
        desc: "Lingkungan belajar nyaman dan modern.",
        icon: BuildingLibraryIcon,
    },
];

export default function WhyUs() {
    return (
        <section className="py-20 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-6">
                <h3 className="text-3xl font-bold mb-12">
                    Mengapa Sekolah Haltev?
                </h3>

                <div className="grid md:grid-cols-3 gap-8">
                    {items.map(({ title, desc, icon: Icon }) => (
                        <div
                            key={title}
                            className="bg-white text-primary rounded-xl p-6 shadow-lg text-center"
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-4">
                                <Icon className="w-12 h-12 text-secondary" />
                            </div>

                            <h4 className="text-xl font-semibold mb-3">
                                {title}
                            </h4>

                            <p className="text-sm">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
