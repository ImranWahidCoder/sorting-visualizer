const ins_sort=document.querySelector(".insertion_sort");
ins_sort.addEventListener('click', async function () 
{
    await insert_sort();
});
async function insert_sort() 
{
    const ele = document.querySelectorAll(".small_bar");

    for (let i = 1; i < ele.length; i++) 
    {
        let hole=i;
        let pre_height=ele[i].style.height;
        while(hole>0 && parseInt(ele[hole-1].style.height)>parseInt(pre_height))
        {
            await animate(goti);
            ele[hole].style.border = "6px solid red";
            ele[hole].style.height=ele[hole-1].style.height; 
            hole--;
        }
        ele[hole].style.height=pre_height;
        ele[hole].style.border="6px solid yellow";
        await animate(goti);
        for(j=0;j<=i;j++)
        {
            ele[j].style.border = "6px solid green";
        }
    }
}
