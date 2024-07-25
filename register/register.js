const date = new Date();
const d1 = date.getDate()+"/"+(date.getMonth()+1).toString()+"/"+date.getFullYear().toString();
var date2 = new Date(date);
date2.setDate(date.getDate() + 1);
const d2 = date2.getDate()+"/"+(date2.getMonth()+1).toString()+"/"+date2.getFullYear().toString();
    const day1 = document.getElementsByName("date")[0][1];
    const day2 = document.getElementsByName("date")[0][2];
    day1.innerText = d1;
    day2.innerText = d2;
