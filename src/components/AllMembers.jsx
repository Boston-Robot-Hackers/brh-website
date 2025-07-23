import {motion} from 'framer-motion';
import {FaEnvelope, FaGlobe, FaLinkedin, FaMapMarkerAlt} from 'react-icons/fa';

const SocialLinks = ({email, linkedin, link, linkTitle, location}) => {
    // Function to extract the relevant part of the LinkedIn URL
    const getLinkedInPath = (url) => {
        try {
            const path = new URL(url).pathname;
            return path.startsWith('/in/') ? path.substring(3) : path;
        } catch {
            console.error("Invalid LinkedIn URL:", url);
            return null;
        }
    };

    const linkedInName = linkedin ? getLinkedInPath(linkedin) : null;

    return (
        <div className="flex flex-col items-start space-y-3 w-full pt-4">
            {location && (
                <div className="flex items-center space-x-2 text-white">
                    <FaMapMarkerAlt className="text-2xl"/>
                    <span>{location}</span>
                </div>
            )}
            {linkedInName && (
                <a href={linkedin} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-white">
                    <FaLinkedin className="text-2xl"/>
                    <span>{linkedInName}</span>
                </a>
            )}
            {email && (
                <a href={`mailto:${email}`} className="flex items-center space-x-2 text-white">
                    <FaEnvelope className="text-2xl"/>
                    <span>{email}</span>
                </a>
            )}
            {link && (
                <a href={link} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-white">
                    <FaGlobe className="text-2xl"/>
                    <span>{linkTitle}</span>
                </a>
            )}
        </div>
    );
};


const AllMembers = ({members}) => (
    <section id="members" className="py-14 px-6 bg-alt">
        <h2 className="font-[Telex] text-3xl text-center mb-8">All Members</h2>
        <div
            className="grid justify-center gap-8"
            style={{gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 40%))'}}
        >
            {members.map((member) => (
                <motion.div
                    key={member.name}
                    whileHover={{translateY: -4}}
                    transition={{type: 'spring', stiffness: 300, damping: 20}}
                    className="block min-w-[260px] max-w-full focus:outline-none"
                >
                    <div
                        className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                        <div className="p-6 flex flex-col items-center text-center space-y-2 flex-1">
                            <h3 className="font-[Telex] text-xl">{member.name}</h3>
                            <p className="text-sm md:text-base leading-relaxed"><b>{member.tagline}</b></p>
                            <p className="text-xs md:text-sm leading-snug">{member.blurb}</p>
                            <SocialLinks email={member.email} linkedin={member.linkedin} link={member.link}
                                         linkTitle={member.linkTitle} location={member.location}/>
                        </div>
                        {member.openToWork && (
                            <div className="bg-green text-light text-xs font-semibold py-2 text-center">Open to
                                Work</div>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
);

export default AllMembers;