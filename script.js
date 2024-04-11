const add = document.getElementById("add");
const todo = document.getElementById("todo");
const list = document.getElementById("list");
const clear = document.getElementById("clear");
const jmlTask = document.getElementById("jml-task");

add.addEventListener("click", () => {
  if (todo.value === "") {
    Swal.fire({
      title: "Inputan Tidak Boleh Kosong!",
      text: "Anda Harus Mengisi Listnya!",
      icon: "warning",
    });
  } else {
    Swal.fire({
      position: "top",
      icon: "success",
      title: "List Di Tambahkan",
      showConfirmButton: false,
      timer: 1500,
    });
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.setAttribute("class", "silang");
    div.innerHTML = `<i>x</i>`;
    div.addEventListener("click", function () {
      Swal.fire({
        title: "Are you sure?",
        text: "Delete This List",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          list.removeChild(li);
          updatePendingTasks();
          Swal.fire({
            title: "Deleted!",
            text: "Your list has been deleted.",
            icon: "success",
          });
        }
      });
      updatePendingTasks();
    });
    li.textContent = todo.value;
    li.appendChild(div);
    list.appendChild(li);
    updatePendingTasks();
  }
});
function updatePendingTasks() {
  const lis = document.querySelectorAll("li");
  jmlTask.innerHTML = ` ${lis.length}`;
}

clear.addEventListener("click", function () {
  if (list.children.length > 0) {
    Swal.fire({
      title: "Are You Sure?",
      text: "To Delete All Lists",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        list.innerHTML = "";
        updatePendingTasks();
        Swal.fire({
          title: "Delete!",
          text: "Your List Has Been Deleted.",
          icon: "success",
        });
      }
    });
  } else {
    // Jika list kosong, tidak ada tindakan yang perlu dilakukan
    console.log("The list is empty, no action taken.");
  }
});
