import { motion } from 'framer-motion';
import { Mail, Smartphone, Download, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-24 px-6 bg-gradient-to-t from-gray-100 to-white dark:from-black dark:to-primary relative overflow-hidden">

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-8"
                >
                    Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Connect</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-sm md:text-xl text-gray-600 dark:text-gray-300 mb-12"
                >
                    비즈니스와 기술의 간극을 줄이는 하이브리드 PM,<br />
                    귀사의 프로젝트를 성공으로 이끌 준비가 되어 있습니다.
                </motion.p>

                <div className="flex flex-col md:flex-row justify-center gap-6 mb-16 w-full max-w-2xl mx-auto">
                    <motion.a
                        href="mailto:jenuks@daum.net"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex-1 w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-full transition-all border border-gray-200 dark:border-gray-700 hover:border-accent group shadow-lg"
                    >
                        <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                        <span className="font-medium">jenuks@daum.net</span>
                    </motion.a>

                    <motion.a
                        href="tel:010-3200-7092"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex-1 w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-full transition-all border border-gray-200 dark:border-gray-700 hover:border-accent group shadow-lg"
                    >
                        <Smartphone className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                        <span className="font-medium">010-3200-7092</span>
                    </motion.a>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center w-full max-w-2xl mx-auto"
                >
                    <a
                        href="https://drive.google.com/file/d/1AU3HGH93ujxO6BLr_PrNK67-cPrAAlQH/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-full transition-all border border-gray-200 dark:border-gray-700 hover:border-accent group shadow-lg w-full"
                    >
                        <Download className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                        <span className="font-medium">B2B기획 포트폴리오</span>
                    </a>
                </motion.div>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-6 left-0 right-0 text-center text-gray-600 text-sm">
                &copy; {new Date().getFullYear()} Kim Jinwook. All rights reserved.
            </footer>
        </section>
    );
};

export default Contact;
