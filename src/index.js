import allTags from "./assets/tags.json";

const TIME = 5 * 60;
const tagList = document.querySelector(".taglist");
const prompt = document.querySelector(".prompt");
const timeElement = document.querySelector("time");
let remainingTags = allTags.slice(0);
let time = TIME;
let timer;

const createTags = () => {
  allTags.forEach((nameTag, index) => {
    const tag = document.createElement("div");
    tag.classList.add("tag", "hide-tag", `tag-${index + 1}`);
    tag.textContent = `${"·".repeat(nameTag.length)}··`;
    tagList.append(tag);
  });
};

const addTag = (nameTag, force = false) => {
  const searchIndex = allTags.findIndex(item => item === nameTag) + 1;
  const searchTag = tagList.querySelector(`.tag-${searchIndex}`);
  searchTag.textContent = `<${nameTag}>`;
  searchTag.classList.remove("hide-tag");
  force && searchTag.classList.add("no");
};

const removeTag = (nameTag) => remainingTags.filter(item => item !== nameTag);

const checkTag = (nameTag) => {
  if (remainingTags.includes(nameTag)) {
    addTag(nameTag);
    remainingTags = removeTag(nameTag);
  }
  prompt.value = "";
};

prompt.addEventListener("keydown", ({ key }) => {
  console.log(key);
  const nameTag = prompt.value.toLowerCase().replace(/[<>]/g, "");

  if (key === "Enter") {
    checkTag(nameTag);
  }
});

const endGame = () => {
  timeElement.classList.add("off");
  clearInterval(timer);
  prompt.outerHTML = /* html */`<h2>${allTags.length - remainingTags.length}/${allTags.length} elemento(s)</h2>`;
  remainingTags.forEach(tag => {
    addTag(tag, true);
  });
};

const toHuman = (time) => {
  if (time < 1) {
    endGame();
  }
  const min = String(~~(time / 60)).padStart(2, "0");
  const sec = String(time - (Number(min) * 60)).padStart(2, "0");
  return `${min}:${sec}`;
};

const nextTick = () => {
  time--;
  timeElement.textContent = toHuman(time);
};

timer = setInterval(() => nextTick(), 1000);
createTags();
prompt.focus();
