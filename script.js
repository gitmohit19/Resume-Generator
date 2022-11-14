function addNewWorkExper(){
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("wefield");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter here");


    let weObj=document.getElementById("we");
   let weAddButtonObj=document.getElementById("weAddButton");

   weObj.insertBefore(newNode,weAddButtonObj);
}

function addNewQualification(){
    let newQualification=document.createElement("textarea");
    newQualification.classList.add("form-control");
    newQualification.classList.add("aqField");
    newQualification.classList.add("mt-2");
    newQualification.setAttribute("rows",2);
    newQualification.setAttribute("placeholder","Enter here");

    let aqObj=document.getElementById("aq");
    let aqAddButton=document.getElementById("aqAddButton");

     aqObj.insertBefore(newQualification,aqAddButton);


}
function addNewProject(){
   let newProject=document.createElement("textarea");
   newProject.classList.add("form-control");
   newProject.classList.add("projectField");
   newProject.classList.add("mt-2");
   newProject.setAttribute("rows",3);
   newProject.setAttribute("placeholder","Enter here");

   let projectObj=document.getElementById("pr");
   let addPrBtn=document.getElementById("pAddButton");
   projectObj.insertBefore(newProject,addPrBtn);
}
function addSkill(){
  console.log("add skill -------------------")
   let newSkill=document.createElement("textarea");
   newSkill.classList.add("form-control");
   newSkill.classList.add("skillfield");
   newSkill.classList.add("mt-2");
   newSkill.setAttribute("rows",3);
   newSkill.setAttribute("placeholder","Enter here");

   let skillObj=document.getElementById("skill");
   let addSkillBtn=document.getElementById("skillAddBtn");
   skillObj.insertBefore(newSkill,addSkillBtn);
}
function addInt(){
   let newInterest=document.createElement("textarea");
   newInterest.classList.add("form-control");
   newInterest.classList.add("intfield");
   newInterest.classList.add("mt-2");
   newInterest.setAttribute("rows",3);
   newInterest.setAttribute("placeholder","Enter here");

   let intObj=document.getElementById("interest");
   let addIntBtn=document.getElementById("intAddBtn");
   intObj.insertBefore(newInterest,addIntBtn);
}

function generateCv(){
    
    let nameField1=document.getElementById("nameField").value;
    let nameTemp1=document.getElementById("nameTemp1");
    let nameTemp2=document.getElementById("nameTemp2");

    nameTemp1.innerHTML=nameField1;
    nameTemp2.innerHTML=nameField1;



    document.getElementById("contactTemp").innerHTML=document.getElementById("contactField").value
    document.getElementById("emailTemp").innerHTML=document.getElementById("email").value
    document.getElementById("addressTemp").innerHTML=document.getElementById("addressField").value
    document.getElementById("fbTemp").innerHTML=document.getElementById("fbField").value
    document.getElementById("gitTemp").innerHTML=document.getElementById("gitField").value
    document.getElementById("linkedTemp").innerHTML=document.getElementById("linkedField").value
    document.getElementById("objTemp").innerHTML=document.getElementById("objective").value

    let workEx=document.getElementsByClassName("wefield");

    let str= "";
    for(let e of workEx){
      str = str + `<li> ${e.value} </li>`;
    }
    let worktemp1=document.getElementById("weTemp");
    console.log(worktemp1);
    worktemp1.innerHTML= str;

    let academicQ=document.getElementsByClassName("aqField");
    let str1= "";
    for(let e of academicQ){
      str1= str1 + `<li>${e.value}</li>`
    }
    document.getElementById("aqTemp").innerHTML=str1;

    let project=document.getElementsByClassName("projectField");
    let str2="";
    for(let e of project){
      str2 =str2 + `<li>${e.value}</li>`;
    }
    document.getElementById("projectTemp").innerHTML=str2;

    let skillADD=document.getElementsByClassName("skillfield");
    let str3="";
    for(let e of skillADD){
      str3 =str3 + `<li>${e.value}</li>`;
    }
    document.getElementById("skillTemp").innerHTML=str3;

    let intAdd=document.getElementsByClassName("intfield");
    let str4="";
    for(let e of intAdd){
      str4 =str4 + `<li>${e.value}</li>`;
    }
    document.getElementById("intTemp").innerHTML=str4;

    document.getElementById("cv-form").style.display= "none";
    document.getElementById("cv-template").style.display= "block";


}
function printCv(){
       window.print();
}