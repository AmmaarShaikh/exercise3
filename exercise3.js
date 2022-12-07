/*exercise 3, Access Control, Ammaar Shaikh Period 7-8 Even
- You can add permissions to a  user by chaning the placement of the 1 in the last three digits 
- You check the placement of the 1 in the last three places of myP, which represent the permissions.
- You can use the bitwise operators in 2 step authentication.*/

let myP = 0000010;
let r = 00000100
let rw = 00000010
let rwx  = 00000001

let temp = myP
let read =((temp | r) == 64)

let temp1 = myP
let write = ((temp1 | rw) == 8);

let temp2 = myP
let execute = ((temp2 | rwx) == 1);
console.log("Does the person have read permissions?")
if (write){
    read = true;
}
if (execute){
   read = true;
}
if (read){
    console.log("yes");
}
else{
    console.log("no");
}
console.log("Does the person have writing permissions?")
if (execute){
    write = true;
}
if(write){
    console.log("yes");
}
else{
    console.log("no");
}
console.log("Does the person have executing permissions?");
if(execute){
    console.log("yes");
}
else{
    console.log("no");
}