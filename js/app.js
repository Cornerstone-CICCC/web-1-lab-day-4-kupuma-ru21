document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const employeeList = document.getElementById("employeeList");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const hireDate = document.getElementById("hire_date").value;
    const photoInput = document.querySelector('input[type="file"]');
    const photoFile = photoInput.files[0];
    const photoUrl = photoFile ? URL.createObjectURL(photoFile) : "";

    const row = document.createElement("tr");
    row.innerHTML = `
        <td><img src="${photoUrl}" alt="Employee Photo" height="50"></td>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${hireDate}</td>
        <td><button onclick="deleteEmployee(this)">Delete</button></td>
      `;
    employeeList.appendChild(row);
    form.reset();
  });
});

function deleteEmployee(button) {
  if (confirm("Are you sure you want to delete this employee?")) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
}
