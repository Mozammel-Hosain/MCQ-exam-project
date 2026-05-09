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
        { question: "কোন রাশি যুগলের মাত্রা এক?",
        options: ["শক্তি ও কাজের", "ক্ষমতা ও তুরণের", "বেগ ও সরণের", "বল ও ক্ষমতার"],
        correct: 0 },
    
    { question: "নিচের কোনটি লব্ধ রাশি?",
        options: ["ভর", "দীপন ক্ষমতা", "তড়িৎপ্রবাহ", "তাপ"],
        correct: 3 },
    
    { question: "একটি মিটার স্কেলের দৈর্ঘ্য কত?",
        options: ["1 m", "7 cm", "7.65 cm", "10 m"],
        correct: 0 },
    
    { question: "পদার্থবিজ্ঞানীরা বিশ্ব ব্রহ্মাণ্ডের দৃশ্যমান গ্রহ, নক্ষত্র ও গ্যালাক্সির কত শতাংশ ব্যাখ্যা করতে পারেন?",
        options: ["4%", "5%", "6%", "7%"],
        correct: 0 },
    
    { question: "1 পেটামিটার কত মিটারের সমান?",
        options: ["10⁹", "10¹²", "10¹⁵", "10¹⁸"],
        correct: 2 },
    
    { question: "সৌরকেন্দ্রিক তত্ত্বের ধারণা প্রদান করেন কে?",
        options: ["রোমার", "কোপার্নিকাস", "ট্রাইকোবাহের", "কেপলার"],
        correct: 1 },
    
    { question: "আলোকবিজ্ঞানের স্থপতি কে?",
        options: ["ম্যাক্স প্যাঙ্ক", "ইবনে আল হাইয়ান", "চন্দ্রশেখর রমন", "আলবার্ট আইনস্টাইন"],
        correct: 1 },
    
    { question: "আপেক্ষিক তত্ত্বের প্রতিষ্ঠাতা কে?",
        options: ["ম্যাক্স প্যাঙ্ক", "আলবার্ট আইনস্টাইন", "চন্দ্রশেখর রমন", "জেমস ক্লার্ক ম্যাক্সওয়েল"],
        correct: 1 },
    
    { question: "নিচের কোনটি মৌলিক রাশি?",
        options: ["তাপ", "দীপন তীব্রতা", "বেগ", "তড়িৎ বিভব"],
        correct: 1 },
    
    { question: "নিচের কোনটি যৌগিক রাশি?",
        options: ["তড়িৎ প্রবাহ", "দীপন তীব্রতা", "ক্ষমতা", "তাপমাত্রা"],
        correct: 2 },
    
    { question: "নিচের কোনটি মৌলিক রাশি? (সি. বো. ২০১৬)",
        options: ["তড়িৎ বিভব", "তাপ", "ওজন", "ভর"],
        correct: 3 },
    
    { question: "নিচের কোনটি মৌলিক রাশি? (ঢা. বো. ২০১৬)",
        options: ["বল", "কাজ", "বেগ", "সময়"],
        correct: 3 },
    
    { question: "সূর্যগ্রহণ সম্পর্কিত ভবিষ্যৎ বাণীর জন্য বিখ্যাত নিচের কোন প্রাচীন বিজ্ঞানী?",
        options: ["পিথাগোরাস", "থেলিস", "দার্শনিক ডেমোক্রিটাস", "আর্কিমিডিস"],
        correct: 1 },
    
    { question: "এক পিকোফ্যারাড সমান কত ফ্যারাড?",
        options: ["10⁻¹⁵", "10⁻¹²", "10¹²", "10¹⁵"],
        correct: 1 },
    
    { question: "ভার্নিয়ার স্কেলের 50 ঘর সমান প্রধান স্কেলের 49 ঘর। প্রধান স্কেলের ক্ষুদ্রতম 1 ঘর = 1 mm হলে, ভার্নিয়ার ধ্রুবক কত?",
        options: ["0.2 cm", "0.02 cm", "0.002 cm", "0.001 cm"],
        correct: 2 },
    
    { question: "আয়তাকার বস্তুর দৈর্ঘ্য নির্ণয় করতে গিয়ে দেখা গেল ভার্নিয়ার স্কেলের শূন্য দাগ প্রধান স্কেলের 7.7 cm এর ঘর অতিক্রম করেছে। ভার্নিয়ার স্কেলের 5 নম্বর ঘর প্রধান স্কেলের একটি দাগের সাথে পুরোপুরি মিলে যায়। যন্ত্রটির ভার্নিয়ার ধ্রুবক 0.01 cm হলে বস্তুটির দৈর্ঘ্য কত?",
        options: ["7.75 cm", "7.705 cm", "7.65 cm", "07.605 cm"],
        correct: 3 },
    
    { question: "s = ut + ½at² সমীকরণে ut এর মাত্রা কোনটি?",
        options: ["LT⁻³", "LT⁻²", "L", "0"],
        correct: 2 },
    
    { question: "রৈখিক স্কেল পাঠ 4 mm এবং বৃত্তাকার স্কেলের ভাগসংখ্যা 50 হলে তারের ব্যাস কত mm? (ন্যূনাংক 0.01)",
        options: ["2.25", "3.5", "4.5", "9.0"],
        correct: 2 },
    
    { question: "10 ফেমটোমিটার = কত মিটার?",
        options: ["10⁻¹²", "10⁻¹³", "10⁻¹⁴", "10⁻¹⁵"],
        correct: 3 },
    
    { question: "এক ন্যানো সেকেন্ড সমান কত সেকেন্ড?",
        options: ["10⁻⁹ সেকেন্ড", "10⁻⁶ সেকেন্ড", "10⁶ সেকেন্ড", "10⁹ সেকেন্ড"],
        correct: 0 },
    
    { question: "কোনো স্লাইড ক্যালিপার্সে ভার্নিয়ার ধ্রুবকের মান 0.005 সে.মি. হলে ভার্নিয়ার স্কেলের ভাগ সংখ্যা কত?",
        options: ["5", "10", "15", "20"],
        correct: 3 },
    
    { question: "একটি স্লাইড ক্যালিপার্সের ভার্নিয়ার স্কেলের ভাগ সংখ্যা 20। প্রধান স্কেলের ক্ষুদ্রতম এক ভাগের মান 1 mm হলে ভার্নিয়ার ধ্রুবক কত?",
        options: ["0.01 mm", "0.05 mm", "0.5 mm", "20 mm"],
        correct: 1 },
    
    { question: "মৌলিক রাশির সংখ্যা কয়টি?",
        options: ["তিনটি", "ছয়টি", "সাতটি", "নয়টি"],
        correct: 2 },
    
    { question: "পদার্থের পরিমাণের এস.আই একক কোনটি?",
        options: ["কেজি", "মোল", "ক্যান্ডেলা", "লাক্স"],
        correct: 1 },
    
    { question: "S.I পদ্ধতিতে তাপমাত্রার একক কোনটি?",
        options: ["সেন্টিগ্রেড", "কেলভিন", "জুল", "ক্যালরি"],
        correct: 1 },
    
    { question: "বর্তমানে বাদ্যযন্ত্র ও সংগীত বিষয়ে যে স্কেল রয়েছে তা তারের কম্পন বিষয়ক নিচের কোন প্রাচীন বিজ্ঞানীর অনুসন্ধানের আংশিক অবদান?",
        options: ["থেলিস", "পিথাগোরাস", "ডেমোক্রিটাস", "আর্কিমিডিস"],
        correct: 1 },
    
    { question: "গাণিতিক তত্ত্ব নির্মাণ ও পরীক্ষার মাধ্যমে সে তত্ত্বের সত্যতা যাচাইয়ের বৈজ্ঞানিক সূচনা করেন কে?",
        options: ["রজার বেকন", "আর্কিমিডিস", "গ্যালিলিও", "নিউটন"],
        correct: 2 },
    
   
    
    { question: "ডেমোক্রিটাস কোন দেশের নাগরিক ছিলেন?",
        options: ["গ্রীক", "জার্মানী", "ইতালি", "মিশর"],
        correct: 0 },
    
    { question: "পদার্থের অবিভাজ্য একেকের নাম এটম দিয়েছিলেন কে?",
        options: ["পিথাগোরাস", "ডেমোক্রিটাস", "ডালটন", "এরিস্টটল"],
        correct: 1 },
    
    { question: "তাত্ত্বিক পদার্থ বিজ্ঞানে গুরুত্বপূর্ণ অবদান আছে কার?",
        options: ["রজার বেকন", "আর্কিমিডিস", "সত্যেন্দ্রনাথ বসু", "স্টিফেন ওয়াইনবার্গ"],
        correct: 2 },
    
    { question: "নিচের কোনটি অন্য রাশির উপর নির্ভরশীল নয়?",
        options: ["তাপমাত্রা", "ওজন", "শক্তি", "দীপন ক্ষমতা"],
        correct: 0 },
    
    
    
    { question: "মাইক্রো উপসর্গটি নির্দেশ করে—",
        options: ["10⁻¹²", "10⁻⁹", "10⁻⁶", "10⁻³"],
        correct: 2 },
    
    { question: "1μA সমান কত mA?",
        options: ["10⁻³ mA", "10⁻⁶ mA", "10³ mA", "10⁶ mA"],
        correct: 0 },
    
    { question: "এক মাইক্রোওয়াট সমান কত ন্যানোওয়াট?",
        options: ["10⁻⁹", "10⁹", "10⁻⁶", "10³"],
        correct: 3 },
    
    { question: "নিচের কোনটিতে একেকের সংকেত লেখার ক্ষেত্রে সঠিক নিয়ম অনুসরণ করা হয়েছে?",
        options: ["Newton", "Pa", "Pascal", "Metre"],
        correct: 1 },
    
    { question: "কার বইয়ে বায়ুকলের উল্লেখ পাওয়া যায়?",
        options: ["টলেমী", "আল-মাসুদী", "আল-হাকিম", "গিলবার্ট"],
        correct: 1 },
    
    { question: "আপেক্ষিক তত্ত্ব প্রদান করেন কে?",
        options: ["ম্যাক্সওয়েল", "ম্যাক্স প্ল্যাঙ্ক", "আইনস্টাইন", "সত্যেন্দ্রনাথ বসু"],
        correct: 2 },
    
    { question: "নিচের কোন বিজ্ঞানী রাশিয়ার?",
        options: ["জোসেফ হেনরি", "এইচ. এফ. ই. লেঞ্জ", "মাইকেল ফ্যারাডে", "নিউটন"],
        correct: 1 },
    
    { question: "কোনো পরিমাপে চূড়ান্ত ত্রুটি 0.5 mm, পরিমাপ করা মান 7 mm হলে আপেক্ষিক ত্রুটি কত হবে?",
        options: ["0.071%", "0.715%", "7.1%", "0.071%"],
        correct: 2 },
    
    { question: "স্থানের জ্যামিতিক ধারণা সর্বপ্রথম কে উপস্থাপন করেন?",
        options: ["ইউক্লিড", "গ্যালিলিও", "নিউটন", "এরিস্টটল"],
        correct: 0 },
    
    { question: "বোসন কী ধরনের কণা?",
        options: ["কৃত্রিম কণা", "মৌলিক কণা", "সহমৌলিক কণা", "জটিল কণা"],
        correct: 1 },
    
    { question: "আধুনিক বৈজ্ঞানিক পদ্ধতির সূচনা ঘটে কোন বিজ্ঞানীর হাতে?",
        options: ["রজার বেকন", "নিউটন", "গ্যালিলিও", "আইনস্টাইন"],
        correct: 2 },
    
    { question: "নিউটনের মতে কোনটির শুরু বা শেষ নাই?",
        options: ["শক্তি", "ক্ষমতা", "কাজ", "স্থান"],
        correct: 3 },
    
    { question: "গ্যালিলিও তার স্থিতিবিদ্যায় স্থান ও কালকে ব্যবহার করেছেন কোন সূত্রে?",
        options: ["গতি ও তুরণের", "সরণ ও তুরণের", "বেগ ও সরণের", "বল ও তুরণের"],
        correct: 0 },
    
    { question: "ধাতুর ভেজাল নির্ণয়ের কৌশল আবিষ্কার করেন কে?",
        options: ["থেলিস", "অ্যারিস্টার্কাস", "গ্যালিলিও", "আর্কিমিডিস"],
        correct: 3 },
    
    { question: "পদার্থবিজ্ঞানের মূল ভিত্তি কোন নীতিকে বলা হয়?",
        options: ["শক্তির সংরক্ষণশীলতা নীতি", "বল বৃদ্ধিকরণ নীতি", "লিভারের নীতি", "আর্কিমিডেসের নীতি"],
        correct: 0 },
    
    { question: "টলেমির মতবাদের বিরোধিতা করেন কে?",
        options: ["আল হাজেন", "ইবনে আল হাইথাম", "টলেমি", "আল বিরুনী"],
        correct: 0 },
    
    { question: "লোডস্টোনের 'চৌষক ধর্ম' সম্পর্কে কে জানতেন?",
        options: ["থেলিস", "পিথাগোরাস", "ডেমোক্রিটাস", "অ্যারিস্টার্কাস"],
        correct: 0 },
    
    { question: "6733000000 সংখ্যাটিকে বৈজ্ঞানিক প্রতীকে প্রকাশ করলে কী হবে?",
        options: ["6.733 × 10⁹", "67.33 × 10³", "6.733 × 10⁶", "6733 × 10⁶"],
        correct: 0 },
    
    { question: "গিগা ন্যানোর কত গুণ?",
        options: ["10¹⁸ গুণ", "10⁹ গুণ", "10⁻¹⁸ গুণ", "10⁶ গুণ"],
        correct: 0 },
    
    { question: "1pF = কত ফ্যারাড?",
        options: ["10¹² F", "10⁻¹² F", "10⁹ F", "10⁻¹⁸ F"],
        correct: 1 },
    
    { question: "বাংলাদেশী বিজ্ঞানী সত্যেন্দ্রনাথ বসু, কোন বিজ্ঞানীর কোন সূত্রের বিকল্প প্রতিপাদন করেন?",
        options: ["প্যাঙ্কের বিকিরণ সূত্রের", "আইনস্টাইনের আপেক্ষিক তত্ত্বের", "গ্যালিলিওর সূত্রের", "ম্যাক্সওয়েলের তাড়িতচৌষক সূত্রের"],
        correct: 0 },
    
    { question: "পিথাগোরাস অবদান রেখেছেন— i. কম্পমান তারের উপর, ii. জ্যামিতিক উপপাদ্যে, iii. পরমাণুর গঠনে। নিচের কোনটি সঠিক?",
        options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
        correct: 0 },
    
    { question: "স্লাইড ক্যালিপার্সের ক্ষেত্রে দন্তের দৈর্ঘ্য— i. প্রধান স্কেল পাঠ + ভার্নিয়ার স্কেল পাঠ, ii. প্রধান স্কেল পাঠ + মোট ভাগ সংখ্যা × লঘিষ্ঠ গণন, iii. প্রধান স্কেল পাঠ + ভার্নিয়ার সমপাতন × ভার্নিয়ার ধ্রুবক। নিচের কোনটি সঠিক?",
        options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
        correct: 1 },
    
    { question: "মৌলিক রাশি — i. অন্য রাশির উপর নির্ভর করে না, ii. কালের বিবর্তনে পরিবর্তন হবে না, iii. একটি লব্ধ রাশি। নিচের কোনটি সঠিক?",
        options: ["i ও ii", "ii ও iii", "i ও iii", "i, ii ও iii"],
        correct: 0 },
    
    { question: "ত্রুটিমুক্ত স্লাইড ক্যালিপার্সের সাহায্যে একটি দন্তের দৈর্ঘ্য মাপার সময় মূল স্কেলের পাঠ 5 এবং ভার্নিয়ার সমপাতন 16 পাওয়া গেল। মূল স্কেলের ক্ষুদ্রতম এক ঘরের দৈর্ঘ্য 0.5 mm এবং মূল স্কেলের 19 ঘর ভার্নিয়ার স্কেলের 20 ঘরের সমান। ভার্নিয়ার ধ্রুবক কত?",
        options: ["0.1 mm", "0.025 mm", "0.026 mm", "0.25 mm"],
        correct: 1 },
    
    // ───── অধ্যায় ২: গতি ─────
    
    { question: "নিচের বেগের মাত্রা?",
        options: ["LT²", "LT⁻¹", "MLT²", "LT⁻²"],
        correct: 1 },
    
    { question: "স্থির অবস্থান থেকে সুষম তুরণে চলতে থাকা কোন বস্তুর ক্ষেত্রে কোনটি সঠিক?",
        options: ["v ∝ s", "s ∝ t", "v² ∝ √s", "v ∝ t"],
        correct: 3 },
    
    { question: "দোলনায় দুলতে থাকা শিশুর গতি কোন ধরনের?",
        options: ["চলন", "পর্যায়বৃত্ত", "ঘূর্ণন", "সরল স্পন্দন"],
        correct: 3 },
    
    { question: "সূর্যের চারদিকে পৃথিবীর গতি কোন ধরনের গতি?",
        options: ["চলন", "পর্যায়বৃত্ত", "ঘূর্ণন", "স্পন্দন"],
        correct: 1 },
    
    { question: "নিচের কোনটি স্কেলার রাশি? (রা. বো. ২০১৭)",
        options: ["বল", "তুরণ", "বেগ", "কাজ"],
        correct: 3 },
    
    { question: "নিচের কোনটি স্কেলার রাশি? (চ. বো. ২০১৭)",
        options: ["তড়িৎ তীব্রতা", "তুরণ", "ওজন", "চাপ"],
        correct: 3 },
    
    { question: "নিচের কোনগুলো ভেক্টর রাশি?",
        options: ["কাজ, সরণ", "শক্তি, ক্ষমতা", "সময়, বেগ", "বল, তড়িৎ প্রাবল্য"],
        correct: 3 },
    
    { question: "কোনটি ভেক্টর রাশি? (ঢা. বো. ২০১৬)",
        options: ["শক্তি", "ভরবেগ", "সময়", "তাপমাত্রা"],
        correct: 1 },
    
    { question: "গতির সমীকরণ কয়টি?",
        options: ["দুইটি", "তিনটি", "চারটি", "পাঁচটি"],
        correct: 2 },
    
    { question: "নিচের কোনটি তুরণের মাত্রা?",
        options: ["LT²", "LT⁻¹", "MLT²", "LT⁻²"],
        correct: 3 },
    
    
    
    { question: "75 m উঁচু দালান থেকে বস্তু ছেড়ে দিলে ভূমিতে কত বেগে আঘাত করবে? [g = 9.8 ms⁻¹]",
        options: ["38.3 ms⁻¹", "75 ms⁻¹", "735 ms⁻¹", "1470 ms⁻¹"],
        correct: 0 },
    
    // ───── অধ্যায় ৩: বল (Newton's Laws) ─────
    
    { question: "বেলের মাত্রা কোনটি?",
        options: ["ML⁻¹T⁻¹", "MLT⁻²", "ML⁻¹T⁻²", "ML⁻²T⁻²"],
        correct: 1 },
    
    { question: "ভরবেগের মাত্রা কোনটি?",
        options: ["MLT", "ML⁻¹T", "MLT⁻¹", "ML⁻¹T⁻¹"],
        correct: 2 },
    
    { question: "নিরাপদ ভ্রমণের ক্ষেত্রে নিচের কোনটি মুখ্য ভূমিকা পালন করে?",
        options: ["ভর", "ওজন", "গতি", "ঘর্ষণ"],
        correct: 3 },
    
    { question: "একটি ড্রাম সুষম ঢালু রাস্তা দিয়ে গড়িয়ে চললে নিচের কোনটি ঘটবে?",
        options: ["ভরবেগের পরিবর্তনের হার একই থাকবে", "কোন প্রকার ঘর্ষণ বল থাকবে না", "তুরণ ক্রমাগত বৃদ্ধি পাবে", "বল ক্রমাগত হ্রাস পাবে"],
        correct: 0 },
    
    { question: "উড়ন্ত পাখির মধ্যে কোন ঘর্ষণ ক্রিয়াশীল?",
        options: ["আবর্ত ঘর্ষণ", "পিছলানো ঘর্ষণ", "স্থিতি ঘর্ষণ", "প্রবাহী ঘর্ষণ"],
        correct: 3 },
    
    { question: "পদার্থের জড়তার পরিমাপ কী?",
        options: ["স্পর্শ বল", "অস্পর্শ বল", "ভর", "ওজন"],
        correct: 2 },
    
    { question: "ওজনের মাত্রা কোনটি?",
        options: ["MLT⁻²", "MLT⁻¹", "ML⁻²T⁻²", "M⁻¹LT⁻²"],
        correct: 0 },
    
    { question: "নিউটনের প্রথম সূত্র পদার্থের কোন ধর্মকে প্রকাশ করে?",
        options: ["বল", "জড়তা", "তুরণ", "বেগ"],
        correct: 1 },
    
    { question: "বস্তুর জড়তা কিসের উপর নির্ভর করে?",
        options: ["ভর", "সরণ", "বেগ", "তুরণ"],
        correct: 0 },
    
    { question: "500 gm ভরের একটি বস্তুর উপর 5N বল প্রয়োগ করা হলে তুরণ কত হবে?",
        options: ["0.1 ms⁻²", "2.5 ms⁻²", "10 ms⁻²", "100 ms⁻²"],
        correct: 2 },
    
    { question: "1 kg ভরের একটি বন্দুক থেকে 5 gm ভরের একটি গুলি ছোড়া হলে বন্দুকটি 2 ms⁻¹ পশ্চাৎবেগ প্রাপ্ত হলো, গুলির শেষবেগ কত?",
        options: ["0.4 ms⁻¹", "4 ms⁻¹", "40 ms⁻¹", "400 ms⁻¹"],
        correct: 3 },
    
    { question: "কোন বলটি কম শক্তিশালী?",
        options: ["মহাকর্ষ বল", "তাড়িত চৌম্বকীয় বল", "দুর্বল নিউক্লীয় বল", "সবল নিউক্লীয় বল"],
        correct: 0 },
    
    { question: "80 kg ভরের একটি বস্তুর উপর কত বল প্রয়োগ করলে এর তুরণ 4 ms⁻² হবে?",
        options: ["20 N", "78.4 N", "320 N", "784 N"],
        correct: 2 },
    
    
    
    { question: "কোন ঘর্ষণ কাজে লাগিয়ে মাছ পানিতে চলাচল করে?",
        options: ["আবর্ত", "পিছলানো", "স্থিতি", "প্রবাহী"],
        correct: 3 },
    
    { question: "সাইকেলের চাকার গতি কোন ধরনের ঘর্ষণ?",
        options: ["স্থিতি ঘর্ষণ", "পিছলানো ঘর্ষণ", "আবর্ত ঘর্ষণ", "প্রবাহী ঘর্ষণ"],
        correct: 2 },
    
    { question: "প্যারাসুটের মাধ্যমে আরোহীকে নিরাপদে অবতরণে সাহায্য করে কোন বল?",
        options: ["স্থিতি ঘর্ষণ", "বিসর্প ঘর্ষণ", "আবর্ত ঘর্ষণ", "প্রবাহী ঘর্ষণ"],
        correct: 3 },
    
    // ───── অধ্যায় ৪: কাজ, ক্ষমতা ও শক্তি ─────
    
    { question: "সৌর শক্তি দিয়ে কোনটি তৈরি করা যায়?",
        options: ["গতিশক্তি", "বিদ্যুৎ", "বিদ্যুৎ কেন্দ্র", "যান্ত্রিক শক্তি"],
        correct: 1 },
    
    { question: "কোন শক্তি অনবায়ন যোগ্য?",
        options: ["গতি শক্তি", "যান্ত্রিক শক্তি", "নিউক্লীয় শক্তি", "বিভব শক্তি"],
        correct: 2 },
    
    { question: "শক্তির সবচেয়ে সাধারণ রূপ নিচের কোনটি?",
        options: ["তাপ শক্তি", "শব্দ শক্তি", "তড়িৎ শক্তি", "যান্ত্রিক শক্তি"],
        correct: 3 },
    
    { question: "একটি স্প্রিংকে টান টান করলে এর মধ্যে কোন শক্তি জমা থাকে?",
        options: ["গতিশক্তি", "তাপশক্তি", "বিভবশক্তি", "রসায়নিক শক্তি"],
        correct: 2 },
    
    
    
    { question: "কাজের মাত্রা কোনটি?",
        options: ["MLT⁻¹", "MLT⁻²", "ML²T⁻²", "ML⁻²T⁻²"],
        correct: 2 },
    
    { question: "শক্তির মাত্রা কোনটি?",
        options: ["ML²T⁻³", "ML²T⁻²", "MLT⁻²", "MLT⁻¹"],
        correct: 1 },
    
    { question: "E = mc² সূত্রে m হচ্ছে—",
        options: ["নিউক্লিয়াসের ভর", "নিউক্লিয়াসের হারানো ভর", "পরমাণুর ভর", "ইউরেনিয়ামের ভর"],
        correct: 1 },
    
    { question: "ক্ষমতার মাত্রা কোনটি?",
        options: ["MLT⁻²", "ML⁻¹T⁻²", "ML²T⁻²", "ML²T⁻³"],
        correct: 3 },
    
    { question: "বল ও বেগের গুণফল নিচের কোনটিকে সমর্থন করে?",
        options: ["ঘাত", "ক্ষমতা", "চাপ", "শক্তি"],
        correct: 1 },
    
    { question: "50 kg ভরের কোনো ব্যক্তি 25 সে.মি. 20টি সিঁড়ি উঠতে কত কাজ করবেন?",
        options: ["2430 J", "2440 J", "2450 J", "2460 J"],
        correct: 2 },
    
   
    
    { question: "পারমাণবিক সাবমেরিনে নিউক্লীয় শক্তিকে কোন শক্তিতে রূপান্তরিত করা হয়?",
        options: ["বিদ্যুৎ শক্তি", "রাসায়নিক শক্তি", "আলোক শক্তি", "যান্ত্রিক শক্তি"],
        correct: 3 },
    
    { question: "গাড়ির ইঞ্জিন শক্তির রূপান্তরের ক্ষেত্রে কোনটি সঠিক?",
        options: ["যান্ত্রিক শক্তি → রাসায়নিক শক্তি", "রাসায়নিক শক্তি → যান্ত্রিক শক্তি", "তাপ শক্তি → রাসায়নিক শক্তি", "রাসায়নিক শক্তি → তড়িৎ শক্তি"],
        correct: 1 },
    
    { question: "হাত পাখা দিয়ে বাতাস করলে ব্যক্তির ক্ষেত্রে—",
        options: ["যান্ত্রিক শক্তি শব্দ শক্তিতে রূপান্তরিত হয়", "নিউক্লীয় শক্তি যান্ত্রিক শক্তিতে রূপান্তরিত হয়", "রাসায়নিক শক্তি যান্ত্রিক শক্তিতে রূপান্তরিত হয়", "রাসায়নিক শক্তি তাপ শক্তিতে রূপান্তরিত হয়"],
        correct: 2 },
    
    { question: "নিচের কোনটি নবায়নযোগ্য শক্তি?",
        options: ["পেট্রোল", "গ্যাস", "কয়লা", "পানি"],
        correct: 3 },
    
    { question: "সৌরশক্তির সাহায্যে — i. জীবাশ্ম জ্বালানী পাওয়া যায়, ii. সরাসরি তড়িৎ শক্তি পাওয়া যায়, iii. ক্যালকুলেটর, পকেট রেডিও, ইলেকট্রনিক ঘড়ি ইত্যাদি চালানো যায়। নিচের কোনটি সঠিক?",
        options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
        correct: 2 },
    
    { question: "কাজের একক — i. একটি লব্ধ একক, ii. kgm²s⁻², iii. Joule। নিচের কোনটি সঠিক?",
        options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
        correct: 3 },
    
    { question: "এক ওয়াট ঘণ্টা সমান কত জুল?",
        options: ["3600 J", "3.6 × 10⁸ J", "3.6 × 10² J", "3600000 J"],
        correct: 0 },
    
    { question: "50 kg ভরের এক বালক 7 ms⁻¹ বেগে দৌড়ালে তার গতিশক্তি কত হবে?",
        options: ["350 J", "490 J", "1225 J", "3430 J"],
        correct: 2 },
    
    { question: "ঢিল ছুঁড়ে আম পাড়া যায় কোন শক্তির কারণে?",
        options: ["ব্যয়িত শক্তি", "স্থিতি শক্তি", "গতিশক্তি", "সৌরশক্তি"],
        correct: 2 },
    
    { question: "কোন শর্তে কোনো বস্তুর গতিশক্তি 16 গুণ হবে?",
        options: ["ভর দ্বিগুণ, বেগ দ্বিগুণ", "ভর আটগুণ, বেগ অর্ধেক", "ভর চারগুণ, বেগ অপরিবর্তিত", "ভর অপরিবর্তিত, বেগ চারগুণ"],
        correct: 3 },
    
    { question: "তীর ছোড়ার পূর্ব মুহূর্তে তীর ধনুকে কোন শক্তি সঞ্চিত থাকে?",
        options: ["গতিশক্তি", "বিভব শক্তি", "রাসায়নিক শক্তি", "তাপ শক্তি"],
        correct: 1 },
    
    { question: "hm উচ্চতার কোনো বস্তুতে কোন শক্তি সঞ্চিত আছে?",
        options: ["গতি শক্তি", "যান্ত্রিক শক্তি", "নিউক্লীয় শক্তি", "বিভব শক্তি"],
        correct: 3 },
    
    { question: "বিভব শক্তি সঞ্চিত থাকে — i. পানি যখন পাহাড়ের উপরে থাকে, ii. আমটি গাছ থেকে নিচে পড়ল, iii. টেবিলের উপর বই থাকলে। নিচের কোনটি সঠিক?",
        options: ["i ও ii", "ii ও iii", "i ও iii", "i, ii ও iii"],
        correct: 2 },
    
    // ───── অধ্যায় ৭: তরঙ্গ ও শব্দ ─────
    
    { question: "শব্দের তীব্রতার একক কোনটি?",
        options: ["Wm⁻³", "Wm⁻²", "wst⁻²", "wm⁻¹"],
        correct: 1 },
    
    { question: "কম্পাংকের মাত্রা কোনটি?",
        options: ["L²T⁻³", "T⁻²", "LT⁻²", "T⁻¹"],
        correct: 3 },
    
    { question: "তরঙ্গের সঙ্গে কোনটি সঞ্চালিত হয়?",
        options: ["বল", "ভর", "ভরবেগ", "শক্তি"],
        correct: 3 },
    
    { question: "নিচের কোনটি অনুপ্রস্থ তরঙ্গ নয়?",
        options: ["সমুদ্রের ঢেউ", "সূর্য রশ্মি", "শব্দ তরঙ্গ", "বেতার তরঙ্গ"],
        correct: 2 },
    
    { question: "শব্দের তীব্রতা I এবং তরঙ্গের বিস্তার A হলে নিচের কোনটি সঠিক?",
        options: ["AI = 1", "A ∝ √I", "A ∝ 1/√I", "A ∝ 1/I"],
        correct: 2 },
    
    { question: "নিচের কোনটিতে শব্দের বেগ বেশি?",
        options: ["লোহা", "রূপা", "পানি", "বায়ু"],
        correct: 0 },
    
    { question: "নিচের কোন মাধ্যমে শব্দের বেগ সবচেয়ে কম?",
        options: ["পানি", "প্রাকৃতিক গ্যাস", "গিসারিন", "অ্যালকোহল"],
        correct: 1 },
    
    
    
    { question: "বাতাসে শব্দের বেগ 350 ms⁻¹। একটি বস্তু বাতাসে যে শব্দ সৃষ্টি করে তার তরঙ্গদৈর্ঘ্য 1250 cm। এর পর্যায়কাল কত?",
        options: ["28 s", "3.571 s", "0.28 s", "0.0357 s"],
        correct: 3 },
    
    { question: "সুরযুক্ত শব্দের বৈশিষ্ট্য কয়টি?",
        options: ["1 টি", "3 টি", "4 টি", "5 টি"],
        correct: 1 },
    
    { question: "S.I পদ্ধতিতে শব্দের তীব্রতার একক কোনটি?",
        options: ["kWm⁻¹", "kWm⁻²", "Wm⁻¹", "Wm⁻²"],
        correct: 3 },
    
    { question: "মানবদেহের অভ্যন্তরের শব্দোত্তর কম্পনের সাহায্যে ছবি তোলার প্রক্রিয়াকে কী বলে?",
        options: ["এক্স-রে", "স্ক্যানিং", "আল্ট্রাসোনোগ্রাফি", "ফিজিওথেরাপি"],
        correct: 2 },
    
    { question: "একই দশা সম্পন্ন বিন্দুগুলোর ক্ষেত্রে নিচের কোনটি সঠিক?",
        options: ["A, B, D", "A, A', A\"", "A', B', C'", "A\", B\", D\""],
        correct: 1 },
    
    { question: "স্প্রিংয়ের বল — i. হুকের সূত্র মেনে চলে, ii. F = -kx, iii. এর মান সরণের বিপরীত। নিচের কোনটি সঠিক?",
        options: ["i ও ii", "ii ও iii", "i ও iii", "i, ii ও iii"],
        correct: 3 },
    
   
    
    { question: "কোনো নির্দিষ্ট মাধ্যমে শব্দের কম্পাঙ্ক বৃদ্ধি করলে নিচের কোনটি কমবে?",
        options: ["তরঙ্গবেগ", "বিস্তার", "পর্যায়কাল", "দশা"],
        correct: 2 },
    
    { question: "শব্দের কম্পাঙ্ক বেড়ে যায়— i. বেগ বেড়ে গেলে, ii. তরঙ্গদৈর্ঘ্য কমে গেলে, iii. তরঙ্গদৈর্ঘ্য বেড়ে গেলে। সঠিক কোনটি?",
        options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
        correct: 1 },
    
    { question: "একটি পূর্ণ দোলনের জন্য সরল দোলকের যে সময় লাগে তাকে কী বলে?",
        options: ["পূর্ণ দোলক", "দোলনকাল", "কম্পাঙ্ক", "দশা"],
        correct: 1 },
    
    { question: "মানুষের গলার স্বরযন্ত্রে কয়টি পর্দা আছে?",
        options: ["1", "2", "3", "4"],
        correct: 1 },
    
    
    
    { question: "20°C তাপমাত্রায় বায়ুতে শব্দের বেগ কত?",
        options: ["1450 ms⁻¹", "5130 ms⁻¹", "344 ms⁻¹", "340 ms⁻¹"],
        correct: 2 },
    
    { question: "ভূ-গর্ভের খনিজ শব্দের কোন ধর্ম ব্যবহার করে সন্ধান করা হয়?",
        options: ["উপরিপাতন", "প্রতিফলন", "প্রতিসরণ", "অপবর্তন"],
        correct: 1 },
    
    { question: "বায়ুতে শব্দের বেগ নির্ভর করে — i. আর্দ্রতার উপর, ii. তাপমাত্রার উপর, iii. চাপের উপর। নিচের কোনটি সঠিক?",
        options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
        correct: 0 },
    
    { question: "কত তাপমাত্রায় শব্দের দ্রুতি তিনগুণ বৃদ্ধি পায়?",
        options: ["996°C", "1107°C", "1328°C", "1660°C"],
        correct: 3 },
    
    
    
    { question: "সময় t ও শব্দের বেগ v হলে, সমুদ্রের গভীরতা d নির্ণয়ের ক্ষেত্রে — i. শব্দ সর্বমোট d দূরত্ব অতিক্রম করে, ii. d = (v × t)/2, iii. শব্দ সর্বমোট 2d দূরত্ব অতিক্রম করে। নিচের কোনটি সঠিক?",
        options: ["i ও ii", "ii ও iii", "i ও iii", "i, ii ও iii"],
        correct: 1 },
    
    { question: "প্রতি ডিগ্রী সেলসিয়াস তাপমাত্রা বৃদ্ধির জন্য বায়ুতে শব্দের বেগ কত বৃদ্ধি পায়?",
        options: ["332 ms⁻¹", "16.6 ms⁻¹", "6 ms⁻¹", "0.6 ms⁻¹"],
        correct: 3 },
    
    { question: "এক ব্যক্তি প্রতিবন্ধক থেকে 16.6m দূরে থাকা সত্ত্বেও প্রতিধ্বনি শুনতে পেল না। কারণ — i. বায়ুর তাপমাত্রা 0°C থেকে কম ছিল, ii. শব্দের বেগ 332 ms⁻¹ থেকে বেশি ছিল, iii. 0.1s এর পূর্বে শব্দ ফিরে এসেছিল। নিচের কোনটি সঠিক?",
        options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
        correct: 2 },
 
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