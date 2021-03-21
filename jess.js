//keep heart hidden
let heartEmoji = document.getElementById("heart");
heartEmoji.style.display = "none";

let likeButton = document.getElementById("likey");
likeButton.addEventListener("click", myFunction);

function myFunction() {
  //like button and heart hidden
  let heartEmoji = document.getElementById("heart");
  if (heartEmoji.style.display === "none") {
    //heart visible
    heartEmoji.style.display = "block";
    //like becomes unlike button
    let button = document.getElementById("likey");
    button.innerText = "unlike";
    //unlike resets to like
  } else {
    let button = document.getElementById("likey");
    button.innerText = "like";
    heartEmoji.style.display = "none";
  }
}
