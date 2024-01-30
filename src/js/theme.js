const theme = localStorage.getItem('theme_churras');
const body = document.body;
const btnTheme = document.getElementById('themeButton');

if(!theme){
  localStorage.setItem('theme_churras', 'dark');
} else {
  if(theme == 'dark'){
    body.classList.add('dark');
    btnTheme.setAttribute('theme', 'dark');
  } else {
    btnTheme.setAttribute('theme', 'white');
  }
}

const toggleTheme = () => {
  const theme = btnTheme.getAttribute('theme');
  if (theme === "dark") {
    body.classList.remove("dark");
    btnTheme.setAttribute("theme", "white");
    localStorage.setItem("theme_churras", "white");
  } else {
    body.classList.add("dark");
    btnTheme.setAttribute("theme", "dark");
    localStorage.setItem("theme_churras", "dark");
  }
}

btnTheme.addEventListener('click', toggleTheme);
