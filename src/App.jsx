import { useState, useEffect } from "react";
import { getPlayers, getPlayer, deletePlayers, createPlayers } from "./Api"; //we suse js. instate of jsx.with defult so we can call the function that we want many time in the component
import "./App.css";
import { Player } from "./component/Player";
import { PlayerDetails } from "./component/PlayerDetails";

function App() {
  const [players, setPlayers] = useState([]); // cannot use nul with map, use array property with [] defualt array, use object to object
  const [player, setPlayer] = useState({}); //for object{}
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // getPlayers().then(players => setPuppies(players))
    getPlayers().then((players) => {
      setPlayers(players);
    });
  }, []);
  console.log(players);
  // useEffect(()=>{//2022 fetch with .then
  //   fetch("https://fsa-player-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players").then(respones => respones.json()).then(result =>{
  //     console.log(result.data);
  //   })
  // })

  // async function createPlayer(){//async
  // const newPlayer = await createPlayers(
  //   {name: 'Rufus',
  //   breed: 'Irish Setter',});
  //   console.log(newPlayer);
  // }
  // createPlayer()
  // useEffect(()=>{//.then
  // createPlayers({
  //   name: 'Rufus',
  //   breed: 'Irish Setter',
  // }).then(newPlayers => {
  //   console.log(newPlayers)
  // });
  // },[])

  // useEffect(() => {
  //   getPlayers().then((players) => console.log(players));//shotcut using promiss call
  // async function getAllPlayer() {// use async function call
  //   const players = await getPlayers();
  //   console.log(players);
  // }
  // getAllPlayer();
  // }, []);
  function handlePlayerClick(playerId) {
    getPlayer(playerId).then(setPlayer);
  }

  function handlePlayerDelete(playerId) {
    deletePlayers(playerId).then(() => {
      getPlayers().then((players) => {
        setPlayers(players);
      });
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newPlayer = Object.fromEntries(formData.entries());

    createPlayers(newPlayer).then(() => {
      getPlayers().then((players) => {
        setPlayers(players);
      });
    });
  }

  return (
    <div onClick={() => setPlayer({})}>
      <h1>Pupple Bowl</h1>

      <PlayerDetails player={player} />
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th colSpan="2"> Register Puppy</th>
            </tr>
          </thead>
          <tbody></tbody>
          <tr>
            <td>
              <label htmlFor="name">name : </label>{" "}
            </td>
            <td>
              <input type="text" name="name" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="breed">breed :</label>
            </td>
            <td>
              <input type="text" name="breed" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="status">Status : </label>
            </td>
            <td>
              <input type="text" name="status" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="imageUrl">Picture Url : </label>
            </td>
            <td>
              <input type="url" name="imageUrl" placeholder="Enter image URL" />
            </td>
          </tr>
          <td colSpan="2">
            <button type="submit">Add Player</button>
          </td>
        </table>{" "}
        <br />
      </form>
      <table>
        <thead>
          <tr>
            <th>Detail</th>
            <th>Image</th>
            <th>Name</th>
            <th>Breed</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => {
            return (
              <Player
                key={player.id}
                player={player}
                onClick={handlePlayerClick}
                onDelete={handlePlayerDelete}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
