const Available = ({ isActive, handleToggleButton, selectedPlayer }) => {
    return (
        <div className="flex justify-between items-center my-4">
          <h2 className="text-2xl font-bold">
            {isActive.available ? "Available Players" : "Selected Players"}
          </h2>
          <div>
            <button
              onClick={() => handleToggleButton('available')}
              className={`${isActive.available ? 'btn active' : 'btn'}`}
            >
              Available
            </button>
            <button
              onClick={() => handleToggleButton('selected')}
              className={`${!isActive.available ? 'btn active' : 'btn'}`}
            >
              Selected ({selectedPlayer.length})
            </button>
          </div>
        </div>
    );
};

export default Available;
