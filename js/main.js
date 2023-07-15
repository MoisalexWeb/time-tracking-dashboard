const textToChange = [...document.querySelectorAll("[data-section]")],
    btnChangeText = [...document.querySelectorAll(".btn-data")];

const changeContent = async (section) => {
    try {
        const response = await fetch("https://moisalexweb.github.io/time-tracking-dashboard/data/data.json");

        if (!response.ok) throw new Error("Error al obtener los datos")

        const data = await response.json();

        textToChange.forEach(text => {
            text.textContent = data[section][text.dataset.section][text.dataset.text]
        })
        btnChangeText.forEach(btn => {
            btn.classList.remove("active")
            if(btn.dataset.change === section) btn.classList.add("active")
        })
    } catch (error) {
        alert("Oooops, an error occurred")
    }
}

document.addEventListener("click", e => {
    if(e.target.matches(".btn-data")) {
        e.preventDefault();
        changeContent(e.target.dataset.change)
    }
})