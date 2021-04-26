const mrg_sort = document.querySelector(".merge_sort");
var temp = [];
mrg_sort.addEventListener("click",()=>
{
    title.innerText="Merge Sort";
    baki.innerText="Time Complexity:-O(n*log(n)) | Space Complexity:-O(n)";
    legend.innerHTML = `<table style="margin:1px auto">
    <tr>
        <td><div style="background: red;height: 15px; width: 15px; border-radius: 20px;"></div></td>
        <td>Red bars represents the elements,before the middle position</td>
    </tr>
    <tr>
        <td><div style="background: pink;height: 15px; width: 15px; border-radius: 20px;"></div></td>
        <td>Pink bars represents the elements,after the middle position</td>
    </tr>
    <tr>
        <td><div style="background: yellow;height: 15px; width: 15px; border-radius: 20px;"></div></td>
        <td>Yellow bars represents the elements,after the merging two sorted parts</td>
    </tr>
</table>`
    const ele=document.querySelectorAll(".small_bar");
    performer(arr,ele);
})
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
    await animate(goti);
    if (s < e) 
    {
        let m = parseInt((s + e) / 2);
        await mergesort(ele,s, m);
        for(i=s;i<=m;i++)
        {
            ele[i].style.height=`${arr[i]}px`;
        }
        for(i=s;i<=m;i++)
        {
            ele[i].style.border="6px solid pink";
        }
        await animate(goti);
        await mergesort(ele,m + 1, e);
        for(i=m+1;i<=e;i++)
        {
            ele[i].style.height=`${arr[i]}px`;
        }
        for(i=s;i<=m;i++)
        {
            ele[i].style.border="6px solid red";
        }
        await animate(goti);
        await merge(ele,s, e);
        for(i=s;i<=e;i++)
        {
            ele[i].style.height=`${arr[i]}px`;
        }
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