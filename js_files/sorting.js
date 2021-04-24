const add_bar=(no_of_bar)=>
{
    let arr=[];
    for(i=0;i<no_of_bar;i++)
    {
        arr.push(1+(Math.random()*300));
    }
    const main_bar=document.querySelector("#bars");
    main_bar.innerHTML=null;
    for(i=0;i<no_of_bar;i++)
    {
        let el=document.createElement("div");
        el.style.height=`${arr[i]}px`;
        el.classList.add("small_bar");
        main_bar.appendChild(el);
    }
}
