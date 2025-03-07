let num=document.querySelector(".num");
let hint=document.querySelector(".hint");
let res=document.querySelector(".res");
let btn=document.querySelector("button");
function array(n) {
    let a=[];
    let missing=Math.floor(Math.random()*n)+1;
    for(let i=1;i<=n;i++) {
        if(i!==missing) {
            a.push(i);
        }
    }
    return{a,missing};
}
let {a,missing}=array(10);
hint.innerText=`Numbers : ${a.join(",")}`;
btn.addEventListener("click",()=>{
    user=parseInt(num.value);
    if(user===missing) {
        res.innerText=`Correct ! Missing Number Is ${missing}`;
        res.style.color="green";
    }
    else {
        res.innerText=`Try again`;
        res.style.color="red";
    }
})
