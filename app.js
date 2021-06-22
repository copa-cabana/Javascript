const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //Check Answers

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score+= 25;
        }
    });

    // setTimeout(()=> {
    //     scrollTo({top:0, behavior: 'smooth'});
    // });   
    result.classList.remove('d-none');
    
    setTimeout(()=> {
        scrollTo({top:0, behavior: 'smooth'});

    //     let output = 0;
    //     const timer = setInterval(() => {
    //     result.querySelector('span').textContent = `${output}%`;
    //     if (output === score) {
    //         clearInterval(timer);
    //     } else {
    //         output++;
    //     }
        
    // }, 70);
    }); 
    

    setTimeout(() => {
        let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
        
    }, 10);
    }, 500);

});