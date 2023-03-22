console.log("hi");
document.getElementById("button").addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("Converting");
    let input=document.getElementById('input').value;
    let val =(9*input)/5+32;
    document.getElementById('div').innerHTML="Converted"+val;
});
document.getElementById("button2").addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("Converting");
    let input=document.getElementById('input').value;
    let val =((input-32)*5)/9;
    document.getElementById('div').innerHTML="Converted "+val;
});
