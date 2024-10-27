import Logo from '../../assets/images/logo.png'
import Coin from '../../assets/images/coin.png'
const Header = ({money}) => {
    
    return (
        <header className='w-10/12 mx-auto  mt-14 sticky top-0 backdrop-blur-lg'>
            <div className='flex justify-between items-center '>
                <img src={Logo} alt="This is dream_11 Logo" />
            <div className='flex '>
                <a className='px-4 mr-1 rounded-2xl py-2 font-light bg-white text-gray-900' href="">Home</a>
                <a className='px-4 mr-1 rounded-2xl py-2 font-light bg-white text-gray-900' href="">Fixtures</a>
                <a className='px-4 mr-1 rounded-2xl py-2 font-light bg-white text-gray-900' href="">Teams</a>
                <a className='px-4 mr-1 rounded-2xl py-2 font-light bg-white text-gray-900' href="">Schedules</a>
                <div className='flex justify-center items-center px-4 bg-white border rounded-xl border-gray-300'>
                    <a className='font-bold' href="">$ {money} Coin</a>
                    <img className='w-5 h-5 ml-1' src={Coin} alt="This is Coin image" />
                </div>
            </div>
            </div>
            
        </header>
    );
};

export default Header;