
        const container = document.querySelector(".container");
        container.style.display = "flex";
        container.style.justifyContent="center"
         container.style.backgroundColor = "";
         container.style.height ="600px"
         container.style.gap ="20px"

        const inputs = [
            { type: "text", placeholder: "name", name: "name", value: "", use_header: 'true' },
            { type: "text", placeholder: "f_Name", name: "f_Name", value: "", use_header: 'true' },
            { type: "text", placeholder: "email", name: "email", value: "", use_header: 'true' },
            { type: "number", placeholder: "age", name: "age", value: "", use_header: 'true' }
        ];

        let formElements = {};
        let serialNumber = 1;

        function createForm() {
            const formContainer = document.createElement('div');
            formContainer.className = 'formcontainer';
            formContainer.style.width = "300px";
            formContainer.style.color = "white";
            formContainer.style.padding = "15px";
            formContainer.style.marginBottom = "20px";

            const heading = document.createElement('h2');
            heading.innerText = 'Registration Form';
            heading.style.color ="black"
            formContainer.appendChild(heading);

            const form = document.createElement('form');

            inputs.forEach(({ type, placeholder, name, value, use_header }) => {
                if (use_header === 'true') {
                    const input = document.createElement('input');
                    input.type = type;
                    input.placeholder = placeholder;
                    input.name = name;
                    input.value = value;
                    input.style.marginTop = "10px";
                    input.style.width = "90%";
                    input.style.padding = "8px";
                    

                    form.appendChild(input);
                    formElements[name] = input;
                }
            });

            const submitBtn = document.createElement('button');
            submitBtn.style.margin = "20px 65px";
            submitBtn.type = 'submit';
            submitBtn.innerText = 'Add';
            submitBtn.style.borderRadius ="3px"

            form.appendChild(submitBtn);

            formContainer.appendChild(form);
            container.appendChild(formContainer);

            
            form.addEventListener("submit", function (e) {
                e.preventDefault();

            
                const row = document.createElement("tr");

    
                const sno = document.createElement("td");
                sno.innerText = serialNumber++;
                sno.style.border = "1px solid black";
                row.appendChild(sno);

        
                inputs.forEach(({ name }) => {
                    const td = document.createElement("td");
                    td.innerText = formElements[name].value;
                    td.style.border = "1px solid black";
                    row.appendChild(td);
                });

    
                const actionTd = document.createElement("td");
                const deleteBtn = document.createElement("button");
                const editBtn = document.createElement("button");
                editBtn.innerTexr = "Edit"
                deleteBtn.innerText = "Delete";
                deleteBtn.addEventListener("click", () => {
                    row.remove();
                });
                actionTd.appendChild(deleteBtn);
                actionTd.appendChild(editBtn)
                actionTd.style.border = "1px solid black";
                row.appendChild(actionTd);

                document.querySelector("tbody").appendChild(row);


                Object.values(formElements).forEach(input => input.value = '');
            });
        }

        function createTable() {
            const tableContainer = document.createElement('div');
            tableContainer.className = 'tableContainer';
            tableContainer.style.width = "800px";
            tableContainer.style.height = "800px";
            tableContainer.style.display = "";
            tableContainer.style.justifyContent = "";
            tableContainer.style.padding = "10px";
            tableContainer.style.backgroundColor = '';
            tableContainer.style.marginBottom = "40px";

            const table = document.createElement('table');
            table.style.border = "1px solid black";
            table.style.borderCollapse = "collapse";
            table.style.width = "100%";
            table.style.backgroundColor = "white";

            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');

            const headers = ['S.No', 'name', 'f_Name', 'email', 'age', 'action'];
            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.style.border = "1px solid black";
                th.style.padding = "8px";
                th.innerText = headerText;
                headerRow.appendChild(th);
            });

            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement('tbody');
            table.appendChild(tbody);

            tableContainer.appendChild(table);
            container.appendChild(tableContainer);
        }

        createForm();
        createTable();

