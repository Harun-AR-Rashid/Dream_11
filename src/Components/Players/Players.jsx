import { useEffect, useState } from "react";
import Player from "../Player/Player";
import './Players.css';

const Players = ({ selectedPlayer, handleSelectedPlayer }) => {
    const [players, setPlayers] = useState([]);
    
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => {
                setPlayers(data);
            });
    }, []);

    return (
        <div className="mt-5 grid grid-cols-3 gap-8">
            {players.map((player, idx) => (
                <Player 
                  key={idx} 
                  player={player} 
                  selectedPlayer={selectedPlayer} 
                  handleSelectedPlayer={handleSelectedPlayer} 
                />
            ))}
        </div>
    );
};

export default Players;
