document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    generateRoadmap();
});

function generateRoadmap() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const ageGroup = document.getElementById('ageGroup').value;
    const learningStyles = Array.from(document.querySelectorAll('input[name="learningStyle"]:checked')).map(el => el.value);
    const longTermGoals = document.getElementById('longTermGoals').value;
    const shortTermGoals = document.getElementById('shortTermGoals').value;
    const careerInterests = document.getElementById('careerInterests').value;
    const hobbies = document.getElementById('hobbies').value;
    const industries = document.getElementById('industries').value;
    const skillLevel = document.getElementById('skillLevel').value;
    const languages = document.getElementById('languages').value;
    const projects = document.getElementById('projects').value;
    const certifications = document.getElementById('certifications').value;
    const commitment = document.getElementById('commitment').value;
    const platforms = Array.from(document.querySelectorAll('input[name="platforms"]:checked')).map(el => el.value);
    const budget = document.getElementById('budget').value;
    const roadmapType = document.getElementById('roadmapType').value;
    const collaboration = document.getElementById('collaboration').value;
    const additionalInfo = document.getElementById('additionalInfo').value;
    const customMilestones = document.getElementById('customMilestones').value;

    const roadmapContent = document.querySelector('.roadmap-content');
    roadmapContent.innerHTML = `
        <h3>Phase 1: Learning Basics</h3>
        <p>→ Select Resources ↓</p>
        <h3>Phase 2: Hands-on Projects</h3>
        <p>→ Join Online Communities ↓</p>
        <h3>Phase 3: Certification</h3>
        <p>→ Build Portfolio ↓</p>
        <h3>Phase 4: Advanced Learning</h3>
        <p>→ Job Applications</p>
    `;
}
