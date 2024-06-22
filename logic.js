// Individual Profile Content which is Container
const msg = document.querySelector("#msg");
const add = document.querySelector("#accept");
const remove = document.querySelector("#remove");
const hide2 = document.querySelector(".hide2");
const profileImg = document.querySelector("#profile-img");
const profileName = document.querySelector("#profile-name");
const closeBtn = document.querySelector(".close-btn");

// Friend Request list content 
const btn1 = document.querySelectorAll(".btn1");
const hide1 = document.querySelector(".hide1");

// Initially removing hide1 class from Request List to show it on screen but Container still is hidden
hide1.classList.remove("hide1");

// Initially removing this class allows Ignore button to work and show it up until hide class is added again
remove.classList.remove("hide");

// Adding event listeners to each 'Take action' button
btn1.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Switch from list view to individual profile view
        hide1.classList.add("hide1");
        hide2.classList.remove("hide2");

        // Update the profile image and name based on the clicked button's data attributes
        const imgSrc = btn.getAttribute("data-img");
        const name = btn.getAttribute("data-name");
        profileImg.src = imgSrc;
        profileName.textContent = name;
    });
});

// Adding event listener to the 'Accept' button
add.addEventListener("click", () => {
    if (add.innerHTML === "Accept" && remove.innerHTML === "Ignore") {
        msg.innerHTML = "Request Accepted";
        add.innerHTML = "Friends";
        remove.innerHTML = "Remove";
    } else if (add.innerHTML === "Sent request") {
        msg.innerHTML = "Request sent";
        add.innerHTML = "Pending...";
        remove.innerHTML = "Undo";
        remove.classList.remove("hide");
        remove.classList.add("remove");
    }
});

// Adding event listener to the 'Ignore'/'Remove' button
remove.addEventListener("click", () => {
    if (add.innerHTML === "Accept" && remove.innerHTML === "Ignore") {
        msg.innerHTML = "Stranger";
        add.innerHTML = "Sent request";
        remove.classList.remove("remove");
        remove.classList.add("hide");
    } else if (add.innerHTML === "Friends" && remove.innerHTML === "Remove") {
        msg.innerHTML = "Stranger";
        add.innerHTML = "Sent request";
        remove.classList.remove("remove");
        remove.classList.add("hide");
    } else if (remove.innerHTML === "Undo") {
        msg.innerHTML = "Stranger";
        add.innerHTML = "Sent request";
        remove.classList.remove("remove");
        remove.classList.add("hide");
    }
});

// Handle Close button click to return to list
closeBtn.addEventListener("click", () => {
    hide2.classList.add("hide2");
    hide1.classList.remove("hide1");
})