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
      let positionNow  = position;
      for (let i = 0; i < allowedTypes.length; i ++) {
      console.log(positionNow)  
      let persona = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
      persona.position = positionNow; 
     
      yield persona;
      positionNow ++ ;
  };
  }
} 



export function generateTeam(allowedTypes, maxLevel, characterCount, position) {
  let persons = [];
  let person = characterGenerator(allowedTypes, maxLevel, position);
  for (let i = 1; i <= characterCount; i ++) {
    persons.push(person.next().value)
  }
  console.log(persons);
  return persons;
}
