// document.addEventListener("DOMContentLoaded", function() {
//     const taskInput = document.getElementById("taskInput");
//     const addTaskBtn = document.getElementById("addTaskBtn");
//     const taskList = document.getElementById("taskList");
  
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
//     function renderTasks() {
//         taskList.innerHTML = "";
//         tasks.forEach(function(task, index) {
//           const li = document.createElement("li");
//           li.className = "list-group-item d-flex justify-content-between align-items-center";
//           li.innerHTML = `
//             <span class="task-text">${task.text}</span>
//             <div>
//               <button class="btn btn-sm btn-primary edit-btn">Edit</button>
//               <button class="btn btn-sm btn-success save-btn">Save</button>
//               <button class="btn btn-sm btn-danger delete-btn">Delete</button>
//               <button class="btn btn-sm btn-info tick-btn" ${task.completed ? 'disabled' : ''}>${task.completed ? "Completed" : "Tick"}</button>
//             </div>
//           `;
          
//           const span = li.querySelector(".task-text");
//           const editBtn = li.querySelector(".edit-btn");
//           const saveBtn = li.querySelector(".save-btn");
//           const deleteBtn = li.querySelector(".delete-btn");
//           const tickBtn = li.querySelector(".tick-btn");
        
//           editBtn.addEventListener("click", function() {
//             span.contentEditable = true;
//             span.focus();
//             saveBtn.style.display = "inline";
//             editBtn.style.display = "none";
//           });
        
//           saveBtn.addEventListener("click", function() {
//             span.contentEditable = false;
//             tasks[index].text = span.textContent;
//             localStorage.setItem("tasks", JSON.stringify(tasks));
//             saveBtn.style.display = "none";
//             editBtn.style.display = "inline";
//             showMessage("Task Updated Successfully");
//           });
        
//           deleteBtn.addEventListener("click", function() {
//             tasks.splice(index, 1);
//             localStorage.setItem("tasks", JSON.stringify(tasks));
//             renderTasks();
//             showMessage("Task Deleted Successfully");
//           });
        
//           tickBtn.addEventListener("click", function() {
//             tasks[index].completed = true;
//             localStorage.setItem("tasks", JSON.stringify(tasks));
//             tickBtn.textContent = "Completed";
//             tickBtn.disabled = true;
//             editBtn.style.display = "none"; // Added this line to hide the edit button when the task is marked as completed
//             showMessage("Task Marked as Completed");
//           });
        
//           if (task.completed) {
//             li.classList.add("completed");
//             tickBtn.textContent = "Completed";
//             tickBtn.disabled = true;
//           } else {
//             saveBtn.style.display = "none";
//             editBtn.style.display = "inline"; // Added this line to display the edit button
//           }
        
//           taskList.appendChild(li);
//         });
//       }
  
//     function showMessage(msg) {
//       const messageDiv = document.createElement("div");
//       messageDiv.textContent = msg;
//       messageDiv.classList.add("message");
//       document.body.appendChild(messageDiv);
//       setTimeout(function() {
//         messageDiv.style.opacity = "1";
//         setTimeout(function() {
//           messageDiv.style.opacity = "0";
//           setTimeout(function() {
//             messageDiv.remove();
//           }, 500);
//         }, 2000);
//       }, 100);
//     }
  
//     renderTasks();
  
//     taskInput.addEventListener("keypress", function(event) {
//       if (event.key === "Enter") {
//         const newTask = taskInput.value.trim();
//         if (newTask !== "") {
//           tasks.push({ text: newTask, completed: false });
//           localStorage.setItem("tasks", JSON.stringify(tasks));
//           taskInput.value = "";
//           renderTasks();
//           showMessage("Task Added Successfully");
//         }
//       }
//     });
//   });
document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach(function(task, index) {
          const li = document.createElement("li");
          li.className = "list-group-item d-flex justify-content-between align-items-center";
          li.innerHTML = `
            <span class="task-text">${task.text}</span>
            <div>
              <button class="btn btn-sm btn-primary edit-btn">Edit</button>
              <button class="btn btn-sm btn-success save-btn">Save</button>
              <button class="btn btn-sm btn-danger delete-btn">Delete</button>
              <button class="btn btn-sm btn-info tick-btn" ${task.completed ? 'disabled' : ''}>${task.completed ? "Completed" : "Tick"}</button>
            </div>
          `;
          
          const span = li.querySelector(".task-text");
          const editBtn = li.querySelector(".edit-btn");
          const saveBtn = li.querySelector(".save-btn");
          const deleteBtn = li.querySelector(".delete-btn");
          const tickBtn = li.querySelector(".tick-btn");
        
          editBtn.addEventListener("click", function() {
            span.contentEditable = true;
            span.focus();
            saveBtn.style.display = "inline";
            editBtn.style.display = "none";
          });
        
          saveBtn.addEventListener("click", function() {
            span.contentEditable = false;
            tasks[index].text = span.textContent;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            saveBtn.style.display = "none";
            editBtn.style.display = "inline";
            showMessage("Task Updated Successfully");
          });
        
          deleteBtn.addEventListener("click", function() {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
            showMessage("Task Deleted Successfully");
          });
        
          tickBtn.addEventListener("click", function() {
            tasks[index].completed = true;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            tickBtn.textContent = "Completed";
            tickBtn.disabled = true;
            editBtn.style.display = "none"; // Add this line to hide the edit button when the task is marked as completed
            showMessage("Task Marked as Completed");
          });
        
          if (task.completed) {
            li.classList.add("completed");
            tickBtn.textContent = "Completed";
            tickBtn.disabled = true;
          } else {
            saveBtn.style.display = "none";
            editBtn.style.display = "inline"; // Add this line to display the edit button
          }
        
          taskList.appendChild(li);
        });
      }
  
    function showMessage(msg) {
      const messageDiv = document.createElement("div");
      messageDiv.textContent = msg;
      messageDiv.classList.add("message");
      document.body.appendChild(messageDiv);
      setTimeout(function() {
        messageDiv.style.opacity = "1";
        setTimeout(function() {
          messageDiv.style.opacity = "0";
          setTimeout(function() {
            messageDiv.remove();
          }, 500);
        }, 2000);
      }, 100);
    }
  
    renderTasks();
  
    addTaskBtn.addEventListener("click", function() {
        const newTask = taskInput.value.trim();
        if (newTask !== "") {
          tasks.push({ text: newTask, completed: false });
          localStorage.setItem("tasks", JSON.stringify(tasks));
          taskInput.value = "";
          renderTasks();
          showMessage("Task Added Successfully");
        }
    });

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          const newTask = taskInput.value.trim();
          if (newTask !== "") {
            tasks.push({ text: newTask, completed: false });
            localStorage.setItem("tasks", JSON.stringify(tasks));
            taskInput.value = "";
            renderTasks();
            showMessage("Task Added Successfully");
          }
        }
    });
});