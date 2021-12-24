import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './UserProfile.css';
import { baseUrl } from '../utils/api';

export default function UserProfile() {
  const [playerData, setPlayerData] = useState(null);

  const params = useParams();
  const playerId = params.playerId;

  useEffect(loadData, [playerId]);

  function loadData() {
    fetch(`${baseUrl}/players/${playerId}`)
      .then((res) => res.json())
      .then(setPlayerData);
  }

  return (
    playerData && (
      <main className="player-info d-flex justify-content-center">
        <div className="card">
          <img
            src="https://i.imgur.com/4YKxVQj.png"
            className="card-img-top"
            alt="albion male character"
          />
          <div className="card-body">
            <h3 className="card-title">Player: {playerData.Name}</h3>
            <h5 className="card-text">Guild: {playerData.GuildName}</h5>
            <h5 className="card-text">Alliance: {playerData.AllianceName}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Kill Fame: {playerData.KillFame}
            </li>
            <li className="list-group-item">
              Death Fame: {playerData.DeathFame}
            </li>
            <li className="list-group-item">
              Fame Ratio: {playerData.FameRatio}
            </li>
          </ul>
          <div className="card-body">
            <Link
              className="player-kills-link me-2"
              to={{
                pathname: `/playerKills/${playerId}`,
                state: { name: playerData.Name },
              }}
            >
              Recent Kills
            </Link>
            <Link
              to={{
                pathname: `/playerDeaths/${playerId}`,
                state: { name: playerData.Name },
              }}
            >
              Recent Deaths
            </Link>
          </div>
        </div>
      </main>
    )
  );
}
