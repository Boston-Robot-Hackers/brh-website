import { motion } from 'framer-motion';

/**TODO: Add markdown functionality  */
const LatestNews = ({ latestNews }) => (
  <section id="projects" className="py-14 px-6">
    <h2 className="font-[Telex] text-3xl text-center mb-8">Latest News</h2>
    <div className="grid justify-center gap-8">
      {latestNews.map((news) => (
        <motion.div
          key={news.title}
          whileHover={{ translateY: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <a
            href={news.link}
            target="_blank"
            rel="noreferrer"
            className="block bg-card min-w-[260px] max-w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img src={news.image} alt={news.title} className="h-48 w-full object-cover" 
            style={{ objectFit: 'contain' }}
            />
            <div className="p-6 space-y-2 text-center">
              <h3 className="font-[Telex] text-xl leading-tight">{news.title}</h3>
              <p className="text-sm leading-snug line-clamp-4">{news.description}</p>
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default LatestNews;
