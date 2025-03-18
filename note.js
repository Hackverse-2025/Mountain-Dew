// filepath: c:\Users\manas\OneDrive\Desktop\FIles\Mountain Dew\note.js
// 🌙 Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;
themeToggle.addEventListener('click', () => {
    const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

// 🔙 Back Button
document.querySelector('.back-button').addEventListener('click', () => window.history.back());

// 🤖 Chatbot Link
document.querySelector('.chatbot-link').addEventListener('click', () => {
    window.location.href = '/chatbot'; // Add chatbot page URL
});

// 📌 Smart Filtering System for AI Notes
const classSelect = document.getElementById('classSelect');
const fieldSelect = document.getElementById('fieldSelect');
const examSelect = document.getElementById('examSelect');
const subjectSelect = document.getElementById('subjectSelect');
const notesSection = document.getElementById('notesSection');

async function generateNotes() {
    const classLevel = classSelect.value;
    const field = fieldSelect.value;
    const examType = examSelect.value;
    const subject = subjectSelect.value;

    if (!classLevel || !field || !examType || !subject) {
        notesSection.innerHTML = `<div class="glass-card mt-4 note-card"><h3>Please select all fields.</h3></div>`;
        return;
    }

    notesSection.innerHTML = `<div class="glass-card mt-4 note-card"><h3>Generating AI Notes...</h3></div>`;

    try {
        const response = await fetch('/generate-notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ classLevel, field, examType, subject })
        });

        const data = await response.json();
        if (data.error) {
            throw new Error(data.error);
        }

        const aiNotes = data.notes;

        notesSection.innerHTML = `
            <div class="glass-card mt-4 note-card">
                <h3>AI Generated Notes</h3>
                <p><strong>Class:</strong> ${classLevel}</p>
                <p><strong>Field:</strong> ${field}</p>
                <p><strong>Exam:</strong> ${examType}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <div class="note-content">
                    <p>${aiNotes}</p>
                </div>
                <button class="glow-button mt-3">
                    <i class="fas fa-save"></i> Save Note
                </button>
            </div>
        `;
    } catch (error) {
        console.error('Error generating AI notes:', error);
        notesSection.innerHTML = `<div class="glass-card mt-4 note-card"><h3>Failed to generate notes. Please try again later.</h3></div>`;
    }
}

// Attach event listeners
[classSelect, fieldSelect, examSelect, subjectSelect].forEach(select => {
    select.addEventListener('change', generateNotes);
});

// 📄 AI-Powered Document Summarizer
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('drag-over');
});
uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('drag-over'));
uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
    handleFiles(e.dataTransfer.files);
});
uploadArea.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', (e) => handleFiles(e.target.files));

async function summarizeDocument(text) {
    try {
        const response = await fetch('/summarize-document', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        });

        const data = await response.json();
        if (data.error) {
            throw new Error(data.error);
        }

        return data.summary;
    } catch (error) {
        console.error('Error summarizing document:', error);
        return 'Error summarizing document.';
    }
}

async function handleFiles(files) {
    if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = async function (event) {
            const fileContent = event.target.result;
            uploadArea.innerHTML = `<div class="glass-card mt-4 note-card"><h3>Summarizing Document...</h3></div>`;

            const summary = await summarizeDocument(fileContent);

            uploadArea.innerHTML = `
                <div class="glass-card mt-4 note-card">
                    <h3>AI Summarized Document</h3>
                    <p>${summary}</p>
                    <button class="glow-button mt-3">
                        <i class="fas fa-save"></i> Save Summary
                    </button>
                </div>
            `;
        };
        reader.readAsText(file);
    }
}

// 📊 Study Progress Tracker
let progress = 0;
const progressCircle = document.querySelector('.progress-circle circle');
const progressText = document.querySelector('.progress-text');

function updateProgress(value) {
    progress = value;
    const offset = 226 - (226 * progress) / 100;
    progressCircle.style.strokeDashoffset = offset;
    progressText.textContent = `${Math.round(progress)}%`;
}

function simulateProcessing() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 5;
        updateProgress(progress);
        if (progress >= 100) {
            clearInterval(interval);
            showProcessingMessage('Document processed successfully!');
        }
    }, 100);
}

// 🔔 Processing Message
function showProcessingMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'glass-card processing-message';
    messageDiv.innerHTML = `<p>${message}</p>`;
    document.body.appendChild(messageDiv);
    setTimeout(() => messageDiv.remove(), 3000);
}

// 🌟 Initialize
updateProgress(0);
html.setAttribute('data-theme', 'dark');
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';