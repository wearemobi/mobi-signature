'use client';

import { QRCodeSVG } from 'qrcode.react';
import { useEffect, useState } from 'react';

interface ShareProps {
    name: string;
    role: string;
}

export default function ShareSection({ name, role }: ShareProps) {
    const [url, setUrl] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setUrl(window.location.href);
    }, []);

    const shareData = {
        title: `${name} | Digital Signature`,
        text: `Check out the professional identity of ${name} (${role}).`,
        url: url
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error('Error sharing:', err);
            }
        } else {
            try {
                await navigator.clipboard.writeText(url);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Feedback visual
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        }
    };

    return (
        <div className="flex flex-col items-center gap-6 mt-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200">
                {url && <QRCodeSVG value={url} size={160} level="H" />}
            </div>

            <button
                onClick={handleShare}
                className={`no-print px-8 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300
          ${copied
                    ? 'bg-green-500 text-white scale-95'
                    : 'bg-black text-white hover:bg-zinc-800 active:scale-95 shadow-lg'}
        `}
            >
                {copied ? 'Link Copied!' : 'Share Identity'}
            </button>
        </div>
    );
}
