import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "None – AI-Powered Sound Effects & WAV Workspace Generator",
    description: "Create, edit, and customize sound effects with None — an AI-powered WAV workspace for musicians, producers, and sound designers. Generate unique audio instantly.",
    keywords: "AI sound generator, sound effects generator, WAV editor, WAV workspace, AI audio tool, music production AI, sound design software, generate sound online, AI WAV creator, sound synthesis tool".split(',')
};

export default function ChatLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
