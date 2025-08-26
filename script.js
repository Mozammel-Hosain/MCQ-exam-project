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
    { 
        question: "শব্দের তীব্রতার প্রচলিত একক কোনটি?", 
        options: ["ডেসিবেল", "সেন্টিবেল", "কিলোবেল", "মেগাবেল"], 
        correct: 0 
    },
    { 
        question: "কোনটি যান্ত্রিক তরঙ্গ?", 
        options: ["আলোক তরঙ্গ", "তাপ তরঙ্গ", "চৌম্বক তরঙ্গ", "শব্দ তরঙ্গ"], 
        correct: 3 
    },
    { 
        question: "দুটি সুরশলাকায় শব্দের কম্পাঙ্কের অনুপাত ২:৩। প্রথমটির কম্পাঙ্ক 80 Hz হলে দ্বিতীয়টির কম্পাঙ্ক কত?", 
        options: ["80 Hz", "40 Hz", "120 Hz", "200 Hz"], 
        correct: 2 
    },
    { 
        question: "তরঙ্গের বিস্তার দ্বিগুণ হলে তীব্রতা কতগুণ হবে?", 
        options: ["দ্বিগুণ", "চারগুণ", "আটগুণ", "ষোলগুণ"], 
        correct: 1 
    },
    { 
        question: "0 °C তাপমাত্রায় বায়ুতে শব্দ 33.2 m দূরত্ব অতিক্রম করে কত সময়ে?", 
        options: ["১ সেকেন্ডে", "০.১ সেকেন্ডে", "০.০০১ সেকেন্ডে", "৬০ সেকেন্ডে"], 
        correct: 0 
    },
    { 
        question: "শব্দের প্রয়োগে অন্ধকারে চলে কোন প্রাণী?", 
        options: ["মানুষ", "বাদুড়", "হাতি", "বিড়াল"], 
        correct: 1 
    },
    { 
        question: "শব্দোত্তর তরঙ্গের কম্পাঙ্ক কত?", 
        options: ["20 Hz", "20 Hz – 20,000 Hz", "20,000 Hz", "20,000Hz"], 
        correct: 2 
    },
    { 
        question: "পারমাণবিক বোমার বিস্ফোরণে কী ধরনের শব্দ সৃষ্টি হয়?", 
        options: ["শব্দোত্তর", "শব্দেতর", "20 – 20000 Hz কম্পাঙ্কের", "অসীম"], 
        correct: 0 
    },
    { 
        question: "কোনো বস্তু মিনিটে ১২০০ টি পূর্ণ কম্পন সম্পন্ন করে। এর কম্পাঙ্ক কত?", 
        options: ["20 Hz", "100 Hz", "60 Hz", "120 Hz"], 
        correct: 1 
    },
    { 
        question: "সোনার যন্ত্র কোন তরঙ্গ ব্যবহার করে?", 
        options: ["শব্দেতর তরঙ্গ", "শব্দোত্তর তরঙ্গ", "আলোক তরঙ্গ", "চৌম্বক তরঙ্গ"], 
        correct: 1 
    },
    { 
        question: "তরঙ্গের তীব্রতা কোনটির বর্গের সমানুপাতিক?", 
        options: ["বেগ", "বিস্তার", "তরঙ্গদৈর্ঘ্য", "সময়কাল"], 
        correct: 1 
    },
    { 
        question: "প্রতিধ্বনির ব্যবহার হয়—", 
        options: ["শব্দ বাড়াতে", "প্রতিসরণ ঘটাতে", "দূরত্ব নির্ণয়ে", "তাপ উৎপাদনে"], 
        correct: 2 
    },
    { 
        question: "কোনো মাধ্যমের তাপমাত্রা বাড়লে শব্দের বেগ—", 
        options: ["বাড়ে", "কমে", "অপরিবর্তিত থাকে", "শূন্য হয়"], 
        correct: 0 
    },
    {
        question: "বিভব শক্তি নির্ভর করে বস্তুর—",
        options: ["উচ্চতার উপর", "আকারের উপর", "আয়তনের উপর", "তাপমাত্রার উপর"],
        correct: 0
    },
    {
        question: "কাজ করার হারকে কী বলে?",
        options: ["ক্ষমতা", "শক্তি", "বিভবশক্তি", "গতি শক্তি"],
        correct: 0
    },
    {
        question: "২০০ জুল কাজ ১০ সেকেন্ডে করলে ক্ষমতা কত হবে?",
        options: ["১০ ওয়াট", "২০ ওয়াট", "৩০ ওয়াট", "৫০ ওয়াট"],
        correct: 1
    },
    {
        question: "কাজ করার একক ও ক্ষমতার একক যথাক্রমে—",
        options: ["ওয়াট, জুল", "জুল, ওয়াট", "নিউটন, জুল", "জুল, নিউটন"],
        correct: 1
    },
    {
        question: "একটি যন্ত্রের দক্ষতা ৮০%। ইনপুট শক্তি ১০০ জুল হলে আউটপুট শক্তি কত হবে?",
        options: ["২০ জুল", "৫০ জুল", "৮০ জুল", "৮৫ জুল"],
        correct: 2
    },
    {
        question: "কোনটি সর্বদা ধনাত্মক কাজ করে?",
        options: ["অভিকর্ষ বল", "ঘর্ষণ বল", "চৌম্বক বল", "প্রতিক্রিয়া বল"],
        correct: 0
    },
    {
        question: "একটি মোটর ১০০ কেজি ভরের বস্তু ৫ মিটার উচ্চতায় ২০ সেকেন্ডে তুলল। এর ক্ষমতা কত? (g = 10 m/s²)",
        options: ["২৫ ওয়াট", "৫০ ওয়াট", "২০০ ওয়াট", "২৫০ ওয়াট"],
        correct: 3
    },
    {
        question: "কাজ করার শর্ত কোনটি নয়?",
        options: ["বল থাকতে হবে", "সরণ থাকতে হবে", "বল ও সরণ একই দিকে হতে হবে", "সময় থাকতে হবে"],
        correct: 3
    },
    {
        question: "যান্ত্রিক শক্তি কী বোঝায়?",
        options: ["কেবল বিভবশক্তি", "কেবল গতিশক্তি", "বিভবশক্তি ও গতিশক্তির যোগফল", "তাপশক্তি ও রাসায়নিক শক্তির যোগফল"],
        correct: 2
    },
    {
        question: "২ কেজি ভরের একটি বস্তু ৪ মিটার উচ্চতায় উঠানো হলো। এর বিভবশক্তি কত? (g = 10 m/s²)",
        options: ["৮ জুল", "২০ জুল", "৪০ জুল", "৮০ জুল"],
        correct: 2
    },
    {
        question: "একটি যন্ত্রের দক্ষতা কখনই ১০০% হয় না, কেন?",
        options: ["যন্ত্র দুর্বল হওয়ার কারণে", "ঘর্ষণ বলের কারণে", "শক্তি উৎপন্ন হয় না বলে", "সময় বেশি লাগে বলে"],
        correct: 1
    },
    {
        question: "ক্ষমতার একক ওয়াট কার নামে নামকরণ করা হয়েছে?",
        options: ["জেমস ওয়াট", "নিউটন", "জুল", "ফ্যারাডে"],
        correct: 0
    },
    {
        question: "১ হর্স পাওয়ার সমান—",
        options: ["৫৪৬ ওয়াট", "৭৪৬ ওয়াট", "৮৪৬ ওয়াট", "৯৪৬ ওয়াট"],
        correct: 1
    },
    {
        question: "বিভবশক্তি শূন্য হয় কোন স্থানে?",
        options: ["ভূ-পৃষ্ঠে", "শূন্যস্থানে", "অসীম উচ্চতায়", "শূন্য ভরের ক্ষেত্রে"],
        correct: 0
    },
    {
        question: "একটি বল উল্লম্বভাবে উপরে নিক্ষেপ করলে উপরের দিকে উঠতে উঠতে—",
        options: ["বিভবশক্তি বাড়ে, গতিশক্তি কমে", "বিভবশক্তি কমে, গতিশক্তি বাড়ে", "উভয়ই সমান থাকে", "শক্তি নষ্ট হয়"],
        correct: 0
    },
    {
        question: "শক্তির নিত্যতা সূত্র অনুযায়ী—",
        options: ["শক্তি সৃষ্টি হয় না, ধ্বংস হয়", "শক্তি সৃষ্টি হয়, ধ্বংস হয় না", "শক্তি সৃষ্টি বা ধ্বংস হয় না, কেবল রূপান্তরিত হয়", "শক্তি সবসময় নষ্ট হয়"],
        correct: 2
    },
    {
        question: "একটি বস্তুকে টান টান করলে এর মধ্যে কোন শক্তি জমা থাকে?",
        options: ["গতিশক্তি", "বিভব শক্তি", "তাপ শক্তি", "রাসায়নিক শক্তি"],
        correct: 1
    }
    ]
    let timeLeft = 1500;
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
            timeLeft = 1500;
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