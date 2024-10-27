import icon from '../../assets/images/contact icon.png';
import flag from '../../assets/images/flags.png';

const Player = ({ player, handleSelectedPlayer }) => {
    const {
        name, nationality, position, batting_role, bowling_role, image_url, price
    } = player;

    return (
        <div className="shadow-xl rounded-xl p-4">
            <img className="w-full h-[250px] object-cover rounded-xl" src={image_url} alt="#Cricketer" />
            <div className='flex justify-start items-center'>
                <img className='size-8 font-bold mr-4 my-5' src={icon} alt="" />
                <h3 className='text-xl font-semibold text-gray-700'>{name}</h3>
            </div>
            <div className='flex justify-between items-center border-b pb-4'>
                <div className='flex justify-start items-center'>
                    <img className='text-gray-400 size-6 mr-4' src={flag} alt="" />
                    <p className='text-gray-400'>{nationality}</p>
                </div>
                <p className='text-sm text-gray-500 rounded-lg px-3 py-2 bg-gray-200'>{position}</p>
            </div>
            <p className="text-lg font-bold">Rating</p>
            <div className='grid grid-cols-2 gap-6 my-5'>
                <p className='text-sm font-medium'>{batting_role}</p>
                <p className='text-sm text-gray-400 ml-4'>{bowling_role === 'None' ? 'Not Practiced' : bowling_role}</p>
                <p className='text-[16px] font-semibold '>Price: ${price}</p>
                <button 
                  onClick={() => handleSelectedPlayer(player)} 
                  className='px-1 py-2 bg-gray-200 rounded-lg text-sm'
                >
                  Choose Player
                </button>
            </div>
        </div>
    );
};

export default Player;
