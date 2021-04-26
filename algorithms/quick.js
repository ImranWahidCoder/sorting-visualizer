const q_sort=document.querySelector(".quick_sort");
q_sort.addEventListener("click",()=>
{
    const ele=document.querySelectorAll(".small_bar");
    quick(ele,arr,0,arr.length-1);
    for(i=0;i<arr.length;i++)
    {
        ele[i].style.height=`${arr[i]}px`;
    }
});
const delay=(ms)=>
{
    setTimeout(()=>{},ms);
}
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
const quick= (ele,arr,start,end)=>
{
    if(start<end)
    {
        partitionIndex=partition(arr,start,end);
        quick(ele,arr,start,partitionIndex-1);
        quick(ele,arr,partitionIndex+1,end);
    }
}