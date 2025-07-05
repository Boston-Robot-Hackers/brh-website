import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner.jsx';
import Navigation from '../components/Navigation.jsx';
import Welcome from '../components/Welcome.jsx';
import Projects from '../components/Projects.jsx';
import Members from '../components/Members.jsx';
import GetInvolved from '../components/GetInvolved.jsx';
import Footer from '../components/Footer.jsx';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js';

/**
 * Home – Boston Robot Hackers front‑page
 *
 * NOTE: TailwindCSS is assumed to be available globally.
 *  - Headers use the **Telex** font (import in your index.html or Tailwind config).
 *  - Body text defaults to Helvetica/Inter.
 *
 * TODO:
 *  ▸ Replace `TODO_BANNER_IMAGE` with the real banner source.
*  ▸ Fetch projects and members from Firestore.
 *  ▸ Add real URLs for the mailing‑list signup and Eventbrite events.
 */
export const Home = () => {
    const [projects, setProjects] = useState([]);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const projectSnap = await getDocs(collection(db, 'projects'));
            setProjects(projectSnap.docs.map((d) => d.data()));
            const memberSnap = await getDocs(collection(db, 'members'));
            setMembers(memberSnap.docs.map((d) => d.data()));
        };
        fetchData().catch(console.error);
    }, []);

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
