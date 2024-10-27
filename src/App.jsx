import './App.css';
import Banner from './Components/Banner/Banner';
import Header from './Components/Headers/Header';
import Players from './Components/Players/Players';
import Footer from './Components/Footer/Footer';
import Newsletter from './Components/Newsletter/Newsletter';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import Selected from './Components/Selected/Selected';
import Available from './Components/Available/Available';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [money, setMoney] = useState(0);
  const [isActive, setIsActive] = useState({ available: true, status: 'available' });

  const claimMoneyForPlayerAdd = () => {
    const claimedMoney = 6500000;
    setMoney(money + claimedMoney);
  };

  const notify = (message, type = 'success') => {
    toast[type](message, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const handleToggleButton = (status) => {
    setIsActive({ available: status === 'available', status });
  };

  const handleSelectedPlayer = (player) => {
    if (selectedPlayer.length >= 6) {
      notify('Cannot add more than 6 players', 'error');
      return;
    }

    if (player.price > money) {
      notify("Insufficient credits to add this player", 'error');
      return;
    }

    if (!selectedPlayer.find(p => p.name === player.name)) {
      setMoney(money - player.price);
      setSelectedPlayer([...selectedPlayer, player]);
      notify('Player added successfully!');
    } else {
      notify('Player already added', 'error');
    }
  };

  const handleRemovePlayer = (playerToRemove) => {
    setSelectedPlayer(selectedPlayer.filter(player => player.name !== playerToRemove.name));
    setMoney(money + playerToRemove.price);
    notify('Player removed');
  };

  return (
    <>
      <Header money={money} />
      <div className="w-10/12 mx-auto">
        <Banner claimMoneyForPlayerAdd={claimMoneyForPlayerAdd} notify={() => notify('Credit Added to Your Account!')} />
        <ToastContainer />

        <Available isActive={isActive} handleToggleButton={handleToggleButton} selectedPlayer={selectedPlayer} />

        {isActive.status === 'available' ? (
          <Players selectedPlayer={selectedPlayer} handleSelectedPlayer={handleSelectedPlayer} />
        ) : (
          <Selected 
            selectedPlayer={selectedPlayer} 
            handleRemovePlayer={handleRemovePlayer} 
            onAddMore={() => handleToggleButton('available')} 
          />
        )}
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
