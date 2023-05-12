


                    
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {

  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
  
}


// var invoicebill = document.getElementById("invoicebill");
// var printinvoice = document.getElementById("printinvoice");

// printinvoice.addEventListener('click',()=>{
//   var printContents = invoicebill.innerHTML;
//   var originalContents = document.body.innerHTML;
//   document.body.innerHTML = printContents;
//   window.print();
//   document.body.innerHTML = originalContents;
// });
