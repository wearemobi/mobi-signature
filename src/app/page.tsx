import ProfileHeader from "@/components/ProfileHeader";
import MarkdownBlock from "@/components/MarkdownBlock";
import profileData from "@/data/profile.json";

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
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold border-t border-black pt-4">
                    Powered by M.O.B.I.™ · Signature Engine v1.0
                </p>
            </footer>
        </main>
    );
}
