// write your code here



function renderRamen(ramen) {
    const ramensDatails = document.getElementById("ramen-detail");
    const ramensImageDiv = document.getElementById("ramen-menu");
    const ramensImage = document.createElement("img");
    ramensImage.setAttribute("src", ramen.image);
    ramensImageDiv.appendChild(ramensImage);

    ramensImage.addEventListener("click", e => {
        console.log(e);
        const imageDetails = document.querySelector(".detail-image");
        const ramenName = document.querySelector(".name");
        const restaurant = document.querySelector(".restaurant");
        const rating = document.getElementById("rating-display");
        const comment = document.getElementById("comment-display");

        imageDetails.setAttribute("src", ramen.image);
        ramenName.textContent = ramen.name;
        restaurant.textContent = ramen.restaurant;
        rating.textContent = ramen.rating;
        comment.textContent = ramen.comment;

    })

}
fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramens => {
        console.log(ramens)


        ramens.forEach(renderRamen)


    })
    .catch(err => console.log(err))

const newRamenForm = document.getElementById("new-ramen");
const newName = document.getElementById("new-name");
const newRestaurant = document.getElementById("new-restaurant");
const newRamenImage = document.getElementById("new-image");
const newRamenRate = document.getElementById("new-rating");
const newRamenComment = document.getElementById("new-comment");

newRamenForm.addEventListener("submit", event => {
    event.preventDefault();


    const newRamen = {
        name: newName.value,
        restaurant: newRestaurant.value,
        image: newRamenImage.value,
        rating: newRamenRate.value,
        comment: newRamenComment.value

    }
    console.log(newRamen);

    fetch(`http://localhost:3000/ramens/`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            accept: "application/json"

        },
        body: JSON.stringify(newRamen)
    })
        .then(response => response.json())
        .then(ramen => {
            console.log(ramen)
            renderRamen(ramen);

        })
        form.reset();

}
)










