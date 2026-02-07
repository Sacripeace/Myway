import { motion } from 'framer-motion';
import profileImg from '../assets/jinwook_photo.jpg';
import mariaDbDark from '../assets/icons8-mariadb-96.png';
import bgImage from '../assets/web-design-2906159.jpg';

// Reusable Bento Card Component
const BentoItem = ({ children, className = "", span = "", onClick, hoverScale = 1.05 }) => (
    <motion.div
        whileHover={{ scale: hoverScale }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
        className={`bg-gray-100 dark:bg-gray-800 rounded-[1.5rem] md:rounded-[2rem] shadow-sm flex flex-col justify-center items-center relative overflow-hidden cursor-default transition-shadow hover:shadow-md ${span} ${className}`}
    >
        {children}
    </motion.div>
);

const SkillIcon = ({ src, darkSrc, label, color = "text-gray-600 dark:text-gray-300", bg = "bg-transparent", iconSize = "w-16 h-16 md:w-20 md:h-20" }) => (
    <div className={`flex flex-col items-center justify-center w-full h-full ${bg} p-4`}>
        <img src={src} alt={label} className={`${iconSize} object-contain drop-shadow-sm ${darkSrc ? 'dark:hidden' : ''}`} />
        {darkSrc && <img src={darkSrc} alt={label} className={`${iconSize} object-contain drop-shadow-sm hidden dark:block`} />}
        {label && <span className={`text-[10px] md:text-xs font-bold mt-2 tracking-wide ${color}`}>{label}</span>}
    </div>
);

const Hero = () => {
    // Icon URLs - Centralized & Updated
    const icons = {
        react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        spring: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        aws: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        awsDark: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/aws-color.png",
        github: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
        figma: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        mariadb: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg",
        mariadbDark: mariaDbDark,
        mybatis: "https://mybatis.org/images/mybatis-logo.png", // Using the official logo
        illustrator: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/illustrator-40.svg", // Updated from skillIcons.js
        photoshop: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
        vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        excel: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Excel-Icon-FY26?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=58&hei=58&qlt=75&fit=constrain",
        ppt: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/PowerPoint-Icon-FY26?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=58&hei=58&qlt=75&fit=constrain",
        word: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Word-Icon-FY26?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=58&hei=58&qlt=75&fit=constrain",
        claude: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/anthropic.png",
        antigravity: "https://i.namu.wiki/i/5tU_hDHz-33UNu3CdUyS9oVhUiuKluokrIh5aazNuu1e3fS0sWEm9jC_rS8lL7-8tp_3HqKnj97Z7s3km3HX_UmJye4zJJto7z0-Tiuv7O9KbrxfbTsVl_yaa5A_tw9rlENQP9Rktj82_WCr9UsjGw.webp", // Updated from skillIcons.js
    };

    return (
        <section className="min-h-screen py-10 px-4 bg-[#f5f5f7] dark:bg-black flex flex-col justify-center items-center relative overflow-hidden">
            {/* Background Image */}
            <img
                src={bgImage}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 dark:opacity-20 pointer-events-none"
            />

            {/* Grid Container */}
            <div className="max-w-[1200px] w-full grid grid-cols-12 md:grid-cols-6 lg:grid-cols-8 auto-rows-[100px] md:auto-rows-[130px] gap-2 md:gap-4 p-2 md:p-6 bg-white dark:bg-gray-900 rounded-[3rem] shadow-2xl border border-gray-200 dark:border-gray-800 relative z-10">

                <BentoItem className="bg-[#f5f5f7] dark:bg-gray-800 !items-start !justify-start p-6 md:p-8" span="col-span-12 md:col-span-4 lg:col-span-4 row-span-2" hoverScale={1.02}>
                    <span className="text-red-500 font-bold text-xs md:text-sm tracking-wide mb-1">18년차 프로덕트 매니저</span>
                    <h1 className="text-3xl md:text-3xl lg:text-4xl font-black text-black dark:text-gray-100 leading-tight tracking-tight mb-2">
                        비즈니스와 개발의 언어를<br />모두 구사하는 통역사
                    </h1>
                    <p className="text-gray-400 dark:text-gray-500 font-medium mt-1 text-xs md:text-sm">제품 양산부터 AWS 배포까지</p>
                </BentoItem>

                {/* 2. Profile Photo (Top Right, Large Block) */}
                <BentoItem className="!p-0 bg-gray-100 dark:bg-gray-800" span="col-span-12 md:col-span-2 lg:col-span-4 row-span-4" hoverScale={1.02}>
                    <div className="relative w-full h-full">
                        <img
                            src={profileImg}
                            alt="Kim Jinwook"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white text-left">
                            <span className="block text-2xl md:text-3xl font-bold ">김 진욱</span>
                            <span className="text-sm opacity-90">Hybrid Tech PM</span>
                        </div>
                    </div>
                </BentoItem>

                {/* 3. Skill Squares (Surrounding) - All Light Gray Backgrounds */}

                {/* Row 1 Skills */}
                <BentoItem className="bg-gray-100 dark:bg-gray-800" span="col-span-4 md:col-span-1 row-span-1">
                    <SkillIcon src={icons.react} label="React" iconSize="w-10 h-10 md:w-20 md:h-20" />
                </BentoItem>
                <BentoItem className="bg-gray-100 dark:bg-gray-800" span="col-span-4 md:col-span-1 row-span-1">
                    <SkillIcon src={icons.java} label="Java" iconSize="w-10 h-10 md:w-20 md:h-20" />
                </BentoItem>
                <BentoItem className="bg-gray-100 dark:bg-gray-800" span="col-span-4 md:col-span-1 row-span-1">
                    <SkillIcon src={icons.docker} label="Docker" iconSize="w-10 h-10 md:w-20 md:h-20" />
                </BentoItem>

                {/* Row 2 Skills */}
                <BentoItem className="bg-gray-100 dark:bg-gray-800" span="col-span-4 md:col-span-1 row-span-1">
                    <SkillIcon src={icons.aws} darkSrc={icons.awsDark} label="AWS EC2" iconSize="w-10 h-10 md:w-20 md:h-20" />
                </BentoItem>
                <BentoItem className="bg-gray-100 dark:bg-gray-800" span="col-span-4 md:col-span-1 row-span-1">
                    <SkillIcon src={icons.spring} label="Spring" iconSize="w-10 h-10 md:w-20 md:h-20" />
                </BentoItem>
                <BentoItem className="bg-gray-100 dark:bg-gray-800" span="col-span-4 md:col-span-1 row-span-1">
                    <SkillIcon src={icons.vscode} label="VS Code" iconSize="w-10 h-10 md:w-20 md:h-20" />
                </BentoItem>

                {/* Row 3 (Below Headline) - Antigravity */}
                <BentoItem className="bg-gray-100 dark:bg-gray-800" span="col-span-12 md:col-span-2 row-span-1">
                    <div className="flex items-center gap-4">
                        <img src={icons.antigravity} className="w-16 h-10 md:w-22 md:h-14 rounded-xl object-contain" />
                        <div className="flex flex-col text-left">
                            <span className="text-[10px] md:text-xs text-blue-500 font-bold uppercase">AI Assistant</span>
                            <span className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">Antigravity</span>
                        </div>
                    </div>
                </BentoItem>
                <BentoItem className="bg-gray-100 dark:bg-gray-800" span="col-span-4 md:col-span-1 row-span-1">
                    <div className="flex flex-col items-center justify-center w-full h-full p-2 md:p-4">
                        <img src={icons.github} alt="Github" className="w-10 h-10 md:w-20 md:h-20 object-contain drop-shadow-sm dark:hidden" />
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png" alt="Github" className="w-10 h-10 md:w-20 md:h-20 object-contain drop-shadow-sm hidden dark:block" />
                        <span className="text-[10px] md:text-xs font-bold mt-2 tracking-wide text-gray-600 dark:text-gray-300">Github</span>
                    </div>
                </BentoItem>
                <BentoItem className="bg-gray-100 dark:bg-gray-800" span="col-span-4 md:col-span-1 row-span-1">
                    <SkillIcon src={icons.kubernetes} label="K8s" iconSize="w-10 h-10 md:w-20 md:h-20" />
                </BentoItem>
                <BentoItem className="bg-gray-100 dark:bg-gray-800" span="col-span-4 md:col-span-1 row-span-1">
                    <SkillIcon src={icons.mariadb} darkSrc={icons.mariadbDark} label="MariaDB" iconSize="w-10 h-10 md:w-20 md:h-20" />
                </BentoItem>

                {/* Row 4 (Bottom) */}
                <BentoItem className="bg-gray-100 dark:bg-gray-800" span="col-span-8 md:col-span-2 row-span-1">
                    <div className="w-full h-full flex items-center justify-center p-4">
                        <img src={icons.mybatis} className="w-full h-full object-contain max-h-[40px] md:max-h-[57px]" />
                        {/* Logo only, large usage of space */}
                    </div>
                </BentoItem>

                {/* Remaining items */}
                <BentoItem className="bg-gray-100 dark:bg-gray-800" span="col-span-4 md:col-span-1 row-span-1">
                    <SkillIcon src={icons.figma} label="Figma" iconSize="w-10 h-10 md:w-20 md:h-20" />
                </BentoItem>

                <BentoItem className="bg-gray-100 dark:bg-gray-800" span="col-span-4 md:col-span-1 row-span-1">
                    <SkillIcon src={icons.excel} label="Excel" iconSize="w-10 h-10 md:w-20 md:h-20" />
                </BentoItem>
                <BentoItem className="bg-gray-100 dark:bg-gray-800" span="col-span-4 md:col-span-1 row-span-1">
                    <SkillIcon src={icons.ppt} label="PPT" iconSize="w-10 h-10 md:w-20 md:h-20" />
                </BentoItem>

            </div>

            {/* Footer Text */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-12 text-center relative z-10"
            >
                <p className="text-[10px] md:text-xs font-medium text-gray-800 dark:text-gray-400 leading-relaxed tracking-wide">
                    위 홈페이지는 React+Vite를 기반으로 제작하였으며, <br className="block md:hidden" />Styling은 Tailwind CSS를 활용하였습니다.<br />
                    AI Assistant는 Anitgravity와 Claude Code를 활용하여 제작하였습니다.<br />
                    Github에 push하면, 자동으로 Vercel을 이용하여 배포하게 셋팅되어있습니다.
                </p>
            </motion.div>
        </section>
    );
};

export default Hero;
