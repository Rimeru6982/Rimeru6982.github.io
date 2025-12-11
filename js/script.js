const quizData = [
    {
        id: 1,
        question: "Quel est le rêve de Monkey D. Luffy ?",
        type: "single",
        options: [
            "Devenir le meilleur épéiste",
            "Devenir le Roi des Pirates",
            "Trouver All Blue",
            "Cartographier le monde entier"
        ],
        correct: 1,
        explanation: "Le rêve de Luffy est de devenir le Roi des Pirates et de trouver le One Piece."
    },
    {
        id: 2,
        question: "Quel fruit du démon a mangé Luffy ?",
        type: "single",
        options: [
            "Mera Mera no Mi",
            "Gomu Gomu no Mi",
            "Hito Hito no Mi",
            "Yami Yami no Mi"
        ],
        correct: 1,
        explanation: "Luffy a mangé le Gomu Gomu no Mi (fruit du caoutchouc)."
    },
    {
        id: 3,
        question: "Qui était le premier membre à rejoindre l'équipage de Luffy ?",
        type: "single",
        options: [
            "Nami",
            "Zoro",
            "Usopp",
            "Sanji"
        ],
        correct: 1,
        explanation: "Roronoa Zoro, le chasseur de pirates, fut le premier à rejoindre Luffy."
    },
    {
        id: 4,
        question: "Quels sont les trois types de Haki ?",
        type: "multiple",
        options: [
            "Haki de l'Observation",
            "Haki de l'Armement",
            "Haki des Rois",
            "Haki de la Navigation"
        ],
        correct: [0, 1, 2],
        explanation: "Les trois types de Haki sont : l'Observation, l'Armement et le Haki des Rois (Conqueror's Haki)."
    },
    {
        id: 5,
        question: "Quel est le nom du bateau des Chapeaux de Paille ?",
        type: "single",
        options: [
            "Going Merry",
            "Thousand Sunny",
            "Oro Jackson",
            "Moby Dick"
        ],
        correct: 1,
        explanation: "Le Thousand Sunny est le bateau actuel des Chapeaux de Paille, succédant au Going Merry."
    },
    {
        id: 6,
        question: "Qui est le médecin de l'équipage des Chapeaux de Paille ?",
        type: "single",
        options: [
            "Brook",
            "Franky",
            "Chopper",
            "Usopp"
        ],
        correct: 2,
        explanation: "Tony Tony Chopper est le médecin de l'équipage. C'est un renne qui a mangé le fruit Hito Hito no Mi."
    },
    {
        id: 7,
        question: "Combien de Road Poneglyphs sont nécessaires pour trouver Laugh Tale ?",
        type: "single",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correct: 2,
        explanation: "Il faut 4 Road Poneglyphs pour déterminer l'emplacement de Laugh Tale, l'île où se trouve le One Piece."
    },
    {
        id: 8,
        question: "Sélectionnez tous les membres de l'équipage qui peuvent utiliser le Haki des Rois :",
        type: "multiple",
        options: [
            "Luffy",
            "Zoro",
            "Nami",
            "Sanji"
        ],
        correct: [0, 1],
        explanation: "Luffy et Zoro sont les seuls membres confirmés de l'équipage capables d'utiliser le Haki des Rois."
    },
    {
        id: 9,
        question: "Quel est le vrai nom de 'Gold Roger' ?",
        type: "single",
        options: [
            "Roger D. Gold",
            "Gol D. Roger",
            "Gold D. Roger",
            "Roger Gold"
        ],
        correct: 1,
        explanation: "Son vrai nom est Gol D. Roger, mais le Gouvernement Mondial l'appelle Gold Roger."
    },
    {
        id: 10,
        question: "Qui a entraîné Luffy pendant 2 ans ?",
        type: "single",
        options: [
            "Shanks",
            "Rayleigh",
            "Garp",
            "Mihawk"
        ],
        correct: 1,
        explanation: "Silvers Rayleigh, l'ancien second de Roger, a entraîné Luffy pendant le time-skip de 2 ans."
    },
    {
        id: 11,
        question: "Quelles sont les organisations secrètes du Gouvernement Mondial ? (plusieurs réponses)",
        type: "multiple",
        options: [
            "CP9",
            "CP0",
            "SWORD",
            "Les Révolutionnaires"
        ],
        correct: [0, 1],
        explanation: "CP9 et CP0 sont des organisations du Gouvernement Mondial. SWORD est de la Marine, et les Révolutionnaires s'opposent au Gouvernement."
    },
    {
        id: 12,
        question: "Quel est le nom de l'île où l'équipage s'est séparé pour 2 ans ?",
        type: "single",
        options: [
            "Sabaody",
            "Dressrosa",
            "Alabasta",
            "Whole Cake Island"
        ],
        correct: 0,
        explanation: "L'équipage s'est séparé à l'archipel Sabaody après l'attaque de Kuma."
    },
    {
        id: 13,
        question: "Qui sont les trois Amiraux après le time-skip ? (plusieurs réponses)",
        type: "multiple",
        options: [
            "Fujitora",
            "Aokiji",
            "Kizaru",
            "Ryokugyu"
        ],
        correct: [0, 2, 3],
        explanation: "Après le time-skip, les trois Amiraux sont Fujitora, Kizaru et Ryokugyu (Green Bull). Aokiji a quitté la Marine."
    },
    {
        id: 14,
        question: "Quel est le rêve de Nami ?",
        type: "single",
        options: [
            "Devenir la meilleure voleuse",
            "Dessiner une carte du monde entier",
            "Trouver le trésor de Captain John",
            "Ouvrir une plantation de mandarines"
        ],
        correct: 1,
        explanation: "Le rêve de Nami est de dessiner une carte complète du monde entier."
    },
    {
        id: 15,
        question: "Quel personnage a dit : 'Je vais devenir le plus grand épéiste du monde' ?",
        type: "single",
        options: [
            "Mihawk",
            "Shanks",
            "Zoro",
            "Ryuma"
        ],
        correct: 2,
        explanation: "C'est Roronoa Zoro qui a fait cette promesse, et c'est son rêve de surpasser Mihawk."
    }
];

// Quiz state
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStarted = false;

// DOM Elements
const quizIntro = document.getElementById('quizIntro');
const quizForm = document.getElementById('quizForm');
const quizResults = document.getElementById('quizResults');
const startQuizBtn = document.getElementById('startQuizBtn');
const nextQuestionBtn = document.getElementById('nextQuestionButton');
const submitQuizBtn = document.getElementById('submitQuizButton');
const restartQuizBtn = document.getElementById('restartQuizBtn');
const quizQuestionsContainer = document.getElementById('quizQuestions');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

// Initialize quiz
function initQuiz() {
    // Start quiz button
    startQuizBtn.addEventListener('click', startQuiz);
    
    // Next question button
    nextQuestionBtn.addEventListener('click', goToNextQuestion);
    
    // Submit quiz button
    submitQuizBtn.addEventListener('click', (e) => {
        e.preventDefault();
        submitQuiz();
    });
    
    // Restart quiz button
    restartQuizBtn.addEventListener('click', restartQuiz);
    
    // Initialize user answers array
    userAnswers = new Array(quizData.length).fill(null);
}

// Start the quiz
function startQuiz() {
    quizStarted = true;
    quizIntro.classList.add('hidden');
    quizForm.classList.remove('hidden');
    currentQuestionIndex = 0;
    displayQuestion(currentQuestionIndex);
    updateProgress();
}

// Display a question
function displayQuestion(index) {
    const question = quizData[index];
    
    let html = `
        <div class="question-block" data-question-id="${question.id}">
            <h3 class="question-title">
                <span class="question-number">Question ${index + 1}/${quizData.length}</span>
                ${question.question}
            </h3>
    `;
    
    if (question.type === 'single') {
        html += '<div class="options-container">';
        question.options.forEach((option, i) => {
            const isChecked = userAnswers[index] === i ? 'checked' : '';
            html += `
                <label class="option-label">
                    <input type="radio" 
                           name="question_${question.id}" 
                           value="${i}" 
                           ${isChecked}
                           onchange="handleAnswerChange(${index}, ${i}, 'single')">
                    <span class="option-text">${option}</span>
                </label>
            `;
        });
        html += '</div>';
    } else if (question.type === 'multiple') {
        html += '<p class="multiple-hint"><i class="fas fa-info-circle"></i> Plusieurs réponses possibles</p>';
        html += '<div class="options-container">';
        question.options.forEach((option, i) => {
            const isChecked = userAnswers[index] && userAnswers[index].includes(i) ? 'checked' : '';
            html += `
                <label class="option-label">
                    <input type="checkbox" 
                           name="question_${question.id}" 
                           value="${i}" 
                           ${isChecked}
                           onchange="handleAnswerChange(${index}, ${i}, 'multiple')">
                    <span class="option-text">${option}</span>
                </label>
            `;
        });
        html += '</div>';
    }
    
    html += '</div>';
    
    quizQuestionsContainer.innerHTML = html;
    
    // Update button states
    updateButtonStates();
}

// Handle answer change
function handleAnswerChange(questionIndex, optionIndex, type) {
    if (type === 'single') {
        userAnswers[questionIndex] = optionIndex;
    } else if (type === 'multiple') {
        if (!userAnswers[questionIndex]) {
            userAnswers[questionIndex] = [];
        }
        
        const answerArray = userAnswers[questionIndex];
        const index = answerArray.indexOf(optionIndex);
        
        if (index > -1) {
            answerArray.splice(index, 1);
        } else {
            answerArray.push(optionIndex);
        }
        
        // If no answers selected, set to null
        if (answerArray.length === 0) {
            userAnswers[questionIndex] = null;
        }
    }
    
    updateButtonStates();
}

// Go to next question
function goToNextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
        updateProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Update button states
function updateButtonStates() {
    const currentAnswer = userAnswers[currentQuestionIndex];
    const hasAnswer = currentAnswer !== null && currentAnswer !== undefined;
    
    // Enable/disable next button
    nextQuestionBtn.disabled = !hasAnswer;
    
    // Show/hide submit button on last question
    if (currentQuestionIndex === quizData.length - 1) {
        nextQuestionBtn.classList.add('hidden');
        submitQuizBtn.classList.remove('hidden');
        submitQuizBtn.disabled = !hasAnswer;
    } else {
        nextQuestionBtn.classList.remove('hidden');
        submitQuizBtn.classList.add('hidden');
    }
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressBar.style.width = progress + '%';
    progressText.textContent = `Progression : ${currentQuestionIndex + 1} / ${quizData.length}`;
}

// Submit quiz
function submitQuiz() {
    let score = 0;
    
    // Calculate score
    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        
        if (question.type === 'single') {
            if (userAnswer === question.correct) {
                score++;
            }
        } else if (question.type === 'multiple') {
            if (userAnswer && arraysEqual(userAnswer.sort(), question.correct.sort())) {
                score++;
            }
        }
    });
    
    // Display results
    displayResults(score);
}

// Check if two arrays are equal
function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

// Display results
function displayResults(score) {
    const percentage = (score / quizData.length) * 100;
    
    // Hide form and show results
    quizForm.classList.add('hidden');
    quizResults.classList.remove('hidden');
    
    // Display score
    document.getElementById('finalScore').textContent = `Score : ${score} / ${quizData.length} (${percentage.toFixed(1)}%)`;
    
    // Display message based on score
    let message = '';
    let messageClass = '';
    
    if (percentage >= 90) {
        message = "🏆 Incroyable ! Tu es un véritable Nakama de l'équipage ! Ton niveau de connaissance est digne du Roi des Pirates ! ⚓";
        messageClass = 'excellent';
    } else if (percentage >= 75) {
        message = "🌟 Excellent ! Tu navigues comme un vrai membre de l'équipage des Chapeaux de Paille ! Continue comme ça, futur pirate ! 🏴‍☠️";
        messageClass = 'good';
    } else if (percentage >= 60) {
        message = "👍 Bien joué ! Tu connais déjà beaucoup de choses sur One Piece. Encore un peu d'entraînement et tu seras prêt pour le Grand Line ! 🌊";
        messageClass = 'average';
    } else if (percentage >= 40) {
        message = "📚 Pas mal ! Tu as encore du chemin à parcourir, mais continue à suivre les aventures de Luffy et son équipage ! ⛵";
        messageClass = 'below-average';
    } else {
        message = "🎯 Tu débutes dans l'univers de One Piece ! N'hésite pas à revoir les épisodes et à retenter ta chance. L'aventure ne fait que commencer ! 🗺️";
        messageClass = 'needs-improvement';
    }
    
    const scoreMessageElement = document.getElementById('scoreMessage');
    scoreMessageElement.textContent = message;
    scoreMessageElement.className = `message ${messageClass}`;
    
    // Display answer review
    displayAnswerReview();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Display answer review
function displayAnswerReview() {
    const reviewContainer = document.getElementById('reviewContainer');
    let html = '';
    
    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        let isCorrect = false;
        let userAnswerText = '';
        let correctAnswerText = '';
        
        if (question.type === 'single') {
            isCorrect = userAnswer === question.correct;
            userAnswerText = userAnswer !== null ? question.options[userAnswer] : 'Aucune réponse';
            correctAnswerText = question.options[question.correct];
        } else if (question.type === 'multiple') {
            isCorrect = userAnswer && arraysEqual(userAnswer.sort(), question.correct.sort());
            userAnswerText = userAnswer && userAnswer.length > 0 
                ? userAnswer.map(i => question.options[i]).join(', ')
                : 'Aucune réponse';
            correctAnswerText = question.correct.map(i => question.options[i]).join(', ');
        }
        
        const statusClass = isCorrect ? 'correct' : 'incorrect';
        const statusIcon = isCorrect ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-times-circle"></i>';
        
        html += `
            <div class="review-item ${statusClass}">
                <h4>
                    ${statusIcon}
                    Question ${index + 1}: ${question.question}
                </h4>
                <p><strong>Votre réponse :</strong> ${userAnswerText}</p>
                ${!isCorrect ? `<p><strong>Réponse correcte :</strong> ${correctAnswerText}</p>` : ''}
                <p class="explanation"><i class="fas fa-info-circle"></i> ${question.explanation}</p>
            </div>
        `;
    });
    
    reviewContainer.innerHTML = html;
}

// Restart quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = new Array(quizData.length).fill(null);
    quizStarted = false;
    
    quizResults.classList.add('hidden');
    quizIntro.classList.remove('hidden');
    
    // Reset progress
    progressBar.style.width = '0%';
    progressText.textContent = 'Progression : 0 / 15';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initQuiz);

console.log('🏴‍☠️ One Piece Quiz initialized successfully! ⚓');