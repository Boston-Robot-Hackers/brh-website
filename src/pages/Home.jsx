import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner.jsx';
import Navigation from '../components/Navigation.jsx';
import Welcome from '../components/Welcome.jsx';
import Projects from '../components/Projects.jsx';
import Members from '../components/Members.jsx';
import GetInvolved from '../components/GetInvolved.jsx';
import Footer from '../components/Footer.jsx';

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

    return (
        <div className="font-sans text-gray-800">
            <Banner />
            <Navigation links={links} />
            <Welcome />
            <Projects projects={projects} />
            <Members members={members} />
            <GetInvolved actions={actions} />
            <Footer />
        </div>
    );
};
