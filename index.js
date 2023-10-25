console.log("THis is jack library");
//constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

//Display constructor
function Display() {

}

//Add methods to display prototype
Display.prototype.add=function(book){
console.log('Addding')
tableBody=document.getElementById('tableBody')
     let uiString= `<tr>
               <td>${book.name}</td>
               <td>${book.author}</td>
               <td>${book.type}</td>
               <td><div class="form-group row">
               <div class="col-sm-5">
                   <button id="delete" type="delete" class="btn btn-primary">Delete</button>
               </div>
           </div></td>
               </tr>`
               tableBody.innerHTML+=  
               uiString
}
// Implementing the clear function
Display.prototype.clear=function(){
    libraryForm = document.getElementById("libraryForm")
    libraryForm.reset()
}
// Implementing the validate function
Display.prototype.validate=function(book){
    if(book.name.length<2||book.author.length<2){
        return false
    }
    else{
        return true
    }
}
//add submit event listenermto libraryform
Display.prototype.show=function(type,displaymessage){
let message=document.getElementById('message')
message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
<strong>Message!</strong> ${displaymessage}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
setInterval(()=>{
message.innerHTML=''
},2000)
}
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);
 
function libraryFormSubmit(e) {
  console.log("You have submited the form");
  
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type

  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  let book = new Book(name, author, type);
  console.log(book)

  let display= new Display()
  if(display.validate(book)){
    display.add(book)
    display.clear()
    display.show('success','Your book has been successfully added')
  }
  else{
      //show error to the user
      display.show('Danger','Sorry you cannot add this book ')
  }
  let library=localStorage.getItem('library')
  if(library==null){
      libObj=[]
  }
  else{
      libObj=JSON.parse(libraby)
  }
  libObj.push(book)
  localStorage.setItem("lib",JSON.stringify(libObj))
  
  e.preventDefault();
}



