const gameObject = () => {
  return {
    home: {
      teamName: "Brookleyn Nets",
      colors: "Black, White",
      players: {
        "Alan Anderson": {
          Number: 0,
          Shoe: 16,
          Points: 22,
          Rebounds: 12,
          Assists: 12,
          Steals: 3,
          Blocks: 1,
          "Slam Dunks": 1
        },
        "Reggie Evans": {
          Number: 30,
          Shoe: 14,
          Points: 12,
          Rebounds: 12,
          Assists: 12,
          Steals: 12,
          Blocks: 12,
          "Slam Dunks": 7
        },
        "Brook Lopez": {
          Number: 11,
          Shoe: 17,
          Points: 17,
          Rebounds: 19,
          Assists: 10,
          Steals: 3,
          Blocks: 1,
          "Slam Dunks": 15
        },
        "Mason Plumlee": {
          Number: 1,
          Shoe: 19,
          Points: 26,
          Rebounds: 12,
          Assists: 6,
          Steals: 3,
          Blocks: 8,
          "Slam Dunks": 5
        },
        "Jason Terry": {
          Number: 31,
          Shoe: 15,
          Points: 19,
          Rebounds: 2,
          Assists: 2,
          Steals: 4,
          Blocks: 11,
          "Slam Dunks": 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: "Turquoise, Purple",
      players: {
        "Jeff Adrien": {
          Number: 4,
          Shoe: 18,
          Points: 10,
          Rebounds: 1,
          Assists: 1,
          Steals: 2,
          Blocks: 7,
          "Slam Dunks": 2
        },
        "Bismak Biyombo": {
          Number: 0,
          Shoe: 16,
          Points: 12,
          Rebounds: 4,
          Assists: 7,
          Steals: 7,
          Blocks: 15,
          "Slam Dunks": 10
        },
        "DeSagna Diop": {
          Number: 2,
          Shoe: 14,
          Points: 24,
          Rebounds: 12,
          Assists: 12,
          Steals: 4,
          Blocks: 5,
          "Slam Dunks": 5
        },
        "Ben Gordon": {
          Number: 8,
          Shoe: 15,
          Points: 33,
          Rebounds: 3,
          Assists: 2,
          Steals: 1,
          Blocks: 1,
          "Slam Dunks": 0
        },
        "Brendan Haywood": {
          Number: 33,
          Shoe: 15,
          Points: 6,
          Rebounds: 12,
          Assists: 12,
          Steals: 22,
          Blocks: 5,
          "Slam Dunks": 12
        }
      }
    }
  }
}

const playerSearch = playerName => {
  const game = gameObject();
  const playerIn = team => game[team].players[playerName];
  if (playerIn("home")) {
    return playerIn("home");
  } else {
    return playerIn("away");
  }
}

const teamSearch = teamName => {
  const game = gameObject();
  const teamIs = team => game[team].teamName === teamName;
  if (teamIs("home")) {
    return game.home;
  } else {
    return game.away;
  }
}

const allPlayers = () => {
  const game = gameObject();
  const teams = teamNames();
  const playersTeam1 = teamSearch(teams[0]).players;
  const playersTeam2 = teamSearch(teams[1]).players;
  return { ...playersTeam1, ...playersTeam2 };
}

const numPointsScored = playerName => {
  return playerSearch(playerName).Points;
}

const shoeSize = playerName => {
  return playerSearch(playerName).Shoe;
}

const teamColors = teamName => {
  return teamSearch(teamName).colors;
}

const teamNames = () => {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

const playerNumbers = teamName => {
  const game = gameObject();
  const players = teamSearch(teamName).players;
  const playerNums = [];
  for (let player in players) {
    let num = players[player].Number;
    playerNums.push(num);
  }
  return playerNums;
}

const playerStats = playerName => {
  return playerSearch(playerName);
}

//----------------------------------
// BONUS QUESTIONS

const mostPointsScored = () => {
  const players = allPlayers();
  let highestScore = 0;
  let playerCard = {};
  for (let player in players) {
    let playerPoints = players[player].Points;
    if (playerPoints > highestScore) {
      highestScore = playerPoints;
      playerCard = { [player]: players[player] };
    }
  }
  return playerCard;
}

const winningTeam = () => {
  const game = gameObject();
  const teams = teamNames();
  const playersTeam1 = teamSearch(teams[0]).players;
  const playersTeam2 = teamSearch(teams[1]).players;
  const sumLoop = teamPlayersArray => {
    let teamScore = 0;
    for (let player in teamPlayersArray) {
      teamScore += teamPlayersArray[player].Points;
    }
    return teamScore;
  }
  const team1Score = sumLoop(playersTeam1);
  const team2Score = sumLoop(playersTeam2);
  if (team1Score > team2Score) {
    return `${teams[0]} is winning ${team1Score} to ${team2Score}!`
  } else if (team2Score > team1Score) {
    return `${teams[1]} is winning ${team2Score} to ${team1Score}!`
  } else {
    return "The teams are currently neck in neck!"
  }
}

const playerWithLongestName = () => {
  const players = allPlayers();
  longestName = "";
  for (let player in players) {
    if (player.length > longestName.length) {
      longestName = player;
    }
  }
  return longestName;
}

const doesLongNameStealATon = () => {
  const longestName = playerWithLongestName();
  const players = allPlayers();
  let mostSteals = 0;
  let playerWithMostSteals = "";
  for (let player in players) {
    let playerSteals = players[player].Steals;
    if (playerSteals > mostSteals) {
      mostSteals = playerSteals;
      playerWithMostSteals = player;
    }
  }
  if (playerWithMostSteals === longestName) {
    return true;
  } else {
    return false;
  }
}

console.log(playerWithLongestName());
console.log(doesLongNameStealATon());
