async function RandomIdea() {
  try {
    const data = [
      ...new Set(await fetch("ideas.json").then((res) => res.json())),
    ];
    return data[Math.floor(Math.random() * data.length)];
  } catch (e) {
    return "Among Us (Error)";
  }
}

const generateBtn = document.getElementById("generateIdea");
const ideaTxt = document.getElementById("idea");
generateBtn.onclick = generate;

async function generate() {
  const idea = await RandomIdea();
  if (!idea) return;
  ideaTxt.innerText = idea;
}
