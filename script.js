const addbtn = document.querySelector("#add-btn")


const main = document.querySelector("#main")



const randomColor = ["#F5A9A9", "#F3F781", "#BCF5A9", "#A9F5F2", "#D0A9F5", "#F5A9D0"];
// const col = document.querySelector('.color')
function getColor(){
    const randomIndex = Math.floor(Math.random()*randomColor.length)
    return randomColor[randomIndex];
}
console.log(getColor())

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
    const noteColor = getColor()
    note.innerHTML = `
    <div class="toolbar">
    <img src="delete.png" alt="" class="icons trash">
    <img src="save.png" alt="" class="icons save">
    </div>
    <textarea style="background-color:${noteColor};">${text}</textarea>
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
//     const elms = document.querySelector(".notes textarea")
//     if (num <= 0.33){ 
//         elms.style.backgroundColor = 'hsl(54, 100%, 81%)';
    
//     }
//     else if (num > 0.33 & num <= 0.66){
//         elms.style.backgroundColor = 'hsl(265, 83%, 84%)';
//     }
//     else{
//         elms.style.backgroundColor = 'rgb(152, 238, 255)';
//     }
// }
