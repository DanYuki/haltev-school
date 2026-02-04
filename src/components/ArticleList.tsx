import { NewspaperIcon } from "@heroicons/react/24/outline";

type Article = {
    title: string;
    date: string;
    image: string;
};

type Props = {
    articles: Article[];
};

export default function ArticleList({ articles }: Props) {
    return (
        <div>
            <h3 className="text-xl font-bold mb-4 uppercase">
                Berita Terkini
            </h3>

            <div className="space-y-4">
                {articles.map((item, index) => (
                    <div
                        key={index}
                        className="flex gap-4 items-start"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-24 h-16 object-cover rounded"
                        />

                        <div>
                            <p className="font-semibold leading-snug">
                                {item.title}
                            </p>
                            <p className="text-sm text-secondary mt-1">
                                🕒 {item.date}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="mt-6 inline-flex items-center gap-2 bg-secondary text-white px-5 py-2 rounded hover:bg-blue-700 transition">
                <NewspaperIcon className="w-5 h-5" />
                Baca Berita Lainnya
            </button>
        </div>
    );
}
