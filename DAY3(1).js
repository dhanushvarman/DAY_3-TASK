var names=["dhanush","varman","gokul","ragesh","gurudoss"];

// for...loop

for(i=0;i<names.length;i++){
    console.log(names[i]);
}

// Prints all the elements in the array

// for...in loop
for(i in names){
    console.log(i);
}

// Prints index of the elements

//for...of loop
for(i of names){
    console.log(i);
}

// Prints all the elements in the array

//for...each loop
let count=0;
function counts(){
    console.log(`${count} - ${names[count]}`);
    count++;
}
names.forEach(counts);

// Prints the index and elements in the array