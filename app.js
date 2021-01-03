var questionsArray = [
    
    {
        question: "Full Form of RAM is?",
        answer: "random access memory",
        options: [
            "random access memory",
            "random actual memory",
            "right access memory",
            "none of the above",
        ]
    },
    {
        question: "Full Form of CPU is?",
        answer: "central processing unit",
        options: [
            "central program unit",
            "central processing unit",
            "control panel unit",
            "none of the above",
        ]
    },
    {
        question: "Full Form of E-MAIL is?",
        answer: "electronic mail",
        options: [
            "electric mail",
            "easy mail",
            "electronic mail",
            "none of the above",
        ]
    },
//     {
//         question: "Full Form of LCD is?",
//         answer: "liquid crystal display",
//         options: [
//             "liquid crystal display",
//             "light crystal display",
//             "liquid cold display",
//             "none of the above",
//         ]
//     },
//     {
//         question: "Full Form of SEO is?",
//         answer: "none of the above",
//         options: [
//             "safe engine optimization",
//             "secure engine optimization",
//             "secret engine optimization",
//             "none of the above",
//         ]
    // },
];


function check(){
    var score = 0
var right_awnser_1 = document.getElementById("q1-a1");
var q1_awnser_2 = document.getElementById("q1-a2");
var q1_awnser_3 = document.getElementById("q1-a3");
var q1_awnser_4 = document.getElementById("q1-a4");
if (right_awnser_1.checked == true){
score++ 


alert('Q1 awnser right')

}
else{
    alert('Q1 awnser wrong')
}


var right_awnser_3 = document.getElementById("q2-a3");
var q2_awnser_2 = document.getElementById("q2-a2");
var q2_awnser_3 = document.getElementById("q2-a3");
var q2_awnser_4 = document.getElementById("q2-a4");
if (right_awnser_3.checked == true){
score++ 


alert('Q2 awnser right')

}
else{
    alert('Q2 awnser wrong')
}


alert("your score is" + score++  + '/2')
}




function vlidate(){
    sessionStorage.clear();
    var input = document.getElementById("userName");
    if(input.value == "" || input.value == " "){
        alert("User Name Required!");
       
    }
    else {
        sessionStorage.setItem("name",input.value);
        startQuiz();

    }
}
