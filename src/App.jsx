// src/App.jsx
import './App.css';
import { useState } from 'react';
import ZombieFighter from './components/ZombieFighter/ZombieFighter';

const zombieFightersList = [
  { // 1
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  { // 2
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  { // 3
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  { // 4
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  { // 5
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  { // 6
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  { // 7
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  { // 8
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  { // 9
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  { // 10
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
];


const App = () => {
  function handleAddFighter(fighter) {
    if (money < fighter.price) {
      setPlentyOfMoney(false);
      console.log('Not enough money');
      return;
    };
    setPlentyOfMoney(true);
    setMoney(money - fighter.price);
    setTeam([...team, fighter]);
    setZombieFighters(zombieFighters.filter(el => el.id !== fighter.id));
  };

  function handleRemoveFighter(fighter) {
    setPlentyOfMoney(true);
    setMoney(money + fighter.price);
    setTeam(team.filter(el => el.id !== fighter.id));
    setZombieFighters([...zombieFighters, fighter]);
  };

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState(zombieFightersList);
  const totalStrength = team.reduce((sum, fighter) => sum += fighter.strength, 0);
  const totalAgility = team.reduce((sum, fighter) => sum += fighter.agility, 0);
  const [plentyOfMoney, setPlentyOfMoney] = useState(true);

  const redText = { color: 'red', };

  return (
    <div>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      {(team.length === 0) ? <p>Pick some team members!</p> :
        <ul>
          {team.map((fighter) => (
            <li key={fighter.id}>
              <ZombieFighter {...fighter} />
              <button type='button' onClick={() => handleRemoveFighter(fighter)}>Remove</button>
            </li>
          ))}
        </ul>
      }
      <h2>Money: {money}</h2>
      {(!plentyOfMoney) ? <p style={redText}>Not enough money!</p> : ''}
      <ul>
        {zombieFighters.map((fighter) => (
          <li key={fighter.id}>
            <ZombieFighter {...fighter} />
            <button type='button' onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App
