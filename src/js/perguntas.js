
const arrayPostagens = [
    {
        titulo: 'Quais são as principais causas do desperdício de alimentos?',
        texto: 'As principais causas do desperdício de alimentos incluem práticas inadequadas de armazenamento, transporte e distribuição, padrões de consumo excessivo, datas de validade rígidas e padrões estéticos exigentes que resultam na rejeição de alimentos perfeitamente seguros para consumo.'
    },

    {
        titulo: 'Como o desperdício de alimentos afeta o meio ambiente?',
        texto: 'O desperdício de alimentos contribui para o aumento das emissões de gases de efeito estufa devido à decomposição anaeróbica dos resíduos alimentares em aterros sanitários. Além disso, consome recursos naturais, como água, terra e energia, utilizados na produção, transporte e descarte de alimentos.'
    },
    {
        titulo: 'Qual é o impacto econômico do desperdício de alimentos',
        texto: 'O desperdício de alimentos representa uma perda significativa de recursos econômicos, tanto para produtores quanto para consumidores. Os produtores enfrentam perdas na produção e no transporte, enquanto os consumidores desperdiçam dinheiro ao comprar alimentos que acabam não sendo consumidos.'
    },
    {
        titulo: 'Como podemos reduzir o desperdício de alimentos em casa?',
        texto: 'Podemos reduzir o desperdício de alimentos em casa praticando compras conscientes, planejando refeições, armazenando adequadamente os alimentos, utilizando sobras de forma criativa, compostando resíduos orgânicos e apoiando iniciativas locais de redistribuição de alimentos.'
    },

    {
        titulo: 'Qual é o papel dos governos e das organizações na redução do desperdício de alimentos?',
        texto: 'Os governos e as organizações desempenham um papel crucial na redução do desperdício de alimentos por meio da implementação de políticas e regulamentações que promovam práticas sustentáveis de produção, distribuição e consumo de alimentos, além de apoiar programas de conscientização pública e incentivar a inovação na gestão de resíduos alimentares.'
    },
]


const section = document.querySelector('.perg_section');

// Iterar sobre o array de postagens
for(const postagem of arrayPostagens){
    // Criar um novo elemento de div para cada postagem
    const divPostagem = document.createElement('div');
     
    divPostagem.classList.add('faq')
    // Popular o elemento com o título e o texto da postagem
    divPostagem.innerHTML = `
    <div class="question">
    <h3>${postagem.titulo}</h3>
    <svg width="15" height="10" viewBox="0 0 42 30">
        <path d="M3 3L21 21L39 3" stroke="black" stroke-width="7" stroke-linecap="round" />
    </svg>
    </div>
    <div class="answer">
        <p class="texto">${postagem.texto}</p>
    </div>
    `;

    // Adicionar a seção à div selecionada
    section.appendChild(divPostagem);
}

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click', () =>{
        faq.classList.toggle('active');
    })
});

// Função para enviar formulário

document.querySelectorAll('button.form_button').forEach(function(button){

   button.addEventListener('click', function(event){
    event.preventDefault
  

    const nome =document.getElementById('name')
    const email =document.getElementById('email')
    const pergunta =document.getElementById('question')

    const errorUsername = nome.nextElementSibling;
    const errorEmail = email.nextElementSibling;
    const errorQuestion = pergunta.nextElementSibling;

    // Resetar o erro
    nome.classList.remove('error')
    email.classList.remove('error')
    pergunta.classList.remove('error')
    errorUsername.classList.remove('visible')
    errorEmail.classList.remove('visible')
    errorQuestion.classList.remove('visible')

    // Validar nome do usuário
    const valueUsername = nome.value.trim();

    if(valueUsername == ''){
        nome.classList.add('error')
        errorUsername.classList.add('visible')
    } else if (valueUsername.length < 5) {  
        nome.classList.add('error');
        errorUsername.textContent = '*O nome deve ter pelo menos 5 caracteres'; 
        errorUsername.classList.add('visible');
    }

    // Validar o email
    if (email.value.trim() == '') {
        email.classList.add('error');
        errorEmail.textContent = '*O campo de e-mail é obrigatório';
        errorEmail.classList.add('visible');
    } else if (!email.value.includes('@')) {
        email.classList.add('error');
        errorEmail.textContent = '*O e-mail deve conter "@"';
        errorEmail.classList.add('visible');
    }else if (email.value.trim().length < 10){  
        email.classList.add('error');
        errorEmail.textContent = '*O e-mail deve ter pelo menos 10 caracteres'; 
        errorEmail.classList.add('visible');
    }


     // Validar a pergunta
     const valueQuestion = pergunta.value.trim();

     if(valueQuestion == ''){
         pergunta.classList.add('error');
         errorQuestion.classList.add('visible');
      } else if (valueQuestion.length < 10) { 
        pergunta.classList.add('error');
        errorQuestion.textContent = '*A pergunta deve ter pelo menos 10 caracteres'; 
        errorQuestion.classList.add('visible');
    }

     if(!nome.classList.contains('error') && !email.classList.contains('error') && !pergunta.classList.contains('error')){
        // Se forem válidos, o formulário será enviado
        alert('Formulário enviado com sucesso');
        document.querySelector('form').submit();
    }
});

})


//  Botão Topo

const backToTopButton = document.querySelector('.back-to-top')

const backToTop = () => {
if (window.scrollY >= 100) {
backToTopButton.classList.add('show')
} else {
backToTopButton.classList.remove('show')
}
}

window.addEventListener('scroll', function () {
backToTop()
})