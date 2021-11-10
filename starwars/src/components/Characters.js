import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../actions";

const Characters = ({ characters, fetchCharacters }) => {
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <div class="flex flex-wrap justify-center h-auto bg-purple-50 p-4">
      {characters.map((character) => (
        <div class="bg-blue-200 h-auto w-1/5 p-6 rounded transition delay-150 duration-300 ease-in-out m-5 hover:bg-blue-100 hover:shadow-lg">
          <h3 class="text-center text-xl font-medium text-blue-500 mb-6">
            {character.name}
          </h3>
          <ul class="list-disc px-4">
            <li class="text-lg text-indigo-500 hover:text-indigo-600 cursor-pointer">
              Height: {character.height} CMs
            </li>
            <li class="text-lg text-indigo-500 hover:text-indigo-600 cursor-pointer">
              Weight: {character.mass} Kg
            </li>
            <li class="text-lg text-indigo-500 hover:text-indigo-600 cursor-pointer">
              Hair Color: {character.hair_color}
            </li>
            <li class="text-lg text-indigo-500 hover:text-indigo-600 cursor-pointer">
              Skin Color: {character.skin_color}
            </li>
            <li class="text-lg text-indigo-500 hover:text-indigo-600 cursor-pointer">
              Eye color: {character.eye_color}
            </li>
            <li class="text-lg text-indigo-500 hover:text-indigo-600 cursor-pointer">
              Birth Year: {character.birth_year}
            </li>
            <li class="text-lg text-indigo-500 hover:text-indigo-600 cursor-pointer">
              Gender: {character.gender}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { characters: state.characters };
};

export default connect(mapStateToProps, { fetchCharacters })(Characters);

// requirements
// name, height, mass, hair color, skin color, eye color, birth year, gender
