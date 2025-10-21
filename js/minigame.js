let game = $('body');
let counterText = $('#counter');
let menuTab = $('#gameMenu');

let pointCounter = 0;
let menuState = 0;
let pointAdd = 1;

let upgradeList = [0, 0, 0, 0, 0];
let upgradeIncr = [31, 314, 3141, 31415, 314159];
let upgradeCost = [1, 10, 100, 1000, 10000];
let upgradeVals = [1, 10, 100, 1000, 10000];

window.addEventListener("keydown", (event) => {
    switch(event.key) {
        case " " : {
            gainPoints();
            break;
        }
        case "ArrowUp" : {
            if (menuState > 0) {
                menuState--;
                switchMenu();
            }
            break;
        }
        case "ArrowDown" : {
            if (menuState < 4) {
                menuState++;
                switchMenu();
            }
            break;
        }
        case "Enter" : {
            buyUpgrades();
            break;
        }
        case "r" : {
            upgradeList = [0, 0, 0, 0, 0];
            pointCounter = -1;
            menuState = 0;
            gainPoints();
            switchMenu();
            break;
        }
    }
})

function gainPoints() {
    pointCounter += pointAdd;
    console.log(pointCounter);
    counterText.html("Counter: " + pointCounter);
}

function switchMenu() {
    switch (menuState) {
        case 0 : {
            menuTab.attr("src", "../media/clicker/menu_S1.png");
            break;
        }
        case 1 : {
            menuTab.attr("src", "../media/clicker/menu_S2.png");
            break;
        }
        case 2 : {
            menuTab.attr("src", "../media/clicker/menu_S3.png");
            break;
        }
        case 3 : {
            menuTab.attr("src", "../media/clicker/menu_S4.png");
            break;
        }
        case 4 : {
            menuTab.attr("src", "../media/clicker/menu_S5.png");
            break;
        }
    }
}

function buyUpgrades() {
    if (upgradeCost[menuState] <= pointCounter) {
        if (upgradeList[menuState] < 100) {
            upgradeList[menuState]++;
            pointCounter -= upgradeCost[menuState];
            upgradeCost[menuState] += upgradeIncr[menuState];
            pointAdd += upgradeVals[menuState];

            console.log(upgradeList);
            console.log(upgradeCost);
            console.log(pointAdd);

            pointCounter -= pointAdd;
            gainPoints();
        } else {
            console.log(menuState + " maxed")
        }
    }
}