// Obtém a data atual no formato YYYY-MM-DD
const dataHoje = new Date().toISOString().split("T")[0];

// Define o atributo 'max' do input para a data de hoje
document.getElementById("dataNasc").setAttribute("max", dataHoje);

// Seleciona todos os inputs da página
const inputs = document.querySelectorAll("input");

inputs.forEach(
    input => {
        // quando o input perder o focus()
        input.addEventListener("blur", () => {
            input.value === "" ? input.classList.add("inputNaoPreenchido") : input.classList.remove("inputNaoPreenchido");
        });
    }
);


