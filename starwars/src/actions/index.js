import swapi from "../api/swapi";

export const fetchCharacters = () => async (dispatch) => {
  const { data } = await swapi.get("/people");
  console.log(data.results);

  dispatch({ type: "FETCH_CHARACTERS", payload: data.results });
};
