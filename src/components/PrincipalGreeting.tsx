export default function PrincipalGreeting() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                <img
                    src="https://placehold.co/400x500"
                    alt="Kepala Sekolah"
                    className="rounded-xl shadow"
                />

                <div>
                    <h3 className="text-3xl font-bold mb-4">
                        Sambutan Kepala Sekolah
                    </h3>

                    <p className="italic mb-4">
                        Assalamu’alaikum Warahmatullahi Wabarakatuh
                    </p>

                    <p className="text-sm leading-relaxed mb-4">
                        Selamat datang di Sekolah Haltev, sekolah yang berkomitmen
                        membentuk generasi berkarakter, kompeten, dan siap menghadapi
                        masa depan.
                    </p>

                    <p className="font-semibold">
                        — Kepala Sekolah
                    </p>
                </div>
            </div>
        </section>
    );
}
