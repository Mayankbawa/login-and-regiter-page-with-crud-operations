var selectedRow =null

function onformSubmit(){
	debugger;

	var formData = readFormData();
	if(selectedRow == null)
			insertNewRecord(formData);
		else
			updateRecord(formData);

	resetForm();

}

function readFormData(){
	var formData = {};
	formData["ID"] = document.getElementById("studentid").value;
	formData["Name"] = document.getElementById("studentname").value;
	formData["Email"] = document.getElementById("email").value;
	formData["Class"] = document.getElementById("class").value;
	formData["Year"] = document.getElementById("year").value;
	formData["City"] = document.getElementById("city").value;
	formData["Country"] = document.getElementById("country").value;
	return formData;
}

function insertNewRecord(data){
	let table = document.getElementById('tablebody');	
//	let table = document.getElementById('studentlist').querySelector("#tablebody")[0];
	let newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.ID;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.Name;
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.Email;
	cell4 = newRow.insertCell(3);
	cell4.innerHTML = data.Class;
	cell5 = newRow.insertCell(4);
	cell5.innerHTML = data.Year;
	cell6 = newRow.insertCell(5);
	cell6.innerHTML = data.City;
	cell7 = newRow.insertCell(6);
	cell7.innerHTML = data.Country;
	cell8 = newRow.insertCell(7);
	cell8.innerHTML = `<a onClick = "onEdit(this)"> Edit</a> 
					  <a onClick ="onDelete(this)"">Delete</a>`;
}

function resetForm(){
	document.getElementById('studentid').value = "";
	document.getElementById('studentname').value = "";
	document.getElementById('email').value = "";
	document.getElementById('class').value = "";
	document.getElementById('year').value = "";
	document.getElementById('city').value = "";
	document.getElementById('country').value = "";
	selectedRow = null;

}

function onEdit(td){
	selectedRow = td.parentElement.parentElement;
	document.getElementById('studentid').value= selectedRow.cells[0].innerHTML;
	document.getElementById('studentname').value = selectedRow.cells[1].innerHTML;
	document.getElementById('email').value = selectedRow.cells[2].innerHTML;
	document.getElementById('class').value =selectedRow.cells[3].innerHTML;
	document.getElementById('year').value = selectedRow.cells[4].innerHTML;
	document.getElementById('city').value =selectedRow.cells[5].innerHTML;
	document.getElementById('country').value = selectedRow.cells[6].innerHTML;
}

function updateRecord(formData){
	selectedRow.cells[0].innerHTML = formData.ID;
	selectedRow.cells[1].innerHTML = formData.Name;
	selectedRow.cells[2].innerHTML = formData.Email;
	selectedRow.cells[3].innerHTML = formData.Class;
	selectedRow.cells[4].innerHTML = formData.Year;
	selectedRow.cells[5].innerHTML = formData.City;
	selectedRow.cells[6].innerHTML = formData.Country;
}

function onDelete(td){
	if(confirm('Are u sure to delete this?')){
		row =td.parentElement.parentElement;
		document.getElementById("studentlist").deleteRow(row.rowIndex);
		resetForm();
	}
}