const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");
const emoji = [];

// função assíncrona para obter emojis da API
// Uma função assíncrona em JavaScript permite executar operações demoradas sem bloquear a execução do código, facilitando o tratamento de tarefas assíncronas de forma mais legível e conveniente.
async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=f32833c0dcf285b6389d41c1848825d8e9f38cbe"
  );

  // Converte a resposta para JSON
  data = await response.json();

  // renova sobre os dados obtidos e os armazena no array emoji
  for (let i = 0; i < 1500; i++) {
    //cria um novo objeto com duas propriedades: character e unicodeName
    emoji.push({
      character: data[i].character,// recebe o valor da chave 'character' do objeto de dados na posição i
      unicodeName: data[i].unicodeName,// recebe o valor da chave 'unicodename' do objeto de dados na posição i
    });
  }
}
getEmoji();

// evento de clique ao botão
btnEl.addEventListener("click", () => {
  // gera um número aleatório para selecionar um emoji do array
  const randomNum = Math.floor(Math.random() * emoji.length);
  // define o texto do botão como o nome do emoji selecionado
  btnEl.innerText = emoji[randomNum].character;
  // define o texto do elemento emojiNameEl como o código do emoji selecionado
  emojiNameEl.innerText = emoji[randomNum].unicodeName;
});
