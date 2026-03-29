import Image from "next/image";

interface ProfileHeaderProps {
    name: string;
    headline: string;
    avatarUrl?: string;
}

export default function ProfileHeader({ name, headline, avatarUrl }: ProfileHeaderProps) {
    return (
        <header className="flex flex-col items-center text-center py-12 px-6">
            {avatarUrl && (
                <div className="relative w-32 h-32 mb-6 grayscale border border-black-100 rounded-full overflow-hidden">
                    <Image
                        src={avatarUrl}
                        alt={name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            <h1 className="text-5xl font-bold tracking-tighter uppercase mb-2">
                {name}
            </h1>

            <p className="text-xl font-light tracking-widest uppercase">
                {headline}
            </p>
        </header>
    );
}
