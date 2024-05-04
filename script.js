 function handleSubmit(event) {
    // console.log("handleSubmit works...")
    event.preventDefault()


    let firstNameInput = document.getElementById("firstName").value 
    let lastNameInput = document.getElementById("lastName").value 
    let idInput = document.getElementById("id").value 
    let titleInput = document.getElementById("title").value 
    let annualSalaryInput = document.getElementById("annualSalary").value 
    





    let firstNameList = document.getElementById('list')
     firstNameList.innerHTML += `
       <tr>
      <td> ${firstNameInput} </td>
      <td> ${lastNameInput} </td>
      <td> ${idInput} </td>
      <td> ${titleInput} </td>
      <td> ${annualSalaryInput} </td>
      <td>  <button onClick="deleteThis(event)"> delete </button> </td>

      </tr>`


 }

 function deleteThis(event){
   let task = event.target.parentElement.parentElement;
   task.remove();
 }  
 