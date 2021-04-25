const bubSortbtn = document.querySelector(".bubble_sort");
const speed_ = document.querySelector(".speed").value;
let goti = (10 - speed_ + 1) * 100;
bubSortbtn.addEventListener('click', async function () 
{
    await bubble();
});

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function animate(milisec) 
{
    return new Promise(resolve =>
    {
        setTimeout(() => { resolve('') }, milisec);
    })
}

async function bubble() 
{
    const ele = document.querySelectorAll(".small_bar");

    for (let i = 0; i < ele.length - 1; i++) 
    {
        for (let j = 0; j < ele.length - i - 1; j++) 
        {
            ele[j].style.border = "6px solid red";
            ele[j + 1].style.border = "6px solid red";

            // parse int function returns a string
            if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height))
            {
                await animate(goti);
                swap(ele[j], ele[j + 1]);
            }
            console.log(ele[j].style.color);
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
function swap(el1, el2) 
{
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}