import { useContext } from "react";
import { MonsterContext } from "./MonsterState";
import React, { useState } from "react";

const Monster = () => {
  // Destructuring för att extrahera monsters och houses från monsterState
  const { monsters, houses } = useContext(MonsterContext);

  // State för att spåra det valda alternativet i dropdown-menyn
  const [filterOption, setFilterOption] = useState("all");
  // Hantera ändringar i dropdown-menyn
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOption(event.target.value);
  };

  // Filtrera monster baserat på det valda alternativet
  let filteredMonsters = monsters;
  if (filterOption === "withClaws") {
    filteredMonsters = monsters.filter((monster) => monster.claws);
  } else if (filterOption === "withoutClaws") {
    filteredMonsters = monsters.filter((monster) => !monster.claws);
  }

  // Beräkna totalt antal tentaklar över alla monster
  const totalTentacles = monsters.reduce(
    (acc, monster) => acc + monster.tentacles,
    0
  );
  // filtrera på alla monster som har klor
  const totalMonstersWithClaws = monsters.filter(
    (monster) => monster.claws
  ).length;

  return (
    <div>
      <h1>Monsters & Houses</h1>
      <p>Number of Monsters: {monsters.length}</p>
      <p>Number of Houses: {houses.length}</p>
      <p>Total number of tentacles: {totalTentacles}</p>
      <p>Total number of monsters with claws: {totalMonstersWithClaws}</p>

      {/* Dropdown för att välja filteralternativ */}
      <label htmlFor="filter">Filter monsters:</label>
      <select id="filter" value={filterOption} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="withClaws">With Claws</option>
        <option value="withoutClaws">Without Claws</option>
      </select>

      <h2>Monsters</h2>
      {filteredMonsters.map((monster, index) => (
        <div key={index}>
          <h3>{monster.name}</h3>
          <p>Eyes: {monster.eyes}</p>
          <p>Tentacles: {monster.tentacles}</p>
          <p>Claws: {monster.claws ? "Yes" : "No"}</p>
          <h4>Hobbies:</h4>
          <ul>
            {monster.hobbies.map((hobby, index) => (
              <li key={index}>
                {hobby.name} (Level {hobby.level})
              </li>
            ))}
          </ul>
        </div>
      ))}
      <h2>Houses</h2>
      {houses.map((house, index) => (
        <div key={index}>
          <h3>{house.name}</h3>
          <p>Floors: {house.floors}</p>
          <p>Color: {house.color}</p>
        </div>
      ))}
    </div>
  );
};

export default Monster;
