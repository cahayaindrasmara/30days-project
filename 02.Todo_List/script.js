const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
    const text = input.value.trim()
    // console.log(text)

    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text

    li.addEventListener("click", () => {
        li.classList.toggle("done");
    })

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus"
    deleteBtn.classList.add("delete")
    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation(); //untuk menghentikan event dari bubbling
        li.remove();
    });

    li.appendChild(deleteBtn)
    list.appendChild(li)
    input.value = "";
})