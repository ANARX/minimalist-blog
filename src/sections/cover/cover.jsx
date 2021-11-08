import React from 'react';

export default function Cover() {
    return (
        <section className="section-cover">
            <img
                src="img/cover/cover_s.jpg"
                srcSet="img/cover/cover_m.jpg 768w,
                img/cover/cover_l.jpg 1200w"
                alt="cover"
                width="100%"
                height="auto"
            />
        </section>
    );
}
