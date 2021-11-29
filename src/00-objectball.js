function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turqouise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        } 

        }
    }

//assigns players to their own object for name lookup
function playerList() {
    let awayPlayers = gameObject().away.players
    let homePlayers = gameObject().home.players
    return Object.assign(awayPlayers, homePlayers)
}


//assigns home team values to it's own variable
function homeTeam(){
    return gameObject().home
}

//assigns away team values to it's own variable
function awayTeam(){
    return gameObject().away
}

//determines home or away team based on lookup
function homeOrAway(name){
    if (awayTeam().teamName === name){
        return awayTeam()
    } else if (homeTeam().teamName === name){
        return homeTeam()
    } else {
        return "ERROR: Invalid Team Name"
    }
}
// Finds points scored for a specific player by name lookup
function numPointsScored(player){
    const players = playerList()
    for (let player in players) {
        if (player === player) {
            return players[playerKey].points
        }
    }
}

// Finds Player Shoe Size via name lookup
function shoeSize(player){
    const players = playerList()
    for (let playerKey in players){
        if (playerKey === player){
            return players[playerKey].shoe
        }
    }
}

// returns array of team's colors if team name matches
function teamColors(name){
    const team = homeOrAway(name)
    return team.colors    
}

// returns array of team names
function teamNames(){
    let nameArray = []
    for (let gameKey in gameObject()){
        const teamObj = gameObject()[gameKey]
        for (teamKey in teamObj) {
            if (teamKey === 'teamName'){
                nameArray.push(teamObj.teamName)
            }
        }
    }
    return nameArray
}

// returns array of player numbers on a certain team
function playerNumbers(name){
    jerseyNums = []
    teamPlayers = homeOrAway(name).players
    Object.values(teamPlayers).forEach(player => {
        jerseyNums.push(player.number)
    })
    return jerseyNums
}

//returns a specific player's stats
function playerStats(name){
    for (player in playerList()){
        if (player === name){
            return playerList()[name]
        }
    }
}

//finds size of biggest shoe
function biggestShoe(){
    shoes = []
    for (player in playerList()){
        shoes.push(playerList()[player].shoe)
    }
    return Math.max(...shoes)
}

function bigShoeRebounds(){
    const shoeRef = biggestShoe()
    for (player in playerList()){
        if (playerList()[player].shoe === shoeRef){
            return playerList()[player].rebounds
        }
    }    
}