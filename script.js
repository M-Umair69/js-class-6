//for loop
//while loop 
//do while loop
// let tbl= prompt("Enter the you want to search");
// let num= prompt("enter when to stop")
// document.write("<center>");
// for(let i=0; i<=num; i++){
//     document.write("<table border='2' cellpadding='5' cellspacing='2'>");
//     document.write("<tr>");
//     document.write(`<td>${tbl}</td><td>x</td> <td>${i}</td> <td>=</td> <td>${i*tbl}</td`);
//     document.write("</tr>");
//     document.write("</table>");
// }
// document.write("</center>");
let names = ["Ameer","Affan","Abbas","Ali"]
let len = (names.length)-1;

for (let i=0; i<=len; i++){
    document.write("Welcome ",names[i],"<br>");
}