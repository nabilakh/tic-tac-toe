import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  const [inputName, setInputName] = useState(playerName);

  function onClickEdit() {
    setIsEditing((editing) => !editing);
  }

  function onChangeNames(event) {
    setInputName(event.target.value);
  }

  function onSavePlayer() {
    setPlayerName(inputName);
    setIsEditing(false);
    isEditing && onChangeName(symbol, inputName);
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {isEditing ? (
          <input
            value={inputName}
            onChange={onChangeNames}
            type="text"
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      {isEditing ? (
        <>
          <button onClick={inputName !== "" && onSavePlayer}>Save</button>
          <button onClick={onClickEdit}>Cancel</button>
        </>
      ) : (
        <button onClick={onClickEdit}>Edit</button>
      )}
    </li>
  );
}
