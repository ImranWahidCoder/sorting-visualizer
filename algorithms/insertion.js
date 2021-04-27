const ins_sort=document.querySelector(".insertion_sort");
ins_sort.addEventListener('click', async function () 
{
    title.innerText="Insertion Sort";
    baki.innerText="Time Complexity:-O(n²) | Space Complexity:-O(1)";
    legend.innerHTML = `<table style="margin:1px auto">
    <tr>
        <td><div style="background: red;height: 15px; width: 15px; border-radius: 20px;"></div></td>
        <td>Red bars represent the elements,shifted to place the current element at correct position</td>
    </tr>
    <tr>
        <td><div style="background: yellow;height: 15px; width: 15px; border-radius: 20px;"></div></td>
        <td>Yellow bars represent the elements,just placed at correct position</td>
    </tr>
    <tr>
        <td><div style="background: green;height: 15px; width: 15px; border-radius: 20px;"></div></td>
        <td>Green bars represent the elements,placed at correct position</td>
    </tr>
</table>`
    await insert_sort();
    const ele=document.querySelectorAll(".small_bar");
    if(ele.length>0)
    {
        await animate(goti);
        alert("The array is sorted now");
    }
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
