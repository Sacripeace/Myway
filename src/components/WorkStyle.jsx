import { motion } from 'framer-motion';
import hybridPmIcon from '../assets/hybrid_pm_character.png';

const WorkStyle = () => {
    return (
        <section className="py-20 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-800/50 rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden relative"
            >
                <div className="flex flex-col md:flex-row gap-10 items-center">

                    {/* Left Column: Image & Mascot */}
                    <div className="w-full md:w-1/3 flex flex-col items-center text-center relative z-10">
                        <div className="w-48 h-48 md:w-56 md:h-56 bg-blue-50 dark:bg-blue-900/20 rounded-[1rem] flex items-center justify-center mb-6 relative group">
                            <div className="absolute inset-0 rounded-[2rem] bg-blue-200/50 dark:bg-blue-500/10 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            <img
                                src={hybridPmIcon}
                                alt="Hybrid PM Mascot"
                                className="w-40 h-40 md:w-48 md:h-48 object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-300 rounded-[1rem]"
                            />
                        </div>
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                            ISTP <span className="text-accent text-lg font-bold block md:inline md:ml-2">만능 재주꾼</span>
                        </h2>
                        <span className="px-4 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm font-semibold">
                            The Virtuoso
                        </span>
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full md:w-2/3">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Work Style DNA
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                객관적인 분석과 기술적 이해를 바탕으로 문제를 해결합니다.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-2xl flex-shrink-0">
                                    🛠️
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">객관적 문제 해결</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                        감정보다는 <strong>사실과 데이터</strong>에 기반하여 핵심 원인을 파악하고, 가장 효율적이고 실용적인 해결책을 제시합니다.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-2xl flex-shrink-0">
                                    ⚡
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">유연한 적응력</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                        급변하는 프로젝트 환경과 요구사항에 <strong>기민하게 대응</strong>하며, 위기 상황에서도 냉철함을 유지하여 기회로 전환합니다.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-2xl flex-shrink-0">
                                    ⚖️
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">기술과 비즈니스의 균형</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                        <strong>Hybrid PM</strong>으로서 개발 언어와 비즈니스 로직을 모두 깊이 이해하여, 팀 간의 소통 비용을 줄이고 최적의 성과를 이끌어냅니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default WorkStyle;
