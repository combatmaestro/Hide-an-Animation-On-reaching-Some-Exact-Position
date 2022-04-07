window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll >900 && scroll < 1500){
     document.getElementById("press").style.display = "none";
      console.log("to hide");
    }
    else{
      document.getElementById("press").style.display = "block";
    }
    console.log(scroll)
});