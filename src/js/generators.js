import Team from "./Team";

/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel, position) {
  if (maxLevel === 1) {
      for (let i = 0; i < allowedTypes.length; i ++){
      let persona = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
      let positionNow ;
      if (position === 56) {
        persona.position = Math.abs(56 - (Math.floor(Math.random() * 10) * 8)) + i;
        console.log(position);
      } else if (position === 62) {
        persona.position = Math.abs(Math.ceil((6 + ((Math.floor(Math.random() * 10)) * 8 - 56)))) + i;
        console.log(persona.position);
      }

      // persona.position = position + i;
      // console.log(JSON.stringify(persona));
      console.log(JSON.parse(JSON.stringify(persona)));
      // yield persona;
      yield JSON.parse(JSON.stringify(persona));
  };
  }
}




export function generateTeam(allowedTypes, maxLevel, characterCount, position) {
  // debugger;
  let person = characterGenerator(allowedTypes, maxLevel, position);
  let persons = [];

  for (let i = 0; i < characterCount; i ++) {
    
    let value = person.next().value;
    persons.push(value);  
  }
  return persons;
}
