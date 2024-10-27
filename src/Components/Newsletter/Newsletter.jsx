import bg_img from '../../assets/images/bg-shadow.png'
const Newsletter = () => {
    const harunKiStyle = {
        backgroundImage: `url(${bg_img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    return (
        <div className="w-9/12 mx-auto relative top-48 z-10">
            <div className="border-2 rounded-xl">
                <div style={harunKiStyle} className="h-80 bg-white flex justify-center items-center flex-col m-3 rounded-xl">
                    <h2 className='text-2xl font-semibold'>Subscribe to our Newsletter</h2>
                    <p className='text-xl text-gray-500 mt-4'>Get the latest updates and news right in your inbox!</p>
                    <div className='mt-6'>
                        <input className='p-4 mr-4 rounded-lg border-2 outline-none' type="text" name="" id="" placeholder="enter your email" />
                        <button className='p-4 text-gray-950 rounded-lg bg-gradient-to-r from-pink-400 to-yellow-400'>Subscribe</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Newsletter;