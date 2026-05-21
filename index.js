// --- 1. THEMES LOGIC ---/////

let dark = document.querySelector('.dark');
let white = document.querySelector('.white');
let mint = document.querySelector('.mint');
let blue = document.querySelector('.blue');

white.addEventListener('click', () => {
    document.body.className = 'theme-white';
});

dark.addEventListener('click', () => {
    document.body.className = 'theme-dark';
});

mint.addEventListener('click', () => {
    document.body.className = 'theme-mint'; 
});

blue.addEventListener('click', () => {
    document.body.className = 'theme-blue';
});


// --- 2. CALCULATOR CORE LOGIC ---
const screen = document.querySelector('#input'); 
const buttons = document.querySelectorAll('.btn');

let screenValue = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

       
        if (buttonText === 'C') {
            screenValue = "";
            screen.value = "0";
        }
        
       
        else if (buttonText === 'DEL') {
            if (screen.value === "Error" || screen.value === "undefined") {
                screenValue = "";
                screen.value = "0";
            } else {
                screenValue = screenValue.slice(0, -1);
                screen.value = screenValue || "0"; 
            }
        }
        
       
        else if (buttonText === '=') {
            if (screenValue.trim() === "") {
                screen.value = "0";
                return; 
            }

            try {
                let finalExpression = screenValue.replace(/×/g, '*').replace(/÷/g, '/');
                let result = eval(finalExpression);
                
              
                if (result === undefined) {
                    screen.value = "Error";
                    screenValue = "";
                } else {
                    screenValue = String(result);
                    screen.value = screenValue;
                }
            } catch (error) {
                screen.value = "Error";
                screenValue = ""; 
            }
        }
        
      
        else {
            if (screen.value === "Error" || screen.value === "0" || screen.value === "undefined") {
                screenValue = "";
            }
            screenValue += buttonText;
            screen.value = screenValue;
        }


       
    });
});





