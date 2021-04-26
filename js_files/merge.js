const mrg_sort = document.querySelector(".merge_sort");
var temp = [];
merge = (ele,s, e) => 
{
    let m = parseInt((s + e) / 2)
    let p1 = s
    let p2 = m + 1
    let n1 = m
    let n2 = e
    let idx = s

    while (p1 <= n1 && p2 <= n2) 
    {
        if (arr[p1] <= arr[p2]) 
        {
            temp[idx++] = arr[p1++]
        }
        else 
        {
            temp[idx++] = arr[p2++]
        }
    }

    while (p1 <= n1) 
    {
        temp[idx++] = arr[p1++]
    }

    while (p2 <= n2) 
    {
        temp[idx++] = arr[p2++]
    }

    idx = s
    while (idx <= e) 
    {
        arr[idx] = temp[idx++]
    }
}


// mergesort
const mergesort = async (ele,s, e) =>
{
    for(i=s;i<=e;i++)
    {
        ele[i].style.height=`${arr[i]}px`;
    }
    if (s < e) 
    {
        let m = parseInt((s + e) / 2);
        await mergesort(ele,s, m);
        for(i=s;i<=m;i++)
        {
            ele[i].style.height=`${arr[i]}px`;
        }
        await animate(goti);
        await mergesort(ele,m + 1, e);
        for(i=m+1;i<=e;i++)
        {
            ele[i].style.height=`${arr[i]}px`;
        }
        await animate(goti);
        await merge(ele,s, e);
        for(i=s;i<=e;i++)
        {
            ele[i].style.height=`${arr[i]}px`;
        }
        await animate(goti);
        for(i=s;i<=e;i++)
        {
            ele[i].style.border="6px solid yellow";
        }
    }
}

const performer = async (arr,ele) => 
{
    await mergesort(ele,0, arr.length - 1);
}
mrg_sort.addEventListener("click",()=>
{
    const ele=document.querySelectorAll(".small_bar");
    performer(arr,ele);
})