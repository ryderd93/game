function Unit(className, stats, skills){
  this.className = className;
  this.stats = stats;
  this.skills = skills;
  this.isAlive = true;
  
  this.takeDamage = function(damage){
    this.stats.currentHealth -= damage;
  };
  this.changeStat = function(stat, newVal){
    this.stats[stat] = newVal;
  }
}

function Juggernaut(unitName){
  Unit.call(this, "Juggernaut", this.stats, this.skills);
  
  // Private properties
  this.stats = {
    maxHealth: 35,
    currentHealth: 35,
    speed: 2,
    wits: 3,
    damage: {
      min: 6,
      max: 10
    },
    critical: 5,
    damageResistance: 0,
    dodge: 5
  };
  this.skills = 
    [
    {
      name: "Takedown",
      range: "Melee",
      rank: [0, 0, 1, 1],
      target: [1, 1, 0, 0],
      damageMod: 1.0,
      accuracy: 85,
      critMod: 0
    },
    {
      name: "Hammerfist",
      range: "Melee",
      rank: [0, 0, 1, 1],
      target: [1, 1, 0, 0],
      damageMod: 1.25,
      accuracy: 65,
      critMod: 1
    }
    ];
  
  // Public properties
  this.unitName = unitName;
  
  // Public methods
  
};

function Brute(unitName){
  Unit.call(this, "Brute", this.stats, this.skills);
  
  
  this.unitName = unitName;
  this.stats = {
    maxHealth: 20,
    currentHealth: 20,
    speed: 3,
    wits: 2,
    damage: {
      min: 5,
      max: 8
    },
    critical: 5,
    damageResistance: 0.05,
    dodge: 2.5
  };
  this.skills = 
    [
    {
      name: "Club 'Em",
      range: "Melee",
      rank: [1, 1, 0, 0],
      target: [0, 0, 1, 1],
      damageMod: 1.0,
      accuracy: 85
    }
  ]
};

function getRNG(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

function main(){
  // Unit variables
  var player1 = new Juggernaut("Juggernaut1");
  var player2 = new Juggernaut("Juggernaut2");
  var enemy1 = new Brute("Brute1");
  var enemy2 = new Brute("Brute2");
  
  // Array for both squads
  var playerSquad = [player1, player2];
  var enemySquad = [enemy1, enemy2];
  
  // Make an array for all units by adding the two squad arrays together
  var participants = playerSquad.concat(enemySquad);
  
}
