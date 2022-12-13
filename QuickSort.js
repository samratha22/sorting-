async function quickSort(start,end){
    if(start<end){
        let pivot = await pivotIndex(start,end);
        await quickSort(start,pivot-1);
        await quickSort(pivot+1,end);
    }
    else{
        if(document.querySelector('#bars').children[start]!==undefined){
            document.querySelector('#bars').children[start].style.backgroundColor="green";
        }
    }

}

async function pivotIndex(start,end){
    let ele = document.querySelector('#bars').children;
    let pivot = toNumber(ele[start].style.height);
    let i=start,j=end,vi=end,vj=start;
    ele[start].style.backgroundColor="pink";
    while(true){
        while(i<=end){
            if(i!==start){
                ele[i].style.backgroundColor="yellow";
                await wait();
            }
            if(toNumber(ele[i].style.height)>pivot){
                vi=i;
                break;
            }
            if(i!==start){
                ele[i].style.backgroundColor="red";
                await wait();
            }

            i+=1;
        }
        while(j>=start){
            if(j!==start){
                ele[j].style.backgroundColor="blue";
                await wait();
            }

            if(toNumber(ele[j].style.height)<pivot){
                vj=j;
                break;
            }
            if(j!==start){
                ele[j].style.backgroundColor="red";
                await wait();
            }

            j-=1;
        }

        if(vi<vj){
            swap(ele[vi],ele[vj]);
            await wait();

        }
        else{
            swap(ele[vj],ele[start]);
            await wait();
            ele[vj].style.backgroundColor="green";
            break;
        }
    }
    return vj;
}

let quickSortButton = document.querySelector('#quick-sort-btn');
quickSortButton.addEventListener('click',async function (){
    disableInputSize();
    disableButtons();
    disableNewArrayButton();
    await quickSort(0,array.length-1);
    enableInputSize();
    enableButtons();
    enableNewArrayButton();
});
