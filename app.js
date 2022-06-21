const inputfields =document.querySelector(".detail-form");
const output =document.querySelector(".output");

let inputShow = true;

// to reuse the same function code for other input fields 
async function TextEditor(element){
  const newEditor =  await ClassicEditor
  .create(element,{
    toolbar: [ 'heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ],
  } )
  return newEditor
 
}

let workExpdetails;
TextEditor(inputfields["projects1"]).then(nEditor=>{
  workExpdetails = nEditor
})


function toggle(){
  if(inputShow){
      inputfields.style.display = "none";
      inputShow = false;
        
      output.innerHTML = `
        <div class = "hero">
        <h1>${inputfields["designation"].value}</h1>
        </div>
        
        <div class = "main">
          <div>
            <h5>${inputfields["fname"].value} ${inputfields["lname"].value}</h5>
            <p>${inputfields["address"].value}</p>
            <p>${inputfields["mobile"].value}</p>
            <p>${inputfields["email"].value}</p>

            <h4>Objective</h4>
            <p>${inputfields["objective"].value}</p>
            
            <h4>Skills</h4>
            <p>${inputfields["Skill1"].value}</p>
            <p>${inputfields["Skill2"].value}</p>
            <p>${inputfields["Skill3"].value}</p>
            
                       
          </div>
            
          <div> 
            <br><br><br><br>
            <h4>Work Experience</h4>
            <p>${inputfields["designation"].value}</p>
            <p>${inputfields["experience"].value}</p>

            <h4>Educational Qualifications</h4>
            <p>${inputfields["course"].value}</p>
            <p>${inputfields["discipline"].value}</p>
            <p>${inputfields["univ"].value}</p>
            <p>${inputfields["year"].value}</p>
            <p>${inputfields["grade"].value}</p>
            
            <p>${inputfields["course2"].value}</p>
            <p>${inputfields["discipline2"].value}</p>
            <p>${inputfields["univ2"].value}</p>
            <p>${inputfields["year2"].value}</p>
            <p>${inputfields["grade2"].value}</p>
            
            <h4>Projects</h4>
                ${workExpdetails.getData()}
            
            
          </div>
            
          </div>
        <div class="btn">
        <button onclick="print()">Print Resume</button>
      </div>

         `;
  }else{
    inputfields.style.display = "block";
      inputShow = true;
      output.innerHTML = "";
  }
  }