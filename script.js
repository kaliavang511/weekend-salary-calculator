
let totalMonthlyValue = 0
   function handleSubmit(event) {
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

  

    function renderTotalMonthly() {
    console.log("Current Total Monthly = ", totalMonthlyValue)
    let totalMonthlySpan = document.getElementById("totalMonthlyValue")
    totalMonthlySpan.innerHTML = totalMonthlyValue
  }

  renderTotalMonthly()

  document.getElementById("form").reset()

  totalMonthlyValue += annualSalaryInput /12
  
  


  let footer = document.querySelector("footer")
  if(totalMonthlyValue >20000){
      footer.classList.add('over-budget')
  }
    
}

  
    


 function deleteThis(event){
   let task = event.target.parentElement.parentElement;
   task.remove();
 } 




 


  