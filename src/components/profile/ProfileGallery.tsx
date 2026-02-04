const images = [
    "https://placehold.co/400x250",
    "https://placehold.co/400x250",
    "https://placehold.co/400x250",
];

export default function ProfileGallery() {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        className="rounded shadow object-cover"
                        alt="Gallery"
                    />
                ))}
            </div>
        </section>
    );
}
