
// ex 4.03

class Team{

    name: string
    players : string[]

    constructor(name: string, players : string[]){
        this.name = name
        this.players = players
    }

    generateLineup(){
        return this.players.join(', ')
    }
}



const astrosPlayers = ["Altuve", "Bregman", "Correa", "Springer"];
const astros = new Team("Astros", astrosPlayers);
console.log(astros.generateLineup());
console.log(astros.name);

const blueJaysPlayers = ["Vlad", "Smoak", "Tellez", "Sogard"];
const blueJays = new Team("Blue Jays", blueJaysPlayers);
console.log(blueJays.generateLineup());
console.log(blueJays.name);

//ex 4.04

class Team2{

    name: string
    players : string[]

    constructor({name, players} : ITeam){
        this.name = name
        this.players = players
    }

    generateLineup(){
        return this.players.join(', ')
    }
}


interface ITeam {
    name: string;
    players: string[];
}

const astros2 = new Team2({
players: astrosPlayers,
name: "Astros",
});
console.log(astros2.generateLineup());
console.log(astros2.name);

const blueJays2 = new Team2({
name: "Blue Jays",
players: blueJaysPlayers
});
console.log(blueJays2.generateLineup());
console.log(blueJays2.name);

//ex 4.05

class Team3 {

    players: string[]

    constructor(players: string[]) {
        this.players = players
    }

generateLineup(): string {
    const playersWithOrderNumber = this.players.map((player, idx) => {
        return `<div>${idx + 1} - ${player}</div>`;
    });
    return playersWithOrderNumber.join("");
        }
}

const astros3 = new Team3(astrosPlayers)
console.log(astros3.generateLineup())

const blueJays3 = new Team3(blueJaysPlayers)
console.log(blueJays3.generateLineup())

//ex4.06

class Scoreboard {

    homeTeam: Team
    awayTeam: Team
    date: string

    constructor (args: IScoreboard){
        this.homeTeam = args.homeTeam
        this.awayTeam = args.awayTeam
        this.date = args.date
    }

    scoreboardHtml(): string{
        return  `
            <h1>${this.date}</h1>
            <h2>${this.homeTeam.name}</h2>
            <div>${this.homeTeam.generateLineup()}</div>
            <h2>${this.awayTeam.name}</h2>
            <div>${this.awayTeam.generateLineup()}</div>
            `;
    }
}

class Team4 {

    name: string
    players: string[]

    constructor( name: string, players: string[] ){
        this.name = name;
        this.players = players 
    }

generateLineup(): string {

    const playersWithOrderNumber = this.players.map((player, idx) => {
        return `<div>${idx + 1} - ${player}</div>`;
    });

    return playersWithOrderNumber.join("");
        }
}

interface IScoreboard {
    homeTeam: Team;
    awayTeam: Team;
    date:string
}

const astros4 = new Team4('astros',astrosPlayers);

const blueJays4 = new Team4('blueJays',blueJaysPlayers)

const todaysGame = new Scoreboard({
    date: '5/24/19',
    homeTeam: astros4,
    awayTeam: blueJays4
})

console.log(todaysGame.scoreboardHtml())