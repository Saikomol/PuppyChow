export function Player({ player, onClick, onDelete }) {
  return (
    <tr key={player.id}>
      <td>
        {/* becareful this line retype  */}
        <button className="playerButton" onClick={() => onClick(player.id)}>View Player</button>
        <button className="playerDeleteButton" onClick={() => onDelete(player.id)}>Delete Player</button>
      </td>
      <td>
        <img className="playerImg" src={player.imageUrl} alt={player.name} />
      </td>

      <td>{player.name}</td>
      <td>{player.breed}</td>

    </tr>
  );
}
