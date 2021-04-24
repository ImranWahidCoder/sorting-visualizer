const arr=[];
for(i=0;i<50;i++)
{
    arr.push((Math.random()*50)+1);
}
const main_bar=document.querySelector("#bars");
for(i=0;i<50;i++)
{
    let el=document.createElement("div");
    //el.style.height="20px";
    el.classList.add("small_bar");
    main_bar.appendChild(el);
}
