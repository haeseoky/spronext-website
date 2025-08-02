const { createApp } = Vue;

createApp({
    data() {
        return {
            // About Section Data
            aboutBadge: '🚀 Since 2015',
            aboutHero: {
                title: '비즈니스 혁신의 파트너',
                subtitle: '글로벌 시장에서 검증된 전문성으로 고객의 성공을 이끌어가는 전략적 파트너입니다.',
                features: [
                    { id: 1, icon: '⚡', text: '신속한 문제 해결' },
                    { id: 2, icon: '🎯', text: '맞춤형 솔루션' },
                    { id: 3, icon: '🏆', text: '검증된 성과' }
                ]
            },
            floatingCards: [
                { id: 1, icon: '💡', text: 'Innovation' },
                { id: 2, icon: '📈', text: 'Growth' },
                { id: 3, icon: '🤝', text: 'Partnership' },
                { id: 4, icon: '🌟', text: 'Excellence' }
            ],
            companyStory: [
                {
                    year: '2015',
                    title: '회사 설립',
                    description: '비즈니스 혁신에 대한 비전으로 SPRONEXT를 설립하여 첫 걸음을 시작했습니다.'
                },
                {
                    year: '2018',
                    title: '글로벌 확장',
                    description: '아시아 시장으로 서비스를 확장하며 다양한 산업 분야의 고객들과 파트너십을 구축했습니다.'
                },
                {
                    year: '2021',
                    title: 'AI 솔루션 도입',
                    description: '인공지능과 빅데이터 분석 기술을 도입하여 더욱 정교하고 효과적인 컨설팅 서비스를 제공하기 시작했습니다.'
                },
                {
                    year: '2025',
                    title: '지속가능한 미래',
                    description: '환경친화적 비즈니스 모델과 ESG 컨설팅으로 지속가능한 비즈니스 생태계 구축에 앞장서고 있습니다.'
                }
            ],
            enhancedStats: [
                {
                    id: 1,
                    icon: '📈',
                    number: '150+',
                    label: '성공 프로젝트',
                    description: '다양한 산업 분야 프로젝트 완료',
                    progress: 95
                },
                {
                    id: 2,
                    icon: '🏢',
                    number: '80+',
                    label: '파트너 기업',
                    description: '글로벌 기업들과의 신뢰 관계',
                    progress: 88
                },
                {
                    id: 3,
                    icon: '⭐',
                    number: '10+',
                    label: '년 경험',
                    description: '축적된 전문성과 노하우',
                    progress: 100
                },
                {
                    id: 4,
                    icon: '🎯',
                    number: '98%',
                    label: '고객 만족도',
                    description: '지속적인 파트너십 유지율',
                    progress: 98
                }
            ],
            leadership: [
                {
                    id: 1,
                    name: '송진영',
                    position: 'CEO & Founder',
                    bio: '글로벌 컨설팅 경험 15년, 다수의 기업 혁신 프로젝트를 성공적으로 이끌어온 비즈니스 전략 전문가입니다.',
                    image: 'logo.svg',
                    expertise: ['전략 기획', 'M&A', '조직 혁신'],
                    social: [
                        { platform: 'linkedin', icon: '💼', url: '#' },
                        { platform: 'email', icon: '📧', url: 'mailto:jysong@spronext.com' }
                    ]
                }
            ],
            companyCulture: [
                {
                    id: 1,
                    icon: '🚀',
                    title: '혁신 중심 사고',
                    description: '끊임없는 도전과 창의적 사고로 새로운 가치를 창출합니다.',
                    points: [
                        '실패를 통한 학습 문화',
                        '아이디어 공유와 협업',
                        '최신 기술 도입과 활용'
                    ]
                },
                {
                    id: 2,
                    icon: '🎯',
                    title: '고객 성공 우선',
                    description: '고객의 성공이 곧 우리의 성공이라는 철학을 바탕으로 합니다.',
                    points: [
                        '고객 니즈 깊이 이해',
                        '맞춤형 솔루션 제공',
                        '지속적인 관계 유지'
                    ]
                },
                {
                    id: 3,
                    icon: '🤝',
                    title: '투명한 소통',
                    description: '열린 소통과 정직한 관계를 통해 신뢰를 구축합니다.',
                    points: [
                        '명확한 커뮤니케이션',
                        '정기적인 피드백',
                        '윤리적 경영 실천'
                    ]
                }
            ],
            services: [
                {
                    id: 1,
                    icon: '💼',
                    title: '비즈니스 컨설팅',
                    description: '기업의 전략 수립부터 실행까지 전문적인 컨설팅 서비스를 제공합니다.'
                },
                {
                    id: 2,
                    icon: '🚀',
                    title: '디지털 전환',
                    description: '최신 기술을 활용한 디지털 혁신으로 비즈니스 효율성을 극대화합니다.'
                },
                {
                    id: 3,
                    icon: '📊',
                    title: '데이터 분석',
                    description: '빅데이터와 AI를 활용하여 인사이트를 도출하고 전략적 의사결정을 지원합니다.'
                },
                {
                    id: 4,
                    icon: '🎯',
                    title: '마케팅 전략',
                    description: '타겟 고객 분석부터 브랜딩까지 통합적인 마케팅 솔루션을 제공합니다.'
                }
            ],
            values: [
                {
                    id: 1,
                    title: '혁신',
                    description: '끊임없는 혁신으로 고객의 성공을 이끕니다.'
                },
                {
                    id: 2,
                    title: '전문성',
                    description: '깊이 있는 전문 지식으로 최고의 솔루션을 제공합니다.'
                },
                {
                    id: 3,
                    title: '신뢰',
                    description: '투명하고 신뢰할 수 있는 파트너십을 구축합니다.'
                }
            ]
        }
    },
    methods: {
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        },
        downloadBrochure() {
            // 실제 구현시 PDF 다운로드 로직 추가
            alert('회사 소개서 다운로드 기능은 준비 중입니다.');
        }
    },
    mounted() {
        // 스크롤 애니메이션 효과
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // 섹션들에 애니메이션 적용
        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });
    }
}).mount('#app');