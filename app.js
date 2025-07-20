const { createApp } = Vue;

createApp({
    data() {
        return {
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