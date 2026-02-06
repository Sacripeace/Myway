import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceItem = ({ company, role, period, description, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-gray-700 last:border-l-0 last:pb-0"
        >
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-accent transition-colors">
                    {company}
                </h3>
                <span className="text-gray-500 dark:text-gray-400 font-medium text-sm sm:text-base border border-gray-200 dark:border-gray-700 px-3 py-1 rounded-full">
                    {period}
                </span>
            </div>

            <h4 className="text-xl text-accent mb-4 font-semibold">{role}</h4>

            <div className="text-gray-600 dark:text-gray-300 space-y-2 leading-relaxed whitespace-pre-line">
                {description}
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const experiences = [
        {
            company: "(주)키세스",
            role: "상품기획 / PM",
            period: "2024.05 ~ 2024.12",
            description: `BOSCH Korea 연간 기획물 제작 및 검품 (다이어리, 겨울 자켓, 작업자용 안전각반, PK여름용 티셔츠)
      범표 커피 텀블러, 아우디 모자, Mercedes-Benz 리플렛 시안 및 제작
      DTK 겨울맞이 캠페인 시안 작업
      상품 기획부터 소싱, 마케팅, 런칭 및 원가 절감, 통관 업무`
        },
        {
            company: "(주)플렛코퍼레이션",
            role: "Founder & CEO / 기획 MD",
            period: "2013.01 ~ 2024.05",
            description: `ASTON MARTIN: Welcome Package 제품 제작 (공장 협의 및 진행)
      BVLGARI Korea: 대리석 트레이, 틴케이스(주문제작), 60" 투명우산, 가죽 트레이 제작
      NEXON: 투명 파우치 제작 업체 섭외, 샘플 제작 및 양산
      제일기획: 테일러 메이드 신상품 런칭 기념품 기획, 제작 업체 섭외 및 양산`
        },
        {
            company: "씨엔엠",
            role: "팀장 / MD",
            period: "2007.01 ~ 2012.10",
            description: `차량 구매 고객용 기프트(바인더) 부품 수급, 제조 확인 및 배송 관리
      서울 국제 모토쇼: 차량용 커버, 열쇠고리, 엽서, 디지털 시계, 네임플레이트 기획
      F1 코리아 그랑프리: VIP 고객 및 임직원용 점퍼 원단 수급, 제품 확인
      공기업 직원용 바람막이 제작 및 부산국제 모터쇼 기획 상품(모자, USB 등) 제작
      하이네킨 센세이션 행사: LED 셔터 셰이드 제작 및 납품
      청담동 레스토랑 영상 매체 관리 및 홍보용 영상 제작 (약 15개 가맹점)`
        },
        {
            company: "(주)엔시스텍",
            role: "테스트 및 양산 관리",
            period: "2002.03 ~ 2004.09",
            description: `자체 개발 Chip을 이용한 모뎀 설계 제품 테스트
      자사 개발 Chip을 이용한 PCB 보드 제작
      제품 양산 업무 및 양산업체 미팅`
        }
    ];

    return (
        <section className="py-20 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <h2 className="text-accent font-bold tracking-widest uppercase mb-2">My Journey</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Experience</h3>
            </motion.div>

            <div className="space-y-4">
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Experience;
