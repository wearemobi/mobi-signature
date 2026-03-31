import ProfileHeader from "@/components/ProfileHeader";
import MarkdownBlock from "@/components/MarkdownBlock";
import profileData from "@/data/profile.json";
import ShareSection from "@/components/ShareSection";

export default function Home() {
    const { signature, about, content } = profileData;

    return (
        <main className="max-w-2xl mx-auto min-h-screen bg-white pb-12"> {/* Reducido pb-20 a pb-12 */}
            {/* M2: Identity Header */}
            <ProfileHeader
                name={signature.name}
                headline={signature.headline}
                avatarUrl={signature.avatarUrl}
            />

            {/* M2: About and ontent */}
            <article className="px-6 space-y-8 mt-8">
                {/* M2.2: About Section */}
                <section>
                    <MarkdownBlock content={about} />
                </section>

                {/* M2.2: Content/Services Section */}
                <section className="pt-4 border-t border-black">
                    <MarkdownBlock content={content} />
                </section>
            </article>

            {/* Footer */}
            <footer className="px-6 text-center border-t border-black">
                <div>
                    <ShareSection
                        name={signature.name}
                        role={signature.headline}
                        shareTitle={signature.shareTitle}
                        shareText={signature.shareText}
                    />
                    {/* M.O.B.I. Branding Link */}
                    <div className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-medium pt-4">
                        <a
                            href="https://wearemobi.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black transition-colors duration-300"
                        >
                            Powered by M.O.B.I.™
                        </a>
                        <span className="mx-2">·</span>
                        Signature Engine v1.8
                    </div>
                </div>
            </footer>
        </main>
    );
}
