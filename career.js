// Form handling
const careerForm = document.getElementById('careerForm');
const formSection = document.getElementById('formSection');
const resultsSection = document.getElementById('resultsSection');
const backButton = document.getElementById('backButton');

// Career suggestions data
const careerSuggestions = [
    {
        title: 'Software Engineer',
        match: 95,
        why: 'Your technical skills and interest in problem-solving make you an excellent fit for software engineering.',
        skills: ['Programming', 'Problem Solving', 'Analytical Thinking'],
        education: "Bachelor's degree in Computer Science or related field",
        salary: '$80,000 - $150,000',
        growth: 'Expected 22% growth over the next decade',
        nextSteps: [
            'Complete a coding bootcamp',
            'Build a portfolio of projects',
            'Learn modern frameworks',
        ],
    },
    {
        title: 'Data Scientist',
        match: 88,
        why: 'Your strong analytical skills and interest in mathematics align well with data science.',
        skills: ['Statistics', 'Machine Learning', 'Python'],
        education: "Master's degree in Data Science, Statistics, or related field",
        salary: '$90,000 - $160,000',
        growth: 'Expected 36% growth over the next decade',
        nextSteps: [
            'Learn Python and R',
            'Take online ML courses',
            'Work on data analysis projects',
        ],
    },
    {
        title: 'UX Designer',
        match: 82,
        why: 'Your creativity and user-centric thinking make you suitable for UX design.',
        skills: ['UI Design', 'User Research', 'Prototyping'],
        education: "Bachelor's degree in Design or related field",
        salary: '$70,000 - $130,000',
        growth: 'Expected 13% growth over the next decade',
        nextSteps: [
            'Create a design portfolio',
            'Learn design tools',
            'Take UX certification courses',
        ],
    },
];

// Video recommendations data
const videoRecommendations = [
    {
        id: 1,
        title: 'Day in the Life of a Software Engineer',
        channel: 'Tech Career Guide',
        views: '245K views',
        thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
        embedUrl: 'https://www.youtube.com/embed/rqX8PFcOpxA',
    },
    {
        id: 2,
        title: 'How to Break into Tech - Complete Guide',
        channel: 'Career Insights',
        views: '180K views',
        thumbnail: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=600&q=80',
        embedUrl: 'https://www.youtube.com/embed/4ERbC7JyCfU',
    },
    {
        id: 3,
        title: 'Essential Skills for Tech Careers',
        channel: 'Tech Academy',
        views: '320K views',
        thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
        embedUrl: 'https://www.youtube.com/embed/7YcW25PHnAA',
    },
];

// Initialize Q&A data
let questions = [
    {
        id: 1,
        text: "What's the best way to transition into a tech career from a non-technical background?",
        author: 'Sarah Johnson',
        timestamp: '2 hours ago',
        replies: [
            {
                id: 1,
                text: 'Start with online courses and build projects. Focus on one technology stack initially.',
                author: 'Tech Lead Mike',
                timestamp: '1 hour ago',
            },
            {
                id: 2,
                text: 'Consider a coding bootcamp. They often have good job placement rates.',
                author: 'Career Coach Alex',
                timestamp: '30 minutes ago',
            },
        ],
    },
];

// Form submission handler
careerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(careerForm);
    const userData = Object.fromEntries(formData.entries());
    
    // Show results section
    formSection.style.display = 'none';
    resultsSection.style.display = 'block';
    backButton.style.display = 'block';
    
    // Render results
    renderCareerSuggestions();
    renderQASection();
    renderVideoSection();
});

// Back button handler
backButton.addEventListener('click', () => {
    formSection.style.display = 'block';
    resultsSection.style.display = 'none';
    backButton.style.display = 'none';
});

// Render career suggestions
function renderCareerSuggestions() {
    const container = document.getElementById('careerSuggestions');
    container.innerHTML = `
        <div class="text-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4" style="color: var(--primary)">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
            </svg>
            <h2 style="font-size: 2rem; font-weight: bold; color: var(--gray-900); margin-bottom: 0.5rem">
                Your Career Recommendations
            </h2>
            <p style="font-size: 1.125rem; color: var(--gray-600)">
                Based on your profile, here are your top career matches
            </p>
        </div>
        <div class="career-suggestions">
            ${careerSuggestions.map(career => `
                <div class="career-card">
                    <div class="career-card-header">
                        <div style="display: flex; justify-content: space-between; align-items: center">
                            <h3 style="font-size: 1.25rem; font-weight: bold">${career.title}</h3>
                            <span style="background: #dcfce7; color: #166534; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem">
                                ${career.match}% Match
                            </span>
                        </div>
                    </div>
                    <div class="career-card-content">
                        <div style="margin-bottom: 1rem">
                            <h4 style="font-size: 0.875rem; color: var(--gray-500); margin-bottom: 0.25rem">Why This Fits You</h4>
                            <p style="font-size: 0.875rem">${career.why}</p>
                        </div>
                        <div style="margin-bottom: 1rem">
                            <h4 style="font-size: 0.875rem; color: var(--gray-500); margin-bottom: 0.5rem">Required Skills</h4>
                            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem">
                                ${career.skills.map(skill => `
                                    <span style="background: #dbeafe; color: #1e40af; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem">
                                        ${skill}
                                    </span>
                                `).join('')}
                            </div>
                        </div>
                        <div style="margin-bottom: 1rem">
                            <h4 style="font-size: 0.875rem; color: var(--gray-500); margin-bottom: 0.25rem">Education Path</h4>
                            <p style="font-size: 0.875rem">${career.education}</p>
                        </div>
                        <div style="margin-bottom: 1rem">
                            <h4 style="font-size: 0.875rem; color: var(--gray-500); margin-bottom: 0.25rem">Growth & Salary</h4>
                            <p style="font-size: 0.875rem">${career.growth}</p>
                            <p style="font-size: 0.875rem">Salary Range: ${career.salary}</p>
                        </div>
                        <div>
                            <h4 style="font-size: 0.875rem; color: var(--gray-500); margin-bottom: 0.5rem">Next Steps</h4>
                            <ul style="list-style-type: none">
                                ${career.nextSteps.map(step => `
                                    <li style="font-size: 0.875rem; margin-bottom: 0.25rem">• ${step}</li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Render Q&A section
function renderQASection() {
    const container = document.getElementById('qaSection');
    container.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--primary)">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <h2 style="font-size: 1.5rem; font-weight: bold">Career Q&A</h2>
        </div>
        
        <form id="questionForm" class="question-form">
            <div style="display: flex; gap: 1rem">
                <input type="text" placeholder="Ask a career-related question..." 
                    style="flex: 1; padding: 0.5rem; border: 1px solid var(--gray-300); border-radius: 0.375rem">
                <button type="submit" class="submit-button" style="width: auto">Ask Question</button>
            </div>
        </form>

        <div class="question-list">
            ${questions.map(question => `
                <div class="question-item">
                    <p style="font-weight: 500">${question.text}</p>
                    <p style="font-size: 0.875rem; color: var(--gray-500)">
                        Asked by ${question.author} • ${question.timestamp}
                    </p>
                    
                    <div class="replies">
                        ${question.replies.map(reply => `
                            <div class="reply-item">
                                <p>${reply.text}</p>
                                <p style="font-size: 0.875rem; color: var(--gray-500); margin-top: 0.25rem">
                                    ${reply.author} • ${reply.timestamp}
                                </p>
                            </div>
                        `).join('')}
                        
                        <form class="reply-form" style="margin-top: 1rem">
                            <div style="display: flex; gap: 0.5rem">
                                <input type="text" placeholder="Write a reply..." 
                                    style="flex: 1; padding: 0.5rem; border: 1px solid var(--gray-300); border-radius: 0.375rem; font-size: 0.875rem">
                                <button type="submit" 
                                    style="background: var(--primary); color: white; padding: 0.25rem 0.75rem; border-radius: 0.375rem; border: none; font-size: 0.875rem">
                                    Reply
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Add event listeners for question form
    const questionForm = document.getElementById('questionForm');
    questionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = questionForm.querySelector('input');
        if (input.value.trim()) {
            questions.unshift({
                id: Date.now(),
                text: input.value,
                author: 'Anonymous User',
                timestamp: 'Just now',
                replies: [],
            });
            input.value = '';
            renderQASection();
        }
    });

    // Add event listeners for reply forms
    document.querySelectorAll('.reply-form').forEach((form, index) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input');
            if (input.value.trim()) {
                questions[index].replies.push({
                    id: Date.now(),
                    text: input.value,
                    author: 'Anonymous User',
                    timestamp: 'Just now',
                });
                renderQASection();
            }
        });
    });
}

// Render video section
function renderVideoSection() {
    const container = document.getElementById('videoSection');
    container.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--primary)">
                <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            <h2 style="font-size: 1.5rem; font-weight: bold">Recommended Videos</h2>
        </div>
        
        <div class="video-grid">
            ${videoRecommendations.map(video => `
                <div class="video-card">
                    <div class="video-thumbnail">
                        <img src="${video.thumbnail}" alt="${video.title}">
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">${video.title}</h3>
                        <p class="video-meta">${video.channel}</p>
                        <p class="video-meta">${video.views}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}