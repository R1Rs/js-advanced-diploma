import Bowman from "./Characters/Bowman";
import Daemon from "./Characters/Daemon";
import Magician from "./Characters/Magician";
import Swordsman from "./Characters/Swordsman";
import Undead from "./Characters/Undead";
import Vampire from "./Characters/Vampire";
import { generateTeam } from "./generators";

export default class Team {
    constructor(theme) {
        this.bowman = new Bowman(this.maxlevel);
        this.swordsman = new Swordsman(this.maxlevel);
        this.daemon = new Daemon(this.maxlevel);
        this.magician = new Magician(this.maxlevel);
        this.undead = new Undead(this.maxlevel);
        this.vampire = new Vampire(this.maxlevel);
        this.theme = theme;
        this.maxlevel = 1; 
        this.personsPlayer = [];
        this.personsComp = [];
        this.persons = [];
    }

    getTeam() {
        if (this.theme === "prairie") {
            this.personsPlayer.push(...generateTeam([this.bowman, this.swordsman], this.maxlevel, 2, 56)); 
            this.personsComp.push(...generateTeam([this.bowman, this.swordsman, this.daemon, this.magician, this.undead, this.vampire], this.maxlevel, 2, 62))
            this.persons = [...this.personsPlayer, ...this.personsComp];
            // debugger;
            return this.persons;
        }
        if (this.theme === "desert") {
            this.persons.forEach( pers => {
                if (pers.health > 0) {
                    pers.health = 50;
                    pers.level += 1;
                }
            });


        }
    }
 
    getLevel() {
        if (this.theme === "prairie") {
            return this.maxlevel;
        };
        if (this.theme === "desert") {
            return this.maxlevel = 2;
        };
        if (this.theme === "arctic") {
            return this.maxlevel = 3;
        };
        if (this.theme === "mountain") {
            return this.maxlevel = 4;
        }
    }
}
