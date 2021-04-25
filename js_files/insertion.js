const ins_sort=document.querySelector(".insertion_sort");
const speed_algo = document.querySelector(".speed").value;
ins_sort.addEventListener('click', async function () 
{
    await insert_sort();
});
function animate(milisec) 
{
    return new Promise(resolve =>
    {
        setTimeout(() => { resolve('') }, milisec);
    })
};

async function insert_sort() 
{
    const ele = document.querySelectorAll(".small_bar");

    for (let i = 1; i < ele.length; i++) 
    {
        let hole=i;
        let pre_height=ele[i].style.height;
        while(hole>0 && parseInt(ele[hole-1].style.height)>parseInt(pre_height))
        {
            let goti = (10 - speed_algo + 1) * 100;
            await animate(goti);
            ele[hole].style.border = "6px solid red";
            ele[hole].style.height=ele[hole-1].style.height; 
            hole--;
        }
        ele[hole].style.height=pre_height;
        for(j=0;j<=i;j++)
        {
            ele[j].style.border = "6px solid green";
        }
    }
}
