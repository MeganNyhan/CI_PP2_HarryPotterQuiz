// Selecting all elements within website:
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

//When "Start Quiz" button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); 
}

// When "Exit Quiz" button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
}

// When "Continue Quiz" button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz");
    showQuestions(0); 
}

//Questions and Answers from Array
let que_count = 0;
//Function for Questions and Answers
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>' + questions[index].question + '</span>';
    let option_tag = '<div class="option"><span></span></div>'
                    + '<div class="option"><span></span></div>'
                    + '<div class="option"><span></span></div>'
                    + '<div class="option"><span></span></div>'
                    + '<div class="option"><span></span></div>'
                    + '<div class="option"><span></span></div>'
                    + '<div class="option"><span></span></div>'
                    + '<div class="option"><span></span></div>'
                    + '<div class="option"><span></span></div>';
    que_text.innerHTML = que_tag;
}




