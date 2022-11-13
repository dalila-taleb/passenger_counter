//document.getElementById("counter_el").innerText=6
// ctr+k+c to cocmment multiline

// initiliaze the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count

let count = 0
let countEl = document.getElementById("count_el")
let saveEl = document.getElementById("save_el")

function increment() {
    count += 1
    countEl.textContent = count

}

function save() {
    console.log(count)
    saveEl.textContent += count + " - "
    count = 0
    countEl.textContent = count

    // PS : in the page the second space of " - " is lost, to figure out what is happening we will use mdn : Modzella devoloper Networks(library)
}
// The DOM : Document Object Model

