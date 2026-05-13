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
       
 
  { question: "একটি মৌলের পরমাণুর প্রকৃত ভর যদি 4.482×10⁻²³ গ্রাম হয় তবে এর আপেক্ষিক পারমাণবিক ভর কত?",
    options: ["25", "27", "29", "40"],
    correct: 1 },
 
 
 
 
 
  { question: "হার্টে পেইসমেকার বসাতে ব্যবহৃত হয় কোনটি?",
    options: ["⁸⁹Sr", "¹³¹I", "¹⁹²Ir", "²³⁸Pu"],
    correct: 2 },
 
  { question: "হাইড্রোজেনের আইসোটোপ কয়টি?",
    options: ["7", "4", "3", "1"],
    correct: 2 },
 
  { question: "কোনটির d অরবিটাল অর্ধপূর্ণ?",
    options: ["ম্যাঙ্গানিজ (Mn)", "আয়রন (Fe)", "জিংক (Zn)", "কপার (Cu)"],
    correct: 0 },
 
  { question: "₂₉Cu এর ইলেকট্রন বিন্যাসে কোনটি সুষ্ঠিত অবস্থা?",
    options: ["d⁸4s²", "d¹⁰4s¹", "d⁷4s²", "d⁶4s²"],
    correct: 1 },
 
  { question: "NH₄CNO → 'X' — 'X' যৌগটিতে পরমাণুর সংখ্যা কত?",
    options: ["5", "6", "7", "8"],
    correct: 3 },
 
  { question: "কোন মৌলের প্রতীক ল্যাটিন ভাষা হতে গৃহীত হয়েছে?",
    options: ["Na", "N", "Ni", "Mn"],
    correct: 0 },
 
  { question: "রাদারফোর্ড পরমাণু মডেল আবিষ্কার হয় কত সালে?",
    options: ["1811", "1813", "1911", "1913"],
    correct: 2 },
 
  { question: "কোন ইলেকট্রন বিন্যাসটি Fe³⁺ আয়ন এর জন্য প্রযোজ্য?",
    options: ["3s²3p⁶3d⁵4s²", "3s²3p⁶3d⁵4s⁰", "3s²3p⁶3d⁵4s¹", "3s²3p⁶3d⁴4s¹"],
    correct: 1 },
 
  { question: "₂₁Z মৌলটির সঠিক ইলেকট্রন বিন্যাস—",
    options: [
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹ 4s²",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d³",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 4s³",
      "1s² 2s² 2p⁶ 3s² 3p³ 4s¹ 3d⁵"
    ],
    correct: 0 },
 
  { question: "ডাল্টনের পারমাণবিক তত্ত্ব উপস্থাপিত হয় কখন?",
    options: ["সপ্তদশ শতাব্দীতে", "অষ্টাদশ শতাব্দীতে", "উনবিংশ শতাব্দীতে", "বিংশ শতাব্দীতে"],
    correct: 2 },
 
  { question: "কোনটি বৈদ্যুতিকভাবে নিরপেক্ষ?",
    options: ["ইলেকট্রন", "পরমাণু", "প্রোটন", "কোনটিই নয়"],
    correct: 1 },
 
  { question: "নিচের কোন মৌলটির জার্মান নাম Wolfrum?",
    options: ["Antimony", "Mercury", "Tungsten", "Silver"],
    correct: 2 },
 
  { question: "কোন মৌলটির নাম আরবী ভাষা হতে নেয়া হয়েছে?",
    options: ["জিংক", "অরাম", "নিয়ন", "জিরকোনিয়াম"],
    correct: 3 },
 
  { question: "এক অণু সালফার কতটি পরমাণু নিয়ে গঠিত?",
    options: ["3", "4", "6", "8"],
    correct: 3 },
 
  { question: "P এর একটি অণুতে কয়টি পরমাণু বিদ্যমান?",
    options: ["2", "4", "6", "8"],
    correct: 1 },
 
  { question: "ল্যাটিন নাম থেকে সৃষ্ট প্রতীক — i. Na  ii. Ca  iii. Cu — নিচের কোনটি সঠিক?",
    options: ["i ও ii", "ii ও iii", "i ও iii", "i, ii ও iii"],
    correct: 2 },
 
  { question: "Na₂CO₃ এর অণুতে কয়টি মৌল আছে?",
    options: ["3", "6", "7", "8"],
    correct: 0 },
 
  { question: "একটি হাইড্রোজেন আয়নের ভর কোনটির ভরের সমান?",
    options: ["ইলেকট্রন", "প্রোটন", "নিউট্রন", "পজিট্রন"],
    correct: 1 },
 
  { question: "তৃতীয় কক্ষপথে সর্বোচ্চ ইলেকট্রন ধারণ ক্ষমতা কত?",
    options: ["2", "8", "12", "18"],
    correct: 3 },
 
  { question: "অরবিটালের শক্তি উর্ধ্বক্রম অনুযায়ী কোন সিরিজটি সঠিক?",
    options: ["6s < 4f < 5d < 6p", "4f < 6s < 5d < 6p", "5d < 4f > 6s < 6p", "4f < 5d < 6s < 6p"],
    correct: 0 },
 
  { question: "কোনটির শক্তি সবচেয়ে বেশি?",
    options: ["3d", "4p", "5s", "4f"],
    correct: 3 },
 
  { question: "Sc পরমাণুতে ২১ তম ইলেকট্রনটি কোন অরবিটালে প্রবেশ করেছে?",
    options: ["3p", "3d", "4s", "4p"],
    correct: 1 },
 
  { question: "প্রোটন ও নিউট্রনের সমষ্টিকে বলা হয় — i. ভর সংখ্যা  ii. নিউক্লিয়ন সংখ্যা  iii. পারমাণবিক সংখ্যা — নিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct: 0 },
 
  
 
  { question: "নিচের কোন মৌলের ইলেকট্রন, প্রোটন ও নিউট্রন সংখ্যা সমান?",
    options: ["হাইড্রোজেন", "হিলিয়াম", "নাইট্রোজেন", "লিথিয়াম"],
    correct: 1 },
 
  { question: "রাদারফোর্ড কোন পরীক্ষা দ্বারা পরমাণুর মডেল সম্পর্কে ধারণা পান?",
    options: ["α-কণা", "β-কণা", "γ-কণা", "X-কণা"],
    correct: 0 },
 
  { question: "তড়িৎ চুম্বকীয় তত্ত্বের আবিষ্কারক—",
    options: ["রাদারফোর্ড", "বোর", "চ্যাডউইক", "ম্যাক্সওয়েল"],
    correct: 3 },
 
  { question: "নীলস বোর কত সালে পরমাণু গঠনের একটি মডেল প্রকাশ করেন?",
    options: ["1913", "1919", "1927", "1945"],
    correct: 0 },
 
  { question: "পারমাণবিক বর্ণালি ব্যাখ্যা করেন কে?",
    options: ["রাদারফোর্ড", "নীলস বোর", "অ্যাভোগেড্রো", "ডাল্টন"],
    correct: 1 },
 
 
 
  { question: "Sc³⁺ এর ইলেকট্রন বিন্যাস — i. Cl⁻  ii. Ar  iii. K⁺ এর ন্যায় — নিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct: 3 },
 
  { question: "নিচের কোন ইলেকট্রন বিন্যাসটি অধিকতর সুষ্ঠিত?",
    options: ["(n-l) d⁹ns²", "(n-l) d⁵ns²", "(n-l) d⁸ns²", "(n-l) d⁷ns²"],
    correct: 1 },
 
  { question: "নিচের কোনটি অধিক স্থিতিশীল?",
    options: ["Li", "K", "Rb", "Cs"],
    correct: 0 },
 
  { question: "(n–1)d¹⁰ns¹ ইলেকট্রন বিন্যাসের নিয়ম মেনে চলে যে সকল পরমাণু — i. ₄₇Ag  ii. ₂₉Cu  iii. ₃₄Cr — নিচের কোনটি সঠিক?",
    options: ["i", "i ও ii", "i ও iii", "i, ii ও iii"],
    correct: 1 },
 
  { question: "কী ব্যবহার করে উদ্ভিদের চলাচল চিহ্নিত করা যায়?",
    options: ["জাইভার", "গাইগার কাউন্টার", "গাইগার ভার", "জাইগার কাউন্টার"],
    correct: 1 },
 
  { question: "ভর সংখ্যার ভিন্নতার কারণে তৈরি হয়—",
    options: ["আইসোমার", "আইসোটোপ", "আইসোটোন", "আইসোবার"],
    correct: 1 },
 
  { question: "ক্লোরিনের কয়টি আইসোটোপ রয়েছে?",
    options: ["2", "3", "4", "5"],
    correct: 0 },
 
  // ========== CHAPTER 2: পর্যায় সারণি (Periodic Table) ==========
 
  { question: "n = 4 এবং l = 2 এর জন্য কোন উপশক্তি স্তরটি সম্ভব?",
    options: ["4s", "4p", "4d", "4f"],
    correct: 2 },
 
  { question: "প্রধান শক্তিস্তর n = 3 এবং উপশক্তি স্তর l=2-এর জন্য কোন অরবিটালটি পাওয়া যাবে?",
    options: ["3s", "3p", "3d", "3f"],
    correct: 2 },
 
  { question: "অ্যাকটিনাইড সারির মৌলগুলো কোন পর্যায়ে অবস্থিত?",
    options: ["৪র্থ", "৫ম", "৬ষ্ঠ", "৭ম"],
    correct: 3 },
 
  { question: "কে আধুনিক রসায়নের জনক?",
    options: ["ল্যাভয়সিয়ে", "লুথার মেয়র", "মেন্ডেলিফ", "জন নিউল্যান্ড"],
    correct: 0 },
 
  { question: "নিচের কোনটির পারমাণবিক ব্যাসার্ধ বেশি?",
    options: ["Mg", "Ca", "P", "Zn"],
    correct: 1 },
 
  { question: "পর্যায় সারণির ৫ম পর্যায়ে মৌলের সংখ্যা কতটি?",
    options: ["8", "16", "18", "32"],
    correct: 2 },
 
  { question: "পর্যায় সারণিতে কতটি মৌলকে প্রাথমিক মৌল বলা হয়?",
    options: ["98", "84", "33", "14"],
    correct: 1 },
 
  { question: "কোন মৌলটির ধাতব বৈশিষ্ট্য সর্বাধিক?",
    options: ["Al", "Si", "P", "Mg"],
    correct: 3 },
 
  { question: "পর্যায় সারণিতে মুদ্রা ধাতুর অবস্থান কোন গ্রুপে?",
    options: ["2", "8", "10", "11"],
    correct: 3 },
 
  { question: "মুদ্রা ধাতু কোনটি?",
    options: ["পারদ", "লোহা", "তামা", "দস্তা"],
    correct: 2 },
 
  { question: "কোনটির আয়নিকরণ শক্তি কম?",
    options: ["Li", "K", "Na", "Rb"],
    correct: 3 },
 
  { question: "কোনটি নিষ্ক্রিয় ধাতু?",
    options: ["প্লাটিনাম", "কপার", "অ্যালুমিনিয়াম", "ক্রোমিয়াম"],
    correct: 0 },
 
  { question: "ল্যাভয়সিয়ে কতটি মৌল নিয়ে ছক তৈরি করেছিলেন?",
    options: ["33", "63", "67", "92"],
    correct: 0 },
 
  { question: "অষ্টক তত্ত্বের প্রবর্তক কে?",
    options: ["ডোবেরাইনার", "জন নিউল্যান্ড", "ল্যাভয়সিয়ে", "মেন্ডেলিফ"],
    correct: 1 },
 
  { question: "মেন্ডেলিফ কত সালে পর্যায় সূত্র প্রদান করেন?",
    options: ["1789", "1869", "1894", "1896"],
    correct: 1 },
 
  { question: "মেন্ডেলিফের প্রাথমিক পর্যায় সারণির মূল ভিত্তি কী ছিল?",
    options: ["পারমাণবিক সংখ্যা", "ভর সংখ্যা", "ইলেকট্রন সংখ্যা", "নিউট্রন সংখ্যা"],
    correct: 1 },
 
  { question: "IUPAC কর্তৃক স্বীকৃত মৌলের সংখ্যা কতটি?",
    options: ["98", "112", "114", "118"],
    correct: 3 },
 
  { question: "পর্যায় সারণিতে কতটি গ্রুপ আছে?",
    options: ["7", "9", "18", "20"],
    correct: 2 },
 
  { question: "পর্যায় সারণিতে ৬ষ্ঠ পর্যায়ে কতটি মৌল অবস্থিত?",
    options: ["2", "8", "18", "32"],
    correct: 3 },
 
  { question: "তড়িৎ ঋণাত্মকতা কোনটির বেশি?",
    options: ["F", "S", "O", "N"],
    correct: 0 },
 
  // ========== CHAPTER 3: রাসায়নিক বন্ধন (Chemical Bonding) ==========
 
  { question: "ইলেকট্রন আসক্তির মানের ক্ষেত্রে নিচের কোন ক্রমটি সঠিক?",
    options: ["B > C > Si > P", "P > Si > C > B", "Si > P > B > C", "C > B > P > Si"],
    correct: 3 },
 
  { question: "কোনটির আয়নিকরণ শক্তি বেশি?",
    options: ["Mg", "P", "Si", "Cl"],
    correct: 3 },
 
 
 
  { question: "পানির তড়িৎ বিশ্লেষণে অ্যানোডে 16g অক্সিজেন প্রস্তুতিতে কত মোল OH⁻ আয়ন প্রয়োজন?",
    options: ["1", "2", "3", "4"],
    correct: 1 },
 
  { question: "Sc³⁺ আয়নে কতটি ইলেকট্রন আছে?",
    options: ["24", "21", "18", "17"],
    correct: 2 },
 
  { question: "আয়রন (III) নাইট্রেট যৌগে কতটি পরমাণু আছে?",
    options: ["20 টি", "18 টি", "15 টি", "13 টি"],
    correct: 3 },
 
  { question: "ন্যাপথালিনের অণুতে কতটি দুর্বল বন্ধন রয়েছে?",
    options: ["3", "4", "5", "6"],
    correct: 2 },
 
  { question: "কোনটিতে কার্বন-কার্বন ত্রি-বন্ধন বিদ্যমান?",
    options: ["ইথেন", "ইথিলিন", "অ্যাসিটিলিন", "পলিথিন"],
    correct: 2 },
 
 
 
  { question: "BN এ নাইট্রোজেনের যোজনী কত?",
    options: ["3", "1", "2", "0"],
    correct: 0 },
 
  { question: "কোনটির জলীয় দ্রবণ তড়িৎ পরিবাহী?",
    options: ["চিনি", "গ্লুকোজ", "ইউরিয়া", "তুঁতে"],
    correct: 3 },
 
  { question: "কোনটি তড়িৎ পরিবহন করে না?",
    options: ["অ্যালুমিনিয়াম", "সিলভার", "গ্রাফাইট", "ডায়মন্ড"],
    correct: 3 },
 
  { question: "অ্যামোনিয়া অণুতে কতটি নিঃসঙ্গ ইলেকট্রন জোড় আছে?",
    options: ["1 জোড়া", "2 জোড়া", "3 জোড়া", "4 জোড়া"],
    correct: 0 },

    { question: "আধুনিক রসায়নের জনক?",
    options: ["নীলস বোর", "ল্যাভয়সিয়ে", "ডেমোক্রিটাস", "জাবির ইবনে হাইয়ান"],
    correct: 1  },
 
  { question: "ভ্যান্ডার ওয়ালস শক্তি দ্বারা আবদ্ধ থাকে নিচের কোন যৌগটি?",
    options: ["H₂S", "NaCl", "MgCl₂", "MgO"],
    correct: 0 },
 
  { question: "অক্সিজেনের যোজ্যতা ইলেকট্রন কতটি?",
    options: ["2", "4", "6", "8"],
    correct: 2 },
 
  { question: "অ্যামোনিয়া অণুতে বন্ধন-জোড় ইলেকট্রন কতটি?",
    options: ["1", "2", "3", "4"],
    correct: 2 },
 
  { question: "নাইট্রোজেন পরমাণুর সর্বশেষ কক্ষপথে বিজোড় ইলেকট্রন সংখ্যা কত?",
    options: ["2", "3", "4", "5"],
    correct: 1 },
 
  { question: "নিচের কোনটি পরিবর্তনশীল যোজ্যতা প্রদর্শন করে?",
    options: ["Mg, Ag", "Fe, Cl", "P, Al", "Pb, Sn"],
    correct: 3 },
 
  { question: "নিষ্ক্রিয় গ্যাসের যোজনী কত?",
    options: ["0", "1", "2", "3"],
    correct: 0 },
 
  { question: "কোনটি অষ্টেট নিয়ম মেনে চলে না?",
    options: ["HF", "CO₂", "H₂O", "BF₃"],
    correct: 3 },
 
  { question: "নিচের কোন মৌল বিক্রিয়ায় অংশগ্রহণ করে না?",
    options: ["Na", "Ca", "Ne", "Pb"],
    correct: 2 },
 
  { question: "মৌলের রাসায়নিক বন্ধন গঠনের মূল উদ্দেশ্য কোনটি?",
    options: ["ধনাত্মক আয়ন সৃষ্টি", "ঋণাত্মক আয়ন সৃষ্টি", "পরমাণুর মধ্যে আকর্ষণ সৃষ্টি করা", "স্থিতিশীলতা অর্জন"],
    correct: 3 },
 
  { question: "বন্ধন গঠনকালে প্রতিটি পরমাণুই আর্গনের ইলেকট্রন বিন্যাস অর্জন করেছে — i. KF যৌগে  ii. CaS যৌগে  iii. KCl যৌগে — নিচের কোনটি সঠিক?",
    options: ["i ও ii", "ii ও iii", "i ও iii", "i, ii ও iii"],
    correct: 1 },
 
  { question: "2Na + Cl₂ → 2NaCl; এক্ষেত্রে উৎপন্ন যৌগটি কিসে দ্রবণীয়? i. পানিতে দ্রবণীয়  ii. কেরোসিনে দ্রবণীয়  iii. অ্যালকোহলে দ্রবণীয় — নিচের কোনটি সঠিক?",
    options: ["i ও ii", "i", "i ও iii", "i, ii ও iii"],
    correct: 1 },
 
  { question: "ধূমায়িত H₂SO₇ এ সালফারের যোজনী কত?",
    options: ["1", "2", "4", "6"],
    correct: 3 },
 
  { question: "সালফাইট আয়নের যোজনী কত?",
    options: ["1", "2", "3", "4"],
    correct: 1 },
 
  { question: "ত্রিযোজী যৌগমূলক নিচের কোনটি?",
    options: ["নাইট্রাইট", "কার্বনেট", "ফসফেট", "সালফাইট"],
    correct: 2 },
 
  { question: "বোরন নাইট্রাইডের সংকেত কোনটি?",
    options: ["BN", "B₃N₂", "B₃N₄", "B₅N₂"],
    correct: 0 },
 
  { question: "ক্যাটায়ন ও অ্যানায়নসমূহ কোন বলে আবদ্ধ থাকে?",
    options: ["সমযোজী", "আয়নিক", "ধাতব", "সন্নিবেশ"],
    correct: 1 },
 
  { question: "সমযোজী যৌগকে বাষ্পে পরিণত করার সময় কোন বন্ধন ছিন্ন করতে হয়?",
    options: ["সমযোজী পাই বন্ধন", "ভ্যান্ডারওয়ালস বন্ধন", "ডাইপোল বন্ধন", "সমযোজী সিগমা বন্ধন"],
    correct: 1 },
 
  { question: "নিচের কোন মৌলটি বিদ্যুৎ পরিবহন করে না?",
    options: ["তামা", "গন্ধক", "রূপা", "গ্রাফাইট"],
    correct: 1 },
 
  { question: "গ্রাফাইটের গাঠনিক একক কোষগুলোর আকৃতি কিরূপ?",
    options: ["চতুর্ভুজাকার", "চতুস্তলকীয়", "ষড়ভুজাকার", "সমতলাকার"],
    correct: 2 },
 
  { question: "কোনটি ধাতু ও অধাতুর বৈশিষ্ট্য বহন করে?",
    options: ["ফসফরাস", "সিলিকন", "সালফার", "ফ্লোরিন"],
    correct: 1 },
 
  { question: "গলনাঙ্ক সবচেয়ে বেশি কোনটির?",
    options: ["SO₂", "NaCl", "Al₂O₃", "H₂O(s)"],
    correct: 2 },
 
  { question: "কোন যৌগটি পানিতে দ্রবণীয়?",
    options: ["CCl₄", "SiCl₄", "C₂H₅OH", "SiO₂"],
    correct: 2 },
 
  { question: "নিচের কোনটি বিদ্যুৎ পরিবাহী?",
    options: ["গ্রাফাইট", "সালফার", "ফসফরাস", "হীরক"],
    correct: 0 },
 
  { question: "ধাতব বন্ধনের কারণে সৃষ্ট বৈশিষ্ট্যগুলি হলো — i. ঘাতসহতা  ii. উজ্জ্বলতা  iii. নমনীয়তা — নিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct: 3 },
 
  // ========== CHAPTER 4: মোলার ধারণা ও রাসায়নিক গণনা (Mole & Calculations) ==========
 
  { question: "কোনটি পানিতে অদ্রবণীয়?",
    options: ["AgCl", "CaCl₂", "NaCl", "KCl"],
    correct: 0 },
 
  { question: "ফরমালিনে কতভাগ পানি থাকে?",
    options: ["40%", "60%", "80%", "96%"],
    correct: 1 },
 
  { question: "প্রোপেনে কার্বনের শতকরা সংযুক্তি কত?",
    options: ["90%", "85.71%", "81.82%", "18.19%"],
    correct: 2 },
 
  { question: "100g পটাসিয়াম ডাইক্রোমেট সমান কত মোল?",
    options: ["100 M", "0.940 M", "0.333 M", "0.340 M"],
    correct: 3 },
 
  { question: "কোনটি অধিক ক্ষারীয়?",
    options: ["রক্ত", "মূত্র", "অগ্ন্যাশয় রস", "বৃষ্টির পানি"],
    correct: 2 },
 
  { question: "প্রমাণ অবস্থায় 5 mole CO₂ গ্যাসের আয়তন কত?",
    options: ["0.22 Litre", "2.55 Litre", "4.48 Litre", "112 Litre"],
    correct: 3 },
 
  { question: "প্রাকৃতিক গ্যাসে পেন্টেনের শতকরা পরিমাণ কত?",
    options: ["3%", "4%", "6%", "7%"],
    correct: 0 },
 
  { question: "ডুরালুমিনে কী পরিমাণ Cu থাকে?",
    options: ["4%", "8.33%", "65%", "90%"],
    correct: 0 },
 
  { question: "100 mL দ্রবণে 5g NaOH দ্রবীভূত থাকলে দ্রবণের ঘনমাত্রা কত?",
    options: ["0.05 M", "0.125 M", "1.25 M", "1.28 M"],
    correct: 2 },
 
  { question: "50gm CaCO₃ কে উত্তপ্ত করলে কী পরিমাণ গ্যাস উৎপন্ন হয়?",
    options: ["22g", "28g", "44g", "56g"],
    correct: 0 },
 
  { question: "সাধারণ তাপমাত্রায় কঠিন অবস্থায় থাকে — i. I₂  ii. S₈  iii. Br₂ — নিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct: 0 },
 
  { question: "অ্যামোনিয়াম ক্লোরাইডকে পানিতে দ্রবীভূত করলে নিচের কোনটি ঘটে?",
    options: ["তাপের সৃষ্টি হয়", "তাপের শোষণ ঘটে", "তাপ অপরিবর্তিত থাকে", "ΔH এর মান ঋণাত্মক হয়"],
    correct: 1 },
 
  { question: "অ্যালুমিনিয়াম সালফেটের একটি অণুতে মোট পরমাণুর সংখ্যা কতটি?",
    options: ["20", "16", "17", "14"],
    correct: 2 },
 
  { question: "4 g ক্যালসিয়ামের কত মোল?",
    options: ["0.1", "6", "8", "4"],
    correct: 0 },
 
  { question: "গ্লুকোজের স্থূল সংকেত কোনটি?",
    options: ["C₃H₆O₂", "C₂H₆O", "CH₂O", "C₃H₈O"],
    correct: 2 },
 
  { question: "24 গ্রাম Mg কে পর্যাপ্ত বাতাসে দহন করলে কত গ্রাম MgO পাওয়া যায়?",
    options: ["40 গ্রাম", "60 গ্রাম", "80 গ্রাম", "100 গ্রাম"],
    correct: 0 },
 
  { question: "পানিতে হাইড্রোজেনের শতকরা পরিমাণ কত?",
    options: ["11.11", "88.89", "22.11", "33.33"],
    correct: 0 },
 
  { question: "250 mL 0.25 মোলার পটাশিয়াম কার্বনেট দ্রবণ প্রস্তুত করতে লবণটির কী পরিমাণ লাগবে?",
    options: ["8.625 g", "7.138 g", "6.125 g", "4.25 g"],
    correct: 0 },
 
  { question: "সেমিমোলার বলতে বুঝায়—",
    options: ["2 মোলার", "0.5 মোলার", "0.1 মোলার", "0.01 মোলার"],
    correct: 1 },
 
  { question: "অ্যাভোগেড্রোর সংখ্যার মান কত?",
    options: ["6.2 × 10⁻²³", "6.02 × 10⁻²³", "6.02 × 10²³", "6.2 × 10²³"],
    correct: 2 },
 
  { question: "ন্যাপথালিনের একটি অণুতে মোট পরমাণুর সংখ্যা কতটি?",
    options: ["20", "16", "18", "14"],
    correct: 2 },
 
  { question: "ডিউটেরিয়াম অক্সাইডের আণবিক ভর কত?",
    options: ["18", "20", "32", "44"],
    correct: 1 },
 
  { question: "অনর্দ্র জিপসামে পরমাণুর সংখ্যা কতটি?",
    options: ["6", "8", "9", "11"],
    correct: 0 },
 
  { question: "ফিটকিরির আণবিক ভর কত?",
    options: ["432", "948", "550", "600"],
    correct: 1 },
 
  { question: "এক ফোঁটা পানির ভর 0.001 mg হলে, উহাতে পানির অণু সংখ্যা কত?",
    options: ["3.34 × 10¹⁶", "3.34 × 10¹⁷", "3.34 × 10¹⁸", "3.34 × 10¹⁹"],
    correct: 0 },
 
  { question: "প্রমাণ কক্ষ তাপমাত্রা ও চাপের মান কত?",
    options: ["25°C তাপমাত্রা ও 1 atm চাপ", "27°C তাপমাত্রা ও 1 atm চাপ", "0°C তাপমাত্রা ও 2 atm চাপ", "31°C তাপমাত্রা ও 1 atm চাপ"],
    correct: 0 },
 
  { question: "10 ppm —",
    options: ["প্রতি লিটারে 10 গ্রাম দ্রব", "প্রতি লিটারে 10 মিলি গ্রাম দ্রব", "10 লিটারে 1 গ্রাম দ্রব", "10 লিটারে 1 মিলি গ্রাম দ্রব"],
    correct: 1 },
 
  { question: "ধূমায়মান সালফিউরিক এসিডে সালফারের শতকরা পরিমাণ কত?",
    options: ["35.95%", "95.35%", "32.65%", "65.32%"],
    correct: 0 },
 
  { question: "বেনজিনের স্থূল সংকেতের ভর কত?",
    options: ["7", "13", "26", "78"],
    correct: 1 },
 
  // ========== CHAPTER 5: জারণ-বিজারণ (Redox Reactions) ==========
 
  { question: "Na₂SO₄ যৌগে S এর জারণ সংখ্যা কত?",
    options: ["-12", "-6", "+6", "+12"],
    correct: 2 },
 
  { question: "ক্রায়োলাইটে ফ্লোরিনের জারণ মান কত?",
    options: ["+1", "+2", "-1", "0"],
    correct: 2 },
 
  { question: "কোনটি জারক?",
    options: ["Fe²⁺", "Fe³⁺", "Cl⁻", "Cu⁺"],
    correct: 2 },
 
  { question: "K₂Cr₂O₇ যৌগে Cr এর জারণ সংখ্যা কত?",
    options: ["-12", "-6", "+6", "+12"],
    correct: 2 },
 
  { question: "H₂SO₃ যৌগে S এর জারণ সংখ্যা কত?",
    options: ["-2", "0", "+4", "+6"],
    correct: 2 },
 
  { question: "SO₃²⁻ মূলকে S এর জারণ মান কত?",
    options: ["-2", "+2", "+4", "+6"],
    correct: 2 },
 
  { question: "K₂O₂ তে 'K' এর জারণ সংখ্যা কোনটি?",
    options: ["+1", "+2", "-1", "-2"],
    correct: 0 },
 
  { question: "Na₂S₂O₃ এ সালফারের জারণ সংখ্যা কত?",
    options: ["-2", "+2", "+4", "+6"],
    correct: 1 },
 
  { question: "কোন অক্সাইডে অক্সিজেনের জারণ সংখ্যা -0.5?",
    options: ["CaO", "Na₂O₂", "RbO₂", "MnO₂"],
    correct: 2 },
 
  { question: "Mg + 2HNO₃ = Mg(NO₃)₂ + H₂ এই বিক্রিয়াটি কোন ধরনের?",
    options: ["রেডক্স", "নন-রেডক্স", "প্রশমন", "অধঃক্ষেপণ"],
    correct: 0 },
 
  { question: "K₂O₂ যৌগে অক্সিজেনের জারণ সংখ্যা কত?",
    options: ["-2", "+2", "-1", "+1"],
    correct: 2 },
 
  { question: "কোনটির বিজারণ অসম্ভব?",
    options: ["Fe²⁺", "Fe³⁺", "Cl⁻", "Ca²⁺"],
    correct: 2 },
 
  { question: "ওলিয়ামে সালফারের জারণ সংখ্যা কত?",
    options: ["+2", "+4", "+6", "+8"],
    correct: 2 },
 
  { question: "দর্শক আয়ন অনুপস্থিত কোন বিক্রিয়ায়?",
    options: ["পানি বিশ্লেষণ", "দ্বিপ্রতিস্থাপন", "প্রতিস্থাপন", "পানি যোজন"],
    correct: 3 },
 
  { question: "রাসায়নিক বিক্রিয়ায় ঘনমাত্রার একক কোনটি?",
    options: ["মোল-লিটার⁻¹", "মোল-লিটার⁻¹ সময়⁻¹", "মোল⁻¹লিটার⁻¹ সময়⁻¹", "মোল-লিটার⁻¹ সময়⁻¹"],
    correct: 0 },
 
  { question: "কোনটিকে জারিত করা সম্ভব?",
    options: ["Fe²⁺", "Fe³⁺", "Na⁺", "Cl"],
    correct: 0 },
 
  { question: "নিচের কোনটির জারক ও বিজারক উভয় ধর্মই বিদ্যমান?",
    options: ["H₂S", "Cl₂", "H₂O₂", "H₂O"],
    correct: 2 },
 
  { question: "K₄[Fe(CN)₆] এ Fe এর জারণ সংখ্যা কত?",
    options: ["+2", "+3", "+4", "+6"],
    correct: 0 },
 
  { question: "চার্জ নিরপেক্ষ মৌলের জারণ মান কত?",
    options: ["+1", "+2", "-1", "0"],
    correct: 3 },
 
  { question: "জারক পদার্থের উদাহরণ — i. K₂Cr₂O₇  ii. KMnO₄  iii. H₂SO₄ — কোনটি সঠিক?",
    options: ["i ও ii", "ii ও iii", "i ও ii", "i, ii ও iii"],
    correct: 3 },
    
  { question: "এক মোল পরিমাণ পদার্থকে দহন করলে যে তাপ উৎপন্ন হয় তাকে কী বলা হয়?",
    options: ["দহন তাপ", "বিক্রিয়া তাপ", "বিয়োজন তাপ", "দ্রবণ তাপ"],
    correct: 0 },
 
  { question: "মৃৎক্ষার ধাতুর জারণ সংখ্যা কত?",
    options: ["+1", "+2", "-1", "-2"],
    correct: 1 },
 
  { question: "OF₂ এ O এর জারণ সংখ্যা কত?",
    options: ["-1", "-2", "0", "+2"],
    correct: 3 },
 
  { question: "NO₃⁻ আয়নে N এর জারণ সংখ্যা কত?",
    options: ["+5", "-5", "+6", "-6"],
    correct: 0 },
 
  { question: "কোনটি নন-রিডক্স বিক্রিয়া?",
    options: ["পানি যোজন", "দহন", "সংযোজন", "প্রতিস্থাপন"],
    correct: 0 },
 
  { question: "প্রশমন বিক্রিয়ায় কী উৎপন্ন হয়?",
    options: ["লবণ ও পানি", "লবণ", "এসিড ও লবণ", "লবণ ও ক্ষার"],
    correct: 0 },
 
  { question: "SiCl₄ + 4H₂O → Si(OH)₄ + 4HCl; এটি কোন ধরনের বিক্রিয়া?",
    options: ["আর্দ্র বিশ্লেষণ বিক্রিয়া", "পানিযোজন বিক্রিয়া", "সমাণুকরণ বিক্রিয়া", "পলিমারকরণ বিক্রিয়া"],
    correct: 0 },
 
  { question: "তুঁতের সংকেত কোনটি?",
    options: ["CuSO₄.7H₂O", "ZnSO₄.5H₂O", "ZnSO₄.7H₂O", "CuSO₄.5H₂O"],
    correct: 3 },
 
  { question: "ইউরিয়ার সমাণু কোনটি?",
    options: ["NH₂CNO", "CN", "NH₄CNO", "NH₄CNS"],
    correct: 2 },
 
  { question: "কোনো ধাতুর উপর জিংকের প্রলেপ দেওয়াকে কী বলা হয়?",
    options: ["ভলকানাইজিং", "টিন পেইনটিং", "গ্যালভানাইজিং", "ইলেকট্রোপেটিং"],
    correct: 2 },
 
  { question: "মরিচার রাসায়নিক সংকেত কোনটি?",
    options: ["Fe₂O.nH₂O", "Fe₂O₃.nH₂O", "Fe₃O₂.nH₂O", "Fe₂O₂.nH₂O"],
    correct: 1 },
 
  { question: "মৌমাছি পোকার বিষ কী ধরনের পদার্থ?",
    options: ["অম্লীয়", "ক্ষারীয়", "নিরপেক্ষ", "উভধর্মী"],
    correct: 0 },
 
  { question: "মৌমাছি কামড় দিলে ক্ষত স্থানে নিচের কোনটি ব্যবহার করা যেতে পারে?",
    options: ["কলিচুন", "ভিনেগার", "খাবার লবণ", "পানি"],
    correct: 0 },
 
  { question: "বিক্রিয়ার হারের একক কোনটি?",
    options: ["mol⁻¹L⁻¹s⁻¹", "mol Ls⁻¹", "mol L⁻¹s", "mol L⁻¹s⁻¹"],
    correct: 3 },
 
  { question: "কোনো বিক্রিয়ার গতিবেগ বৃদ্ধি পাওয়ার কারণ — i. বিক্রিয়ার তাপমাত্রা  ii. বিক্রিয়েকের ঘনমাত্রা  iii. বিক্রিয়েকের পৃষ্ঠতলের ক্ষেত্রফল বৃদ্ধি — নিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct: 3 },
 
  { question: "PCl₅ → PCl₃ + Cl₂ এটি কোন ধরনের বিক্রিয়া?",
    options: ["বিয়োজন", "প্রশমন", "সংযোজন", "অধঃক্ষেপণ"],
    correct: 0 },
 
  { question: "2FeCl₂ + Cl₂ → FeCl₃ বিক্রিয়াটি — i. সমাণুকরণ বিক্রিয়া  ii. জারণ-বিজারণ বিক্রিয়া  iii. সংযোজন বিক্রিয়া — নিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct: 2 },
 
  { question: "S + O₂ → SO₂ বিক্রিয়াটি — i. দহন  ii. সংশ্লেষণ  iii. সংযোজন — নিচের কোনটি সঠিক?",
    options: ["i ও ii", "ii ও iii", "i ও iii", "i, ii ও iii"],
    correct: 3 },
 
  // ========== CHAPTER 6: জৈব রসায়ন (Organic Chemistry) ==========
 
  { question: "কোনটি অননুমোদিত ফুড প্রিজারভেটিভ?",
    options: ["ইথিলিন", "চিনির জলীয় দ্রবণ", "সোডিয়াম বেনজোয়েট", "বেনজোইক এসিড"],
    correct: 0 },
 
  { question: "টাংস্টেনের ল্যাটিন নাম কী?",
    options: ["Stannum", "Stibium", "Wolfram", "Natrium"],
    correct: 2 },
 
  { question: "কোনটি লোহার আকরিক?",
    options: ["হেমটাইট", "সিন্নাবার", "ক্যালামাইন", "চালকোসাইট"],
    correct: 0 },
 
  { question: "কোনটি সাধারণ তাপমাত্রায় তরল?",
    options: ["ন্যাপথালিন", "অ্যামোনিয়া", "ইথানল", "ইথেন"],
    correct: 2 },
 
  { question: "বক্সাইট কোন ধাতুর আকরিক?",
    options: ["Al", "Fe", "Zn", "Pb"],
    correct: 0 },
 
  { question: "'29' পারমাণবিক সংখ্যাবিশিষ্ট মৌলের আকরিক কোনটি?",
    options: ["সিন্নাবার", "বক্সাইট", "লিমোনাইট", "চালকোসাইট"],
    correct: 3 },
 
  { question: "কোনটি অ্যান্টিমনির ল্যাটিন নাম?",
    options: ["Argentum", "Stibium", "Plumbum", "Wolfram"],
    correct: 1 },
 
  { question: "ইনসুলিন কোনটির পলিমার?",
    options: ["গ্লুকোজ", "অ্যালডিহাইড", "ফ্যাটি এসিড", "অ্যামাইনো এসিড"],
    correct: 3 },
 
  { question: "TFE তে কতটি দ্বি-বন্ধন আছে?",
    options: ["0", "1", "2", "3"],
    correct: 1 },
 
  { question: "প্রাকৃতিক গ্যাস হচ্ছে—",
    options: ["বাষ্পীয় পদার্থ", "অজৈব পদার্থ", "হাইড্রোকার্বন", "আয়নিক যৌগ"],
    correct: 2 },
 
  { question: "সিলিন্ডারের রান্না কাজে ব্যবহৃত জ্বালানি কোনটি?",
    options: ["মিথেন", "ইথেন", "বিউটেন", "অকটেন"],
    correct: 2 },
 
  { question: "কোনটি সম্পৃক্ত হাইড্রোকার্বন?",
    options: ["C₂H₄", "C₂H₂", "C₃H₆", "C₄H₁₀"],
    correct: 3 },
 
  { question: "উদ্ভিদদেহ মাটির নিচে পরিবর্তিত হয়ে কীসে রূপান্তরিত হয়?",
    options: ["মিথেন", "ইথেন", "তেল", "কয়লা"],
    correct: 3 },
 
  { question: "নিচের কোনটি ব্রোমিন দ্রবণের বর্ণকে বর্ণহীন করতে পারে?",
    options: ["C₃H₈", "C₃H₈O", "C₃H₆O", "C₃H₄"],
    correct: 3 },
 
  { question: "আইকোসেনের সংকেত কোনটি?",
    options: ["C₁₆H₃₄", "C₂₀H₄₂", "C₂H₁₆", "C₉H₂₀"],
    correct: 1 },
 
  { question: "নিচের কোনটি অ্যারোমেটিক যৌগ?",
    options: ["C₃H₈", "C₆H₆", "C₂H₆", "C₂H₅OH"],
    correct: 1 },
 
  { question: "X + 3H₂ →(Ni, 180°C) Y; X যৌগটিতে কতটি দ্বিবন্ধন আছে?",
    options: ["2", "3", "4", "5"],
    correct: 1 },
 
  { question: "পিঁপড়ার দেহে কোন এসিড থাকে?",
    options: ["HCOOH", "CH₃COOH", "CH₃CH₂COOH", "CH₃(CH₃)₂COOH"],
    correct: 0 },
 
  { question: "অ্যালকাইনের সাধারণ সংকেত?",
    options: ["CₙH₂ₙ₋₂", "CₙH₂ₙ₊₁", "CₙH₂ₙ", "CₙH₂ₙ₊₁"],
    correct: 0 },
 
  { question: "CO₂ + H₂ →(250°C, Ni)→",
    options: ["CO", "H₂O", "CH₄", "C₂H₄"],
    correct: 2 },
 
  { question: "প্রাকৃতিক গ্যাসে প্রোপেনের পরিমাণ কত?",
    options: ["3%", "4%", "5%", "6%"],
    correct: 3 },
 
  { question: "কোনটি জলীয় KMnO₄ এর গোলাপি বর্ণ বিনষ্ট করে?",
    options: ["C₄H₈", "C₄H₁₀", "C₅H₁₂", "C₆H₁₄"],
    correct: 0 },
 
  { question: "কোনটি বন্ধ শিকল যৌগ?",
    options: ["n-বিউটেন", "আইসো বিউটেন", "সাইক্লো বিউটেন", "n-প্রোপেন"],
    correct: 2 },
 
  { question: "CO ও H₂ ব্যবহার করে কত তাপমাত্রায় উত্তপ্ত করলে অ্যালকেন পাওয়া যায়?",
    options: ["150°C", "200°C", "250°C", "300°C"],
    correct: 2 },
 
  { question: "সাইক্লোহেক্সেনের আণবিক সংকেত কোনটি?",
    options: ["C₆H₆", "C₆H₁₄", "C₆H₁₂", "C₄H₁₀"],
    correct: 2 },
 
  { question: "মিথেন ও Cl₂ এর বিক্রিয়া সূর্যালোকে কয়টি ধাপে সম্পন্ন হয়?",
    options: ["২", "৩", "৪", "৫"],
    correct: 2 },
 
  { question: "পেট্রোলিয়ামের বর্ণ কিরূপ হয়?",
    options: ["কালো", "বর্ণহীন", "কালো বাদামি", "বাদামি"],
    correct: 2 },
 
  { question: "প্রাকৃতিক গ্যাস জ্বালালে কোনটি পাওয়া যায়?",
    options: ["CH₄", "C₂H₆", "CO₂", "O₂"],
    correct: 2 },
 
  { question: "প্রাকৃতিক গ্যাসে পেন্টেনের পরিমাণ কত?",
    options: ["3%", "4%", "6%", "7%"],
    correct: 0 },
 
  { question: "পেট্রোলিয়ামে শতকরা কত ভাগ ন্যাপথা থাকে?",
    options: ["9%", "10%", "15%", "26%"],
    correct: 1 },
 
  { question: "নিচের কোনটি অ্যালকিন?",
    options: ["C₆H₁₄", "C₄H₁₀", "C₄H₇", "C₆H₁₂"],
    correct: 3 },
 
  { question: "হাইড্রোকার্বনকে কয়ভাগে ভাগ করা যায়?",
    options: ["২", "৩", "৪", "৫"],
    correct: 0 },
 
  { question: "অসম্পৃক্ত হাইড্রোকার্বনকে কত ভাগে ভাগ করা যায়?",
    options: ["২", "৩", "৪", "৫"],
    correct: 0 },
 
  { question: "হেক্সাডেকেনের স্ফুটনাঙ্ক কত?",
    options: ["135°C", "-164°C", "-42°C", "36°C"],
    correct: 0 },
 
  { question: "CH₃–CH=CH₂ (A) এবং CH₃–CH₂–CH₃ (B) — i. উভয়ে মুক্ত শিকল হাইড্রোকার্বন  ii. A-সম্পৃক্ত হাইড্রোকার্বন  iii. B-অসম্পৃক্ত হাইড্রোকার্বন — নিচের কোনটি সঠিক?",
    options: ["i", "ii", "iii", "i, ii ও iii"],
    correct: 0 },
 
  { question: "H₂C=CH₂(g) + Br₂(g) →(CCl₄) CH₂Br–CH₂Br — i. বিক্রিয়াটি অসম্পৃক্ততার পরীক্ষায় ব্যবহার করা হয়  ii. Br₂ লাল বর্ণ দূরীভূত  iii. অ্যালকেন দেয় না — নিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct: 3 },
 
  { question: "জৈব যৌগ — i. বেনজিন রিং  ii. CH₃–(CH₂)₉–CH=CH  iii. CO₂ — নিচের কোনটি সঠিক?",
    options: ["i", "i ও ii", "ii ও iii", "i, ii ও iii"],
    correct: 1 },
 
  { question: "CH₃CH₂OH →(H₂SO₄/H₂O) H₂C=CH₂ বিক্রিয়াটিতে H₂SO₄ কী হিসেবে কাজ করে?",
    options: ["প্রভাবক", "নিরুদক", "বিজারক", "বিরঞ্জক"],
    correct: 1 },
 
  { question: "উক্ত বিক্রিয়ায় উল্লিখিত — i. X যৌগকে জারিত করলে CO₂ পাওয়া যায়  ii. X জারিত হয়ে অ্যালডিহাইড দেয়  iii. Y হতে X পাওয়া যায় — নিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct: 3 },
 
  { question: "CH₂O স্থূল সংকেতবিশিষ্ট A যৌগের বাষ্প ঘনত্ব 90 — A যৌগটির আণবিক সংকেত—",
    options: ["C₆H₁₂O₆", "C₂H₅OH", "C₂H₂O₄", "C₃H₆O₃"],
    correct: 0 },
 
  { question: "উক্ত যৌগটিতে — i. কার্বনের পরিমাণ 40%  ii. যৌগটি পানিতে দ্রবণীয়  iii. কার্বন হাইড্রোজেন ও অক্সিজেনের মোট পরমাণুর সংখ্যা 24টি — নিচের কোনটি সঠিক?",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct: 3 }
    ]
    
    let timeLeft = 2400;
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