const dataInputForm = document.getElementById("dataInputForm");
const dataToSort = document.getElementById("dataInput");
const convertButton = document.getElementById("convertButton");
let casesToSort = [];


dataInputForm.addEventListener("submit", function(e){
    e.preventDefault();
    // console.log(dataToSort);
    casesToSortString = dataToSort.value;
    casesToSort = casesToSortString.split(",");
    console.log(casesToSort)
    barSizeAdjuster(findTotalCaseTypes(casesToSort));
})

function findTotalCaseTypes(arr){
    // Loop through an array of cases and add up the totals adding them to a object.
    let sortedCases = {
        fence: 0,
        playground: 0,
    }
    for (job in arr){
        if (arr[job] === "fence"){
            sortedCases.fence ++;
        }
        if (arr[job] === "playground"){
            sortedCases.playground ++;
        }
    
    }
    return(sortedCases);
};

const totalCases = findTotalCaseTypes(casesToSort);

function barSizeAdjuster(obj){
    let fencesBarSize = obj.fence;
    let playgroundsBarSize = obj.playground;

    // Change the size of the bar depending on the total cases.
    const fencesBar = document.getElementById("fencesBar");
    const playgroundsBar = document.getElementById("playgroundsBar")

    fencesBar.style.width = `${fencesBarSize}px`;
    playgroundsBar.style.width = (`${playgroundsBarSize}px`);

}
barSizeAdjuster(totalCases)