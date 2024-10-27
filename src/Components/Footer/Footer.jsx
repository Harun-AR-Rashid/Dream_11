import Footer_img from '../../assets/images/logo-footer.png';
const Footer = () => {
    return (
        <div className="bg-black w-full h-[750px] absolute">
            <div className='w-10/12 mx-auto flex justify-center items-center'>
                <img className='mt-60' src={Footer_img} alt="" />
            </div>
            <div className='w-10/12 mx-auto grid grid-cols-3 gap-24 my-16 '>
                <div className=''>
                    <h3 className='text-lg text-white'>About Us</h3>

                    <p className='text-sm text-gray-500 pr-24 mt-4'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div className=''>
                    <h3 className='text-lg text-white'>Quick Links</h3>
                    <div className='text-sm text-gray-500 mt-4'>
                        <li>Home</li>
                        <li>Service</li>
                        <li>About</li>
                        <li>Contact</li>
                    </div>

                </div>
                <div className=''>
                    <h3 className='text-lg text-white'>Subscribe</h3>

                    <div className='text-sm text-gray-500 mt-4'>
                        <p className='text-sm text-gray-500 pr-16'>Subscribe to our newsletter for the latest updates.</p>
                        <div className='mt-4'>
                            <input className='p-2 rounded-l-lg' type="text" name="" id="" placeholder="enter your email" />
                            <button className='p-2 text-gray-950 rounded-r-lg bg-gradient-to-r from-yellow-400 to-pink-400'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='flex justify-center items-center mt-10'>
                <p className='text-gray-500 text-sm'>@2024 Smash_Programming All Rights Reserved by @harashid.</p>
            </div>
        </div>
    );
};

export default Footer;