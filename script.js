var data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach((person)=>{
        if(person.profession==="developer"){
            console.log(person.name)
        }
    })
   console.log(data);
  }
  
  // 2. Add Data
  function addData() {
    const name=prompt("Enter Your Name");
    const age=prompt("Enter your Age");
    const profession=prompt("Enter Your Profession");
    let newperson={
        name,
        age,
        profession,
    }
    data.push(newperson);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
   const result=data.filter((element)=>element.profession!="admin");
   data=result;
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummy=["Dummy Array Element","Dummy Arr Element2"]
    const dumresult=data.concat(dummy);
    console.log(dumresult);
  }
  
  // 5. Average Age
  function averageAge() {
    let arr=[];
    data.forEach((x)=>{
        arr.push(parseInt(x.age));
    })


    const count=arr.length;
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let avg=sum/count;
   
    console.log(avg);

  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let check=false;
    data.forEach((x)=>{
        if(x.age>25){
            check=true; 
        }
    })
    if(check){
        console.log("Yes!! Employee Above age 25 are present");
    }
    else{
        console.log("No!!, All Employees are Under the age of 25");
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let temparr=[];
    data.forEach((x)=>{
        check(x.profession);
    })
    function check(profession){
        if(!temparr.includes(profession)){
            temparr.push(profession);
        }
    }
    console.log(temparr);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>a.age-b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach((x)=>{
        if(x.name==="john"){
            x.profession="manager";

        }
    })
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let devcount=0;
    let admincount=0;
    data.forEach((x)=>{
        if(x.profession==="developer"){
            devcount++;
        }
        if(x.profession==="admin"){
            admincount++;
        }
    })
    console.log(`Developer=${devcount}, Admin=${admincount}`);

  }