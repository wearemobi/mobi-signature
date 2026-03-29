import ProfileHeader from "@/components/ProfileHeader";
import MarkdownBlock from "@/components/MarkdownBlock";
import profileData from "@/data/profile.json";

import ShareSection from "@/components/ShareSection";

export default function Home() {
    const { signature, about, content } = profileData;

    return (
        <main className="max-w-2xl mx-auto min-h-screen bg-white pb-20">
            {/* M2: Identity Header */}
            <ProfileHeader
                name={signature.name}
                headline={signature.headline}
                avatarUrl={signature.avatarUrl}
            />
            <article className="px-6 space-y-12 mt-12">
                {/* M2.2: About Section */}
                <section>
                    <MarkdownBlock content={about} />
                </section>

                {/* M2.2: Content/Services Section */}
                <section className="pt-8 border-t border-black">
                    <MarkdownBlock content={content} />
                </section>
            </article>

            {/* Footer M.O.B.I.™ */}
            <footer className="mt-20 px-6 text-center">
                <div className="border-t border-black">
                    <ShareSection name={signature.name} role={signature.headline} />
                    <div className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-medium  pt-6">
                        Powered by M.O.B.I.™ · Signature Engine v1.4
                    </div>
                </div>
            </footer>
        </main>
    );
}
