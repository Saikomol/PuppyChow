export function PlayerDetails({ player }) {
  return (
    <dialog className="dialog" open={player.id}>
      playerID :{player.id}
      <br />
      player name :{player.name} 
      <br />
      player breed :{player.breed}
      <br />
      player status :{player.status}
      <br />
      <img className="playerImg" src={player.imageUrl} alt={player.name} />
    </dialog>
  );
}
