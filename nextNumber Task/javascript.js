function createArrayIterator(arr){
    let index = 0;
    return function getNextElement(){
        index++;

        if(index >= arr.length){
            document.getElementById('nextElementDisplay').innerHTML = "End of array";
        }else{
            document.getElementById('nextElementDisplay').innerHTML = "Next Element";
        }
    };
}
const array = [5,10,15,20,25];
const getNextElement = createArrayIterator(array);

getNextElement();
getNextElement();
getNextElement();
getNextElement();
getNextElement();