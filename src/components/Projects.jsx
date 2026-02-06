import { motion } from 'framer-motion';
import { skillIcons } from '../constants/skillIcons';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, subTitle, description, period, stack, index, link }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl h-full group hover:border-accent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative flex flex-col"
    >
        <div className="p-8 flex-grow">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h4 className="text-sm font-semibold text-accent mb-1">{subTitle}</h4>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent transition-colors">{title}</h3>
                </div>
                <span className="text-xs font-mono text-gray-400 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded">{period}</span>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {stack.map((tech) => (
                    <span
                        key={tech}
                        className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-600"
                    >
                        {skillIcons[tech] ? (
                            <>
                                <img src={skillIcons[tech].light} alt={tech} className="w-4 h-4 object-contain dark:hidden" />
                                <img src={skillIcons[tech].dark} alt={tech} className="w-4 h-4 object-contain hidden dark:block" />
                            </>
                        ) : null}
                        {tech}
                    </span>
                ))}
            </div>
        </div>

        {/* Notion Link CTA Section */}
        <div className="bg-gray-50 dark:bg-gray-700/30 px-8 py-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between group-hover:bg-accent/5 transition-colors">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-accent flex items-center gap-2">
                <img src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/notion.png" alt="Notion" className="w-5 h-5 dark:hidden" />
                <img src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/notion.png" alt="Notion" className="w-5 h-5 hidden dark:block" />
                Notion에서 자세히 보기
            </span>
            <ExternalLink size={18} className="text-gray-400 group-hover:text-accent transform group-hover:translate-x-1 transition-all" />
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "내일로",
            subTitle: "1차 Project [Monolithic Architecture]",
            description: "Monolithic Architecture 기반의 여행 정보 공유 및 예약 플랫폼. 인증, 결제 핵심 기능 구현 및 전체 시스템 통합 담당.",
            period: "2025.10.06 ~ 2025.11.03",
            stack: ["React", "JavaScript", "Spring Boot", "MyBatis", "MySQL", "Java", "HTML/CSS"],
            link: "https://www.notion.so/1-Project-Monolithic-Architecture-2f9a8e3875c881878ec2ce3856ce43ff?source=copy_link"
        },
        {
            title: "마감세일",
            subTitle: "2차 AWS ECS Project",
            description: "AWS ECS를 활용한 MSA 기반의 소셜 커머스(O2O) 마감 임박 상품 거래 플랫폼. Docker 컨테이너화 및 AWS ECS Fargate 배포 파이프라인 구축.",
            period: "2025.11.25 ~ 2026.01.27",
            stack: ["React", "Spring Boot", "JPA", "MariaDB", "AWS ECS", "AWS EC2", "Docker", "Java"],
            link: "https://www.notion.so/2-AWS-ECS-Project-2f9a8e3875c881d4b401ea673bb8576d?source=copy_link"
        }
    ];

    return (
        <section className="py-20 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <h2 className="text-accent font-bold tracking-widest uppercase mb-2">Portfolio</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Projects</h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full card-hover-effect"
                    >
                        <ProjectCard {...project} index={index} />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
