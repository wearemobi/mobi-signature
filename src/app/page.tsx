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

            {/* Reducido space-y-12 a space-y-8 y mt-12 a mt-8 */}
            <article className="px-6 space-y-8 mt-8">
                {/* M2.2: About Section */}
                <section>
                    <MarkdownBlock content={about} />
                </section>

                {/* M2.2: Content/Services Section - Reducido pt-8 a pt-4 */}
                <section className="pt-4 border-t border-black">
                    <MarkdownBlock content={content} />
                </section>
            </article>

            {/* Footer M.O.B.I.™ - Reducido mt-20 a mt-12 */}
            <footer className="mt-12 px-6 text-center">
                <div className="border-t border-black">
                    <ShareSection
                        name={signature.name}
                        role={signature.headline}
                        shareTitle={signature.shareTitle}
                        shareText={signature.shareText}
                    />
                    {/* Versión actualizada a v1.5 por el Print Engine */}
                    <div className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-medium pt-4">
                        Powered by M.O.B.I.™ · Signature Engine v1.5
                    </div>
                </div>
            </footer>
        </main>
    );
}
