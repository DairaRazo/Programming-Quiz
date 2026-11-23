const submitButton = document.querySelector("#submitBtn");
const option_btn = document.querySelectorAll(".option_btn");
const score_msg = document.querySelector("#score_msg");
const score = document.querySelector("#score");
let total;

//Dark and light mode logic
const mode = document.querySelector("#mode");

mode.addEventListener('click', ()=>{
    const topWords = document.querySelectorAll(".topWords"); //title and phrase that appears at the top of the page
    const questions = document.querySelectorAll('.q'); 
    const option = document.querySelectorAll(".optionL, .optionD"); 
    const op_btn = document.querySelectorAll("input[type='radio']");
    const scorePart = document.querySelector("#scorePart");

    mode.classList.toggle("lightMode");
    mode.classList.toggle("darkMode");

    if(mode.classList.contains("lightMode")){
        mode.textContent = "Light Mode";
        document.body.style.backgroundColor = "white";

        topWords.forEach(w => {
            w.style.color = "black";
        })

        questions.forEach(q => {
            q.style.color = "black";
        })

        option.forEach(op => {
            op.classList.add("optionL");
            op.classList.remove("optionD");
            console.log(op.classList);
            console.log("options in light activated");
        })

        op_btn.forEach(op_b => {
            op_b.style.accentColor = "rgb(116, 7, 14)";
        })

        scorePart.classList.add("scoreLight");
        scorePart.classList.remove("scoreDark");


        


    }else{

        mode.textContent = "Dark Mode";

        document.body.style.backgroundColor = "#121212";

        topWords.forEach(w => {
            w.style.color = "#beade7";
        })

        questions.forEach(q => {
            q.style.color = "white";
        })

        option.forEach(op => {

            op.classList.add("optionD");
            op.classList.remove("optionL");
            console.log(op.classList);
            console.log("options in dark mode activated");
        })

        op_btn.forEach(op_b => {
            op_b.style.accentColor = "rgb(133, 1, 133)";
        })

        scorePart.classList.add("scoreDark");
        scorePart.classList.remove("scoreLight");

    }
})

//Submit the answers to check the score. 

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    total = 0;

    score.classList.add("on");
    score.classList.remove("off");

    score_msg.classList.add("on");
    score_msg.classList.remove("off");

    option_btn.forEach(op => {
        if(op.checked) total += Number(op.value);
        
        
    });

    if(total == 5){
        score_msg.textContent = "Excellent score!";
        score.textContent = `You got ${total}/5`; 

    }else if(total == 4){
        score_msg.textContent = "Really good!";
        score.textContent = `You got ${total}/5`;

    }else{
        score_msg.textContent = "Not so good... maybe next time";
        score.textContent = `You got ${total}/5`;
        console.log("conditional statements are working fine!")
 
    }

    //Scroll to the bottom of the page to see the score.
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});
