const homeButton = document.querySelector("#home")
const descButton = document.querySelector("#desc")
const startButton = document.querySelector("#start")
const homeButtons = document.getElementById("homeButtons")
const exit = document.getElementById("exit")
let element = document.getElementById("kezdo")
let element2 = document.getElementById("leiras")
let element3 = document.getElementById("jatek")
const playersShow = document.querySelector("#playersShow")
const prizesShow = document.querySelector("#prizesShow")
const rangePlayer = document.querySelector("#players")
const rangePrize = document.querySelector("#prizes")
const body = document.getElementById("body")
let table = document.getElementById("board")
//arrows
const left1 = document.getElementById("slideLeft1")
const left2 = document.getElementById("slideLeft2")
const left3 = document.getElementById("slideLeft3")

const right1 = document.getElementById("slideRight1")
const right2 = document.getElementById("slideRight2")
const right3 = document.getElementById("slideRight3")

const down1 = document.getElementById("slideDown1")
const down2 = document.getElementById("slideDown2")
const down3 = document.getElementById("slideDown3")

const up1 = document.getElementById("slideUp1")
const up2 = document.getElementById("slideUp2")
const up3 = document.getElementById("slideUp3")

const rotateOutLeft = document.getElementById("rotateLeft")
const rotateOutRight = document.getElementById("rotateRight")

const p1 = document.getElementById("player1Score")
const p2 = document.getElementById("player2Score")
const p3 = document.getElementById("player3Score")
const p4 = document.getElementById("player4Score")

const playerPic1 = document.getElementById("player1")
const playerPic2 = document.getElementById("player2")
const playerPic3 = document.getElementById("player3")
const playerPic4 = document.getElementById("player4")

const playerTable = document.getElementById("playerTable")

//...........................................................................................................
//constants
const Colors = [
    "#0096FF",
    "#32CD32",
    "#800020",
    "#9932CC"
];

const players = [
    {
        id: 0,
        playing: false,
        location: {},
        howManyTreasures: 0,
        color: "#0096FF"
    },
    {
        id: 1,
        playing: false,
        location: {},
        howManyTreasures: 0,
        color: "#32CD32"
    },
    {
        id: 2,
        playing: false,
        location: {},
        howManyTreasures: 0,
        color: "#800020"
    },
    {
        id: 3,
        playing: false,
        location: {},
        howManyTreasures: 0,
        color: "#9932CC"
    }
];

let matrix = []
const rotations = [0, 90, 180, 270];
const tileTypes = ["corner", "straight", "threeway"];
let allroutes = []
let allRouteIndexes = []
const fixTiles = [
    {
        type: "corner",
        rotation: 0,
        holdsTreasure: false,
        treasureIsFor: {},
        isroute: false,
        home: {
            ishome: false,
            playerNumber: {}
        },
        playersOnTile: []
    },

    {
        type: "threeway",
        rotation: 90,
        holdsTreasure: false,
        treasureIsFor: {},
        isroute: false,
        home: {
            ishome: false,
            playerNumber: {}
        },
        playersOnTile: []
    },

    {
        type: "threeway",
        rotation: 90,
        holdsTreasure: false,
        treasureIsFor: {},
        isroute: false,
        home: {
            ishome: false,
            playerNumber: {}
        },
        playersOnTile: []
    },

    {
        type: "corner",
        rotation: 90,
        holdsTreasure: false,
        treasureIsFor: {},
        isroute: false,
        home: {
            ishome: false,
            playerNumber: {}
        },
        playersOnTile: []
    },

    {
        type: "threeway",
        rotation: 0,
        holdsTreasure: false,
        treasureIsFor: {},
        isroute: false,
        home: {
            ishome: false,
            playerNumber: {}
        },
        playersOnTile: []
    },

    {
        type: "threeway",
        rotation: 0,
        holdsTreasure: false,
        treasureIsFor: {},
        isroute: false,
        home: {
            ishome: false,
            playerNumber: {}
        },
        playersOnTile: []
    },

    {
        type: "threeway",
        rotation: 90,
        holdsTreasure: false,
        treasureIsFor: {},
        isroute: false,
        home: {
            ishome: false,
            playerNumber: {}
        },
        playersOnTile: []
    },

    {
        type: "threeway",
        rotation: 180,
        holdsTreasure: false,
        treasureIsFor: {},
        isroute: false,
        home: {
            ishome: false,
            playerNumber: {}
        },
        playersOnTile: []
    },

    {
        type: "threeway",
        rotation: 0,
        holdsTreasure: false,
        treasureIsFor: {},
        isroute: false,
        home: {
            ishome: false,
            playerNumber: {}
        },
        playersOnTile: []
    },

    {
        type: "threeway",
        rotation: 270,
        holdsTreasure: false,
        treasureIsFor: {},
        isroute: false,
        home: {
            ishome: false,
            playerNumber: {}
        },
        playersOnTile: []
    },

    {
        type: "threeway",
        rotation: 180,
        holdsTreasure: false,
        treasureIsFor: {},
        isroute: false,
        home: {
            ishome: false,
            playerNumber: {}
        },
        playersOnTile: []
    },

    {
        type: "threeway",
        rotation: 180,
        holdsTreasure: false,
        treasureIsFor: {},
        isroute: false,
        home: {
            ishome: false,
            playerNumber: {}
        },
        playersOnTile: []
    },

    {
        type: "corner",
        rotation: 270,
        holdsTreasure: false,
        treasureIsFor: {},
        isroute: false,
        home: {
            ishome: false,
            playerNumber: {}
        },
        playersOnTile: []
    },

    {
        type: "threeway",
        rotation: 270,
        holdsTreasure: false,
        treasureIsFor: {},
        isroute: false,
        home: {
            ishome: false,
            playerNumber: {}
        },
        playersOnTile: []
    },

    {
        type: "threeway",
        rotation: 270,
        holdsTreasure: false,
        treasureIsFor: {},
        isroute: false,
        home: {
            ishome: false,
            playerNumber: {}
        },
        playersOnTile: []
    },

    {
        type: "corner",
        rotation: 180,
        holdsTreasure: false,
        treasureIsFor: {},
        isroute: false,
        home: {
            ishome: false,
            playerNumber: {}
        },
        playersOnTile: []
    },

]
let fixtilesCpy = [...fixTiles]
//...........................................................................................................
//functions
let allRandomTiles = []

function getAllRandomTiles(){
    let n1 = 13
    let n2 = 15
    let n3 = 6
    while(n1 > 0 || n2 > 0 || n3 > 0){
        let tile = getRandomTile()
        if(tile.type == "straight" && n1 > 0){
            allRandomTiles.push(tile)
            n1--
        }
        else if(tile.type == "corner" && n2 > 0){
            allRandomTiles.push(tile)
            n2--
        }
        else if(tile.type == "threeway" && n3 > 0){
            allRandomTiles.push(tile)
            n3--
        }
    }
}

function generateBoard() {
    getAllRandomTiles()
    for(let i = 1; i <= 7; i++){
        let row = []
        for(let j = 1; j <= 7; j++){
            if(i %2 == 1 && j % 2 == 1) {
                row.push(fixtilesCpy.shift())
            }
            else{
                row.push(allRandomTiles.shift())
            }
        }
        matrix.push(row)
    }
}

function setPlayersActive() {
    for(let i = 0; i < playersShow.value; i++){
        players[i].playing = true
    }
}

function placeTreasures() {
    let ps = []
    for (let i = 0; i < players.length; i++) {
        if (players[i].playing == true) {
            ps.push(players[i])
        }
    }
    for (let i = 0; i < ps.length; i++) {
        let tres = prizesShow.value
        while (tres > 0) {
            let col = getRandomNum(0, 6)
            let row = getRandomNum(0, 6)
            if ((matrix[col][row] != matrix[0][0]) && (matrix[col][row] != matrix[0][6]) && (matrix[col][row] != matrix[6][0]) && (matrix[col][row] != matrix[6][6])) {
                if (matrix[col][row].holdsTreasure == false) {
                    matrix[col][row].holdsTreasure = true
                    matrix[col][row].treasureIsFor = ps[i]
                    tres--
                }
            }
        }
    }
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

function getRandomTile() {
    randomTile =
        {
        type: tileTypes[getRandomNum(0,2)],
        rotation: rotations[getRandomNum(0,3)],
        holdsTreasure: false,
        treasureIsFor: {},
        isroute: false,
        home: {
            ishome: false,
            playerNumber: {}
        },
        playersOnTile: []
        }
        return randomTile
}

function refreshMatrix(){
    matrix = []
    generateBoard()
    setPlayersActive()
    placeTreasures()
}

let tileOut = getRandomTile()
let tileOutHTML = document.getElementById("outTile")
/*tileOutHTML.innerHTML = `<img src="${setImage(tileOut)}">
                         ${tileOutTreasure()}`*/
tileOutHTML.innerHTML = `<div class="tileDiv">
                            <img src="${setImage(tileOut)}">
                            ${tileOutTreasure()}
                        </div>`

function slideDown(n) {
    pushed = true
    const helper = matrix[0][n]
    for(let i = 1; i < 7; i++){
        matrix[i-1][n] = matrix[i][n]
    }
    matrix[6][n] = tileOut

    for(let i = 0; i < helper.playersOnTile.length; i++){
        tileOut.playersOnTile.push(helper.playersOnTile[i])
        helper.playersOnTile[i].location = tileOut
        let b = checkIfTreasure(tileOut, tileOut.playersOnTile[i])
        if(b){
            collectTreasure(tileOut, tileOut.playersOnTile[i])
        }
    }
    helper.playersOnTile = []

    tileOut = helper
    tileOutHTML.innerHTML = `<div class="tileDiv">
                            <img src="${setImage(tileOut)}">
                            ${tileOutTreasure()}
                        </div>`
    drawOutBoard()
}

function slideUp(n) {
    pushed = true
    const helper = matrix[6][n]
    for(let i = 5; i >= 0; i--){
        matrix[i+1][n] = matrix[i][n]
    }
    matrix[0][n] = tileOut

    for(let i = 0; i < helper.playersOnTile.length; i++){
        tileOut.playersOnTile.push(helper.playersOnTile[i])
        helper.playersOnTile[i].location = tileOut
        let b = checkIfTreasure(tileOut, tileOut.playersOnTile[i])
        if(b){
            collectTreasure(tileOut, tileOut.playersOnTile[i])
        }
    }
    helper.playersOnTile = []

    tileOut = helper
    tileOutHTML.innerHTML = `<div class="tileDiv">
                            <img src="${setImage(tileOut)}">
                            ${tileOutTreasure()}
                        </div>`
    drawOutBoard()
}

function slideRight(n) {
    pushed = true
    const helper = matrix[n][0]
    for(let i = 1; i < 7; i++){
        matrix[n][i-1] = matrix[n][i]
    }
    matrix[n][6] = tileOut

    for(let i = 0; i < helper.playersOnTile.length; i++){
        tileOut.playersOnTile.push(helper.playersOnTile[i])
        helper.playersOnTile[i].location = tileOut
        let b = checkIfTreasure(tileOut, tileOut.playersOnTile[i])
        if(b){
            collectTreasure(tileOut, tileOut.playersOnTile[i])
        }
    }
    helper.playersOnTile = []

    tileOut = helper
    tileOutHTML.innerHTML = `<div class="tileDiv">
                            <img src="${setImage(tileOut)}">
                            ${tileOutTreasure()}
                        </div>`
    drawOutBoard()
}

function slideLeft(n) {
    pushed = true
    const helper = matrix[n][6]
    for(let i = 5; i >= 0; i--){
        matrix[n][i+1] = matrix[n][i]
    }
    matrix[n][0] = tileOut

    for(let i = 0; i < helper.playersOnTile.length; i++){
        tileOut.playersOnTile.push(helper.playersOnTile[i])
        helper.playersOnTile[i].location = tileOut
        let b = checkIfTreasure(tileOut, tileOut.playersOnTile[i])
        if(b){
            collectTreasure(tileOut, tileOut.playersOnTile[i])
        }
    }
    helper.playersOnTile = []

    tileOut = helper
    tileOutHTML.innerHTML = `<div class="tileDiv">
                            <img src="${setImage(tileOut)}">
                            ${tileOutTreasure()}
                        </div>`
    drawOutBoard()
}

function rotatetileRight() {
    tileOut.rotation += 90
    if(tileOut.rotation > 270){
        tileOut.rotation = 0
    }
    tileOutHTML.innerHTML = `<div class="tileDiv">
                            <img src="${setImage(tileOut)}">
                            ${tileOutTreasure()}
                        </div>`
}

function rotatetileLeft() {
    tileOut.rotation -= 90
    if(tileOut.rotation < 0){
        tileOut.rotation = 270
    }
    tileOutHTML.innerHTML = `<div class="tileDiv">
                            <img src="${setImage(tileOut)}">
                            ${tileOutTreasure()}
                        </div>`
}

function setUpHomes() {
    //playerShow.value
    if(playersShow.value == 1){
        matrix[0][0].home.ishome = true
        matrix[0][0].home.playerNumber = 0
        matrix[0][0].playersOnTile.push(players[0])
        players[0].playing = true
        players[0].location = matrix[0][0]
    }
    if(playersShow.value == 2){
        matrix[0][0].home.ishome = true
        matrix[0][0].home.playerNumber = 0
        matrix[0][0].playersOnTile.push(players[0])
        players[0].playing = true
        players[0].location = matrix[0][0]

        matrix[0][6].home.ishome = true
        matrix[0][6].home.playerNumber = 1
        matrix[0][6].playersOnTile.push(players[1])
        players[1].playing = true
        players[1].location = matrix[0][6]
    }
    if(playersShow.value == 3){
        matrix[0][0].home.ishome = true
        matrix[0][0].home.playerNumber = 0
        matrix[0][0].playersOnTile.push(players[0])
        players[0].playing = true
        players[0].location = matrix[0][0]

        matrix[0][6].home.ishome = true
        matrix[0][6].home.playerNumber = 1
        matrix[0][6].playersOnTile.push(players[1])
        players[1].playing = true
        players[1].location = matrix[0][6]

        matrix[6][0].home.ishome = true
        matrix[6][0].home.playerNumber = 2
        matrix[6][0].playersOnTile.push(players[2])
        players[2].playing = true
        players[2].location = matrix[6][0]
    }
    if(playersShow.value == 4){
        matrix[0][0].home.ishome = true
        matrix[0][0].home.playerNumber = 0
        matrix[0][0].playersOnTile.push(players[0])
        players[0].playing = true
        players[0].location = matrix[0][0]

        matrix[0][6].home.ishome = true
        matrix[0][6].home.playerNumber = 1
        matrix[0][6].playersOnTile.push(players[1])
        players[1].playing = true
        players[1].location = matrix[0][6]

        matrix[6][0].home.ishome = true
        matrix[6][0].home.playerNumber = 2
        matrix[6][0].playersOnTile.push(players[2])
        players[2].playing = true
        players[2].location = matrix[6][0]

        matrix[6][6].home.ishome = true
        matrix[6][6].home.playerNumber = 3
        matrix[6][6].playersOnTile.push(players[3])
        players[3].playing = true
        players[3].location = matrix[6][6]
    }
}

function setUpPlayerIcons() {
    if(playersShow.value == 1) {
        playerPic1.style.visibility = "visible"
        playerPic2.style.visibility = "hidden"
        playerPic3.style.visibility = "hidden"
        playerPic4.style.visibility = "hidden"
    }
    if(playersShow.value == 2){
        playerPic1.style.visibility = "visible"
        playerPic2.style.visibility = "visible"
        playerPic3.style.visibility = "hidden"
        playerPic4.style.visibility = "hidden"
    }
    if(playersShow.value == 3){
        playerPic1.style.visibility = "visible"
        playerPic2.style.visibility = "visible"
        playerPic3.style.visibility = "visible"
        playerPic4.style.visibility = "hidden"
    }
    if(playersShow.value == 4){
        playerPic1.style.visibility = "visible"
        playerPic2.style.visibility = "visible"
        playerPic3.style.visibility = "visible"
        playerPic4.style.visibility = "visible"
    }
}

const directionOfTiles = {
    corner: {
        0: ["right", "down"],
        90: ["down", "left"],
        180: ["left", "up"],
        270: ["up", "right"]
    },
    straight: {
        0: ["up", "down"],
        90: ["left", "right"],
        180: ["up", "down"],
        270: ["left", "right"]
    },
    threeway: {
        0: ["up", "right", "down"],
        90: ["right", "down", "left"],
        180: ["down", "left", "up"],
        270: ["right", "left", "up"]
    }
}

function getAllRoutes(n,m){
    for(let i = 0; i < matrix.length; i++){
        for(let j =0; j < matrix[i].length; j++){
            matrix[i][j].isroute = false
        }
    }
    let allroutes = []
    allroutes.push(matrix[n][m])
    allRouteIndexes = []
    allRouteIndexes.push([n,m])
    matrix[n][m].isroute = true

    /*let test = directionOfTiles[matrix[0][0].type]
    let test2 = directionOfTiles[matrix[n][m].type][matrix[n][m].rotation]
    console.log(test2[1])
    console.log(directionOfTiles[matrix[n][m].type][matrix[n][m].rotation])*/
        let array = directionOfTiles[matrix[n][m].type][matrix[n][m].rotation]
        for(let i = 0; i < directionOfTiles[matrix[n][m].type][matrix[n][m].rotation].length; i++){
            if(array[i] == "up"){
                if(n != 0){
                    if(directionOfTiles[matrix[n-1][m].type][matrix[n-1][m].rotation].includes("down")){
                        allroutes.push(matrix[n-1][m])
                        allRouteIndexes.push([n-1,m])
                        matrix[n-1][m].isroute = true
                    }
                }
            }
            else if(array[i] == "down"){
                if(n != 6){
                    if(directionOfTiles[matrix[n+1][m].type][matrix[n+1][m].rotation].includes("up")){
                        allroutes.push(matrix[n+1][m])
                        allRouteIndexes.push([n+1,m])
                        matrix[n+1][m].isroute = true
                    }
                }
            }
            else if(array[i] == "left"){
                if(m != 0){
                    if(directionOfTiles[matrix[n][m-1].type][matrix[n][m-1].rotation].includes("right")){
                        allroutes.push(matrix[n][m-1])
                        allRouteIndexes.push([n,m-1])
                        matrix[n][m-1].isroute = true
                    }
                }
            }
            else if(array[i] == "right"){
                if(m != 6){
                    if(directionOfTiles[matrix[n][m+1].type][matrix[n][m+1].rotation].includes("left")){
                        allroutes.push(matrix[n][m+1])
                        allRouteIndexes.push([n,m+1])
                        matrix[n][m+1].isroute = true
                    }
                }
            }
    }
    return allroutes
}

function checkIfTreasure(tile, player){
    if(tile.holdsTreasure == true && tile.treasureIsFor == player){
        return true
    }else{
        return false
    }
}

function collectTreasure(tile, player) {
    if(tile.holdsTreasure && tile.treasureIsFor == player){
        tile.holdsTreasure = false
        tile.treasureIsFor = {}
        player.howManyTreasures += 1
    }
}

function checkIfWin() {
    if(players[0].howManyTreasures == prizesShow.value && players[0].location == matrix[0][0]){
        alert("Vége a játéknak, nyert a kék (1.) játékos!")
        location.reload()
    }
    else if(players[1].howManyTreasures == prizesShow.value){
        alert("Vége a játéknak, nyert a zöld (2.) játékos!")
        location.reload()
    }
    else if(players[2].howManyTreasures == prizesShow.value){
        alert("Vége a játéknak, nyert a piros (3.) játékos!")
        location.reload()
    }
    else if(players[3].howManyTreasures == prizesShow.value){
        alert("Vége a játéknak, nyert a lila (4.) játékos!")
        location.reload()
    }
}

let pushed = false
function pushArrows(e) {
    if(e.target.nodeName === "TD"){
        return
    }
    if(pushed){
        return
    }
    let clicked
    if(e.target.nodeName === "IMG"){
        clicked = e.target
    }
    if(clicked.parentElement.id == "slideDown1"){
        slideUp(1)
    }
    else if(clicked.parentElement.id == "slideDown2"){
        slideUp(3)
    }
    else if(clicked.parentElement.id == "slideDown3"){
        slideUp(5)
    }

    else if(clicked.parentElement.id == "slideUp1"){
        slideDown(1)
    }
    else if(clicked.parentElement.id == "slideUp2"){
        slideDown(3)
    }
    else if(clicked.parentElement.id == "slideUp3"){
        slideDown(5)
    }

    else if(clicked.parentElement.id == "slideLeft1"){
        slideRight(1)
    }
    else if(clicked.parentElement.id == "slideLeft2"){
        slideRight(3)
    }
    else if(clicked.parentElement.id == "slideLeft3"){
        slideRight(5)
    }

    else if(clicked.parentElement.id == "slideRight1"){
        slideLeft(1)
    }
    else if(clicked.parentElement.id == "slideRight2"){
        slideLeft(3)
    }
    else if(clicked.parentElement.id == "slideRight3"){
        slideLeft(5)
    }
    let cell = players[current].location
    let tileRow = 0
    let tileCol = 0
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] == cell){
                tileRow = i
                tileCol = j
            }
        }
    }
    getAllRoutes(tileRow, tileCol)
    drawOutBoard()
}

function initializeFirstStep() {
    let firstm = players[0].location
    let row = 0
    let col = 0
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] == firstm){
                row = i
                col = j
            }
        }
    }
    getAllRoutes(row,col)
}


let current = 0

function increase() {
    if(playersShow.value == 1){
        current = 0
    }else if(playersShow.value == 2){
        current++
        if(current > 1){
            current = 0
        }
    }else if(playersShow.value == 3){
        current++
        if(current > 2){
            current = 0
        }
    }else if(playersShow.value == 4){
        current++
        if(current > 3){
            current = 0
        }
    }
}

element3.addEventListener('click', pushArrows)
function step(e) {
    if(e.target.nodeName === "TD"){
        return
    }
    removeBorder()

    if(!pushed){
        return
    }
    pushed = false
    let cell = players[current].location
    let tileRow = 0
    let tileCol = 0
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] == cell){
                tileRow = i
                tileCol = j
            }
        }
    }
    drawOutBoard()

    let routes = getAllRoutes(tileRow, tileCol)
    let step
    if(e.target.nodeName === "IMG"){
        step = e.target.parentElement.parentElement
    }else if(e.target.nodeName === "DIV"){
        step = e.target.parentElement.parentElement
    }
    let row = step.parentElement.id
    let col = step.id
    let cur = current
    if(routes.includes(matrix[row][col])){
        let p = cell.playersOnTile.indexOf(players[current])
        cell.playersOnTile.splice(p, 1)
        matrix[row][col].playersOnTile.push(players[current])
        players[current].location = matrix[row][col]
        let bool = checkIfTreasure(matrix[row][col], players[current])
        if(bool){
            collectTreasure(matrix[row][col], players[current])
        }
    }else{
        current = cur
    }
    drawOutBoard()
    checkIfWin()
    increase()
    if(current == 0){
        playerPic1.classList.add("bordered")
    }else if(current == 1){
        playerPic2.classList.add("bordered")
    }else if(current == 2){
        playerPic3.classList.add("bordered")
    }else if(current == 3){
        playerPic4.classList.add("bordered")}

    let cell2 = players[current].location
    let tileRow2 = 0
    let tileCol2 = 0
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] == cell2){
                tileRow2 = i
                tileCol2 = j
            }
        }
    }
    getAllRoutes(tileRow2, tileCol2)
    drawOutBoard()
}

function removeBorder() {
    for(let i = 0; i < playerTable.children[0].children.length; i++){
        for(let j = 0; j < playerTable.children[0].children[i].children.length; j++){
            playerTable.children[0].children[i].children[j].classList.remove("bordered")
        }
    }
}

function game() {
    playerPic1.classList.add("bordered")
    table.addEventListener('click', step)
}

//...........................................................................................................
//rajzolgatás xd

function setHomes(tile){
    if(tile.home.ishome == true && tile.home.playerNumber == 0){
        return `<div class="homeBlue"></div>`
    }
    else if(tile.home.ishome == true && tile.home.playerNumber == 1){
        return `<div class="homeGreen"></div>`
    }
    else if(tile.home.ishome == true && tile.home.playerNumber == 2){
        return `<div class="homeRed"></div>`
    }
    else if(tile.home.ishome == true && tile.home.playerNumber == 3){
        return `<div class="homePurple"></div>`
    }else{
        return ""
    }
}

function setTreasures(tile){
    if(tile.holdsTreasure && tile.treasureIsFor == players[0]){
        return `<div class="treasureBlue"></div>`
    }
    else if(tile.holdsTreasure && tile.treasureIsFor == players[1]){
        return `<div class="treasureGreen"></div>`
    }
    else if(tile.holdsTreasure && tile.treasureIsFor == players[2]){
        return `<div class="treasureRed"></div>`
    }
    else if(tile.holdsTreasure && tile.treasureIsFor == players[3]){
        return `<div class="treasurePurple"></div>`
    }else {
        return ""
    }
}

function setPlayers(tile){
    /*for(let i = 0; i < tile.playersOnTile.length; i++){
        if(tile.playersOnTile.length == 1){
            return `<div class="playerSquare playerSquare1" style="border:2px solid ${tile.playersOnTile[i].color}"></div>`
        }
        if(tile.playersOnTile.length == 2){
            return `<div class="playerSquare playerSquare2-${i}" style="border:2px solid ${tile.playersOnTile[i].color}"></div>`
        }
    }
    return ""*/
    if(tile.playersOnTile.length == 1){
        return `<div class="playerSquare playerSquare1" style="border:2px solid ${tile.playersOnTile[0].color}"></div>`
    }
    else if(tile.playersOnTile.length == 2){
        return `<div>
                    <div class="playerSquare playerSquare2-0" style="border:2px solid ${tile.playersOnTile[0].color}"></div>
                    <div class="playerSquare playerSquare2-1" style="border:2px solid ${tile.playersOnTile[1].color}"></div>
                </div>`
    }
    else if(tile.playersOnTile.length == 3){
        return `<div>
                    <div class="playerSquare playerSquare3-0" style="border:2px solid ${tile.playersOnTile[0].color}"></div>
                    <div class="playerSquare playerSquare3-1" style="border:2px solid ${tile.playersOnTile[1].color}"></div>
                    <div class="playerSquare playerSquare3-2" style="border:2px solid ${tile.playersOnTile[2].color}"></div>
                </div>`
    }
    else if(tile.playersOnTile.length == 4){
        return `<div>
                    <div class="playerSquare playerSquare4-0" style="border:2px solid ${tile.playersOnTile[0].color}"></div>
                    <div class="playerSquare playerSquare4-1" style="border:2px solid ${tile.playersOnTile[1].color}"></div>
                    <div class="playerSquare playerSquare4-2" style="border:2px solid ${tile.playersOnTile[2].color}"></div>
                    <div class="playerSquare playerSquare4-3" style="border:2px solid ${tile.playersOnTile[3].color}"></div>
                </div>`
    }
    else{
        return ""
    }
}

function setImage(tile){
    if(tile.type == "corner" && tile.rotation == 0){
        return "corner0.png"
    }
    if(tile.type == "corner" && tile.rotation == 90){
        return "corner90.png"
    }
    if(tile.type == "corner" && tile.rotation == 180){
        return "corner180.png"
    }
    if(tile.type == "corner" && tile.rotation == 270){
        return "corner270.png"
    }
    if(tile.type == "threeway" && tile.rotation == 0){
        return "threeway0.png"
    }
    if(tile.type == "threeway" && tile.rotation == 90){
        return "threeway90.png"
    }
    if(tile.type == "threeway" && tile.rotation == 180){
        return "threeway180.png"
    }
    if(tile.type == "threeway" && tile.rotation == 270){
        return "threeway270.png"
    }
    if(tile.type == "straight" && tile.rotation == 0){
        return "straight0.png"
    }
    if(tile.type == "straight" && tile.rotation == 90){
        return "straight90.png"
    }
    if(tile.type == "straight" && tile.rotation == 180){
        return "straight0.png"
    }
    if(tile.type == "straight" && tile.rotation == 270){
        return "straight90.png"
    }
}

function setRoutes(tile) {
    if(tile.isroute){
        return "highlighted"
    }else{
        return ""
    }
}

function tileOutTreasure() {
    if(tileOut.holdsTreasure && tileOut.treasureIsFor == players[0]){
        return `<div class="treasureBlueOut"></div>`
    }
    else if(tileOut.holdsTreasure && tileOut.treasureIsFor == players[1]){
        return `<div class="treasureGreenOut"></div>`
    }
    else if(tileOut.holdsTreasure && tileOut.treasureIsFor == players[2]){
        return `<div class="treasureRedOut"></div>`
    }
    else if(tileOut.holdsTreasure && tileOut.treasureIsFor == players[3]){
        return `<div class="treasurePurpleOut"></div>`
    }else{
        return ""
    }
}

function drawOutBoard(){
    rewriteScores()
    let row = ""
    for(let i = 0; i <= 6; i++){
        row += `<tr id="${i}">`
        for(let j = 0; j <= 6; j++){
            row += `<td class="boardTiles" id="${j}">
                    <div class="tileDiv">
                        <img src = "${setImage(matrix[i][j])}" class="${setRoutes(matrix[i][j])}">
                        ${setHomes(matrix[i][j])}
                        ${setTreasures(matrix[i][j])}
                        ${setPlayers(matrix[i][j])}
                    </div>
                   </td>`
        }
        row += "</tr>"
    }
    table.innerHTML = row
}

function rewriteScores(){
    p1.innerHTML = "( " + players[0].howManyTreasures + " / " + prizesShow.value + " ) "
    p2.innerHTML = "( " + players[1].howManyTreasures + " / " + prizesShow.value + " ) "
    p3.innerHTML = "( " + players[2].howManyTreasures + " / " + prizesShow.value + " ) "
    p4.innerHTML = "( " + players[3].howManyTreasures + " / " + prizesShow.value + " ) "
}

//...........................................................................................................
//kezdő és leírás "oldal", kezdő gombok

window.onscroll = function () { window.scrollTo(0, 0); };

element2.style.visibility = 'hidden'
homeButton.disabled = true

rangePlayer.oninput = function (e) {
    playersShow.value = rangePlayer.value
}

rangePrize.oninput = function (e) {
    prizesShow.value = rangePrize.value
}

descButton.addEventListener('click', () => {
    descButton.disabled = true;
    homeButton.disabled = false;
    element.style.visibility = 'hidden'
    element2.style.visibility = 'visible'
    element3.style.visibility = 'hidden'
    /*let save = element3
    let save2 = element2
    element.replaceWith(element3)
    element.replaceWith(element2)
    element2 = save2
    element3 = save*/
    body.insertBefore(element2,element)
})

homeButton.addEventListener('click', () => {
    descButton.disabled = false;
    homeButton.disabled = true;
    element.style.visibility = 'visible'
    element2.style.visibility = 'hidden'
    element3.style.visibility = 'hidden'

    /*let save = element
    let save2 = element3
    element2.replaceWith(element3)
    element2.replaceWith(element)
    element = save
    element3 = save2*/
    body.insertBefore(element,element2)
})

startButton.addEventListener('click', () => {
    descButton.disabled = false;
    homeButton.disabled = false;
    element.style.visibility = 'hidden'
    element2.style.visibility = 'hidden'
    element3.style.visibility = 'visible'
    homeButtons.style.visibility = 'hidden'
    /*let save = element
    let save2 = element2
    element.replaceWith(element3)
    element = save*/
    //body.insertBefore(element3,element)
    if(element.parentElement.children[0] == element2){
        body.insertBefore(element3,element2)
    }else{
        body.insertBefore(element3,element)
    }
    refreshMatrix()
    setUpHomes()
    initializeFirstStep()
    setUpPlayerIcons()
    drawOutBoard()
    game()
})

rotateOutLeft.addEventListener('click', rotatetileLeft)
rotateOutRight.addEventListener('click', rotatetileRight)

exit.addEventListener('click', () => {
    location.reload();
})
