let string = "";
let memory = 0; // Variable to store the memory value
let buttons = document.querySelectorAll('.button');//selects all the elements from the buttons class
Array.from(buttons).forEach((button)=>{//forms the array from the html collection buttons and runs for loop of each element and for each item
  button.addEventListener('click', (e)=>{//if on any button we click then for that element we get the element using target.innerHTML
    if(e.target.innerHTML == '='){
      string = eval(string);//evaluate the string
      document.querySelector('input').value = string;//assigns the string to the input text area
    }
    else if(e.target.innerHTML == 'C'){
      string = ""//enters the empty string
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML === 'M+') {
        memory += parseFloat(string); // Add the current value to memory
        string = "";
        document.querySelector('input').value = string;
      }
      else if (e.target.innerHTML === 'M-') {
        memory -= parseFloat(string); // Subtract the current value from memory
        string = "";
        document.querySelector('input').value = string;
      }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;//display the buttons clicked
    document.querySelector('input').value = string;
      }
  })
})