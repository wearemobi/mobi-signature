import React from "react";

export default function PoweredBy() {
    return (
        <div className="flex flex-col items-center justify-center pt-4 text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-medium">
            <a
                href="https://wearemobi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors duration-300"
            >
                Powered by M.O.B.I.™
            </a>
            <span>Signature v1.8</span>
        </div>
    )
}