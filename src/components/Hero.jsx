import { motion } from 'framer-motion';
import coverImg from '../assets/web-design-2906159.jpg';
import profileImg from '../assets/jinwook_photo.jpg';

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={coverImg}
                    alt="Background"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/90 to-white dark:via-primary/80 dark:to-primary"></div>
            </div>

            <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-8">
                {/* Profile Image with Ring Animation */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
                    <img
                        src={profileImg}
                        alt="Kim Jinwook"
                        className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-white dark:border-primary shadow-2xl"
                    />
                </motion.div>

                {/* Text Content */}
                <div className="space-y-4">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-accent font-bold text-xl md:text-2xl tracking-widest uppercase"
                    >
                        Hybrid Tech PM
                    </motion.h2>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight"
                    >
                        김진욱
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="text-gray-600 dark:text-gray-300 text-lg md:text-2xl font-light max-w-2xl mx-auto break-keep"
                    >
                        비즈니스와 개발의 언어를 모두 구사하는 통역사<br />
                        <span className="font-semibold text-gray-900 dark:text-white">18년 경력의 하이브리드 빌더</span>
                    </motion.p>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="text-gray-500 dark:text-gray-400 text-sm md:text-base mt-2"
                    >
                        "제품 양산부터 AWS 배포까지"
                    </motion.p>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-10"
                >
                    <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-accent rounded-full animate-bounce"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
