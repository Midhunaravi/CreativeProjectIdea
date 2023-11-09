document.getElementById("addButton").addEventListener("click", function () {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var department = document.getElementById("department").value;
  var number = document.getElementById("mobile").value;
  var age = document.getElementById("age").value;
  var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.rows.length);
  var cel1 = newRow.insertCell(0);
  var cel2 = newRow.insertCell(1);
  var cel3 = newRow.insertCell(2);
  var cel4 = newRow.insertCell(3);
  var cel5 = newRow.insertCell(4);
  var cel6 = newRow.insertCell(5);
  var cel7 = newRow.insertCell(6);
  var cel8 = newRow.insertCell(7); 
  cel1.innerHTML = firstName;
  cel2.innerHTML = lastName;
  cel3.innerHTML = email;
  cel4.innerHTML = gender;
  cel5.innerHTML = department;
  cel6.innerHTML = number;
  cel7.innerHTML = age;
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "btn btn-danger";
  deleteButton.addEventListener("click", function () {
    var row = this.parentNode.parentNode;
    row.parentNode.removeChild(row);
  });
  var editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.className = "btn btn-primary";
  editButton.addEventListener("click", function () {
    // Get the row data
    var row = this.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
    document.getElementById("firstName").value = cells[0].innerHTML;
    document.getElementById("lastName").value = cells[1].innerHTML;
    document.getElementById("email").value = cells[2].innerHTML;

    var gender = cells[3].innerHTML;
    if (gender === "Male") {
      document.getElementById("male").checked = true;
    } else if (gender === "Female") {
      document.getElementById("female").checked = true;
    }

    document.getElementById("department").value = cells[4].innerHTML;
    document.getElementById("mobile").value = cells[5].innerHTML;
    document.getElementById("age").value = cells[6].innerHTML;

    // Show the modal for editing
    $('#mymodel').modal('show');
  });
  cel8.appendChild(editButton);
  cel8.appendChild(deleteButton);
  resetFormWithFade();
  $('#mymodel').modal('hide');
});

function resetFormWithFade() {
  var formFields = ["firstName", "lastName", "email", "department", "mobile", "age"];
  formFields.forEach(function (field) {
    var element = document.getElementById(field);
    element.style.transition = "opacity 0.5s";
    element.style.opacity = "0";
    setTimeout(function () {
      element.style.opacity = "1";
      element.value = "";
    }, 500);
  });
  var radioButtons = document.querySelectorAll('input[name="gender"]');
  radioButtons.forEach(function (radio) {
    radio.checked = false;
  });
}
