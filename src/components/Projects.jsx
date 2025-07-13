import { motion } from 'framer-motion';
import { marked } from 'marked';

const Projects = ({ projects }) => (
  <section id="projects" className="py-14 px-6">
    <h2 className="font-[Telex] text-3xl text-center mb-8">Member Projects</h2>
    <div
      className="grid justify-center gap-8"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
    >
      {projects.map((project) => (
        <motion.div
          key={project.title}
          whileHover={{ translateY: -5 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          <a href={project.link} target="_blank" rel="noreferrer" className="block">
            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover"
            />
          </a>
          <div className="p-6 flex flex-col flex-grow">
            <a href={project.link} target="_blank" rel="noreferrer">
              <h3 className="font-[Telex] text-2xl leading-tight mb-2">{project.title}</h3>
            </a>
            <div
              className="text-sm leading-snug prose prose-sm max-w-none flex-grow decorate"
              dangerouslySetInnerHTML={{ __html: marked(project.description || '') }}
            />
            <p className="text-xs text-gray-500 mt-4">
              <em>
                  Posted by <b>{project.owner}</b> on <b>{project.date}</b>
              </em>
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
