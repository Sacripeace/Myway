import { motion } from 'framer-motion';

const skillIcons = {
    // Frontend
    "React": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    "JavaScript": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    },
    "HTML": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    },
    "CSS": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
    },

    // Backend
    "Java": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
    },
    "Spring Boot": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
    },
    "Spring Framework": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
    },
    "Spring Security": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
    },
    "MyBatis": {
        light: "https://icons-for-free.com/iff/png/512/mybatis-1336519699552255094.png",
        dark: "https://icons-for-free.com/iff/png/512/mybatis-1336519699552255094.png"
    },
    "JPA": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg"
    },

    // Infra & DevOps
    "AWS EC2": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    },
    "AWS S3": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
    },
    "AWS RDS": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
    },
    "Docker": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
    },
    "Kubernetes": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg"
    },
    "Linux": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
    },
    "GitHub": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
    },
    "GitHub Actions": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg"
    },

    // Database
    "MariaDB": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg"
    },
    "MySQL": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
    },

    // Tools
    "VS Code": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
    },
    "IntelliJ IDEA": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg"
    },
    "Adobe Photoshop": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
    },
    "Adobe Illustrator": {
        light: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/illustrator-40.svg",
        dark: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/illustrator-40.svg"
    },
    "Premiere Pro": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg"
    },
    "After Effects": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg"
    },
    "Final Cut Pro": {
        light: "https://i.namu.wiki/i/2xZUEkq59WPu6exy8eu41CHnNIst__iuFXpTcnqMEVIlYh7fnRbFPZptZGTsheMyl03BbcWh5GYCz_XZN7frRgRYgzaVeCrw2MiAssb_ZHy3agXjAI2-L0tJwdWfLdsZvEMj-2K5KIlT1oennk9ueg.webp",
        dark: "https://i.namu.wiki/i/2xZUEkq59WPu6exy8eu41CHnNIst__iuFXpTcnqMEVIlYh7fnRbFPZptZGTsheMyl03BbcWh5GYCz_XZN7frRgRYgzaVeCrw2MiAssb_ZHy3agXjAI2-L0tJwdWfLdsZvEMj-2K5KIlT1oennk9ueg.webp"
    },
    "Figma": {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
    },
    "Excel": {
        light: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Excel-Icon-FY26?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=58&hei=58&qlt=75&fit=constrain",
        dark: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Excel-Icon-FY26?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=58&hei=58&qlt=75&fit=constrain"
    },
    "PowerPoint": {
        light: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/PowerPoint-Icon-FY26?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=58&hei=58&qlt=75&fit=constrain",
        dark: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/PowerPoint-Icon-FY26?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=58&hei=58&qlt=75&fit=constrain"
    },
    "Word": {
        light: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Word-Icon-FY26?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=58&hei=58&qlt=75&fit=constrain",
        dark: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Word-Icon-FY26?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=58&hei=58&qlt=75&fit=constrain"
    },

    // AI Tools
    "ChatGPT": {
        light: "https://i.namu.wiki/i/AHJoWjOk9koGRcNLpIT-tr-jzvb1DXJvblmf3TnWzf0CPT0km2kfnN28gUY-MrPuZEgahRAZ6O9p5nWM0bXIbp3k1pJnDnWchh9TawBJbLzC62GrIWhHnTylSOrsBCnZgx1XUEyazb7XtqjHS_nK2w.svg",
        dark: "https://i.namu.wiki/i/AHJoWjOk9koGRcNLpIT-tr-jzvb1DXJvblmf3TnWzf0CPT0km2kfnN28gUY-MrPuZEgahRAZ6O9p5nWM0bXIbp3k1pJnDnWchh9TawBJbLzC62GrIWhHnTylSOrsBCnZgx1XUEyazb7XtqjHS_nK2w.svg"
    },
    "Gemini": {
        light: "https://i.namu.wiki/i/A7snj0nLOp8A5XhDqo6eItfFPaLgAJ8A1pJPN3L9v8fK2peOnp5Yox4vS9bw684XS1JbHA31lxUSVqucVf9-ebfGugo5Y2vsm1t24UZQDKnBocOwMGKY8FQ45Ck-XkCV0a1BLL0iXCB5sQOaMsvofA.webp",
        dark: "https://i.namu.wiki/i/A7snj0nLOp8A5XhDqo6eItfFPaLgAJ8A1pJPN3L9v8fK2peOnp5Yox4vS9bw684XS1JbHA31lxUSVqucVf9-ebfGugo5Y2vsm1t24UZQDKnBocOwMGKY8FQ45Ck-XkCV0a1BLL0iXCB5sQOaMsvofA.webp"
    },
    "Claude": {
        light: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/claude-color.png",
        dark: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/claude-color.png"
    },
    "Perplexity": {
        light: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/perplexity-color.png",
        dark: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/perplexity-color.png"
    },
    "Claude Code": { // Was Anthropic
        light: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/anthropic.png",
        dark: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/anthropic.png"
    },
    "Antigravity": {
        light: "https://i.namu.wiki/i/5tU_hDHz-33UNu3CdUyS9oVhUiuKluokrIh5aazNuu1e3fS0sWEm9jC_rS8lL7-8tp_3HqKnj97Z7s3km3HX_UmJye4zJJto7z0-Tiuv7O9KbrxfbTsVl_yaa5A_tw9rlENQP9Rktj82_WCr9UsjGw.webp",
        dark: "https://i.namu.wiki/i/5tU_hDHz-33UNu3CdUyS9oVhUiuKluokrIh5aazNuu1e3fS0sWEm9jC_rS8lL7-8tp_3HqKnj97Z7s3km3HX_UmJye4zJJto7z0-Tiuv7O9KbrxfbTsVl_yaa5A_tw9rlENQP9Rktj82_WCr9UsjGw.webp"
    }
};

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
