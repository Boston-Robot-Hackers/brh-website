import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Home – Boston Robot Hackers front‑page
 *
 * NOTE: TailwindCSS is assumed to be available globally.
 *  - Headers use the **Telex** font (import in your index.html or Tailwind config).
 *  - Body text defaults to Helvetica/Inter.
 *
 * TODO:
 *  ▸ Replace `TODO_BANNER_IMAGE` with the real banner source.
 *  ▸ Implement `fillProjects()` with the full list of member projects.
 *  ▸ Add real URLs for the mailing‑list signup and Eventbrite events.
 */
export const Home = () => {
    /** Project carousel state */
    const [projects, setProjects] = useState([]);

    /**
     * Populates the project carousel.
     *
     * Each project record should follow:
     * {
     *   title: string,
     *   link: string,
     *   description: string,
     *   image: string // URL or import
     * }
     */
    const fillProjects = () => {
        // TODO: Pull real projects (API, markdown, hard‑coded array, etc.)
        setProjects([
            {
                title: "Pito’s Dome",
                link: "https://example.com/pitos-dome",
                description: "A fully 3‑D printed hemispherical robot with sensor array.",
                image: "https://placehold.co/400x300?text=Pito%27s+Dome"
            },
            {
                title: "Underwater ROV",
                link: "https://example.com/rov",
                description: "Low‑cost submersible exploring the Charles River.",
                image: "https://placehold.co/400x300?text=Underwater+ROV"
            },
            {
                title: "ROS‑based Arm",
                link: "https://example.com/robot‑arm",
                description: "Open‑source 6‑DOF arm driven by ROS 2.",
                image: "https://placehold.co/400x300?text=ROS+Arm"
            }
        ]);
    };

    // ──────────────────────────────────────────────────────────────────────────────
    useEffect(() => {
        fillProjects();
    }, []);

    // Sample member data; extend as needed
    const members = [
        {
            name: "Jane Doe",
            oneLiner: "Controls engineer & cat‑herder",
            memberSince: "July 2024",
            link: "https://linkedin.com/in/janedoe",
            linkTitle: "LinkedIn",
            openToWork: true
        },
        {
            name: "Bobby Tables",
            oneLiner: "ME grad student building swarm bots",
            memberSince: "May 2025",
            link: "https://github.com/bobbytables",
            linkTitle: "GitHub",
            openToWork: true
        },
        {
            name: "Alex Q.",
            oneLiner: "Full‑stack dev turned roboticist",
            memberSince: "April 2025",
            link: "https://alexq.dev",
            linkTitle: "Portfolio",
            openToWork: false
        }
    ];

    const links = [
        { href: "#welcome", label: "Home" },
        { href: "#projects", label: "Projects" },
        { href: "#members", label: "Members" },
        { href: "#get-involved", label: "Get Involved" },
    ];

    const actions = [
        {
            title: "Join the mailing list",
            description:
                "Don’t just join our mailing list – participate! Contribute what you know and help us grow a vibrant, helpful community.",
            link: "https://forms.gle/XpLnf6C2p5gZQddr6",
            linkLabel: "Sign up ›",
        },
        {
            title: "Become a core member",
            description:
                "Ready to roll up your sleeves? Lead a project, run a bootcamp, or welcome new members – there’s a role for every talent.",
            link: null,
        },
        {
            title: "Showcase your project",
            description:
                "Robots, arms, submersibles, algorithms, tutorials – if it moves (or helps something move), we’d love to feature it!",
            link: null,
        },
        {
            title: "List your name on our member list",
            description:
                "Grow your network and help our community thrive. Opt‑in to an ‘Open for work’ list and link your résumé or LinkedIn.",
            link: null,
        },
    ];

    // ──────────────────────────────────────────────────────────────────────────────
    return (
        <div className="font-sans text-gray-800">
            {/* Banner */}
            <header className="w-full h-40 md:h-48 lg:h-56 overflow-hidden">
                <img
                    src="banner.jpeg"
                    alt="Boston Robot Hackers banner"
                    className="w-full h-full object-cover"
                />
            </header>

            {/* Navigation */}
            <nav className="sticky top-0 z-20 backdrop-blur-md bg-white/70 shadow-sm">
                {/* Decorative bottom gradient line */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-500" />

                <ul className="relative flex justify-center space-x-6 md:space-x-10 py-4 font-[Telex] text-base md:text-lg tracking-wide select-none">
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className="relative inline-block px-1 transition-colors duration-200 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                            >
                                {label}
                                {/* Animated underline */}
                                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Welcome */}
            <section
                id="welcome"
                className="relative py-20 px-6 text-center overflow-hidden"
            >
                {/* Soft radial background accent */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-transparent" />

                <motion.h1
                    className="font-[Telex] text-5xl md:text-6xl mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 drop-shadow-sm"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Welcome to <br className="sm:hidden" /> Boston Robot Hackers
                </motion.h1>

                <motion.p
                    className="mx-auto max-w-4xl text-lg md:text-xl leading-relaxed text-gray-700 space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                >
                    We are a community of <span className="font-semibold text-blue-600">hardware</span> &amp; <span className="font-semibold text-indigo-600">software</span> enthusiasts—<span className="italic">professionals</span> and <span className="italic">students</span>, <span className="italic">experts</span> and <span className="italic">beginners</span>—all united by a love of robotics. Here you’ll find collaborators to <span className="font-semibold text-sky-600">learn</span>, <span className="font-semibold text-sky-600">build</span>, and <span className="font-semibold text-sky-600">share</span> with. Let’s create the future together.
                </motion.p>
            </section>

            {/* Projects Carousel */}
            <section id="projects" className="py-14 px-6">
                <h2 className="font-[Telex] text-3xl text-center mb-8">Member Projects</h2>

                {/* Responsive grid mirroring the Members section styles */}
                <div
                    className="grid justify-center gap-8"
                    style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            whileHover={{ translateY: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="block bg-white min-w-[260px] max-w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-48 w-full object-cover"
                                />
                                <div className="p-6 space-y-2 text-center">
                                    <h3 className="font-[Telex] text-xl leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm leading-snug line-clamp-4">
                                        {project.description}
                                    </p>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Members Grid */}
            <section id="members" className="py-14 px-6 bg-gray-50">
                <h2 className="font-[Telex] text-3xl text-center mb-8">Members</h2>

                {/* Responsive grid that prevents cards from shrinking below 260 px */}
                <div
                    className="grid justify-center gap-8"
                    style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
                >
                    {members.map((member) => (
                        <motion.a
                            key={member.name}
                            href={member.link}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ translateY: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="block min-w-[260px] max-w-full focus:outline-none"
                        >
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                                <div className="p-6 flex flex-col items-center text-center space-y-2 flex-1">
                                    <h3 className="font-[Telex] text-xl">{member.name}</h3>
                                    <p className="italic text-sm">Member since {member.memberSince}</p>
                                    <p className="text-sm md:text-base leading-relaxed">
                                        {member.oneLiner}
                                    </p>
                                    {/* Label showing link title; full card is clickable so no nested link */}
                                    <span className="text-blue-600 font-semibold" aria-hidden>
                  {member.linkTitle} ›
                </span>
                                </div>

                                {/* Bottom banner for members open to work */}
                                {member.openToWork && (
                                    <div className="bg-green-600 text-white text-xs font-semibold py-2 text-center">
                                        Open to Work
                                    </div>
                                )}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>

            {/* Get Involved */}
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
                    {actions.map((action) => (
                        <p key={action.title}>
                            <span className="font-semibold text-blue-700">{action.title}:</span> {action.description}
                            {action.link && (
                                <>
                                    <br />
                                    <a
                                        href={action.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-600 underline inline-block mt-1"
                                    >
                                        {action.linkLabel}
                                    </a>
                                </>
                            )}
                        </p>
                    ))}
                </motion.div>

                {/* Eventbrite CTA */}
                <motion.div
                    className="mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <a
                        href="TODO_EVENTBRITE_LINK"
                        className="inline-block font-[Telex] text-base md:text-lg text-blue-600 hover:underline"
                    >
                        See upcoming events on Eventbrite ›
                    </a>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 text-sm bg-gray-100">
                ©{new Date().getFullYear()} Boston Robot Hackers — Founded 2025
            </footer>
        </div>
    );
};
