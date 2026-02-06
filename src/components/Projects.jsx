import { motion } from 'framer-motion';

const ProjectCard = ({ title, subTitle, description, period, stack, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl group hover:border-accent transition-colors"
        >
            <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h4 className="text-sm text-accent font-semibold mb-1">{subTitle}</h4>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                    </div>
                    <span className="text-xs text-gray-500 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded">{period}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {stack.map(tech => (
                        <span key={tech} className="text-xs font-mono bg-gray-100 dark:bg-primary/80 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-400 group-hover:text-accent group-hover:border-accent/50 transition-colors">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "내일로",
            subTitle: "1차 Project [Monolithic Architecture]",
            description: "Monolithic Architecture 기반의 여행 정보 공유 및 예약 플랫폼. 인증, 결제 핵심 기능 구현 및 전체 시스템 통합 담당.",
            period: "2025.10.06 ~ 2025.11.03",
            stack: ["Java", "Spring Boot", "MyBatis", "MySQL", "React", "JavaScript", "HTML/CSS"]
        },
        {
            title: "마감세일",
            subTitle: "2차 AWS ECS Project",
            description: "AWS ECS를 활용한 MSA 기반의 소셜 커머스(O2O) 마감 임박 상품 거래 플랫폼. Docker 컨테이너화 및 AWS ECS Fargate 배포 파이프라인 구축.",
            period: "2025.11.25 ~ 2026.01.27",
            stack: ["AWS ECS", "AWS EC2", "Docker", "Java", "Spring Boot", "JPA", "MariaDB", "React"]
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
                    <ProjectCard key={index} {...project} index={index} />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex flex-col md:flex-row justify-center items-center gap-6 mt-16"
            >
                {/* 1st Project Link */}
                <a
                    href="https://drive.google.com/file/d/11ZL0QQQscidDQr-_u8Rm0hUcM8QfB4_e/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                >
                    <div className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 group-hover:border-accent transition-all">
                        <span className="font-semibold text-gray-900 dark:text-white group-hover:text-accent transition-colors">1차 프로젝트 포트폴리오</span>
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">PDF, 약 15MB</span>
                </a>

                {/* 2nd Project Link */}
                <a
                    href="https://drive.google.com/file/d/1xKZAs0tarv_yNw9080Om8NfQ7TL_zdDK/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                >
                    <div className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 group-hover:border-accent transition-all">
                        <span className="font-semibold text-gray-900 dark:text-white group-hover:text-accent transition-colors">2차 프로젝트 포트폴리오</span>
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">PPT, 약 1.27GB</span>
                </a>
            </motion.div>
        </section>
    );
};

export default Projects;
