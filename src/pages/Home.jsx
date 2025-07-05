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
            setProjects(
                projectSnap.docs
                    .map((d) => d.data())
                    .sort((a, b) => a.title.localeCompare(b.title))
            );
            const memberSnap = await getDocs(collection(db, 'members'));
            setMembers(
                memberSnap.docs
                    .map((d) => d.data())
                    .sort((a, b) => a.name.localeCompare(b.name))
            );
        };
        fetchData().catch(console.error);
    }, []);

    const links = [
        { href: "#welcome", label: "Home" },
        { href: "#projects", label: "Projects" },
        { href: "#members", label: "Members" },
        { href: "#get-involved", label: "Get Involved" },
    ];



    return (
        <div className="font-sans text-gray-800">
            <Banner />
            <Navigation links={links} />
            <Welcome />
            <Projects projects={projects} />
            <Members members={members} />
            <GetInvolved />
            <Footer />
        </div>
    );
};
