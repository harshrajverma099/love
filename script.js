onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 2000);
  };

  function enter() {
    const input = document.getElementById("styledInput");
    const name = document.getElementById("name");
    if(input.value.trim() !== ""){
        name.innerHTML = input.value
        const flowers = document.getElementsByClassName("flowers")[0];
    flowers.style.display = "block"; 

    const gradientText = document.getElementsByClassName("gradient-text")[0]; 
    gradientText.style.display = "flex"; 

    const inputContainer = document.getElementsByClassName("input-container")[0]; 
    inputContainer.style.display = "none"; 
    }
    else{
        alert("Enter Your Name")
    }
}