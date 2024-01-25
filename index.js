const firstMessage = document.getElementById("first-message");
const lastMessage = document.querySelector(".last-message");
const submitBtn = document.getElementById("submit-button");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".number")


submitBtn.addEventListener("click", ()=> {
  lastMessage.classList.remove("hidden")
  firstMessage.style.display = "none";
})
rates.forEach((rate) => {
  rate.addEventListener("click", ()=>{
    rating.innerHTML = rate.innerHTML
  })  
})
