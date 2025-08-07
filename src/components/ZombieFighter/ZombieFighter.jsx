const ZombieFighter = (fighter) => {
  const { img, name, price, strength, agility } = fighter;
  // console.log(fighter)
  // console.log('*')
  return (
    <>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Strength: {strength}</p>
      <p>Agility: {agility}</p>
    </>
  );
};

export default ZombieFighter;
