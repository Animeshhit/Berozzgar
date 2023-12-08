const LIGHT = {
  icon: "dark_mode",
};

const DARK = {
  icon: "light_mode",
};
const changeTheme = (setTheme) => {
  let CurrentStage = document.body.classList.contains("light");

  switch (CurrentStage) {
    case true:
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      setTheme(DARK);
      localStorage.setItem("theme", "dark");
      document.body.style.background = "rgb(63 63 70)";
      break;
    case false:
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      setTheme(LIGHT);
      localStorage.setItem("theme", "light");
      document.body.style.background = "white";
  }
};

export default changeTheme;
export { LIGHT, DARK };
