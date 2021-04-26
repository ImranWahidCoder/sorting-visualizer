let arr=[];
const main_bar=document.querySelector("#bars");
const add_bar=(no_of_bar)=>
{
    arr.splice(0,arr.length);
    for(i=0;i<no_of_bar;i++)
    {
        arr.push(Math.floor(1+(Math.random()*300)));
    }
    main_bar.innerHTML=null;
    for(i=0;i<no_of_bar;i++)
    {
        let el=document.createElement("div");
        el.style.height=`${arr[i]}px`;
        el.classList.add("small_bar");
        main_bar.appendChild(el);
    }
}
