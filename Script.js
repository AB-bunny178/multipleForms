
        let employees = [];
        let employeeId = 1;

        function addEmployee() {
            const name = document.getElementById("name").value.trim();
            const profession = document.getElementById("profession").value.trim();
            const age = document.getElementById("age").value.trim();
            const messageElement = document.getElementById("message");

            // Clear previous messages
            messageElement.innerText = "";
            messageElement.className = "message";

            // Validate inputs
            if (!name || !profession || !age) {
                messageElement.innerText = "Error: Please make sure all fields are filled.";
                messageElement.classList.add("error");
                return;
            }

            // Add employee to the list
            const newEmployee = {
                id: employeeId++,
                name: name,
                profession: profession,
                age: Number(age),
            };
            employees.push(newEmployee);

            // Show success message
            messageElement.innerText = "Success: Employee Added!";
            messageElement.classList.add("success");

            // Clear input fields
            document.getElementById("name").value = "";
            document.getElementById("profession").value = "";
            document.getElementById("age").value = "";

            // Update employee list
            displayEmployees();
        }

        function displayEmployees() {
            const employeeList = document.getElementById("employeeList");
            employeeList.innerHTML = "";

            if (employees.length === 0) {
                employeeList.innerHTML = "<p>You have 0 Employees.</p>";
                return;
            }

            employees.forEach((emp) => {
                const employeeItem = document.createElement("div");
                employeeItem.className = "employee-item";
                employeeItem.innerHTML = `
                    <span>${emp.id}. Name: ${emp.name} - Profession: ${emp.profession} - Age: ${emp.age}</span>
                    <button class="delete-button" onclick="deleteEmployee(${emp.id})">Delete User</button>
                `;
                employeeList.appendChild(employeeItem);
            });
        }

        function deleteEmployee(id) {
            employees = employees.filter((emp) => emp.id !== id);
            displayEmployees();
        }
