'use client';

import { QRCodeSVG } from 'qrcode.react';
import { useEffect, useState } from 'react';

interface ShareProps {
    name: string;
    role: string;
    shareTitle: string;
    shareText: string;
}

export default function ShareSection({ name, role, shareTitle, shareText }: ShareProps) {
    const [url, setUrl] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const currentUrl = window.location.href;
        Promise.resolve().then(() => {
            setUrl(currentUrl);
        });
    }, []);

    const shareData = {
        title: `${name} | ${shareTitle}`,
        text: `${shareText} ${name} (${role}).`,
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
        <div className="flex flex-col items-center gap-4 mt-6">
            <div id="qr-card-area" className="p-4 rounded-2xl border border-zinc-200 mb-2">
                {url && <QRCodeSVG value={url} size={160} level="H" />}
            </div>
            <button
                onClick={handleShare}
                className={`no-print w-64 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300
                    ${copied
                    ? 'bg-green-500 text-white scale-95'
                    : 'bg-black text-white hover:bg-zinc-800 active:scale-95 shadow-lg'}
                `}
            >
                {copied ? 'Link Copied!' : 'Share Identity'}
            </button>
            <button
                onClick={() => window.print()}
                className="no-print w-64 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs bg-white text-black border border-black hover:bg-zinc-100 transition-all duration-300 active:scale-95 shadow-sm"
            >
                Print Profile
            </button>

            <button
                onClick={() => {
                    document.body.classList.add('print-card-mode');
                    window.print();
                    document.body.classList.remove('print-card-mode');
                }}
                className="no-print w-64 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs bg-white text-black border border-black hover:bg-zinc-100 transition-all duration-300 active:scale-95 shadow-sm"
            >
                Print QR Code
            </button>
        </div>
    );
}
