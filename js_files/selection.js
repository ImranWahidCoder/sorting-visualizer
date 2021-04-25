const sel_sort=document.querySelector(".selection_sort");
sel_sort.addEventListener('click', async function () 
{
    await select_sort();
});
async function select_sort() 
{
    const ele = document.querySelectorAll(".small_bar");

    for (let i = 0; i < ele.length; i++) 
    {
        let iMin=i;
        for(let j=i+1;j<ele.length;j++)
        {
            if(parseInt(ele[j].style.height)<parseInt(ele[iMin].style.height))
            {
                iMin=j;
            }
        }
        ele[iMin].style.border="6px solid pink";
        ele[i].style.border="6px solid yellow";
        await animate(goti);
        swap(ele[i],ele[iMin]);
        ele[iMin].style.border="6px solid yellow";
        ele[i].style.border="6px solid pink";
        await animate(goti);
        ele[iMin].style.border="6px solid white";
        ele[i].style.border="6px solid white";
        await animate(goti);
        for(let k=0;k<=i;k++)
        {
            ele[k].style.border="6px solid green";
        }
    }
}