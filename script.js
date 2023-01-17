const BoyName=document.getElementById('Boy');
const GirlsName=document.getElementById('Girl');
const flames=['Friends','Lovers','Affection','Marriage','Enimies','Sister','Lovers','Affair'];
const clickButton=document.getElementById('but');
const output=document.getElementById('display');




clickButton.addEventListener('click',getDetails);


function getDetails(){
    const boyName=parseInt(BoyName.value.length)
    const girlName=parseInt(GirlsName.value.length);
    let sumOfname=  boyName+ girlName;
    let index=sumOfname % 7;
    output.innerText=flames[index];
}

