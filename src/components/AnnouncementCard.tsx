type Props = {
    heading: string;
    title: string;
    date: string;
    time: string;
};

export default function AnnouncementCard({
    heading,
    title,
    date,
    time,
}: Props) {
    return (
        <div>
            <h3 className="text-xl font-bold mb-4 uppercase">
                {heading}
            </h3>

            <div className="relative border rounded-xl overflow-hidden bg-white shadow">
                {/* Date Badge */}
                <div className="absolute top-0 left-0 bg-secondary text-white px-4 py-2 text-center">
                    <p className="text-lg font-bold leading-none">17</p>
                    <p className="text-xs uppercase">Nov 2025</p>
                </div>

                {/* Content */}
                <div className="flex flex-col items-center justify-center min-h-[280px] px-6 text-center">
                    <div className="text-6xl mb-4">⚠️</div>

                    <p className="font-bold text-lg mb-6">
                        {title}
                    </p>

                    <div className="flex gap-6 text-sm text-gray-500">
                        <span>🕒 {time}</span>
                        <span>📍 Sekolah</span>
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
