const addbtn = document.querySelector("#add-btn")


const main = document.querySelector("#main")




const saveNotes = () => {
    const notes = document.querySelectorAll(".notes textarea");
    const data = [];
    console.log(notes)
    notes.forEach(
        (note) => {
            data.push(note.value);
        }
    );
    if (data.length === 0){
        localStorage.removeItem("notes")
    }
    else{
        localStorage.setItem("notes", JSON.stringify(data));
    }
};

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("notes");
    note.innerHTML = `
    <div class="toolbar">
    <img src="delete.png" alt="" class="icons trash">
    <img src="save.png" alt="" class="icons save">
    </div>
    <textarea>${text}</textarea>
    `;

   
    note.querySelector(".trash").addEventListener(
        "click",
        function(){
            note.remove()
            saveNotes()
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function(){
            saveNotes()
        }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function(){
            saveNotes()
        }
    )
    main.appendChild(note);
    saveNotes()
}


(
    function () {
        const lsnotes = JSON.parse(localStorage.getItem("notes"))
        if (lsnotes === null){
            addNote() 
        }
        else{
            lsnotes.forEach(
                (lsnotes) => {
                    addNote(lsnotes)
                }
            )
        }
    }
) ()

addbtn.addEventListener(
    "click",
    function(){
        addNote()
    }
)

// const getColor = () => {
//     const num = Math.random()
//     const elms = document.querySelectorAll(".notes textarea")
//     if (num <= 0.33){ 
//         elms.forEach(elm => {
//         elm.style.backgroundColor = 'hsl(54, 100%, 81%)';
//         });
//     }
//     else if (num > 0.33 & num <= 0.66){
//         elms.forEach(elm => {
//             elm.style.backgroundColor = 'hsl(265, 83%, 84%)';
//             });
//     }
//     else{
//         elms.forEach(elm => {
//             elm.style.backgroundColor = 'rgb(152, 238, 255)';
//             });
//     }
// }

// addbtn.addEventListener("click", getColor)
// getColor()