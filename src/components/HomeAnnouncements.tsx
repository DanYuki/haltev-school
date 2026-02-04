import AnnouncementCard from "./AnnouncementCard";
import ArticleList from "./ArticleList";
import { announcements, articles } from "../data/homeContent";

export default function HomeAnnouncements() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3">
                <AnnouncementCard
                    heading="Acara Terbaru"
                    title={announcements[0].title}
                    date={announcements[0].date}
                    time={announcements[0].time}
                />

                <AnnouncementCard
                    heading="SPMB 2026/2027"
                    title={announcements[1].title}
                    date={announcements[1].date}
                    time={announcements[1].time}
                />

                <ArticleList articles={articles} />
            </div>
        </section>
    );
}
