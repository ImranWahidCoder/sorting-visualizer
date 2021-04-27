const sel_sort = document.querySelector(".selection_sort");
sel_sort.addEventListener('click', async function () {
    title.innerText = "Selection Sort";
    baki.innerText = "Time Complexity:- O(n²) | Space Complexity:- O(1)";
    legend.innerHTML = `<table style="margin:1px auto">
    <tr>
        <td><div style="background: yellow;height: 15px; width: 15px; border-radius: 20px;"></div></td>
        <td>Yellow bars represent the current element</td>
    </tr>
    <tr>
        <td><div style="background: pink;height: 15px; width: 15px; border-radius: 20px;"></div></td>
        <td>Pink bars represent the minimum element after the currently processing element</td>
    </tr>
    <tr>
        <td><div style="background: green;height: 15px; width: 15px; border-radius: 20px;"></div></td>
        <td>Green bars represent the elements,placed at correct position</td>
    </tr>
</table>`
    await select_sort();
    const ele=document.querySelectorAll(".small_bar");
    if(ele.length>0)
    {
        await animate(goti);
        alert("The array is sorted now");
    }
});
async function select_sort() {
    const ele = document.querySelectorAll(".small_bar");

    for (let i = 0; i < ele.length; i++) {
        let iMin = i;
        for (let j = i + 1; j < ele.length; j++) {
            if (parseInt(ele[j].style.height) < parseInt(ele[iMin].style.height)) {
                iMin = j;
            }
        }
        ele[iMin].style.border = "6px solid pink";
        ele[i].style.border = "6px solid yellow";
        await animate(goti);
        swap(ele[i], ele[iMin]);
        ele[iMin].style.border = "6px solid yellow";
        ele[i].style.border = "6px solid pink";
        await animate(goti);
        ele[iMin].style.border = "6px solid white";
        ele[i].style.border = "6px solid white";
        await animate(goti);
        for (let k = 0; k <= i; k++) {
            ele[k].style.border = "6px solid green";
        }
    }
}