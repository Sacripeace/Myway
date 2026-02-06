import { motion } from 'framer-motion';

import { skillIcons } from '../constants/skillIcons';

const SkillCard = ({ category, skills, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-accent transition-colors"
    >
        <h3 className="text-xl font-bold text-accent mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">{category}</h3>
        <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
                <div
                    key={skill}
                    className="flex items-center gap-3 p-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-accent hover:shadow-md transition-all group"
                >
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                        {skillIcons[skill] ? (
                            <>
                                <img
                                    src={skillIcons[skill].light}
                                    alt={skill}
                                    className="w-full h-full object-contain dark:hidden"
                                />
                                <img
                                    src={skillIcons[skill].dark}
                                    alt={skill}
                                    className="w-full h-full object-contain hidden dark:block"
                                />
                            </>
                        ) : (
                            <div className="w-full h-full bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                        )}
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-accent transition-colors">
                        {skill}
                    </span>
                </div>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const skillCategories = [
        {
            category: "Frontend",
            skills: ["React", "JavaScript", "HTML", "CSS"] // Removed TailwindCSS
        },
        {
            category: "Backend",
            skills: ["Java", "Spring Boot", "Spring Framework", "Spring Security", "MyBatis", "JPA"]
        },
        {
            category: "Infrastructure & DevOps",
            skills: ["AWS EC2", "AWS S3", "AWS RDS", "Docker", "Kubernetes", "Linux", "GitHub", "GitHub Actions"]
        },
        {
            category: "Database",
            skills: ["MariaDB", "MySQL"]
        },
        {
            category: "Tools & Software",
            skills: ["VS Code", "IntelliJ IDEA", "Adobe Photoshop", "Adobe Illustrator", "Premiere Pro", "After Effects", "Final Cut Pro", "Figma", "Excel", "PowerPoint", "Word"]
        },
        {
            category: "AI Tools",
            skills: ["ChatGPT", "Gemini", "Claude", "Perplexity", "Claude Code", "Antigravity"]
        }
    ];

    return (
        <section className="py-20 px-6 max-w-6xl mx-auto bg-white/50 dark:bg-gray-900/30 rounded-3xl my-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <h2 className="text-accent font-bold tracking-widest uppercase mb-2">Technical</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Skills</h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <SkillCard
                        key={category.category}
                        category={category.category}
                        skills={category.skills}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;
