//your JS code here. If required.
let form=document.querySelector("form");
form.addEventListener('submit',(e)=>{
  e.preventDefault();
 let age=e.target.age.value;

 let name=e.target.name.value;
  
 canYouVote(age,name)
 .then((data)=>{
  alert(data);
 })
 .catch((err)=>{
  alert(err);
 })
});

function canYouVote(age,name) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      if(age>=18){
        resolve(`Welcome, ${name}. You can vote.`);
      }
      else reject(`Oh sorry ${name}. You aren't old enough.`)
      
    }, 4000);
  });
}