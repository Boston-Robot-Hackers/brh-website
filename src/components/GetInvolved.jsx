import { motion } from 'framer-motion';

const GetInvolved = ({ actions }) => (
  <section id="get-involved" className="relative py-20 px-6 text-center overflow-hidden">
    <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white via-sky-50 to-transparent" />
    <motion.h2
      className="font-[Telex] text-4xl md:text-5xl mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 drop-shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      Get Involved
    </motion.h2>
    <motion.div
      className="mx-auto max-w-4xl text-lg md:text-xl leading-relaxed text-gray-700 space-y-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
    >
      {actions.map((action) => (
        <p key={action.title}>
          <span className="font-semibold text-blue-700">{action.title}:</span> {action.description}
          {action.link && (
            <>
              <br />
              <a href={action.link} target="_blank" rel="noreferrer" className="text-blue-600 underline inline-block mt-1">
                {action.linkLabel}
              </a>
            </>
          )}
        </p>
      ))}
    </motion.div>
    <motion.div
      className="mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
    >
      <a href="TODO_EVENTBRITE_LINK" className="inline-block font-[Telex] text-base md:text-lg text-blue-600 hover:underline">
        See upcoming events on Eventbrite ›
      </a>
    </motion.div>
  </section>
);

export default GetInvolved;
