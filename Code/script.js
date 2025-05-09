const dataInputForm = document.getElementById("dataInputForm");
const dataToSort = document.getElementById("dataInput");
const convertButton = document.getElementById("convertButton");
const keywordOne = document.getElementById("keyword1");
const keywordTwo = document.getElementById("keyword2");
let casesToSort = [];
let INCREMENT = 2;


dataInputForm.addEventListener("submit", function(e){
    e.preventDefault();
    casesToSortString = dataToSort.value;
    casesToSort = casesToSortString.replace(/\s+/g, "").split(","); // Regex to select all whitespace and then replace with none.
    console.log(totalCases);
    console.log(casesToSort);
    barSizeAdjuster(findTotalCaseTypes(casesToSort, keywordOne.value.toLowerCase(), keywordTwo.value.toLowerCase()));
})

function findTotalCaseTypes(arr, word1, word2){
    // Loop through an array of cases and add up the totals adding them to a object.
    let sortedCases = {
        keywordOneCount: 0,
        keywordTwoCount: 0,
    };
    for (job in arr){
        console.log(arr[job]);
        console.log(word1);
        if (arr[job] === word1){
            sortedCases.keywordOneCount ++;
            console.log(`Matching word ${word1}`);
            console.log(sortedCases.keywordOneCount);
        }
        if (arr[job] === word2){
            sortedCases.keywordTwoCount ++;
        };
    }
    return(sortedCases);
};

const totalCases = findTotalCaseTypes(casesToSort);


function barSizeAdjuster(obj){
    let fencesBarSize = obj.keywordOneCount;
    let playgroundsBarSize = obj.keywordTwoCount;

    // Change the size of the bar depending on the total cases.
    const fencesBar = document.getElementById("keywordOneBar");
    const playgroundsBar = document.getElementById("keywordTwoBar");

    fencesBar.style.height = `${fencesBarSize * INCREMENT - 4}px`;
    playgroundsBar.style.height = (`${playgroundsBarSize * INCREMENT - 4}px`);
};

barSizeAdjuster(totalCases);