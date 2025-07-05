import { motion } from 'framer-motion';

const Projects = ({ projects }) => (
  <section id="projects" className="py-14 px-6">
    <h2 className="font-[Telex] text-3xl text-center mb-8">Member Projects</h2>
    <div
      className="grid justify-center gap-8"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
    >
      {projects.map((project) => (
        <motion.div
          key={project.title}
          whileHover={{ translateY: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="block bg-white min-w-[260px] max-w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
            <div className="p-6 space-y-2 text-center">
              <h3 className="font-[Telex] text-xl leading-tight">{project.title}</h3>
              <p className="text-sm leading-snug line-clamp-4">{project.description}</p>
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
