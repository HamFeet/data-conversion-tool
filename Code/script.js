const dataInputForm = document.getElementById("dataInputForm");
const dataToSort = document.getElementById("dataInput");
const convertButton = document.getElementById("convertButton");
const keywordOne = document.getElementById("keyword1");
const keywordTwo = document.getElementById("keyword2");
let casesToSort = [];


dataInputForm.addEventListener("submit", function(e){
    e.preventDefault();
    // console.log(dataToSort);
    casesToSortString = dataToSort.value;
    casesToSort = casesToSortString.split(",");
    console.log(totalCases) 
    barSizeAdjuster(findTotalCaseTypes(casesToSort, keywordOne.value.toLowerCase(), keywordTwo.value.toLowerCase()));
})

function findTotalCaseTypes(arr, word1, word2){
    // Loop through an array of cases and add up the totals adding them to a object.
    let sortedCases = {
        keywordOneCount: 0,
        keywordTwoCount: 0,
    }
    for (job in arr){
        console.log(arr[job]);
        console.log(word1)
        if (arr[job] === word1){
            sortedCases.keywordOneCount ++;
            console.log(`Matching word ${word1}`)
            console.log(sortedCases.keywordOneCount)
        }
        if (arr[job] === word2){
            sortedCases.keywordTwoCount ++;
        }
    }
    return(sortedCases);
};

const totalCases = findTotalCaseTypes(casesToSort);

function barSizeAdjuster(obj){
    let fencesBarSize = obj.keywordOneCount;
    let playgroundsBarSize = obj.keywordTwoCount;

    // Change the size of the bar depending on the total cases.
    const fencesBar = document.getElementById("keywordOneBar");
    const playgroundsBar = document.getElementById("keywordTwoBar")

    fencesBar.style.width = `${fencesBarSize}px`;
    playgroundsBar.style.width = (`${playgroundsBarSize}px`);

}
barSizeAdjuster(totalCases)