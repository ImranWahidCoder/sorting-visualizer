const q_sort=document.querySelector(".quick_sort");
q_sort.addEventListener("click",()=>
{
    title.innerText="Quick Sort";
    baki.innerText="Time Complexity:-O(n*log(n))(Average case) O(n²)(Worst case)| Space Complexity:-O(1)";
    const ele=document.querySelectorAll(".small_bar");
    quick(ele,arr,0,arr.length-1);
});
const partition= (arr,start,end)=>
{
    pivot=arr[end];
    let index=start;
    for(i=start;i<end;i++)
    {
        if(arr[i]<=pivot)
        {
            let x=arr[i];
            arr[i]=arr[index];
            arr[index]=x;
            index++;
        }
    }
    let y=arr[index];
    arr[index]=arr[end];
    arr[end]=y;
    return index;
}
const quick= async (ele,arr,start,end)=>
{
    if(start<end)
    {
        for(i=start;i<=end;i++)
        {
            ele[i].style.height=`${arr[i]}px`;
        }
        ele[end].style.border="6px solid crimson";
        partitionIndex=await partition(arr,start,end);
        await animate(goti);
        ele[partitionIndex].style.border="6px solid pink";
        ele[end].style.border="6px solid white";
        await animate(goti);
        await quick(ele,arr,start,partitionIndex-1);
        for(i=start;i<partitionIndex;i++)
        {
            ele[i].style.height=`${arr[i]}px`;
        }
        for(i=start;i<partitionIndex;i++)
        {
            ele[i].style.border="6px solid aquamarine";
        }
        await animate(goti);
        await quick(ele,arr,partitionIndex+1,end);
        for(i=partitionIndex+1;i<=end;i++)
        {
            ele[i].style.height=`${arr[i]}px`;
        }
        for(i=partitionIndex+1;i<=end;i++)
        {
            ele[i].style.border="6px solid aquamarine";
        }
        await animate(goti);
        for(i=start;i<=end;i++)
        {
            ele[i].style.height=`${arr[i]}px`;
        }
        for(i=start;i<=end;i++)
        {
            ele[i].style.border="6px solid aquamarine";
        }
    }
}