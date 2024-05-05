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

 let table = document.getElementById("table"), sumVal= 0;

//  function totalMonthly(){

//    for(var i = 1; i < table.rows.length; i++){
//       sumVal = sumVal + parseFloat(table.rows[i].cells[4].innerHTML)
//    }
//    document.getElementById("totalMonthly").innerHTML = "$ "+sumVal.toFixed(2)
//    //who sum here
//     console.log("sum is", sumVal);       
//   }

  // totalMonthly()

  
  

 

  const formToReset = document.getElementById('form');
  //grabbing the form id 

  formToReset.addEventListener('submit', (e) => {
  //when submit and event is gonna happen    
     e.preventDefault();
     //need to prevent it, in order to render it right 
     formToReset.reset();
     //resetting all inputs 

     
  });

