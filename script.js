// FAQ Acordin JS 

// variables  
const questions = document.querySelectorAll('.que');

// adding click event listener to each questions 
questions.forEach(question => {
  question.addEventListener("click", () => {
    
    // selecting elements
    const answer = question.nextElementSibling;
    const icon = question.querySelector(".toggle");
    
    if(answer.style.display === 'block') {
      answer.style.display = 'none';
      icon.src = './assets/images/icon-plus.svg';
    }
    else{
      answer.style.display = 'block';
      icon.src = './assets/images/icon-minus.svg';
    }
  });
});