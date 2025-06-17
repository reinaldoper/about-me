"use client";

import {
    motion,
    MotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { StyleSheet } from "@/components/StyleSheet";
import { sections } from "@/components/sections";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function AboutSection({
    title,
    content,
    imgSrc,
}: {
    id: number;
    title: string;
    content: string;
    imgSrc: string;
}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section className="img-container">
            <div ref={ref}>
                <Image
                    src={imgSrc}
                    alt={title}
                    width={400}
                    height={500}
                    style={{ objectFit: "cover" }}
                />
            </div>
            <motion.h2
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y }}
            >
                {title}
            </motion.h2>
            <motion.p
                className="about-content"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                {content}
            </motion.p>
        </section>
    );
}

export default function AboutMe() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="aboutme-bg min-h-screen w-full relative aboutme-snap">
            {sections.map((section) => (
                <AboutSection key={section.id} {...section} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
            <StyleSheet />
        </div>
    );
}