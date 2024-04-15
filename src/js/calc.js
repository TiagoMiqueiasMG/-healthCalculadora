document.addEventListener("DOMContentLoaded", function () {
  const selectDishes = document.querySelector(".select-dishes");
  const adultsRange = document.querySelector(".adults-range");
  const childrenRange = document.querySelector(".children-range");
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");

  function calculateFood() {
    const selectedRecipe = selectDishes.value;
    const adults = parseInt(adultsRange.value);
    const children = parseInt(childrenRange.value);

    let ingredientes = {};
    if (selectedRecipe === "Churrasco") {
      ingredientes = {
        Carne: (1.5 * adults + 0.75 * children) * 100,
        Linguiça: (1 * adults + 0.5 * children) * 100,
      };
    } else if (selectedRecipe === "Maionese") {
      ingredientes = {
        Batata: (0.2 * adults + 0.75 * children) * 100,
        Linguiça: (1 * adults + 0.5 * children) * 100,
      };
    } else if (selectedRecipe === "Pudim") {
      ingredientes = {
        Ovos: (2 * adults + 1 * children) * 100,
        LeiteCondensado: (1 * adults + 0.5 * children) * 100,
        Leite: (1.5 * adults + 0.75 * children) * 100,
        Açúcar: (0.5 * adults + 0.25 * children) * 100,
      };
    } else if (selectedRecipe === "Feijão") {
      ingredientes = {
        Feijão: (0.2 * adults + 0.1 * children) * 100,      
      };
    } else if (selectedRecipe === "Arroz") {
      ingredientes = {
        Arroz: (0.2 * adults + 0.1 * children) * 100,      
      };
    } else if (selectedRecipe === "Farofa") {
      ingredientes = {
        Farinha: (0.15 * adults + 0.075 * children) * 100,
        Bacon: (0.05 * adults + 0.025 * children) * 100,
        Cebola: (0.03 * adults + 0.015 * children) * 100,
        Manteiga: (0.02 * adults + 0.01 * children) * 100,
      };
    } else if (selectedRecipe === "Legumes") {
      ingredientes = {
        Batata: (0.1 * adults + 0.05 * children) * 100,
        Cenoura: (0.1 * adults + 0.05 * children) * 100,
        Abobrinha: (0.1 * adults + 0.05 * children) * 100,
        Brócolis: (0.1 * adults + 0.05 * children) * 100,
      };
    } else if (selectedRecipe === "Salada") {
      ingredientes = {
        Alface: (0.15 * adults + 0.075 * children) * 100,
        Tomate: (0.1 * adults + 0.05 * children) * 100,
        Pepino: (0.1 * adults + 0.05 * children) * 100,
        Cenoura: (0.1 * adults + 0.05 * children) * 100,
        MolhoSalada: (0.05 * adults + 0.025 * children) * 100,
      };
    }

   

    modalContent.innerHTML = `
                    <div class="modal-title">
                        <h1 class="title-modal">
                            <em>LISTA DE INGREDIENTES PARA SUA RECEITA</em>
                        </h1>
                    </div>
                    <div class="modal-itens">
                        <h2 class="modal-subtitle">
                            SERVE: ${adults} ADULTOS E ${children} CRIANÇAS
                        </h2>
                        <h3 class="necessary-amount">
                            QUANTIDADE NECESSÁRIA (em gramas):
                        </h3>
                        <dl class="recipe-list">
                            ${Object.entries(ingredientes)
                              .map(
                                ([ingrediente, quantidade]) => `
                                    <dt class="recipe-item">${selectedRecipe}</dt>
                                    <li class="item">${quantidade.toFixed(
                                      1
                                    )}g de ${ingrediente}</li>
                                `
                              )
                              .join("")}
                        </dl>
                    </div>
                    <button class="close-modal">
                        <span class="close-modal">FECHAR</span>
                    </button>
                `;
    modal.style.display = "block";
  }

  


  document
    .querySelector(".calculate-button")
    .addEventListener("click", calculateFood);

   

  // Adicionando evento de clique no botão de fechar do modal
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("close-modal")) {
      modal.style.display = "none";
    }
  });

  // Configurando os inputs de adultos e crianças
  document
    .querySelector(".adults-range")
    .addEventListener("input", function () {
      // Atualizando o valor exibido
      document.querySelector(".range-adults-text").textContent = this.value;
    });

  // Adicionando evento de input para o input de crianças
  document
    .querySelector(".children-range")
    .addEventListener("input", function () {
      // Atualizando o valor exibido
      document.querySelector(".range-children-text").textContent = this.value;
    });
});
