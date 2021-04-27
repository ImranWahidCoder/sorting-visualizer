const bubSortbtn = document.querySelector(".bubble_sort");
bubSortbtn.addEventListener('click', async function () {
    title.innerText = "Bubble Sort";
    baki.innerText = "Time Complexity:- O(n²) | Space Complexity:- O(1)";
    legend.innerHTML = `<table style="margin:1px auto">
    <tr>
        <td><div style="background: red;height: 15px; width: 15px; border-radius: 20px;"></div></td>
        <td>Red bars represent the elements,currently compared</td>
    </tr>
    <tr>
        <td><div style="background: yellow;height: 15px; width: 15px; border-radius: 20px;"></div></td>
        <td>Yellow bars represent the elements,placed at correct position</td>
    </tr>
    <tr>
        <td><div style="background: green;height: 15px; width: 15px; border-radius: 20px;"></div></td>
        <td>Green bars represent the elements,to be placed at correct position</td>
    </tr>
</table>`
    await bubble();
    const ele=document.querySelectorAll(".small_bar");
    if(ele.length>0)
    {
        await animate(goti);
        alert("The array is sorted now");
    }
});

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function animate(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

async function bubble() {
    const ele = document.querySelectorAll(".small_bar");

    for (let i = 0; i < ele.length - 1; i++) {
        for (let j = 0; j < ele.length - i - 1; j++) {
            ele[j].style.border = "6px solid red";
            ele[j + 1].style.border = "6px solid red";

            // parse int function returns a string
            if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
                await animate(goti);
                swap(ele[j], ele[j + 1]);
            }
            ele[j].style.border = "6px solid green";
            ele[j + 1].style.border = "6px solid green";
        }
        // mark the element already sorted
        ele[ele.length - 1 - i].style.border = "6px solid yellow";
    }
    // mark the last
    ele[0].style.border = "6px solid yellow";
}

// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}