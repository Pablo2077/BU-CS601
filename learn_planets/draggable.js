const draggables = document.querySelectorAll('.draggable')
const droppables = document.querySelectorAll('.droppable')

droppables.forEach(e => {
    e.addEventListener('dragstart', dragStart);
});

droppables.forEach(e => {
    e.addEventListener('dragover', dragOver);
    e.addEventListener('drop', drop);
});

function dragStart(event) {
    event.dataTransfer
}
