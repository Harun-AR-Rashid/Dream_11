import { MdDeleteForever } from "react-icons/md";
const Selected = ({ selectedPlayer, handleRemovePlayer, onAddMore }) => {
  return (
    <div>
      <div className="">
        {selectedPlayer.map((player) => (
          <div key={player.name} className="flex justify-between items-center pr-4 shadow-lg" >
            <div className="flex items-center p-4 rounded-lg">
              <div>
                <img className="w-[250px] h-[160px] object-cover rounded-lg" src={player.image_url} alt={player.name} />
              </div>
              <div className="ml-4 leading-6">
                <h3 className="text-lg font-semibold">{player.name}</h3>
                <p>Batting: {player.batting_role}</p>
                <p>Bowling: {player.bowling_role}</p>
                <p>Price: ${player.price}</p>
              </div>
            </div>
            <MdDeleteForever onClick={() => handleRemovePlayer(player)} size={24} color="red" />
          </div>
        ))}
      </div>
      <button onClick={onAddMore} className="mt-8 p-2 border bg-transparent text-black rounded">
        Add More Players
      </button>
    </div>
  );
};

export default Selected;
