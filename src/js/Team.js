import Bowman from "./Characters/Bowman";
import Daemon from "./Characters/Daemon";
import Magician from "./Characters/Magician";
import Swordsman from "./Characters/Swordsman";
import Undead from "./Characters/Undead";
import Vampire from "./Characters/Vampire";
import { generateTeam } from "./generators";

export default class Team {
    constructor(theme) {
        this.bowman = new Bowman();
        this.swordsman = new Swordsman();
        this.daemon = new Daemon();
        this.magician = new Magician();
        this.undead = new Undead();
        this.vampire = new Vampire();
        this.theme = theme;
        this.maxlevel = 1; 
    }

    getTeam() {
        if (this.theme === "prairie") {
            let persons = [];

            persons.push(...generateTeam([this.bowman, this.swordsman], 1, 2, 56)); 
            persons.push(...generateTeam([this.bowman, this.swordsman, this.daemon, this.magician, this.undead, this.vampire], 1, 2, 62))
            return persons;
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
