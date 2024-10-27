import banner from '../../assets/images/banner-main.png';
import bg_img from '../../assets/images/bg-shadow.png';
const Banner = ({claimMoneyForPlayerAdd , notify }) => {
    const harunKiStyle = {
        backgroundImage: `url(${bg_img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    };
    const allFunction=()=>{
        notify();
        claimMoneyForPlayerAdd();
    }
    return (
        <div style={harunKiStyle} className='bg-black text-white py-20 flex justify-center flex-col items-center rounded-2xl my-10'>
            <img className='mt-4' src={banner} alt="#This is Banner image" />
            <div className='text-center leading-10'>
                <h1 className="text-3xl font-bold mt-6">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-2xl font-semibold text-gray-400 mt-3'>Beyond Boundaries Beyond Limits</p>
                <div className='flex justify-center items-center'>
                    <div className='mt-3 w-56 h-[70px] pb-4 rounded-2xl border-2 border-yellow-300'>
                        <button onClick={allFunction} className='w-52 h-[55px] text-lg font-bold mt-[5px] p-4 rounded-2xl text-black bg-yellow-300'>Claim Free Credit</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;