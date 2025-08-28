document.addEventListener('DOMContentLoaded', () => {
        const startBtn = document.querySelector('.start-btn')
        const time = document.querySelector('.timer')
        const progress = document.querySelector('.progress-fill')
        const question = document.querySelector('.question')
        const questionContainer = document.querySelector('.question-container')
        const result = document.querySelector('.results')
        const scoreCircle = document.querySelector('.score-circle')
        const score = document.querySelector('.score-percentage')
        const correct = document.getElementById('correctCount')
        const incorrect = document.getElementById('incorrectCount')
        const timeWaste = document.getElementById('timeTaken')
        const examResult = document.getElementById('examResult')
        const btn = document.querySelector('.btn-primary')

    const questions = [
            { question: "লোহিত রক্তকণিকায় কোন রঞ্জক থাকে?", options: ["হিমোগ্লোবিন", "মায়োসিন", "ক্লোরোফিল", "ফাইকোসায়ানিন"], correct: 0 },
        { question: "ইরিথ্রোসাইট হচ্ছে—", options: ["শ্বেত রক্তকণিকা", "প্লাটিলেট", "লোহিত রক্তকণিকা", "রক্তরস"], correct: 2 },
        { question: "গ্লুকোজ ভাঙনের মাধ্যমে শক্তি উৎপন্ন হওয়ার প্রক্রিয়া হলো—", options: ["ফটোসিন্থেসিস", "গ্লাইকোলাইসিস", "প্রোটিন সংশ্লেষণ", "ডিফিউশন"], correct: 1 },
        { question: "উদ্ভিদের পাতায় রন্ধ্ররক্ষী কোষে কোন রঞ্জক থাকে?", options: ["হিমোগ্লোবিন", "ক্লোরোফিল", "ক্যারোটিন", "ফাইকোবিলিন"], correct: 1 },
        { question: "মানুষের দেহের সবচেয়ে বড় গ্রন্থি হলো—", options: ["অগ্ন্যাশয়", "যকৃত", "বৃক্ক", "পাকস্থলী"], correct: 1 },


        { question: "লাইসোজোম এর এনজাইম জীবাণুকে কী করে?", options: ["মেরে ফেলে", "ধ্বংস করে", "হজম করে", "বিগলিত করে"], correct: 2 },
        { question: "কোন হরমোনকে “স্ট্রেস হরমোন” বলা হয়?", options: ["ইনসুলিন", "অ্যাড্রেনালিন", "থাইরক্সিন", "গ্লুকাগন"], correct: 1 },
        { question: "মানুষের ডিএনএ কোথায় অবস্থান করে?", options: ["সাইটোপ্লাজমে", "মাইটোকন্ড্রিয়ায়", "নিউক্লিয়াসে", "রাইবোজোমে"], correct: 2 },
        { question: "যে প্রক্রিয়ায় পাতার রন্ধ্র দিয়ে পানি বাষ্পীভূত হয় তা হলো—", options: ["বাষ্পোৎসর্জন", "সালোকসংশ্লেষণ", "শ্বসন", "পরিবহন"], correct: 0 },
        { question: "মাইটোকন্ড্রিয়াকে কী বলা হয়?", options: ["দেহকেন্দ্র", "শক্তিঘর", "প্রোটিন কারখানা", "খাদ্যভাণ্ডার"], correct: 1 },
        { question: "মানুষের দেহে রক্তের গড় পরিমাণ কত?", options: ["২ লিটার", "৩ লিটার", "৫ লিটার", "৮ লিটার"], correct: 2 },


        { question: "পাতার ক্লোরোফিল যুক্ত প্যারেনকাইমা টিস্যুকে কি বলে?", options: ["মেসোফিল", "অ্যারেনকাইমা", "ক্লোরেনকাইমা", "কোলেনকাইমাকোন"], correct: 2 },
        { question: "সালোকসংশ্লেষণ সম্পন্ন হয় কোন অঙ্গাণুতে?", options: ["গলগি বডি", "রাইবোজোম", "ক্লোরোপ্লাস্ট", "মাইটোকন্ড্রিয়া"], correct: 2 },
        { question: "মেরুদণ্ডী প্রাণীদের ত্বকে কোন ধরনের এপিথেলিয়াল টিস্যু বিদ্যমান?", options: ["কিউবয়ডাল", "কলামনার", "স্ট্র্যাটিফাইড", "স্কোয়ামাস"], correct: 2 },


        { question: "প্রোটিন সংশ্লেষণ হয় কোন অঙ্গাণুতে?", options: ["গলগি বডি", "রাইবোজোম", "লাইসোজোম", "ভ্যাকুওল"], correct: 1 },
        { question: "অভ্যন্তরীণ অঙ্গের অন্তর্ভুক্ত i. নাসিকা ii. বৃক্ক iii. ডিম্বাশয়\nনিচের কোনটি সঠিক?", options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"], correct: 2 },


        { question: "জীবদেহে জেনেটিক বৈচিত্র্যের জন্য কোন বিভাজন দায়ী?", options: ["মাইটোসিস", "মিয়োসিস", "অ্যামাইটোসিস", "দ্বি-বিভাজন"], correct: 1 },
        { question: "কোন বিভাজনে একটি মাতৃকোষ থেকে চারটি কন্যাকোষ সৃষ্টি হয়?", options: ["মাইটোসিস", "মিয়োসিস", "অ্যামাইটোসিস", "দ্বি-বিভাজন"], correct: 1 },
        { question: "ক্রোমোসোম সংখ্যা অপরিবর্তিত থাকে কোন বিভাজনে?", options: ["মিয়োসিস", "মাইটোসিস", "অ্যামাইটোসিস", "দ্বি-বিভাজন"], correct: 1 },
        { question: "কোন বিভাজনের ফলে গ্যামেট কোষে ক্রোমোসোম সংখ্যা অর্ধেক হয়?", options: ["মাইটোসিস", "মিয়োসিস", "অ্যামাইটোসিস", "দ্বি-বিভাজন"], correct: 1 },
        { question: "মিয়োসিসের কোন ধাপে নিউক্লিয়াস ঝিল্লি বিলীন হয়?", options: ["প্রোফেজ–I", "মেটাফেজ–I", "অ্যানাফেজ–I", "টেলোফেজ–I"], correct: 0 },
        { question: "উদ্ভিদের অযৌন জনন হয় কোন বিভাজনের মাধ্যমে?", options: ["মাইটোসিস", "মিয়োসিস", "অ্যামাইটোসিস", "দ্বি-বিভাজন"], correct: 0 },


        { question: "জাইগোট বলতে কী বোঝায়?", options: ["ডিপ্লয়েড কোষ", "হ্যাপ্লয়েড কোষ", "জননকোষ", "কোষ বিভাজন"], correct: 0 },
        { question: "কোন ধাপে নিউক্লিয়াসের আকার বড় হয়?", options: ["প্রোফেজ", "মেটাফেজ", "অ্যানাফেজ", "টেলোফেজ"], correct: 3 },
        { question: "নিচের কোন জীবে অ্যামাইটোসিস কোষ বিভাজন দেখা যায়?", options: ["ব্যাকটেরিয়া", "কাঁঠাল", "হাতি", "বানর"], correct: 0 },
        { question: "মস ও ফার্ন উদ্ভিদের রেণুধর মাতৃকোষে কোন বিভাজন ঘটে?", options: ["অ্যামাইটোসিস", "মাইটোসিস", "মিয়োসিস", "দ্বিবিভাজন"], correct: 2 },
        { question: "প্রোফেজ পর্যায়ে ক্রোমোসোমগুলো কেমন থাকে?", options: ["খাটো ও মোটা", "মোটা ও চিকন", "খাটো ও চিকন", "খাটো ও পাতলা"], correct: 0 },
        { question: "কোন পর্যায়ে সেন্ট্রোমিয়ার বিভক্ত হয়?", options: ["প্রোফেজ", "অ্যানাফেজ", "মেটাফেজ", "টেলোফেজ"], correct: 1 },
        { 
            question: "টেলোফেজ পর্যায়ে ক্রোমোসোমের আকার কেমন?", 
            options: ["সরু ও লম্বা", "মোটা ও লম্বা", "মোটা ও পাতলা", "লম্বা ও খাটো"], 
            correct: 0 
        },
        { 
            question: "ক্রোমোসোমে পানি যোজন ঘটে কোন পর্যায়ে?", 
            options: ["প্রোফেজ", "মেটাফেজ", "অ্যানাফেজ", "টেলোফেজ"], 
            correct: 3 
        }
];
    
    let timeLeft = 900;
    let currentQuestion = 0;
    let userAnswers = []
    let timerInterval = null;
    let examStartTime = null;
    correctAnswers = 0;

    function startTimer() {
            if (timerInterval) {
                clearInterval(timerInterval);
            }
            
            timerInterval = setInterval(() => {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateTimerDisplay();
                } else {
                    clearInterval(timerInterval);
                    submitExam(); // Auto-submit when time runs out
                }
            }, 1000);
        }

        function updateTimerDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            time.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft <= 60) {
                time.style.background = '#e74c3c';
            } else if (timeLeft <= 300) {
                time.style.background = '#f39c12';
            }
        }


        function loadQuestion() {
            const currentQ = questions[currentQuestion];

            const insert = `
                <div class="question active">
                    <div class="question-header">
                        <div class="question-number">Question ${currentQuestion + 1} of ${questions.length}</div>
                    </div>
                    <div class="question-text">${currentQ.question}</div>
                    <div class="options">
                    ${currentQ.options.map((option, index) => `
                            <div class="option" onclick="selectOption(${index})">
                                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                                <span>${option}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="navigation">
                        <button class="btn btn-secondary" onclick="previousQuestion()" 
                            ${currentQuestion === 0 ? 'disabled' : ''}>
                            ← Previous
                        </button>
                        <span>Question ${currentQuestion + 1} of ${questions.length}</span>
                        ${currentQuestion === questions.length - 1 ?
                            '<button class="btn btn-primary" onclick="submitExam()">Submit Exam</button>' :
                            '<button class="btn btn-primary" onclick="nextQuestion()">Next →</button>'
                        }
                    </div>
                </div>
            `;
            
            updateProgress();
            questionContainer.innerHTML = insert;

            // Restore previous selection if exists
            if (userAnswers[currentQuestion] !== undefined) {
                const options = document.querySelectorAll('.option');
                options[userAnswers[currentQuestion]].classList.add('selected');
            }
        }

        // Fixed selectOption function
        function selectOption(optionIndex) {
            // Remove previous selection
            const options = document.querySelectorAll('.option');
            options.forEach(option => {
                option.classList.remove('selected');
            });

            // Add new selection
            options[optionIndex].classList.add('selected');
            
            // Store user's answer
            userAnswers[currentQuestion] = optionIndex;
        }

        // Define functions first, then make them global
        function nextQuestion() {
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                loadQuestion();
            }
        }

        function previousQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;
                loadQuestion();
            }
        }

        function updateProgress() {
            const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
            progress.style.width = progressPercent + '%';
        }

        function calculateScore() {
            correctAnswers = 0;
            for (let i = 0; i < questions.length; i++) {
                if (userAnswers[i] === questions[i].correct) {
                    correctAnswers++;
                }
            }
        }

        function submitExam() {
            if (timerInterval) {
                clearInterval(timerInterval);
            }

            calculateScore();

            const percentage = Math.round((correctAnswers / questions.length) * 100);
            const timeTaken = Math.floor((Date.now() - examStartTime) / 1000);
            const minutes = Math.floor(timeTaken / 60);
            const seconds = timeTaken % 60;
            
            // Update results display
            document.getElementById('scorePercentage').textContent = percentage + '%';
            document.getElementById('correctCount').textContent = correctAnswers;
            document.getElementById('incorrectCount').textContent = questions.length - correctAnswers;
            document.getElementById('timeTaken').textContent = 
                `${minutes}:${seconds.toString().padStart(2, '0')}`;
            document.getElementById('examResult').textContent = percentage >= 80 ? 'PASSED' : 'FAILED';
            // document.getElementById('examStatus').textContent = 'Completed';
            
            // Update score circle
            const degrees = (percentage / 100) * 360;
            scoreCircle.style.background = 
                `conic-gradient(#4caf50 0deg, #4caf50 ${degrees}deg, #e0e0e0 ${degrees}deg)`;
            
            // Show results
            questionContainer.style.display = 'none';
            result.classList.add('show');
        }

        function restartExam() {
            currentQuestion = 0;
            userAnswers = [];
            timeLeft = 900;
            correctAnswers = 0;
            examStartTime = Date.now();
            
            questionContainer.style.display = 'block';
            results.classList.remove('show');
            // document.getElementById('examStatus').textContent = 'In Progress';
            time.style.background = '#e74c3c';
            
            loadQuestion();
            startTimer();
        }

        // Make functions global so onclick can access them
        window.selectOption = selectOption;
        window.nextQuestion = nextQuestion;
        window.previousQuestion = previousQuestion;
        window.submitExam = submitExam;
        window.restartExam = restartExam;

        // Start exam event listener
        startBtn.addEventListener('click', (e) => {
            e.preventDefault();
            examStartTime = Date.now(); // Set start time
            loadQuestion();
            startTimer();
        });
});