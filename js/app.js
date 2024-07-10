document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const employeeList = document.getElementById("employeeList");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const firstName = formData.get("firstname");
    const lastName = formData.get("lastname");
    const email = formData.get("email");
    const hireDate = formData.get("hire_date");
    const photo = formData.get("photo");
    const photoUrl = URL.createObjectURL(photo);

    const row = document.createElement("tr");
    row.innerHTML = `
        <td><img src="${photoUrl}" alt="Employee Photo" height="50"></td>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${hireDate}</td>
        <td><button class="delete-btn">Delete</button></td>
      `;
    employeeList.appendChild(row);

    const deleteBtn = row.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function (event) {
      deleteEmployee(event.target);
    });

    form.reset();
  });
});

function deleteEmployee(button) {
  if (confirm("Are you sure you want to delete this employee?")) {
    const row = button.closest("tr");
    row.parentNode.removeChild(row);
  }
}
