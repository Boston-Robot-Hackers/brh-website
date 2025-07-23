import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js';
import AllMembers from '../components/AllMembers.jsx';
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';

const MembersPage = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            const memberSnap = await getDocs(collection(db, 'members'));
            const memberData = memberSnap.docs.map((d) => d.data());
            setMembers(memberData.sort((a, b) => a.name.localeCompare(b.name)));
        };
        fetchMembers().catch(console.error);
    }, []);

    const links = [
        { href: "/", label: "Home" },
        { href: "/members", label: "Members" },
    ];

    return (
        <div className="font-sans">
            <Navigation links={links} />
            <AllMembers members={members} />
            <Footer />
        </div>
    );
};

export default MembersPage;
