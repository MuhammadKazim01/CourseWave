document.getElementById('navbar-toggle').addEventListener('click', function () {
    document.getElementById('navbar-language').classList.toggle('hidden');
});

document.getElementById('side-toggle').addEventListener('click', function () {
    document.getElementById('sidebar-menu').classList.toggle('hidden');
});

var sideBarOption = 0;
var navBarOption = 0;

function openDropdown(toOpen){
    document.getElementById(toOpen).classList.remove("hidden");
}

function closeDropdown(toClose){
    document.getElementById(toClose).classList.add("hidden");
}

function openedDropdown(isOpened){
    var element = document.getElementById(isOpened);
    if (element && element.classList.contains('hidden')) {
        return true;
    } else {
        return false;
    }
}

function courseClick() {
    if(openedDropdown("course") == true){
        openDropdown("course");
        closeDropdown("quiz");
        navBarOption = 1;
        sideBarOption = 0;
    }else{
        closeDropdown("course");
        navBarOption = 1;
        sideBarOption = 0;
    }
}

function courseClickSide() {
    if(openedDropdown("courseSide") == true){
        openDropdown("courseSide");
        closeDropdown("quizSide");
        navBarOption = 0;
        sideBarOption = 1;
    }else{
        closeDropdown("courseSide");
        navBarOption = 0;
        sideBarOption = 1;
    }
}

function quizClick() {
    if(openedDropdown("quiz") == true){
        openDropdown("quiz");
        closeDropdown("course");
        navBarOption = 1;
        sideBarOption = 0;
    }else{
        closeDropdown("quiz");
        navBarOption = 1;
        sideBarOption = 0;
    }
}

function quizClickSide() {
    if(openedDropdown("quizSide") == true){
        openDropdown("quizSide");
        closeDropdown("courseSide");
        navBarOption = 0;
        sideBarOption = 1;
    }else{
        closeDropdown("quizSide");
        navBarOption = 0;
        sideBarOption = 1;
    }
}

const videoPFLinks = [
    "https://www.youtube.com/embed/tkDVUpKKo7w?si=TShPuga0JUmC9Ntg",
    "https://www.youtube.com/embed/EN0iiYiABYk?si=UZBIgtSiH6bh4MiD",
    "https://www.youtube.com/embed/IFmoClsKB9E?si=GduTl_S2OsxAxFO-",
    "https://www.youtube.com/embed/7gW2hv4XX3M?si=2bR4zjobyl-LAf2w",
    "https://www.youtube.com/embed/Q0SKGd5Hy0M?si=NP3YcSAjYc5uzopa"
  ];
const videoOOPLinks = [
    "https://www.youtube.com/embed/HcgLqP-5vMo?si=uGB8QZPC2DRcToEp",
    "https://www.youtube.com/embed/tvajT_XDJyU?si=1hYUefp2qrgRplAq",
    "https://www.youtube.com/embed/c9vSNQtQVaA?si=7dWdfuBCu6mZfW-C",
    "https://www.youtube.com/embed/xDMlbSNfLFU?si=7VGHdxeDD7M9BvfK",
    "https://www.youtube.com/embed/LjMnIZvOD-g?si=7ut6UGXyWO320Rtq"
  ];
const videoDSLinks = [
    "https://www.youtube.com/embed/5_5oE5lgrhw?si=xEI5GET14RCej4cX",
    "https://www.youtube.com/embed/vgSKOMsjLbc?si=sUxiHuZfmrl8YBsS",
    "https://www.youtube.com/embed/1OTX-WXQHCQ?si=f31EEdlgwb65DQq0",
    "https://www.youtube.com/embed/5g7K86jYto8?si=Ce-EclLgxJlDhKDO",
    "https://www.youtube.com/embed/STL8ESuETmM?si=Uf6cC8uyerdHG5dV"
  ];
const videoDBLinks = [
    "https://www.youtube.com/embed/3EJlovevfcA?si=mz6WVT7N7ZGH1-Pr",
    "https://www.youtube.com/embed/ZtVw2iuFI2w?si=0N_z_0xNDIM4gKK8",
    "https://www.youtube.com/embed/VyvTabQHevw?si=AxoE2KSPEy6SkRD7",
    "https://www.youtube.com/embed/pDX4NR4eY3A?si=uo1d-l1R9_Lr6Hv7",
    "https://www.youtube.com/embed/5fs1ldO6B5c?si=V3KszgZyGczs_Ed7"
  ];
  
let currentVideoIndex = 0;
  
function coursePF() {
    currentVideoIndex = 0;

    if(navBarOption == 1){
        courseClick();
    }else{
        courseClickSide();
    }
    updateVideoSourcePF();
    updateTitle("CourseWave - Course");

    const elementsToHide = ["welcomeHeading", "featureCourses", "OOPHeading", "DSHeading", "DBHeading", "videoSectionOOP", "videoSectionDS", "videoSectionDB", "PFQuizHeading", "OOPQuizHeading", "DSQuizHeading", "DBQuizHeading", "quizSectionPF", "quizSectionOOP", "quizSectionDS", "quizSectionDB", "PFQuizResult", "OOPQuizResult", "DSQuizResult", "DBQuizResult"];
    const elementsToShow = ["PFHeading", "videoSectionPF"];

    elementsToHide.forEach(elementId => {
        document.getElementById(elementId).classList.add("hidden");
    });

    elementsToShow.forEach(elementId => {
        document.getElementById(elementId).classList.remove("hidden");
    });

    const elementsToAddClasses = ["bg-blue-700", "text-white"];
    const elementsToRemoveClasses = ["md:dark:text-blue-500"];
    const removeBg = ["courseDBClick", "courseOOPClick", "courseDSClick", "quizPFClick", "quizDSClick", "quizDBClick", "quizOOPClick"]

    removeBg.forEach(elementId => {
        elementsToAddClasses.forEach(className => {
            document.getElementById(elementId).classList.remove(className);
        });
    });

    elementsToAddClasses.forEach(className => {
        document.getElementById("coursePFClick").classList.add(className);
    });

    elementsToRemoveClasses.forEach(className => {
        document.getElementById("homeHeading").classList.remove(className);
        document.getElementById("quizHeading").classList.remove(className);
    });

    document.getElementById("courseHeading").classList.add("md:dark:text-blue-500");
}

function courseOOP() {
    currentVideoIndex = 0;

    if(navBarOption == 1){
        courseClick();
    }else{
        courseClickSide();
    }
    updateVideoSourceOOP();
    updateTitle("CourseWave - Course");

    const elementsToHide = ["welcomeHeading", "featureCourses", "PFHeading", "DSHeading", "DBHeading", "videoSectionPF", "videoSectionDS", "videoSectionDB", "PFQuizHeading", "OOPQuizHeading", "DSQuizHeading", "DBQuizHeading", "quizSectionPF", "quizSectionOOP", "quizSectionDS", "quizSectionDB", "PFQuizResult", "OOPQuizResult", "DSQuizResult", "DBQuizResult"];
    const elementsToShow = ["OOPHeading", "videoSectionOOP"];

    elementsToHide.forEach(elementId => {
        document.getElementById(elementId).classList.add("hidden");
    });

    elementsToShow.forEach(elementId => {
        document.getElementById(elementId).classList.remove("hidden");
    });

    const elementsToAddClasses = ["bg-blue-700", "text-white"];
    const elementsToRemoveClasses = ["md:dark:text-blue-500"];
    const removeBg = ["coursePFClick", "courseDSClick", "courseDSClick" , "quizPFClick", "quizDSClick", "quizDBClick", "quizOOPClick"]

    removeBg.forEach(elementId => {
        elementsToAddClasses.forEach(className => {
            document.getElementById(elementId).classList.remove(className);
        });
    });

    elementsToAddClasses.forEach(className => {
        document.getElementById("courseOOPClick").classList.add(className);
    });

    elementsToRemoveClasses.forEach(className => {
        document.getElementById("homeHeading").classList.remove(className);
        document.getElementById("quizHeading").classList.remove(className);
    });

    document.getElementById("courseHeading").classList.add("md:dark:text-blue-500");
}

function courseDS() {
    currentVideoIndex = 0;

    if(navBarOption == 1){
        courseClick();
    }else{
        courseClickSide();
    }
    updateVideoSourceDS();
    updateTitle("CourseWave - Course");

    const elementsToHide = ["welcomeHeading", "featureCourses", "PFHeading", "OOPHeading", "DBHeading", "videoSectionPF", "videoSectionOOP", "videoSectionDB", "PFQuizHeading", "OOPQuizHeading", "DSQuizHeading", "DBQuizHeading", "quizSectionPF", "quizSectionOOP", "quizSectionDS", "quizSectionDB", "PFQuizResult", "OOPQuizResult", "DSQuizResult", "DBQuizResult"];
    const elementsToShow = ["DSHeading", "videoSectionDS"];

    elementsToHide.forEach(elementId => {
        document.getElementById(elementId).classList.add("hidden");
    });

    elementsToShow.forEach(elementId => {
        document.getElementById(elementId).classList.remove("hidden");
    });

    const elementsToAddClasses = ["bg-blue-700", "text-white"];
    const elementsToRemoveClasses = ["md:dark:text-blue-500"];
    const removeBg = ["coursePFClick", "courseOOPClick", "courseDBClick", "quizPFClick", "quizDSClick", "quizDBClick", "quizOOPClick"]

    removeBg.forEach(elementId => {
        elementsToAddClasses.forEach(className => {
            document.getElementById(elementId).classList.remove(className);
        });
    });

    elementsToAddClasses.forEach(className => {
        document.getElementById("courseDSClick").classList.add(className);
    });

    elementsToRemoveClasses.forEach(className => {
        document.getElementById("homeHeading").classList.remove(className);
        document.getElementById("quizHeading").classList.remove(className);
    });

    document.getElementById("courseHeading").classList.add("md:dark:text-blue-500");
}

function courseDB() {
    currentVideoIndex = 0;

    if(navBarOption == 1){
        courseClick();
    }else{
        courseClickSide();
    }
    updateVideoSourceDB();
    updateTitle("CourseWave - Course");

    const elementsToHide = ["welcomeHeading", "featureCourses", "PFHeading", "DSHeading", "OOPHeading", "videoSectionPF", "videoSectionDS", "videoSectionOOP", "PFQuizHeading", "OOPQuizHeading", "DSQuizHeading", "DBQuizHeading", "quizSectionPF", "quizSectionOOP", "quizSectionDS", "quizSectionDB", "PFQuizResult", "OOPQuizResult", "DSQuizResult", "DBQuizResult"];
    const elementsToShow = ["DBHeading", "videoSectionDB"];

    elementsToHide.forEach(elementId => {
        document.getElementById(elementId).classList.add("hidden");
    });

    elementsToShow.forEach(elementId => {
        document.getElementById(elementId).classList.remove("hidden");
    });

    const elementsToAddClasses = ["bg-blue-700", "text-white"];
    const elementsToRemoveClasses = ["md:dark:text-blue-500"];
    const removeBg = ["coursePFClick", "courseOOPClick", "courseDSClick", "quizPFClick", "quizDSClick", "quizDBClick", "quizOOPClick"]

    removeBg.forEach(elementId => {
        elementsToAddClasses.forEach(className => {
            document.getElementById(elementId).classList.remove(className);
        });
    });

    elementsToAddClasses.forEach(className => {
        document.getElementById("courseDBClick").classList.add(className);
    });

    elementsToRemoveClasses.forEach(className => {
        document.getElementById("homeHeading").classList.remove(className);
        document.getElementById("quizHeading").classList.remove(className);
    });

    document.getElementById("courseHeading").classList.add("md:dark:text-blue-500");
}

function updateTitle(title) {
    document.getElementsByTagName("title")[0].innerHTML = title;
}

function showPrevVideoPF() {
    if (currentVideoIndex > 0) {
      currentVideoIndex--;
      updateVideoSourcePF();
    }
}
  
function showNextVideoPF() {
    if (currentVideoIndex < videoPFLinks.length - 1) {
      currentVideoIndex++;
      updateVideoSourcePF();
    }
}

function updateVideoSourcePF() {
    document.getElementById("lectureCountPF").innerHTML = "Lecture " + (currentVideoIndex + 1);
    const videoContainer = document.getElementById("videoContainerPF");
    const iframe = videoContainer.querySelector("iframe");
    iframe.src = videoPFLinks[currentVideoIndex];
}

function showPrevVideoOOP() {
    if (currentVideoIndex > 0) {
      currentVideoIndex--;
      document.getElementById("lectureCountOOP").innerHTML = "Lecture " + (currentVideoIndex + 1);
      updateVideoSourceOOP();
    }
}
  
function showNextVideoOOP() {
    if (currentVideoIndex < videoPFLinks.length - 1) {
      currentVideoIndex++;
      document.getElementById("lectureCountOOP").innerHTML = "Lecture " + (currentVideoIndex + 1);
      updateVideoSourceOOP();
    }
}

function updateVideoSourceOOP() {
    const videoContainer = document.getElementById("videoContainerOOP");
    const iframe = videoContainer.querySelector("iframe");
    iframe.src = videoOOPLinks[currentVideoIndex];
}

function showPrevVideoDS() {
    if (currentVideoIndex > 0) {
      currentVideoIndex--;
      document.getElementById("lectureCountDS").innerHTML = "Lecture " + (currentVideoIndex + 1);
      updateVideoSourceDS();
    }
}
  
function showNextVideoDS() {
    if (currentVideoIndex < videoPFLinks.length - 1) {
      currentVideoIndex++;
      document.getElementById("lectureCountDS").innerHTML = "Lecture " + (currentVideoIndex + 1);
      updateVideoSourceDS();
    }
}

function updateVideoSourceDS() {
    const videoContainer = document.getElementById("videoContainerDS");
    const iframe = videoContainer.querySelector("iframe");
    iframe.src = videoDSLinks[currentVideoIndex];
}

function showPrevVideoDB() {
    if (currentVideoIndex > 0) {
      currentVideoIndex--;
      document.getElementById("lectureCountDB").innerHTML = "Lecture " + (currentVideoIndex + 1);
      updateVideoSourceDB();
    }
}
  
function showNextVideoDB() {
    if (currentVideoIndex < videoPFLinks.length - 1) {
      currentVideoIndex++;
      document.getElementById("lectureCountDB").innerHTML = "Lecture " + (currentVideoIndex + 1);
      updateVideoSourceDB();
    }
}

function updateVideoSourceDB() {
    const videoContainer = document.getElementById("videoContainerDB");
    const iframe = videoContainer.querySelector("iframe");
    iframe.src = videoDBLinks[currentVideoIndex];
}

const mcqsPF = [
    {
        "question" : "What is the purpose of a loop in programming?",
        "choice1" : "To store data",
        "choice2" : "To repeat a set of instructions",
        "correctAnswer" : "To repeat a set of instructions",
    },
    {
        "question" : "Which of the following is not a fundamental data type in most programming languages?",
        "choice1" : "String",
        "choice2" : "Matrix",
        "correctAnswer" : "Matrix",
    },
    {
        "question" : "What is the primary function of a variable in programming?",
        "choice1" : "To store and retrieve data",
        "choice2" : "To perform mathematical calculations",
        "correctAnswer" : "To store and retrieve data",
    },
    {
        "question" : "In programming, what does the term 'syntax error' refer to?",
        "choice1" : "An error in the logical flow of the program",
        "choice2" : "An error in the structure or grammar of the code",
        "correctAnswer" : "An error in the structure or grammar of the code",
    },
    {
        "question" : "What is the purpose of conditional statements in programming?",
        "choice1" : "To execute a block of code repeatedly",
        "choice2" : "To make decisions and control the flow of the program",
        "correctAnswer" : "To make decisions and control the flow of the program",
    }
];

const mcqsOOP = [
    {
        "question": "What is encapsulation in object-oriented programming?",
        "choice1": "Data hiding and abstraction",
        "choice2": "Inheritance and polymorphism",
        "correctAnswer": "Data hiding and abstraction",
    },
    {
        "question": "In OOP, what does the term 'polymorphism' refer to?",
        "choice1": "The ability to inherit from multiple classes",
        "choice2": "The ability of objects to take on multiple forms",
        "correctAnswer": "The ability of objects to take on multiple forms",
    },
    {
        "question": "What is the main purpose of an interface in OOP?",
        "choice1": "To provide a blueprint for a class",
        "choice2": "To implement multiple inheritance",
        "correctAnswer": "To provide a blueprint for a class",
    },
    {
        "question": "What does the term 'inheritance' mean in the context of OOP?",
        "choice1": "The ability to create objects from a class",
        "choice2": "The ability of a class to inherit properties and behaviors from another class",
        "correctAnswer": "The ability of a class to inherit properties and behaviors from another class",
    },
    {
        "question": "How does encapsulation contribute to the principles of OOP?",
        "choice1": "By enabling code reusability",
        "choice2": "By bundling data and methods within a class and controlling access",
        "correctAnswer": "By bundling data and methods within a class and controlling access",
    }
];

const mcqsDS = [
    {
        "question": "What is the purpose of a linked list in data structures?",
        "choice1": "To organize data in a linear sequence",
        "choice2": "To perform mathematical calculations",
        "correctAnswer": "To organize data in a linear sequence",
    },
    {
        "question": "Which of the following is a non-linear data structure?",
        "choice1": "Array",
        "choice2": "Tree",
        "correctAnswer": "Tree",
    },
    {
        "question": "What is the primary advantage of using a hash table?",
        "choice1": "Constant time insertion and retrieval",
        "choice2": "Efficient sorting",
        "correctAnswer": "Constant time insertion and retrieval",
    },
    {
        "question": "In the context of data structures, what is a stack?",
        "choice1": "A data structure that follows the Last In, First Out (LIFO) principle",
        "choice2": "A data structure that follows the First In, First Out (FIFO) principle",
        "correctAnswer": "A data structure that follows the Last In, First Out (LIFO) principle",
    },
    {
        "question": "What is the purpose of binary search in data structures?",
        "choice1": "To find the maximum element in a dataset",
        "choice2": "To efficiently search a sorted dataset",
        "correctAnswer": "To efficiently search a sorted dataset",
    }
];

const mcqsDB = [
    {
        "question": "What is the purpose of a database index?",
        "choice1": "To store data in a structured manner",
        "choice2": "To improve query performance by providing faster data retrieval",
        "correctAnswer": "To improve query performance by providing faster data retrieval",
    },
    {
        "question": "Which type of database model represents data as a collection of tables?",
        "choice1": "Hierarchical",
        "choice2": "Relational",
        "correctAnswer": "Relational",
    },
    {
        "question": "What does the acronym SQL stand for in the context of databases?",
        "choice1": "Structured Query Language",
        "choice2": "Sequential Query Logic",
        "correctAnswer": "Structured Query Language",
    },
    {
        "question": "In a relational database, what is a primary key?",
        "choice1": "A unique identifier for a record in a table",
        "choice2": "A foreign key linking two tables",
        "correctAnswer": "A unique identifier for a record in a table",
    },
    {
        "question": "What is the purpose of a database transaction?",
        "choice1": "To perform data analysis",
        "choice2": "To ensure the integrity of data by executing a series of operations as a single unit",
        "correctAnswer": "To ensure the integrity of data by executing a series of operations as a single unit",
    }
];


var correctAnswers = 0, selected = "", timer, minutes, seconds, id, loader, totalTime = 180;

function startQuizTimer(forQuiz) {
    loader = "loader" + forQuiz;
    document.getElementById(loader).classList.remove("invisible");

    timer = setInterval(function() {
        updateTimer(forQuiz);
    }, 1200);
}

function updateTimer(forQuiz) {
    loader = "loader" + forQuiz;
    document.getElementById(loader).classList.add("invisible");
    minutes = Math.floor(totalTime / 60);
    seconds = totalTime % 60;
    id = "time" + forQuiz;
    document.getElementById(id).innerHTML = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

    if (totalTime <= 0) {
        clearInterval(timer);
        submitQuizPF();
    } else {
        totalTime--;
    }
}

function quizPF() {
    currentQuizIndex = 0;
    correctAnswers = 0;
    selected = "";

    totalTime = 180;
    startQuizTimer("PF");

    if(navBarOption == 1){
        quizClick();
    }else{
        quizClickSide();
    }
    updatequizSourcePF();
    updateTitle("CourseWave - Quiz");

    const elementsToHide = ["welcomeHeading", "featureCourses", "PFHeading", "DSHeading", "OOPHeading", "videoSectionPF", "videoSectionDS", "videoSectionOOP", "OOPQuizHeading", "DSQuizHeading", "DBQuizHeading", "quizSectionOOP", "quizSectionDS", "quizSectionDB", "DBHeading", "videoSectionDB", "PFQuizResult", "OOPQuizResult", "DSQuizResult", "DBQuizResult"];
    const elementsToShow = ["PFQuizHeading", "quizSectionPF"];

    elementsToHide.forEach(elementId => {
        document.getElementById(elementId).classList.add("hidden");
    });

    elementsToShow.forEach(elementId => {
        document.getElementById(elementId).classList.remove("hidden");
    });

    const elementsToAddClasses = ["bg-blue-700", "text-white"];
    const elementsToRemoveClasses = ["md:dark:text-blue-500"];
    const removeBg = ["coursePFClick", "courseOOPClick", "courseDSClick", "courseDBClick" , "quizOOPClick", "quizDSClick", "quizDBClick"]

    removeBg.forEach(elementId => {
        elementsToAddClasses.forEach(className => {
            document.getElementById(elementId).classList.remove(className);
        });
    });

    elementsToAddClasses.forEach(className => {
        document.getElementById("quizPFClick").classList.add(className);
    });

    elementsToRemoveClasses.forEach(className => {
        document.getElementById("homeHeading").classList.remove(className);
        document.getElementById("courseHeading").classList.remove(className);
    });

    document.getElementById("quizHeading").classList.add("md:dark:text-blue-500");
}

function showPrevQuizPF() {
    if (currentQuizIndex > 0) {
        currentQuizIndex--;
        document.getElementById("quizCountPF").innerHTML = "Question " + (currentQuizIndex + 1);
        selected = getSelectedValue("PF", 0);
        if(selected == mcqsPF[currentQuizIndex].correctAnswer){
            correctAnswers++;
        }
        updatequizSourcePF();
    }
}
  
function showNextQuizPF() {
    if (currentQuizIndex < mcqsPF.length - 1) {
        document.getElementById("quizCountPF").innerHTML = "Question " + (currentQuizIndex + 1);
        selected = getSelectedValue("PF", 0);
        if(selected == mcqsPF[currentQuizIndex].correctAnswer){
            correctAnswers++;
        }
        currentQuizIndex++;
        updatequizSourcePF();
    }
}

function getSelectedValue(quizCourse, radioNo) {
    var selectedValue;
    var radioButtons = document.getElementsByName("quiz");

    for (var i = radioNo; i < radioNo + 2; i++) {
        if (radioButtons[i].checked) {
            selectedValue = document.getElementById("choice" + (i + 1) + "label" + quizCourse).innerHTML;
            break;
        }
    }
    return selectedValue;
}

function updatequizSourcePF(){
    if(currentQuizIndex == 4){
        document.getElementById("submitBtnquizPF").classList.remove("hidden");
        document.getElementById("nextBtnquizPF").classList.add("hidden");
        document.getElementById("quizCountPF").innerHTML = "Question " + (currentQuizIndex + 1);
        document.getElementById("questionMcqPF").innerHTML =  mcqsPF[currentQuizIndex].question;
        document.getElementById("choice1labelPF").innerHTML =  mcqsPF[currentQuizIndex].choice1;
        document.getElementById("choice2labelPF").innerHTML =  mcqsPF[currentQuizIndex].choice2;
    }else{
        document.getElementById("submitBtnquizPF").classList.add("hidden");
        document.getElementById("nextBtnquizPF").classList.remove("hidden");
        document.getElementById("quizCountPF").innerHTML = "Question " + (currentQuizIndex + 1);
        document.getElementById("questionMcqPF").innerHTML =  mcqsPF[currentQuizIndex].question;
        document.getElementById("choice1labelPF").innerHTML =  mcqsPF[currentQuizIndex].choice1;
        document.getElementById("choice2labelPF").innerHTML =  mcqsPF[currentQuizIndex].choice2;
    }
}

function submitQuizPF(){
    selected = getSelectedValue("PF", 0);
    if(selected == mcqsPF[currentQuizIndex].correctAnswer){
        correctAnswers++;
    }
    const elementsToHide = ["welcomeHeading", "featureCourses", "PFHeading", "DSHeading", "OOPHeading", "videoSectionPF", "videoSectionDS", "videoSectionOOP", "PFQuizHeading", "DSQuizHeading", "DBQuizHeading", "quizSectionPF", "quizSectionDS", "quizSectionDB", "DBHeading", "videoSectionDB", "OOPQuizResult", "DSQuizResult", "DBQuizResult", "OOPQuizHeading", "quizSectionOOP"];
    const elementsToShow = ["PFQuizResult"];

    elementsToHide.forEach(elementId => {
        document.getElementById(elementId).classList.add("hidden");
    });

    elementsToShow.forEach(elementId => {
        document.getElementById(elementId).classList.remove("hidden");
    });

    document.getElementById("resultScorePF").innerHTML = "You Scored: " + correctAnswers + " Out of 5";
    clearInterval(timer);
}

function quizOOP(){
    currentQuizIndex = 0;
    correctAnswers = 0;
    selected = "";

    totalTime = 180;
    startQuizTimer("OOP");

    if(navBarOption == 1){
        quizClick();
    }else{
        quizClickSide();
    }
    updatequizSourceOOP();
    updateTitle("CourseWave - Quiz");

    const elementsToHide = ["welcomeHeading", "featureCourses", "PFHeading", "DSHeading", "OOPHeading", "videoSectionPF", "videoSectionDS", "videoSectionOOP", "PFQuizHeading", "DSQuizHeading", "DBQuizHeading", "quizSectionPF", "quizSectionDS", "quizSectionDB", "DBHeading", "videoSectionDB", "PFQuizResult", "OOPQuizResult", "DSQuizResult", "DBQuizResult"];
    const elementsToShow = ["OOPQuizHeading", "quizSectionOOP"];

    elementsToHide.forEach(elementId => {
        document.getElementById(elementId).classList.add("hidden");
    });

    elementsToShow.forEach(elementId => {
        document.getElementById(elementId).classList.remove("hidden");
    });

    const elementsToAddClasses = ["bg-blue-700", "text-white"];
    const elementsToRemoveClasses = ["md:dark:text-blue-500"];
    const removeBg = ["coursePFClick", "courseOOPClick", "courseDSClick", "courseDBClick", "quizPFClick", "quizDSClick", "quizDBClick"]

    removeBg.forEach(elementId => {
        elementsToAddClasses.forEach(className => {
            document.getElementById(elementId).classList.remove(className);
        });
    });

    elementsToAddClasses.forEach(className => {
        document.getElementById("quizOOPClick").classList.add(className);
    });

    elementsToRemoveClasses.forEach(className => {
        document.getElementById("homeHeading").classList.remove(className);
        document.getElementById("courseHeading").classList.remove(className);
    });

    document.getElementById("quizHeading").classList.add("md:dark:text-blue-500");
}

function showNextQuizOOP() {
    if (currentQuizIndex < mcqsOOP.length - 1) {
      document.getElementById("quizCountOOP").innerHTML = "Question " + (currentQuizIndex + 1);
      var selected = getSelectedValue("OOP", 2);
      if(selected == mcqsOOP[currentQuizIndex].correctAnswer){
        correctAnswers++;
      }
      currentQuizIndex++;
      updatequizSourceOOP();
    }
}

function showPrevQuizOOP() {
    if (currentQuizIndex > 0) {
      currentQuizIndex--;
      document.getElementById("quizCountOOP").innerHTML = "Question " + (currentQuizIndex + 1);
      var selected = getSelectedValue("OOP", 2);
      if(selected == mcqsOOP[currentQuizIndex].correctAnswer){
        correctAnswers++;
      }
      updatequizSourceOOP();
    }
}

function updatequizSourceOOP(){
    if(currentQuizIndex == 4){
        document.getElementById("submitBtnquizOOP").classList.remove("hidden");
        document.getElementById("nextBtnquizOOP").classList.add("hidden");
        document.getElementById("quizCountOOP").innerHTML = "Question " + (currentQuizIndex + 1);
        document.getElementById("questionMcqOOP").innerHTML =  mcqsOOP[currentQuizIndex].question;
        document.getElementById("choice3labelOOP").innerHTML =  mcqsOOP[currentQuizIndex].choice1;
        document.getElementById("choice4labelOOP").innerHTML =  mcqsOOP[currentQuizIndex].choice2;
    }else{
        document.getElementById("submitBtnquizOOP").classList.add("hidden");
        document.getElementById("nextBtnquizOOP").classList.remove("hidden");
        document.getElementById("quizCountOOP").innerHTML = "Question " + (currentQuizIndex + 1);
        document.getElementById("questionMcqOOP").innerHTML =  mcqsOOP[currentQuizIndex].question;
        document.getElementById("choice3labelOOP").innerHTML =  mcqsOOP[currentQuizIndex].choice1;
        document.getElementById("choice4labelOOP").innerHTML =  mcqsOOP[currentQuizIndex].choice2;
    }
}

function submitQuizOOP(){
    selected = getSelectedValue("OOP", 2);
    if(selected == mcqsOOP[currentQuizIndex].correctAnswer){
        correctAnswers++;
    }

    const elementsToHide = ["welcomeHeading", "featureCourses", "PFHeading", "DSHeading", "OOPHeading", "videoSectionPF", "videoSectionDS", "videoSectionOOP", "PFQuizHeading", "DSQuizHeading", "DBQuizHeading", "quizSectionPF", "quizSectionDS", "quizSectionDB", "DBHeading", "videoSectionDB", "PFQuizResult", "DSQuizResult", "DBQuizResult", "PFQuizHeading", "quizSectionOOP"];
    const elementsToShow = ["OOPQuizResult"];

    elementsToHide.forEach(elementId => {
        document.getElementById(elementId).classList.add("hidden");
    });

    elementsToShow.forEach(elementId => {
        document.getElementById(elementId).classList.remove("hidden");
    });

    document.getElementById("resultScoreOOP").innerHTML = "You Scored: " + correctAnswers + " Out of 5";
    clearInterval(timer);
}

function quizDS(){
    currentQuizIndex = 0;
    correctAnswers = 0;
    selected = "";

    totalTime = 180;
    startQuizTimer("DS");

    if(navBarOption == 1){
        quizClick();
    }else{
        quizClickSide();
    }
    updatequizSourceDS();
    updateTitle("CourseWave - Quiz");

    const elementsToHide = ["welcomeHeading", "featureCourses", "PFHeading", "DSHeading", "OOPHeading", "videoSectionPF", "videoSectionDS", "videoSectionOOP", "PFQuizHeading", "OOPQuizHeading", "DBQuizHeading", "quizSectionPF", "quizSectionOOP", "quizSectionDB", "DBHeading", "videoSectionDB", "PFQuizResult", "OOPQuizResult", "DSQuizResult", "DBQuizResult"];
    const elementsToShow = ["DSQuizHeading", "quizSectionDS"];

    elementsToHide.forEach(elementId => {
        document.getElementById(elementId).classList.add("hidden");
    });

    elementsToShow.forEach(elementId => {
        document.getElementById(elementId).classList.remove("hidden");
    });

    const elementsToAddClasses = ["bg-blue-700", "text-white"];
    const elementsToRemoveClasses = ["md:dark:text-blue-500"];
    const removeBg = ["coursePFClick", "courseOOPClick", "courseDSClick", "courseDBClick", "quizOOPClick", "quizPFClick", "quizDBClick"]

    removeBg.forEach(elementId => {
        elementsToAddClasses.forEach(className => {
            document.getElementById(elementId).classList.remove(className);
        });
    });

    elementsToAddClasses.forEach(className => {
        document.getElementById("quizDSClick").classList.add(className);
    });

    elementsToRemoveClasses.forEach(className => {
        document.getElementById("homeHeading").classList.remove(className);
        document.getElementById("courseHeading").classList.remove(className);
    });

    document.getElementById("quizHeading").classList.add("md:dark:text-blue-500");
}

function showNextQuizDS() {
    if (currentQuizIndex < mcqsDS.length - 1) {
      document.getElementById("quizCountDS").innerHTML = "Question " + (currentQuizIndex + 1);
      var selected = getSelectedValue("DS", 4);
      if(selected == mcqsDS[currentQuizIndex].correctAnswer){
        correctAnswers++;
      }
      currentQuizIndex++;
      updatequizSourceDS();
    }
}

function showPrevQuizDS() {
    if (currentQuizIndex > 0) {
      currentQuizIndex--;
      document.getElementById("quizCountDS").innerHTML = "Question " + (currentQuizIndex + 1);
      var selected = getSelectedValue("DS", 4);
      if(selected == mcqsDS[currentQuizIndex].correctAnswer){
        correctAnswers++;
      }
      updatequizSourceDS();
    }
}

function updatequizSourceDS(){
    if(currentQuizIndex == 4){
        document.getElementById("submitBtnquizDS").classList.remove("hidden");
        document.getElementById("nextBtnquizDS").classList.add("hidden");
        document.getElementById("quizCountDS").innerHTML = "Question " + (currentQuizIndex + 1);
        document.getElementById("questionMcqDS").innerHTML =  mcqsDS[currentQuizIndex].question;
        document.getElementById("choice5labelDS").innerHTML =  mcqsDS[currentQuizIndex].choice1;
        document.getElementById("choice6labelDS").innerHTML =  mcqsDS[currentQuizIndex].choice2;
    }else{
        document.getElementById("submitBtnquizDS").classList.add("hidden");
        document.getElementById("nextBtnquizDS").classList.remove("hidden");
        document.getElementById("quizCountDS").innerHTML = "Question " + (currentQuizIndex + 1);
        document.getElementById("questionMcqDS").innerHTML =  mcqsDS[currentQuizIndex].question;
        document.getElementById("choice5labelDS").innerHTML =  mcqsDS[currentQuizIndex].choice1;
        document.getElementById("choice6labelDS").innerHTML =  mcqsDS[currentQuizIndex].choice2;
    }
}

function submitQuizDS(){
    selected = getSelectedValue("DS", 4);
    if(selected == mcqsDS[currentQuizIndex].correctAnswer){
        correctAnswers++;
    }

    const elementsToHide = ["welcomeHeading", "featureCourses", "PFHeading", "DSHeading", "OOPHeading", "videoSectionPF", "videoSectionDS", "videoSectionOOP", "PFQuizHeading", "DSQuizHeading", "DBQuizHeading", "quizSectionPF", "quizSectionDS", "quizSectionDB", "DBHeading", "videoSectionDB", "PFQuizResult", "OOPQuizResult", "DBQuizResult", "PFQuizHeading", "quizSectionOOP"];
    const elementsToShow = ["DSQuizResult"];

    elementsToHide.forEach(elementId => {
        document.getElementById(elementId).classList.add("hidden");
    });

    elementsToShow.forEach(elementId => {
        document.getElementById(elementId).classList.remove("hidden");
    });

    document.getElementById("resultScoreDS").innerHTML = "You Scored: " + correctAnswers + " Out of 5";

    clearInterval(timer);
}

function quizDB(){
    currentQuizIndex = 0;
    correctAnswers = 0;
    selected = "";

    totalTime = 180;
    startQuizTimer("DB");

    if(navBarOption == 1){
        quizClick();
    }else{
        quizClickSide();
    }
    updatequizSourceDB();
    updateTitle("CourseWave - Quiz");

    const elementsToHide = ["welcomeHeading", "featureCourses", "PFHeading", "DSHeading", "OOPHeading", "videoSectionPF", "videoSectionDS", "videoSectionOOP", "PFQuizHeading", "OOPQuizHeading", "DSQuizHeading", "quizSectionPF", "quizSectionOOP", "quizSectionDS", "DBHeading", "videoSectionDB", "PFQuizResult", "OOPQuizResult", "DSQuizResult", "DBQuizResult"];
    const elementsToShow = ["DBQuizHeading", "quizSectionDB"];

    elementsToHide.forEach(elementId => {
        document.getElementById(elementId).classList.add("hidden");
    });

    elementsToShow.forEach(elementId => {
        document.getElementById(elementId).classList.remove("hidden");
    });

    const elementsToAddClasses = ["bg-blue-700", "text-white"];
    const elementsToRemoveClasses = ["md:dark:text-blue-500"];
    const removeBg = ["coursePFClick", "courseOOPClick", "courseDSClick", "courseDBClick", "quizOOPClick", "quizPFClick", "quizDSClick"]

    removeBg.forEach(elementId => {
        elementsToAddClasses.forEach(className => {
            document.getElementById(elementId).classList.remove(className);
        });
    });

    elementsToAddClasses.forEach(className => {
        document.getElementById("quizDBClick").classList.add(className);
    });

    elementsToRemoveClasses.forEach(className => {
        document.getElementById("homeHeading").classList.remove(className);
        document.getElementById("courseHeading").classList.remove(className);
    });

    document.getElementById("quizHeading").classList.add("md:dark:text-blue-500");
}

function showNextQuizDB() {
    if (currentQuizIndex < mcqsDB.length - 1) {
      document.getElementById("quizCountDB").innerHTML = "Question " + (currentQuizIndex + 1);
      var selected = getSelectedValue("DB", 6);
      if(selected == mcqsDB[currentQuizIndex].correctAnswer){
        correctAnswers++;
      }
      currentQuizIndex++;
      updatequizSourceDB();
    }
}

function showPrevQuizDB() {
    if (currentQuizIndex > 0) {
      currentQuizIndex--;
      document.getElementById("quizCountDB").innerHTML = "Question " + (currentQuizIndex + 1);
      var selected = getSelectedValue("DB", 6);
      if(selected == mcqsDB[currentQuizIndex].correctAnswer){
        correctAnswers++;
      }
      updatequizSourceDB();
    }
}

function updatequizSourceDB(){
    if(currentQuizIndex == 4){
        document.getElementById("submitBtnquizDB").classList.remove("hidden");
        document.getElementById("nextBtnquizDB").classList.add("hidden");
        document.getElementById("quizCountDB").innerHTML = "Question " + (currentQuizIndex + 1);
        document.getElementById("questionMcqDB").innerHTML =  mcqsDB[currentQuizIndex].question;
        document.getElementById("choice7labelDB").innerHTML =  mcqsDB[currentQuizIndex].choice1;
        document.getElementById("choice8labelDB").innerHTML =  mcqsDB[currentQuizIndex].choice2;
    }else{
        document.getElementById("submitBtnquizDB").classList.add("hidden");
        document.getElementById("nextBtnquizDB").classList.remove("hidden");
        document.getElementById("quizCountDB").innerHTML = "Question " + (currentQuizIndex + 1);
        document.getElementById("questionMcqDB").innerHTML =  mcqsDB[currentQuizIndex].question;
        document.getElementById("choice7labelDB").innerHTML =  mcqsDB[currentQuizIndex].choice1;
        document.getElementById("choice8labelDB").innerHTML =  mcqsDB[currentQuizIndex].choice2;
    }
}

function submitQuizDB(){
    selected = getSelectedValue("DB", 6);
    if(selected == mcqsDB[currentQuizIndex].correctAnswer){
        correctAnswers++;
    }

    const elementsToHide = ["welcomeHeading", "featureCourses", "PFHeading", "DSHeading", "OOPHeading", "videoSectionPF", "videoSectionDS", "videoSectionOOP", "PFQuizHeading", "DSQuizHeading", "DBQuizHeading", "quizSectionPF", "quizSectionDS", "quizSectionDB", "DBHeading", "videoSectionDB", "PFQuizResult", "OOPQuizResult", "DSQuizResult", "PFQuizHeading", "quizSectionOOP"];
    const elementsToShow = ["DBQuizResult"];

    elementsToHide.forEach(elementId => {
        document.getElementById(elementId).classList.add("hidden");
    });

    elementsToShow.forEach(elementId => {
        document.getElementById(elementId).classList.remove("hidden");
    });

    document.getElementById("resultScoreDB").innerHTML = "You Scored: " + correctAnswers + " Out of 5";

    clearInterval(timer);
}

function featurePF(){
    courseClick();
    coursePF();
}

function featureOOP(){
    courseClick();
    courseOOP();
}

function featureDS(){
    courseClick();
    courseDS();
}

function coursePFPage() {
    coursePF();
}