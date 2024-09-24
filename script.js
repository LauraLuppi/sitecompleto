// contato
document.getElementById("meuForm").addEventListener("submit", function (event){
    event.preventDefault(); //impede o envio padrão do formulário

    //Cpatura os valores dos campos do formulário
    let nome = document.getElementById("nome").value;
    let s_nome = document.getElementById("s_nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    //verificação de campos vazios
    if(nome === "" || s_nome === "" || email === "" || mensagem === ""){
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alert("Enviado com sucesso!");

    document.getElementById('meuForm').reset();
});


// quiz
function disableOptions(questionName) {
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });
}

function playSound() {
    let clickSound = document.getElementById('selecionaSom');
    clickSound.play();
}

function submitQuiz() {
    // Desabilita o botão de envio após ser clicado
    let enviarBtn = document.getElementById('enviarBtn');
    enviarBtn.disabled = true;

    // Habilita o botão de "Responder novamente"
    let resetBtn = document.getElementById('resetBtn');
    resetBtn.disabled = false;

    let correctAnswers = {
        q1: "B",
        q2: "C",
        q3: "B",
        q4: "B",
        q5: "B",
        q6: "B",
        q7: "B",
        q8: "B",
        q9: "B",
        q10: "C",
    };

    let form = document.getElementById('quiz-form');
    let score = 0;

    for (let key in correctAnswers) {
        let userAnswers = form.elements[key].value;
        if (userAnswers === correctAnswers[key]) {
            score++;
        }
    }

    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas.`;

   
    if (score === 10) {
        let successSound = document.getElementById('venceuSom');
        successSound.play();
    } else {
        let errorSound = document.getElementById('perdeuSom');
        errorSound.play();
    }
}

function resetQuiz() {
    // Reabilita o botão de envio quando o quiz é reiniciado
    let enviarBtn = document.getElementById('enviarBtn');
    enviarBtn.disabled = false;

    // Desabilita o botão de "Responder novamente" novamente
    let resetBtn = document.getElementById('resetBtn');
    resetBtn.disabled = true;

    // Limpa as respostas e reseta o formulário
    document.getElementById('quiz-form').reset();

    // Reabilita as opções de resposta
    let options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled = false);

    // Limpa o resultado
    let result = document.getElementById('result');
    result.innerHTML = "";
}






