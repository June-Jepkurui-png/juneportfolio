import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Selling_Apartments from "../assets/sellingapartments.png"; // Updated import
import Tender_hands from "../assets/tenderhands.png"; // Updated import
import bank_of_Flatiron from "../assets/bankofflatiron.png"; // Updated import

import React from "react";

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    { title: "Selling-Apartments ", image: Selling_Apartments , link: "https://selling-apartments.vercel.app/" },
    { title: "Tender-hands", image: Tender_hands, link: "https://tender-hands.vercel.app/" },
    { title: "bank-of-Flatiron", image: bank_of_Flatiron, link: "https://bank-of-flatiron-seven-pied.vercel.app/" }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-4xl font-bold text-center mb-16">
          Featured Projects
        </motion.h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const variants = {
              hidden: { opacity: 0, x: index % 3 === 0 ? -100 : index % 3 === 2 ? 100 : 0 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: index * 0.1 } }
            };

            return (
              <motion.div
                key={project.title}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 rounded-lg overflow-hidden shadow-lg"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  {project.link && (
                    <div className="flex justify-center items-center mt-4">
                      <a className="underline text-blue-700 font-bold" target="_blank" href={project.link} rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;