const ZombieFighter = (fighter) => {
  const { id, image, name, price, strength, agility } = fighter;
  // console.log(fighter)
  // console.log('*')
  return (
    <li key={id}>
      <h3>Name: {name}</h3>
      <p>Cost: {price}</p>
      <p>Strength: {strength}</p>
      <p>Agility: {agility}</p>
      <img src={image} alt="Zombie Fighter" />
    </li>
  );
};

export default ZombieFighter;
