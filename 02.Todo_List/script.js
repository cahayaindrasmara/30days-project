const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

//ambil data dari Local Storage saat halaman dibuka
let todos = JSON.parse(localStorage.getItem("todos")) || [];

//render awal
renderTodos();

addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;

    todos.push({ text, done: false });
    saveTodos();
    renderTodos();
    input.value = "";
});

//simpan ke locak storage
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
    list.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        // li.textContent = text

        const span = document.createElement("span");
        span.textContent = todo.text

        // li.addEventListener("click", () => {
        //     span.classList.toggle("done");
        // })

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Hapus"
        deleteBtn.classList.add("delete")
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation(); //untuk menghentikan event dari bubbling
            li.remove();
            todos.splice(index, 1); //hapus dari array
            saveTodos();
            renderTodos();
        });

        //toggle selesai
        li.addEventListener("click", () => {
            todos[index].done = !todos[index].done;
            saveTodos();
            renderTodos();
        })

        if (todo.done) {
            span.classList.add("done")
        }

        //tombol edit
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit");
        editBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const newText = prompt("Edit kegiatan:", todo.text);
            if (newText !== null) {
                todos[index].text = newText.trim();
                saveTodos()
                renderTodos()
            }
        })

        li.appendChild(span)
        li.appendChild(deleteBtn)
        li.appendChild(editBtn)
        list.appendChild(li)
        input.value = "";
    });
}