import { marked } from 'marked';

interface MarkdownBlockProps {
    content: string;
}

export default function MarkdownBlock({ content }: MarkdownBlockProps) {
    const htmlContent = marked.parse(content);

    return (
        <div
            className="prose prose-slate max-w-none
                 text-black font-light leading-relaxed
                 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:uppercase [&>h3]:tracking-tighter [&>h3]:mb-4 [&>h3]:mt-8
                 [&>p]:mb-4
                 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-6
                 [&>li]:mb-2
                 [&>strong]:font-bold"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
    );
}
