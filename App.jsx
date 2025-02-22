import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Particles from "react-tsparticles";

const skills = ["C++", "C", "Java", "HTML/CSS", "JavaScript", "React.js", "Node.js", "MongoDB", "Express.js", "Bootstrap", "Git", "GitHub", "Data Structures & Algorithms"];

export default function Portfolio() {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dark bg-black text-white relative overflow-hidden">
      {/* Particle Background */}
      <Particles
        options={{
          particles: {
            number: { value: 100 },
            size: { value: 3 },
            move: { speed: 1 },
            color: { value: "#00ffff" },
            opacity: { value: 0.5 },
          },
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      <header className="p-6 fixed top-0 left-0 w-full flex justify-between items-center shadow-xl bg-black bg-opacity-80 backdrop-blur-md text-white border-b-4 border-cyan-500 z-50">
        <motion.h1 className="text-4xl font-extrabold tracking-wide" animate={{ textShadow: "0px 0px 15px cyan" }}>Ananya Singh</motion.h1>
        <nav>
          <ul className="flex gap-8 text-lg font-medium">
            <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-black via-gray-900 to-black text-white relative">
        <motion.h2 className="text-7xl font-extrabold neon-text" animate={{ opacity: [0, 1], y: [-50, 0] }} transition={{ duration: 1 }}>Welcome to My Futuristic Portfolio</motion.h2>
        <p className="text-xl mt-4 text-cyan-300">Mechanical Engineering Student | Full-Stack Developer</p>
        <a href="#projects" className="mt-6 px-8 py-4 bg-cyan-500 text-black font-semibold rounded-xl shadow-xl hover:bg-cyan-600 transition hover:scale-105">View My Work</a>
      </section>
      
      <main className="p-12 space-y-16">
        <section id="about" className="pt-20">
          <h3 className="text-6xl font-extrabold border-b-4 pb-4 text-cyan-400 neon-text text-center">About Me</h3>
          <p className="mt-4 text-lg leading-relaxed text-slate-200">I'm a B.Tech student in Mechanical Engineering at NSUT, passionate about web development and problem-solving.</p>
        </section>

        <section id="skills" className="pt-20">
          <h3 className="text-6xl font-extrabold border-b-4 pb-4 text-cyan-400 neon-text text-center">Technical Skills</h3>
          <div className="mt-6 flex justify-center overflow-hidden">
            <motion.div
              className="flex space-x-10 text-lg font-semibold text-cyan-300"
              animate={{ x: [0, -200, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              {skills.concat(skills).map((skill, index) => (
                <span key={index} className="px-4">{skill}</span>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="projects" className="pt-20">
          <h3 className="text-6xl font-extrabold border-b-4 pb-4 text-cyan-400 neon-text text-center">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
            {[
              { name: "Uber Clone", description: "MERN stack ride-booking app", codeLinks: ["https://github.com/ananya-4/uber-1", "https://github.com/ananya-4/uber-backend"] },
              { name: "Portfolio Website", description: "Personal responsive portfolio", codeLinks: ["https://github.com/ananya/portfolio"] },
              { name: "Transfer Money App", description: "Web-based real-time money transfer", codeLinks: ["https://github.com/ananya-4/TransferMoney"] },
              { name: "Movie Website Frontend", description: "Fetch and display movies", codeLinks: ["https://github.com/ananya-4/movie"] }
            ].map((project, index) => (
              <motion.div key={index} className="p-8 bg-slate-900 rounded-xl shadow-xl text-white border border-cyan-400 hover:scale-105 transition-transform duration-300 hover:shadow-cyan-500 backdrop-blur-lg bg-opacity-80" whileHover={{ scale: 1.05 }}>
                <h4 className="text-2xl font-semibold text-cyan-400">{project.name}</h4>
                <p className="text-slate-200 text-lg mt-2">{project.description}</p>
                {project.codeLinks.map((link, i) => (
                  <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline mt-3 block">View Code {i + 1}</a>
                ))}
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      
      <footer id="contact" className="p-12 text-center border-t border-cyan-400 bg-black mt-16">
        <h3 className="text-4xl font-semibold text-cyan-400 neon-text">Get in Touch</h3>
        <p className="text-lg mt-4 text-slate-200">Feel free to reach out for collaboration or inquiries.</p>
        <div className="flex justify-center gap-8 mt-6 text-4xl">
          <a href="mailto:ananyasinghsingh2003@gmail.com" className="text-cyan-400 hover:text-white transition"><MdEmail /></a>
          <a href="https://github.com/ananya-4" className="text-cyan-400 hover:text-white transition"><FaGithub /></a>
          <a href="https://linkedin.com/in/ananya-singh" className="text-cyan-400 hover:text-white transition"><FaLinkedin /></a>
        </div>
        <p className="text-md mt-6 text-slate-500">&copy; 2025 Ananya Singh. All rights reserved.</p>
      </footer>
    </div>
  );
}
