import { motion } from 'framer-motion';

const Members = ({ members }) => (
  <section id="members" className="py-14 px-6 bg-gray-50">
    <h2 className="font-[Telex] text-3xl text-center mb-8">Members</h2>
    <div
      className="grid justify-center gap-8"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
    >
      {members.map((member) => (
        <motion.a
          key={member.name}
          href={member.link}
          target="_blank"
          rel="noreferrer"
          whileHover={{ translateY: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="block min-w-[260px] max-w-full focus:outline-none"
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="p-6 flex flex-col items-center text-center space-y-2 flex-1">
              <h3 className="font-[Telex] text-xl">{member.name}</h3>
              <p className="italic text-sm">Member since {member.memberSince}</p>
              <p className="text-sm md:text-base leading-relaxed">{member.oneLiner}</p>
              <span className="text-blue-600 font-semibold" aria-hidden>
                {member.linkTitle} ›
              </span>
            </div>
            {member.openToWork && (
              <div className="bg-green-600 text-white text-xs font-semibold py-2 text-center">Open to Work</div>
            )}
          </div>
        </motion.a>
      ))}
    </div>
  </section>
);

export default Members;
