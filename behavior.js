const submitButton = document.querySelector("#submitBtn");
const option_btn = document.querySelectorAll(".option_btn");
const score_msg = document.querySelector("#score_msg");
const score = document.querySelector("#score");
let total;

//The light and dark mode is still an unfinished feature.
const mode = document.querySelector("#mode");

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

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});
