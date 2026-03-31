import ProfileHeader from "@/components/ProfileHeader";
import MarkdownBlock from "@/components/MarkdownBlock";
import ShareSection from "@/components/ShareSection";

import profileData from "@/data/profile.json";
import PoweredBy from "@/components/PoweredBy";

export default function Home() {
    const { signature, about, content } = profileData;

    return (
        <main className="max-w-2xl mx-auto min-h-screen bg-white pb-12">
            <ProfileHeader
                name={signature.name}
                headline={signature.headline}
                avatarUrl={signature.avatarUrl}
            />
            <article className="px-6 space-y-8 mt-8">
                <section>
                    <MarkdownBlock content={about} />
                </section>

                <section>
                    <MarkdownBlock content={content} />
                </section>
            </article>
            <footer id={"footer"} className="px-6 text-center">
                <div>
                    <ShareSection
                        name={signature.name}
                        role={signature.headline}
                        shareTitle={signature.shareTitle}
                        shareText={signature.shareText}
                    />
                    <PoweredBy />
                </div>
            </footer>
        </main>
    );
}
