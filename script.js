// this function is for append a child in my new list
 

document.querySelector('#push').onclick = function () {
  if (document.querySelector('#newTask input').value.length == 0) {
    alert("Please enter some text ");
  }
  else {
    document.querySelector('#tasks').innerHTML += `
    <div class="task">
       <span id="taskname">
       ${document.querySelector('#newTask input').value
      }</span>
      <button class = "delete"><i class="fa-solid fa-trash"></i></button >

    <div
    `;
    var curtask = document.querySelectorAll('.delete');

    for (var i = 0; i < curtask.length; i++) {
      curtask[i].onclick = function () {
        this.parentNode.remove();
      }
    }
  }
}