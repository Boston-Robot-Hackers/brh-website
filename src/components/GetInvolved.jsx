import { motion } from "framer-motion";

export default function GetInvolvedSection() {
    const items = [
        {
            title: "Join the mailing list",
            description:
                "Don’t just join our mailing list – participate! Contribute what you know and help us grow a vibrant, helpful community.",
        },
        {
            title: "Become a core member",
            description:
                "Ready to roll up your sleeves? Lead a project, run a bootcamp, or welcome new members – there’s a role for every talent.",
        },
        {
            title: "Showcase your project",
            description:
                "Robots, arms, submersibles, algorithms, tutorials – if it moves (or helps something move), we’d love to feature it!",
        },
        {
            title: "List your name on our member list",
            description:
                "Grow your network and help our community thrive. Opt‑in to an ‘Open for work’ list and link your résumé or LinkedIn.",
        },
    ];

    return (
        <section id="get-involved" className="relative py-20 px-6 text-center overflow-hidden">
            {/* Background accent */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white via-sky-50 to-transparent" />

            {/* Section heading */}
            <motion.h2
                className="font-[Telex] text-4xl md:text-5xl mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 drop-shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                Get Involved
            </motion.h2>

            {/* Informational paragraphs */}
            <motion.div
                className="mx-auto max-w-4xl text-lg md:text-xl leading-relaxed text-gray-700 space-y-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
                {items.map((item) => (
                    <p key={item.title}>
                        <span className="font-semibold text-blue-700">{item.title}:</span> {item.description}
                    </p>
                ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
                className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <a
                    href="TODO_EVENTBRITE_LINK"
                    className="group inline-flex items-center font-[Telex] text-base md:text-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 rounded-full shadow hover:brightness-110 transition-all"
                >
                    Attend an event
                    <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1">›</span>
                </a>
                <a
                    href="https://forms.gle/XpLnf6C2p5gZQddr6"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center font-[Telex] text-base md:text-lg text-white bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 rounded-full shadow hover:brightness-110 transition-all"
                >
                    Join the mailing list
                    <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1">›</span>
                </a>
            </motion.div>
        </section>
    );
}
