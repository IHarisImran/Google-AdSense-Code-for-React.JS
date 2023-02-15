'use client';

import { useEffect } from "react";

export default function AdCardComponent() {
    useEffect(() => {
        if (document.location.host != 'localhost:3000') {
            for (var i = 0; i < 1; i++) {
                try {
                    (adsbygoogle = window.adsbygoogle || []).push({});
                } catch (e) { }
            };
        }
    }, []);

    return (
        <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxx"
            data-ad-slot="xxxxxxxxxx"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
    );
};