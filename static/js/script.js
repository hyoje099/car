document.addEventListener('DOMContentLoaded', () => {
    const caseForm = document.getElementById('case-form');
    const caseResults = document.getElementById('case-results');
    const analyzeButton = document.getElementById('analyze-responsibility');
    const responsibilityResults = document.getElementById('responsibility-results');
    const preventionTips = document.getElementById('prevention-tips');

    const cases = [];

    caseForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const caseType = document.getElementById('case-type').value;
        const techLevel = document.getElementById('tech-level').value;
        const driverFault = document.getElementById('driver-fault').value;

        const newCase = { caseType, techLevel, driverFault };
        cases.push(newCase);

        displayCases();
        caseForm.reset();
    });

    analyzeButton.addEventListener('click', () => {
        analyzeResponsibility();
    });

    function displayCases() {
        caseResults.innerHTML = cases.map((c, index) => `
            <div class="case">
                <h3>사고 사례 ${index + 1}</h3>
                <p><strong>사고 유형:</strong> ${c.caseType}</p>
                <p><strong>기술 수준:</strong> ${c.techLevel}</p>
                <p><strong>운전자 과실 여부:</strong> ${c.driverFault}</p>
            </div>
        `).join('');
    }

    function analyzeResponsibility() {
        if (cases.length === 0) {
            responsibilityResults.innerHTML = '<p>분석할 사고 사례가 없습니다.</p>';
            return;
        }

        // Simple analysis logic for demonstration purposes
        const responsibilityAnalysis = cases.map((c, index) => {
            const responsibility = (c.driverFault.toLowerCase() === 'yes') ? '운전자 책임' : '제조사 책임';
            return `<p>사고 사례 ${index + 1}: ${responsibility}</p>`;
        }).join('');

        responsibilityResults.innerHTML = responsibilityAnalysis;
    }

    // Example prevention tips
    const tips = [
        '자율주행 기술의 한계를 이해하고 항상 주의를 기울이세요.',
        '정기적인 차량 점검을 통해 자율주행 시스템의 상태를 확인하세요.',
        '운전자 교육을 통해 비상 상황에 대비하세요.'
    ];

    preventionTips.innerHTML = tips.map(tip => `<p>${tip}</p>`).join('');
});
