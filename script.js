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
        const answer = document.querySelector('.answer')

    const questions = [
        
        { question: "ওয়ার্ড ডকুমেন্টে ছবি যোগ করার কমান্ড কোনটি?",
            options: ["Insert → Dialogue box → Picture", "Insert → Picture → Dialogue box", "Insert → Table → Picture", "Insert → Picture → Table"],
            correct: 1
        },
        
        { question: "উদ্দীপকের আলোকে '?' সেলের ঠিকানা কী? (ওয়ার্কশিটে দৈর্ঘ্য=18, প্রস্থ=15, উচ্চতা=10)",
            options: ["A2", "B2", "C2", "D2"],
            correct: 3
        },
        
        { question: "উক্ত সেলের সঠিক সূত্র কোনটি? (A1:C1 পর্যন্ত গুণফল)",
            options: ["=PRODUCT(A1:C1)", "=PRODUCT(A2:C2)", "=PRODUCT(A1:D1)", "=PRODUCT(A2:D2)"],
            correct: 0
        },
        
        { question: "ডকুমেন্ট সেভ করার কীবোর্ড কমান্ড কোনটি?",
            options: ["ctrl + P", "ctrl + S", "ctrl + U", "ctrl + X"],
            correct: 1
        },
        
        { question: "'?' এর চিহ্নিত F2 সেলে কত হবে? (Name: X, Ban=45, Eng=50, Math=40, Average=?)",
            options: ["45.00", "50.00", "68.33", "48.33"],
            correct: 3
        },
        
        // ===== IMAGE 6: অধ্যায়-৪ (Q6-Q18) =====
        
        
        
        { question: "নিচের ওয়ার্কশিটটি লক্ষ কর (Salary sheet) — নিট প্রাপ্ত বেতনের জন্য সঠিক সূত্র কোনটি?",
            options: ["= (C4 + D4) – E4, = C4 × 5%", "= C4 × 5%, = (C4 + D4) – E4", "= C4 × 5%, = (C4 + D4) – E4", "= (C4 + D4) – E4, = C4 × 5%"],
            correct: 2
        },
        
        { question: "লেখালেখির জন্য কোন সফটওয়্যার ব্যবহৃত হয়?",
            options: ["স্প্রেডশিট", "ওয়ার্ড প্রসেসর", "ফটোশপ", "ডাটাবেজ"],
            correct: 1
        },
        
        { question: "স্প্রেডশিটে— (i) গণনা করার জন্য ফলাফল সেলে সূত্র দিতে হয় (ii) সূত্র সব সময় '=' সমান চিহ্ন দিয়ে শুরু হয় (iii) গণনা করার প্রক্রিয়া দু ধরনের — নিচের কোনটি সঠিক?",
            options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
            correct: 3
        },
        
        { question: "পৃষ্ঠায় নম্বর দেওয়ার সঠিক পদ্ধতি হলো-",
            options: ["Insert → Paragraph → Page Number", "Insert → Header & Footer → Page Number", "Page Layout → Paragraph → Page Number", "Page Layout → Header & Footer → Page Number"],
            correct: 1
        },
        
        { question: "গণনা করার প্রক্রিয়া কয় ধরনের?",
            options: ["১ ধরনের", "২ ধরনের", "৩ ধরনের", "৪ ধরনের"],
            correct: 1
        },
        
        { question: "স্পেল চেকার কী?",
            options: ["সফটওয়্যার", "হার্ডওয়্যার", "ফাইল", "প্রোগ্রাম"],
            correct: 0
        },
        
        { question: "ফন্ট বলতে কোনটি বুঝায়?",
            options: ["বিভিন্ন ধরনের লিপি", "বিভিন্ন ধরনের শব্দ", "বিভিন্ন ধরনের অক্ষর", "বিভিন্ন ধরনের অভিধান"],
            correct: 2
        },
        
        { question: "ওয়ার্ড প্রসেসরে নিউ অপশনটি কোন বাটনে থাকে?",
            options: ["হোম", "ইনসার্ট", "রেফারেন্স", "অফিস বাটন"],
            correct: 3
        },
        
        { question: "লেখালেখির সাজসজ্জার প্রথম বিষয় কোনটি?",
            options: ["বানান সংশোধন", "ফন্ট নির্ধারণ করা", "ফন্ট সাইজ নির্ধারণ", "ফন্টের রং নির্ধারণ"],
            correct: 1
        },
        
        { question: "এক্সেল প্রোগ্রামে ফাংশন হলো— (i) = SUM() (ii) = AVG() (iii) = PRODUCT() — নিচের কোনটি সঠিক?",
            options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
            correct: 3
        },
        
        { question: "ওয়ার্ড প্রসেসরে কমান্ড গ্রুপকে কী বলে?",
            options: ["Menu", "Ribbon", "Tool", "Sheet"],
            correct: 1
        },
        
        { question: "প্রিন্ট করার কী বোর্ড কমান্ড কোনটি?",
            options: ["Ctrl + P", "Ctrl + C", "Ctrl + V", "Alt + V"],
            correct: 0
        },
        
        // ===== IMAGE 4: (Q19-Q31) =====
        
        { question: "ডকুমেন্ট কপি করার কীবোর্ড কমান্ড কোনটি?",
            options: ["Ctrl + S", "Ctrl + X", "Ctrl + C", "Ctrl + N"],
            correct: 2
        },
        
        { question: "ওয়ার্ড প্রসেসরে ক্রমানুসারে তালিকা তৈরি করার সঠিক প্রক্রিয়া কোনটি?",
            options: ["Insert > Text Group > Bullets", "Home > Text Group > Number", "Insert > Paragraph Group > Bullets", "Home > Paragraph Group > Number"],
            correct: 3
        },
        
        { question: "মি. চৌধুরীর নিট বেতন নির্ণয়ের সঠিক সূত্র কোনটি? (মূলবেতন=৩৯৫০০, বাড়িভাড়া=৫৫%, চিকিৎসা=৭০০, কল্যাণ তহবিল=৯০)",
            options: ["= A3 + (A3*B3%) + C3 + D3", "= A3 + A3*B3% + C3 - D3", "= A3 + (A3*B3) + C3 + D3", "= A3 + A3*B3 + C3 - D3"],
            correct: 0
        },
        
        { question: "স্প্রেডশিটে A3 এবং B3 সেলে গুণ করার নিয়ম— (i) = (A3*B3) (ii) = PRODUCT(A3:B3) (iii) (A3 + B3) — নিচের কোনটি সঠিক?",
            options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
            correct: 0
        },
        
        { question: "'Hard Disk' সেল ঠিকানা কোনটি?",
            options: ["D7", "C6", "C8", "D5"],
            correct: 2
        },
        
        { question: "'Headphone' এর Var হিসেবে করার সূত্র কোনটি?",
            options: ["= (D8*E8)*5%", "= (D9*E7)*5%", "= (D8*E9)*5%", "= (D9*E9)*5%"],
            correct: 0
        },
        
        { question: "কোনটি ফাংশন? (i) = SUM() (ii) = AVG() (iii) = PRODUCT() — নিচের কোনটি সঠিক?",
            options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
            correct: 3
        },
        
        { question: "ওয়ার্ডে কোন ধরনের ফন্ট ব্যবহার করা যায়?",
            options: ["বাংলা", "ইংরেজি", "আরবি", "সবগুলো"],
            correct: 3
        },
        
        { question: "বাংলা টাইপের জন্য কোন ফন্টটি বাছাই করতে হয়?",
            options: ["Arial", "Times Roman", "Mukit", "SutonnyMJ"],
            correct: 3
        },
        
        { question: "হেডার ও ফুটার গ্রুপ কোন ট্যাবের অন্তর্ভুক্ত?",
            options: ["ইনসার্ট", "হোম", "পেইজ লেআউট", "ডিজাই"],
            correct: 0
        },
        
        { question: "ওয়ার্ডে Table আইকনটি কোন মেনুর অন্তর্ভুক্ত?",
            options: ["Insert", "Home", "File", "Format"],
            correct: 0
        },
        
        { question: "Chart, Smart Art, Shapes, Clip Art থাকে— (i) Font গ্রুপে (ii) Paragraph গ্রুপে (iii) Illustrations গ্রুপে — নিচের কোনটি সঠিক?",
            options: ["i", "ii", "iii", "i, ii, iii"],
            correct: 2
        },
        
        { question: "একটি ওয়ার্কশিটের ৯ম কলাম ও ৫ম সারির সেল এড্রেস কোনটি?",
            options: ["C3", "H5", "A3", "A5"],
            correct: 1
        },
        
        // ===== IMAGE 3: (Q32-Q45) =====
        
        { question: "নাসিফ প্রথম কাজটি করতে কোনটির সাহায্য নিয়েছিল?",
            options: ["New", "Open", "Save", "Save as"],
            correct: 0
        },
        
        { question: "পরের কাজটি করতে হলে— (i) Save এ ক্লিক করতে হবে (ii) Save as এ ক্লিক করতে হবে (iii) Cltr + C ক্লিক করতে হবে — নিচের কোনটি সঠিক?",
            options: ["i ও ii", "ii ও iii", "i ও iii", "i, ii ও iii"],
            correct: 0
        },
        
        { question: "স্প্রেডশিটে গণনা করার জন্য কোথায় সূত্র দিতে হয়?",
            options: ["ফলাফল সেলে", "কলামে", "সারিতে", "ওয়ার্কশিটে"],
            correct: 0
        },
        
        { question: "'= A3 * B3%' সূত্রটি কোন ক্ষেত্রে ব্যবহার করা হয়?",
            options: ["গুণ", "ভাগ", "সংযোজন", "শতকরা"],
            correct: 3
        },
        
        { question: "স্প্রেডশিট বিশ্লেষণের বৈশিষ্ট্যসমূহ— (i) যেকোনো ধরনের হিসাবের জন্য সুবিধাজনক (ii) অক্ষরভিত্তিক উপাত্ত নিয়ে কাজ করা যায় (iii) বিভিন্ন ফাংশন সূত্রাকারে ব্যবহার করা যায় — নিচের কোনটি সঠিক?",
            options: ["i ও ii", "ii ও iii", "i ও iii", "i, ii ও iii"],
            correct: 3
        },
        
        { question: "ডকুমেন্টের লাইন ব্যবধান নির্ধারণ করতে রিবনের কোন ট্যাব ক্লিক করতে হবে?",
            options: ["হেডার ও ফুটার", "পেইজ", "পেইজ", "প্যারাগ্রাফ"],
            correct: 2
        },
        
        { question: "ওয়ার্ড প্রসেসরে লেখালেখি করার জন্য বিভিন্ন নোটপ্যাড অক্ষরকে কী বলা হয়?",
            options: ["স্পেডিং টেক্সট", "চার্ট", "ফন্ট", "ওয়ার্ড আর্ট"],
            correct: 2
        },
        
        { question: "স্প্রেডশিটে কোন কাজটি করা সহজ?",
            options: ["Applying formula", "Storing information", "Composing letter", "Browsing internet"],
            correct: 0
        },
        
        { question: "স্প্রেডশিটে ভাগ করার জন্য কোনটি ব্যবহৃত হয়?",
            options: ["\\", "/", "[", "+"],
            correct: 1
        },
        
        { question: "সেভ বাটনের কাজ কী?",
            options: ["সংরক্ষণ করা", "খোলা", "গ্রহণ করা", "বন্ধ করা"],
            correct: 0
        },
        
        { question: "স্পেল চেকার হলো-",
            options: ["বানান তদ্দ করার সফটওয়্যার", "ফাইল ফরমেটিং সফটওয়্যার", "ফাইলের মেমোরি কমানোর সফটওয়্যার", "ই-রিডার সফটওয়্যার"],
            correct: 0
        },
        
        { question: "ডকুমেন্টে টেবিল ছাপন করার সহজতর উপায় হিসেবে ব্যবহার করা যায় কোনটি?",
            options: ["প্রিসেট টেবিল", "টেবিল মার্জ", "টেবিল মেনু", "ইনসার্ট টেবিল কমান্ড"],
            correct: 3
        },
        
        { question: "ওয়ার্কশিটের বাম দিক থেকে ডান দিকে চলে আসা ঘরগুলোকে কী বলে?",
            options: ["কলাম", "সারি", "রেঞ্জ", "লাইন"],
            correct: 1
        },
        
        { question: "MIN, SUM ইত্যাদি হচ্ছে-",
            options: ["ফাংশন", "ফর্মুলা", "নির্দেশ", "মেনু"],
            correct: 0
        },
        
        // ===== IMAGE 9: অধ্যায়-২: কম্পিউটার রক্ষণাবেক্ষণ ও সাইবার নিরাপত্তা (Q1-Q9) =====
        
        { question: "কম্পিউটারে 'Out of Memory' মেসেজ দেখলে কোনটি অধিক ব্যবহার করতে হবে?",
            options: ["CD", "ROM", "BIOS", "RAM"],
            correct: 3
        },
        
        { question: "Beep sound দেয় সাধারণত কোনটি নষ্ট হলে?",
            options: ["CMOS", "CPU", "ROM", "RAM"],
            correct: 3
        },
        {
           question: "কম্পিউটারে 'out of memory' দেখলে কোনটি অধিক ব্যাবহার করতে হবে?",
           option: ["CD", "ROM", "BIOS", "RAM"],
           correct: 3
        },
        
        { question: "কম্পিউটারের মাদার বোর্ডে সংযুক্ত ব্যাটারিটিকে কী বলে?",
            options: ["BIOS", "COMS", "MOUS", "CMOS"],
            correct: 3
        },
        
        { question: "কম্পিউটারের কাজ করার গতি বজায় রাখার জন্য ব্যবহার করা হয়— (i) ডিস্ক ক্লিন-আপ (ii) ডিস্ক ফরম্যাট (iii) ডিস্ক ডিফ্র্যাগমেন্ট — নিচের কোনটি সঠিক?",
            options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
            correct: 1
        },
        
        { question: "কম্পিউটারের কোনো সফটওয়্যার ডিলিট করলে তার কিছু অংশ কোথায় থেকে যায়?",
            options: ["হার্ডিস্কে", "মেমোরিতে", "রেজিস্ট্রিতে", "সিডিরমে"],
            correct: 2
        },
        
        { question: "ডিলিট করা ফাইল রেজিস্ট্রির সব জায়গা থেকে মুছে ফেলতে কোন বাটন চাপতে হবে?",
            options: ["F1", "F2", "F3", "F4"],
            correct: 2
        },
        
        { question: "জরুরি কিছু কাজের কথা লেখা থাকে কোন ফাইলে?",
            options: ["Read me", "Set up", "Auto exe", "Restart"],
            correct: 0
        },
        
        { question: "কোন সফটওয়্যার কম্পিউটারকে সক্রিয় ও চালু করতে সাহায্য করে?",
            options: ["অপারেটিং সিস্টেম", "ক্লিনার", "ক্লিন আপ সফটওয়্যার", "ড্রাইনার"],
            correct: 0
        },
        
        { question: "কম্পিউটারে বিপুল পরিমাণ তথ্য সঞ্চয় করে রাখা হয়— (i) CD-ROM এ (ii) ROM এ (iii) Hard disk এ — নিচের কোনটি সঠিক?",
            options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
            correct: 1
        },
        
        // ===== IMAGE 5: (Q26-Q40) =====
        
        { question: "Hard Disk-এ পাওয়ার না থাকলে কোনটি ঘটবে?",
            options: ["কম্পিউটার Shut down হতে পারে না", "কম্পিউটার সিস্টেম চালু হবে না", "Boot Disk Failure or Hard Disk not Found মেসেজ দেখাবে", "CMOS ব্যাটারি কাজ করবে না"],
            correct: 2
        },
        
        { question: "ডিলিট করার জন্য সফটওয়্যারটির নাম খোঁজার পর কীসে ক্লিক করতে হবে?",
            options: ["Edit", "Export", "Find Next", "Delete"],
            correct: 2
        },
        
        { question: "Run Command চালুর জন্য কীবোর্ডের কোন বাটন চাপতে হবে?",
            options: ["Ctrl+r", "Shift+r", "Alt+r", "Windows+r"],
            correct: 3
        },
        
        { question: "অ্যাপ্লিকেশন সফটওয়্যার ইনস্টলের প্রক্রিয়া কোনটির উপর নির্ভর করে?",
            options: ["অ্যাপ্লিকেশন সফটওয়্যার", "প্যাকেজ সফটওয়্যার", "বিল্ট-ইন-ইন্সট্রাকশন", "অপারেটিং সিস্টেম"],
            correct: 3
        },
        
        { question: "কোনো সফটওয়্যার আনইনস্টল করতে প্রথমে কোথায় যেতে হবে?",
            options: ["স্টার্ট বাটন থেকে কন্ট্রোল প্যানেল", "ডাবল ক্লিক করে আর্কর অর রিমুভ", "নির্ধারিত ড্রাইভ থেকে সফটওয়্যারে", "উইন্ডোজ + r চেপে Run command"],
            correct: 0
        },
        
        { question: "কম্পিউটার সফটওয়্যার আনইনস্টল করার প্রক্রিয়াটি কোনটি?",
            options: ["কন্ট্রোল প্যানেল–এর অর রিমুভ–নির্দিষ্ট প্রোগ্রাম–আনইনস্টল", "কন্ট্রোল প্যানেল–নির্দিষ্ট প্রোগ্রাম–আনইনস্টল–নির্দিষ্ট প্রোগ্রাম", "কন্ট্রোল–কন্ট্রোল প্যানেল–আনইনস্টল", "নির্দিষ্ট প্রোগ্রাম–কন্ট্রোল প্যানেল–আনইনস্টল"],
            correct: 0
        },
        
        { question: "কম্পিউটার ব্যবহারের সময় প্রতিবার কোন ফাইলটি তৈরি হয়?",
            options: ["টেম্পোরারি ফাইল", "পার্মানেন্ট ফাইল", "HTML ফাইল", "OS ফাইল"],
            correct: 0
        },
        
        { question: "গুরুত্বপূর্ণ তথ্য কোন ফাইলে লেখা থাকে?",
            options: ["autorun", "autoexe", "read me", "setup"],
            correct: 2
        },
        
        { question: "Software আন-ইনস্টল করলে এর কিছু অংশ অপারেটিং সিস্টেমের কোথায় থেকে যায়?",
            options: ["কন্ট্রোল প্যানেলে", "টেম্পোরারি ফাইলে", "জাঙ্ক ফাইলে", "রেজিস্ট্রি ফাইলে"],
            correct: 3
        },
        
        { question: "Boot disk failure or Hard disk not found মেসেজ দেখায়— (i) হার্ডডিস্কের সাথে ডেটা ক্যাবল সংযুক্ত না থাকলে (ii) হার্ডডিস্কের সাথে পাওয়ার ক্যাবল সংযুক্ত না থাকলে (iii) CMOS নষ্ট থাকলে — নিচের কোনটি সঠিক?",
            options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
            correct: 0
        },
        
        { question: "CMOS ব্যাটারি কম্পিউটারের কোথায় থাকে?",
            options: ["র্যাম", "রম", "সিপিইউ", "মাদারবোর্ড"],
            correct: 3
        },
        
        { question: "সিস্টেম সঠিকভাবে চলছে কিন্তু Display চালু না হওয়ার কারণ-",
            options: ["মাদারবোর্ড এর সমস্যা", "RAM- এর সমস্যা", "হার্ডডিস্ক এর সমস্যা", "CMOS ব্যাটারি"],
            correct: 3
        },
        
        { question: "কম্পিউটারের মেটাল অংশে স্পর্শ করার ফলে শক করলে কী বুঝতে হবে?",
            options: ["আর্থিং করা নেই", "লুজ কানেকশন আছে", "ক্যাবল ক্ষতিমুক্ত", "ইলেক্ট্রিক কানেকশন ঠিক নাই"],
            correct: 0
        },
        
        { question: "কোনো সফটওয়্যার ইনস্টল করতে হলে প্রথমেই কোনটি প্রয়োজন?",
            options: ["সফটওয়্যার ডাউনলোড করা", "সফটওয়্যারের সফট কপি", "Setup এর অনুমতি", "কম্পিউটার Restart"],
            correct: 0
        },
        
        { question: "Brightness ও Contrast কখন দেখতে হবে ঠিক আছে কিনা?",
            options: ["মনিটর অন কিন্তু পর্দায় ছবি না থাকলে", "কীবোর্ডে Power না থাকলে", "কীবোর্ড কাজ না করলে", "মাউস ডিটেক্ট না করলে"],
            correct: 0
        },
        
        // ===== IMAGE 2 & 12: অধ্যায়-৫: মাল্টিমিডিয়া ও গ্রাফিক্স (Q20-Q35) =====
        
        { question: "পাওয়ার পয়েন্ট হচ্ছে একটি— (i) প্রোগ্রাম (ii) সফটওয়্যার (iii) অ্যাপ্লিকেশন — নিচের কোনটি সঠিক?",
            options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
            correct: 3
        },
        
        { question: "প্রেজেন্টেশন হলো একটি-",
            options: ["ডিজিটাল কনটেন্ট", "এনালগ কনটেন্ট", "লিখিত কনটেন্ট", "হাইব্রিড কনটেন্ট"],
            correct: 0
        },
        
        { question: "এক কথায় মাল্টিমিডিয়া মানে কী?",
            options: ["প্রকাশ মাধ্যম", "বহু মাধ্যম", "সংবাদ মাধ্যম", "দূর যোগাযোগ"],
            correct: 1
        },
        
        { question: "ভিডিও কার্ড এক ধরনের কী?",
            options: ["বর্ণ", "চিত্র", "শব্দ", "সংখ্যা"],
            correct: 1
        },
        
        { question: "Slide show কোন মেনুতে থাকে?",
            options: ["Home", "Insert", "Design", "View"],
            correct: 3
        },
        
        { question: "স্লাইডের Background রং আরোপ করতে কোন বোতামে Click করতে হবে?",
            options: ["Foreground", "Solid fill রেডিও বোতামে", "Strake বোতামে", "Color বোতামে"],
            correct: 1
        },
        
        { question: "Background style অপশনটি কোন মেনুতে থাকে?",
            options: ["Home", "Insert", "Design", "Animation"],
            correct: 2
        },
        
        { question: "ট্রানজিশন মূলত কী?",
            options: ["স্লাইড", "ইফেক্ট", "ভিডিও", "হ্যান্ড আউটস"],
            correct: 1
        },
        
        { question: "স্লাইডে ছবি যুক্ত করার জন্য কয়টি ধাপ মেনে চলে?",
            options: ["৩", "৪", "৫", "৬"],
            correct: 0
        },
        
        { question: "স্লাইডে অডিও যুক্ত করার জন্য সঠিক পদ্ধতি কোনটি?",
            options: ["Insert → Movie → Movie from File", "Insert → image → Insert Image", "Insert → Audio → Insert Audio", "কোনোটিই নয়"],
            correct: 2
        },
        
        { question: "শক্তিশালী অথরিং সফটওয়্যার— (i) ফ্লাশ (ii) ডিরেক্টর (iii) অথরওয়্যার — নিচের কোনটি সঠিক?",
            options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
            correct: 3
        },
        
        { question: "Bangladesh 71 হল-",
            options: ["presentation software", "graphics software", "multimedia software", "communication software"],
            correct: 2
        },
        
        { question: "New Slide কমান্ড কোন মেনুর অন্তর্গত?",
            options: ["হোম", "ইনসার্ট", "রেফারেন্স", "পেইজ লে-আউট"],
            correct: 0
        },
        
        { question: "ট্রানজিশন হলো এক ধরনের-",
            options: ["ভিডিও", "স্লাইড", "ইফেক্ট", "সবগুলো"],
            correct: 2
        },
        
        { question: "ইন্টার অ্যাক্টিভিটি যোগ করার সফটওয়্যার কোনটি?",
            options: ["মাইক্রোসফট এক্সেল", "মাইক্রোসফট", "ফটোশপ", "ডিরেক্টর"],
            correct: 3
        },
        
        { question: "প্রেজেন্টেশন সফটওয়্যার নয় কোনটি?",
            options: ["ফ্লাশ", "পিকাসা", "পাওয়ার পয়েন্ট", "ইমপ্রেস"],
            correct: 1
        },
        
        // ===== IMAGE 11: অধ্যায়-৬: প্রোগ্রামিংয়ের মাধ্যমে সমস্যার সমাধান (Q1-Q12) =====
        
        { question: "অনুবাদকের কাজ হলো— (i) সবগুলো নির্দেশ একসাথে মেশিন কোডে রূপান্তরিত করা (ii) একটি একটি করে নির্দেশ মেশিন কোডে রূপান্তরিত করা (iii) মেশিন কোডকে পাইথন কোডে রূপান্তরিত করা — নিচের কোনটি সঠিক?",
            options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
            correct: 0
        },
        
        { question: "পাইথন ভাষায় মনিটরে কোনো লেখা প্রদর্শন করার জন্য নিচের কোন ফাংশনটি ব্যবহার করা হয়?",
            options: ["printf()", "print()", "print", "printin()"],
            correct: 1
        },
        
        { question: "পাইথন ভাষায় y = int(2.8) হলে print(y) এর মান কত হবে?",
            options: ["2.8", "2", "28", "2.0"],
            correct: 1
        },
        
        { question: "পাইথন ভাষায়, a = 5, b = 2, y = a % b হলে print(y) এর মান কত হবে?",
            options: ["1", "2", "3", "5"],
            correct: 0
        },
        
        { question: "বাইনারি ভাষাকে কী ভাষা বলা হয়?",
            options: ["মানুষের ভাষা", "পাইথন ভাষা", "ল্যাটিন ভাষা", "মেশিন ভাষা"],
            correct: 3
        },
        
        { question: "কম্পাইলার ও ইন্টারপ্রেটার-এর মধ্যে মৌলিক পার্থকা কোনটি?",
            options: ["কম্পাইলার একটি তুল লাইনে থামে, ইন্টারপ্রেটার পুরো প্রোগ্রাম অনুবাদ করে", "কম্পাইলার পুরো প্রোগ্রাম অনুবাদ করে, ইন্টারপ্রেটার একটি তুল লাইনে থামে", "কম্পাইলার দ্রুত, ইন্টারপ্রেটার ধীর", "কম্পাইলার ধীর, ইন্টারপ্রেটার দ্রুত"],
            correct: 1
        },
        
        { question: "নিচের কোনটি সঠিক? (পাইথনে Hi প্রিন্ট)",
            options: ["print('Hi')", "printf('Hi')", "print(Hi)", "print('Hi');"],
            correct: 0
        },
        
        { question: "আউটপুট স্ক্রীনে প্রদর্শনের পূর্বে অবজেক্ট কিসে পরিণত হয়?",
            options: ["ছবিতে", "অক্ষরে", "দশমিকে", "স্ট্রিং-এ"],
            correct: 3
        },
        
        { question: "নিচের কোন কোডটি 'হ্যালো, পৃথিবী!' লেখাটি আউটপুট করবে?",
            options: ["output('হ্যালো, পৃথিবী!')", "print('হ্যালো, পৃথিবী!')", "show('হ্যালো, পৃথিবী!')", "display('হ্যালো, পৃথিবী!')"],
            correct: 1
        },
        
        { question: "নিচের কোডটির আউটপুট কী হবে? x = 'Hello', y = 'World', print(x + y)",
            options: ["Hello World", "Hello World", "Hello+World", "Syntax Error"],
            correct: 1
        },
        
        { question: "নিচের কোন ভেরিয়েবলের নামটি অবৈধ (invalid)?",
            options: ["my_variable", "_my_variable", "1st_variable", "myVariable"],
            correct: 2
        },
        
        { question: "যদি পাইথনে 'Play' এবং 'play' নামে দুটি ভেরিয়েবল তৈরি করা হয়, তাহলে তারা কী হিসেবে গণ্য হবে?",
            options: ["শেষেরটি কেবল সংরক্ষিত হবে", "একই ভেরিয়েবল", "একটি সিনট্যাক্স ক্রটি", "ভিন্ন দুটি ভেরিয়েবল"],
            correct: 3
        },
        
        // ===== IMAGE 1 & 10: অধ্যায়-৬ (Q13-Q25) =====
        
        { question: "নিচের কোডটির আউটপুট কী হবে? x=5, y=x, x=6, print(x), print(y-1)",
            options: ["6 5", "5 6", "5 4", "6 4"],
            correct: 3
        },
        
        { question: "পাইথনে একটি পূর্ণসংখ্যা (integer) ডেটা টাইপ নির্ধারণ করার জন্য কোনটি ব্যবহৃত হয়?",
            options: ["int", "decimal", "float", "integer"],
            correct: 0
        },
        
        { question: "True/False data জমা রাখে কোনটি?",
            options: ["int", "float", "bool", "str"],
            correct: 2
        },
        
        { question: "কোনো ভেরিয়েবলের ডেটাটাইপ বের করার জন্য কোন ফাংশন ব্যবহার করা হয়?",
            options: ["cast()", "print()", "data()", "type()"],
            correct: 3
        },
        
        { question: "num = 2.49, print(type(num)), num = int(num), print(type(num)) — কোডটির আউটপুট কি হবে?",
            options: ["float\nfloat", "float\nint", "< class 'float' >\n< class 'float' >", "< class 'float' >\n< class 'int' >"],
            correct: 3
        },
        
        { question: "advash = float('3') — advash ভেরিয়েবলটির মান হবে-",
            options: ["3.0", "'3'", "'3.0'", "3"],
            correct: 0
        },
        
        { question: "input() ফাংশন দ্বারা গ্রহণকৃত ডেটার ডিফল্ট ডেটাটাইপ কোনটি?",
            options: ["int", "float", "str", "bool"],
            correct: 2
        },
        
        { question: "উদ্দীপকের কোডটিতে কোন ধরনের error আছে? (x = int(input('hello: Input a number:n')), print(x))",
            options: ["syntax error", "Logical error", "Runtime error", "Index error"],
            correct: 0
        },
        
        { question: "ইনপুট হিসেবে 3.0 লিখলে আউটপুট কি দেখাবে?",
            options: ["3", "3.0", "'3'", "ERROR!"],
            correct: 3
        },
        
        { question: "x=2, y=3, z=5, w = x+y*z+z-x*y/z, print(w) — প্রদর্শনকৃত আউটপুট-",
            options: ["20", "20.8", "22", "22.8"],
            correct: 1
        },
        
        { question: "পাইথনে রিলেশনাল অপারেটর— (i) = (ii) <= (iii) >= — নিচের কোনটি সঠিক?",
            options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii, iii"],
            correct: 2
        },
        
        { question: "x = (5 > 3) — print(x) প্রোগ্রামটির আউটপুট কি হবে?",
            options: ["1", "0", "True", "False"],
            correct: 2
        },
        
        { question: "var = 5, if var >= 5: print(1), elif var == 5: print(2), else: print(3) — প্রোগ্রামটিতে কত লাইন প্রিন্ট হবে?",
            options: ["1", "2", "12", "error"],
            correct: 0
        }
    ]
    
    let timeLeft = 1800;
    let currentQuestion = 0;
    let userAnswers = []
    let timerInterval = null;
    let examStartTime = null;
    let correctAnswers = 0;
    let isReviewMode = false;

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
                if(isReviewMode){
                    answerSheet()
                }else{
                    loadQuestion()
                }
               

                
            
                
            }
            
        }

        function previousQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;

                if(isReviewMode){
                    answerSheet()
                }else{
                    loadQuestion()
                }
               
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
            timeLeft = 1800;
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
        window.answerSheet = answerSheet;
        window.startAnswerReview = startAnswerReview;
        window.home = home

        // Start exam event listener
        startBtn.addEventListener('click', (e) => {
            e.preventDefault();
            examStartTime = Date.now(); // Set start time
            loadQuestion();
            startTimer();
        });

        function answerSheet(){
            results.classList.remove('show')
            

            const currentQ = questions[currentQuestion]
            

            const insert = `
                <div class="question active">
                    <div class="question-header">
                        <div class="question-number">Question ${currentQuestion + 1} of ${questions.length}</div>
                    </div>
                    <div class="question-text">${currentQ.question}</div>
                       <div class="options">
                       ${currentQ.options.map((option, index) => `
                        <div class="option">
                            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                            <span>${option}</span>
                        </div>
                        `).join('')}

                        </div>
                    <div class="navigation">
                        <button class="btn btn-secondary" onclick="previousQuestion()" 
                             ${currentQuestion === 0 ? 'disabled' : ''}   >
                            ← Previous
                        </button>
                         ${currentQuestion + 1 < questions.length ?'<button class="btn btn-primary" onclick="nextQuestion()">Next →</button>' :
                            '<button class="btn btn-primary" onclick="home()">Home</button>'
                         }  
                        
                        
                    </div>
                </div>
                
            `
            answer.innerHTML = insert;

            const options = answer.querySelectorAll('.option')

            

            const userIndex = userAnswers[currentQuestion];
            const correctIndex = currentQ.correct;

            if(userIndex !== undefined && userIndex !== correctIndex){
                options[userIndex]?.classList.add('incorrect')
            }
            options[correctIndex]?.classList.add('correct')

            progress.style.background = '';
            updateProgress()
            

            
        }

        function startAnswerReview(){
            isReviewMode = true;
            currentQuestion = 0;
            answerSheet()
            
        }

        function home(){

           answer.innerHTML = 'All task completed'
            
            
             
        }
});