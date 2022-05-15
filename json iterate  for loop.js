var json = [{
    "name":"Gokulakrishnan",
    "age" :"23",
    "gender":"Male"
    }]
    //for loop
    
    for(i=0;i<json.length;i++){
    var obj=json[i];
    console.log(obj.name)
    console.log(obj.age)
    console.log(obj.gender)
    }
    
    // for Each
    json.forEach(function(obj) { 
    console.log(obj.name); 
    });
    
    // for in
    for(obj in json){
    console.log(json[obj].age);
    }
    
    //for of
    for(obj of json){
    console.log(obj.gender)
    }