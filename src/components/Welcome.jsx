import { motion } from 'framer-motion';

const Welcome = () => (
  <section id="welcome" className="relative py-20 px-6 text-center overflow-hidden">
    <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-transparent" />
    <motion.h1
      className="font-[Telex] text-5xl md:text-6xl mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 drop-shadow-sm"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      Welcome to <br className="sm:hidden" /> Boston Robot Hackers
    </motion.h1>
    <motion.p
      className="mx-auto max-w-4xl text-lg md:text-xl leading-relaxed text-gray-700 space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
    >
      We are a community of <span className="font-semibold text-blue-600">hardware</span> &amp;{' '}
      <span className="font-semibold text-indigo-600">software</span> enthusiasts—<span className="italic">professionals</span>{' '}
      and <span className="italic">students</span>, <span className="italic">experts</span> and{' '}
      <span className="italic">beginners</span>—all united by a love of robotics. Here you’ll find collaborators to{' '}
      <span className="font-semibold text-sky-600">learn</span>,{' '}
      <span className="font-semibold text-sky-600">build</span>, and{' '}
      <span className="font-semibold text-sky-600">share</span> with. Let’s create the future together.
    </motion.p>
  </section>
);

export default Welcome;
