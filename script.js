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

      var table = document.getElementById("table"), sum = 0;
  // getting the tableID
  function getSum(){
    for(let i = 1; i < table.rows.length; i++){
      //looping through the table rows
           sum = sum + parseInt(table.rows[i].cells[4].innerHTML);
            
           //adding cell 4's row
    }
         
     //diaplaying it
  }
  
  getSum()

  function getMonthy (){
   let monthly = sum/ 12
   document.getElementById("totalMonthly").innerHTML = "$  "+monthly.toFixed(2);
     
   
  }

  getMonthy()

 }

 function deleteThis(event){
   let task = event.target.parentElement.parentElement;
   task.remove();
 }  

 

function onClickRemove(deleteButton) {
  let row = deleteButton.parentElement.parentElement;
  row.parentNode.removeChild(row);
  updateSubTotal();
}



  const formToReset = document.getElementById('form');
  //grabbing the form id 

  formToReset.addEventListener('submit', (e) => {
  //when submit and event is gonna happen    
     e.preventDefault();
     //need to prevent it, in order to render it right 
     formToReset.reset();
     //resetting all inputs 

     
  });

  