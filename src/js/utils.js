export function calcTileType(index, boardSize) {
  // TODO: write logic here
  // if (index === 0) return "center";
  if (index === 0) return "top-left";
  if (index > 0 && index < 7) return "top";
  if (index === 7 ) return "top-right";
  if (index % boardSize === 0 && index < 56) return "left";
  if (index === 56) return "bottom-left";
  if (index > 56 && index < 63) return "bottom";
  if (index === 63) return "bottom-right";
  if ((index + 1) % 8 === 0) return "right";
  return "center";
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
