async function selectionSort(){
    let ele = document.querySelector('#bars').children;
    for(let i=0;i<ele.length-1;i++){
        let minIndex=i;
        for(let j=i+1;j<ele.length;j++){

            ele[i].style.backgroundColor="blue";
            ele[j].style.backgroundColor="yellow";
            await wait();
            if(toNumber(ele[minIndex].style.height)>toNumber(ele[j].style.height)){
                ele[minIndex].style.backgroundColor="red";
                minIndex=j;
                ele[minIndex].style.backgroundColor="yellow";
            }
            else{
                ele[j].style.backgroundColor="red"
            }

        }
        swap(ele[i],ele[minIndex]);
        await wait();
        ele[minIndex].style.backgroundColor="red";
        ele[i].style.backgroundColor="green";


    }
    ele[ele.length-1].style.backgroundColor="green";
}








let selectionSortButton = document.querySelector('#selection-sort-btn');
selectionSortButton.addEventListener('click',async function() {
    disableInputSize();
    disableButtons();
    disableNewArrayButton();
    await selectionSort();
    enableInputSize();
    enableButtons();
    enableNewArrayButton();
})