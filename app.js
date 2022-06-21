const inputfields = document.querySelector(".detail-form");
const output = document.querySelector(".output");

let inputShow = true;

// to reuse the same function code for other input fields
async function TextEditor(element) {
  const newEditor = await ClassicEditor.create(element, {
    toolbar: [
      "heading",
      "bold",
      "italic",
      "numberedList",
      "bulletedList",
      "blockQuote",
    ],
  });
  return newEditor;
}

let workExpdetails;
TextEditor(inputfields["projects1"]).then((nEditor) => {
  workExpdetails = nEditor;
});

function toggle() {
  if (inputShow) {
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
            <p>${inputfields["Skill1"].value}, ${
              inputfields["Skill2"].value
            }, ${inputfields["Skill3"].value}</p>

            <h4>Personal Qualities</h4>
            <p>${inputfields["pq1"].value}, ${inputfields["pq2"].value}, ${
              inputfields["pq3"].value
            }</p>
                       
          </div>
            
        
          <div> 
            <h4>Educational Qualifications</h4>
            <p>${inputfields["course"].value} -
            ${inputfields["discipline"].value} -
            ${inputfields["univ"].value} -
            ${inputfields["year"].value} -
            ${inputfields["grade"].value}</p>
            
            <p>${inputfields["course2"].value} -
            ${inputfields["discipline2"].value} -
            ${inputfields["univ2"].value} -
            ${inputfields["year2"].value} -
            ${inputfields["grade2"].value}</p>
            
            <h4>Work Experience</h4>
            <p>${inputfields["designation"].value}</p>
            <p>${inputfields["experience"].value}</p>

            <h4>Projects</h4>
                ${workExpdetails.getData()}
      
            
          </div>

        </div>
        
          <div class="btn">
        <button onclick="print()">Print Resume</button>
      </div>

         `;
  } else {
    inputfields.style.display = "block";
    inputShow = true;
    output.innerHTML = "";
  }
}
