const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");

const getRandomColor = () => {
  // Gerando uma cor aleatória em hexadecimal, Exemplo: #5665E9
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex}`;
}

const generateGradient = (isRandom) => {
  if (isRandom) { // Se isRandom está ativo, vai gerar cores aleatrias
    colorInputs[0].value = getRandomColor();
    colorInputs[1].value = getRandomColor();
  }
  // Criando uma sequência de gradiente usando o valor de menu de seleção com valores de entrada de cor
  const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
  gradientBox.style.background = gradient;
  textarea.value = `background: ${gradient};`;
}

const copyCode = () => {
  // Copiando o valor da área de texto e atualizando o texto do botão de cópia
  navigator.clipboard.writeText(textarea.value);
  copyBtn.innerText = "Code Copied";
  setTimeout(() => copyBtn.innerText = "Copy Code", 1600);
}

colorInputs.forEach(input => {
  // Chamando a função generateGradient em cada clique de entrada de cor
  input.addEventListener("input", () => generateGradient(false));
});

selectMenu.addEventListener("change", () => generateGradient(false));
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);