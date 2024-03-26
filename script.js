var mydetails = {
    "Name":"shyam",
    "Age":27,
    "Degree":"bsc",
    "Address":"paramakudi,ramanathapuram",
    "Number":"0987456321",
    };
    
    for (var i in mydetails){
    console.log(i,mydetails[i]);
    }


let biodate={

    "name": "shyam sunder",
    "title": "guvi student",
    "contact": {
      "email": "ntshyamsunder96@gmail.com",
      "phone": "09876543210",
      "address": "sskovilstreet ,paramakudi ,ramanathapuram"
    },
    "education": [
      {
        "degree": "Bachelor of Science in physice",
        "institution": "Alagagppa University ",
        "dates": "2014 - 2017"
      }
    ],
    "skills": [
      "JavaScript",
      "Node.js",
      "React.js",
      "MongoDB",
      "Python",
      "Django",
      "HTML",
      "CSS",
      "Git",
    ],
}
for (var key in biodate)
console.log(key);

for (const [key, value] of Object.entries(biodate.contact)) {
    console.log(key, value);}


  let data = Object.entries(biodate.contact)
for(var [key,value] of data){
    console.log(key,value);
}

for (let a in Object.keys(biodate.education)) {
    for (let key in biodate.education[a]) {
        console.log(biodate.education[a][key]);
    }
}

biodate.skills.forEach(function(b) {
    console.log(b);
});