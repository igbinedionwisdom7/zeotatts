import One from './assets/one.jpeg'
import Two from './assets/two.jpeg'
import Three from './assets/three.jpeg'

import { useState } from "react";
import { Link } from 'react-router';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { LiaTimesSolid } from 'react-icons/lia';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <main className='flex items-center justify-center w-screen flex-col'>
      <div className="wrapper">
        <header>
          <center><img src="https://cdn-icons-png.flaticon.com/512/927/927295.png" style={{ width: '9%' }} alt="Vote" />Vote Your Favourite Tattoo Artist!</center>
        </header>
        <div className="poll-area" id="hidden">
          <input type="checkbox" name="poll" id="opt-1" />
          <input type="checkbox" name="poll" id="opt-2" />
          <input type="checkbox" name="poll" id="opt-3" />
          <input type="checkbox" name="poll" id="opt-4" />

          <label htmlFor='opt-1' className="opt-1">
            <div className="row">
              <div className="column">
                <span className="circle"></span>
                <span className="text">Powelltattoos</span>
              </div>
              <span className="percent">36%</span>
            </div>
            <div className="progress" id="pstyle1"></div>
            <img src={One} alt="Picture" />
          </label>

          <label htmlFor="opt-2" className="opt-2">
            <div className="row">
              <div className="column">
                <span className="circle"></span>
                <span className="text">Dangilsdorf</span>
              </div>
              <span className="percent">31%</span>
            </div>
            <div className="progress" id="pstyle2"></div>
            <img src={Two} alt="Picture" />
          </label>

          <label htmlFor="opt-3" className="opt-3">
            <div className="row">
              <div className="column">
                <span className="circle"></span>
                <span className="text">Atlastattoo</span>
              </div>
              <span className="percent">14%</span>
            </div>
            <div className="progress" id="pstyle3"></div>
            <img src={Three} alt="Picture" />
          </label>

       
          <input type="submit" onClick={() => openModal()} value="Vote Me" className="btn-grad" data-prototype-url="Instagram.html" id="myBtn" />


        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}

export default App


const Modal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div
      className="z-50 fixed top-1/2 left-1/2 -translate-1/2 bg-white shadow-lg rounded-lg"
    >
      <div>
        <div className="modal-content border-none" style={{ backgroundColor: "#fff" }}>
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="btn-close "
              onClick={()=>onClose()}
            >
              <LiaTimesSolid className='text-xl' />
            </button>
          </div>          <h3 className="text-center mt-8">
            Vote with Prefered Platform
          </h3>
          <div
            className='mt-12 flex items-center justify-center gap-5'
          >
            <Link
              to="/instagram"
              className='bg-[#ee3102] text-white py-4 flex items-center gap-4 px-6 rounded-lg text-base'
            >
              <FaInstagram className='text-lg' /> Instagram
            </Link>
            <Link
              to="/facebook"
              className='bg-[#0c79cd] text-white py-4 flex items-center gap-4 px-6 rounded-lg text-base'
            >
              <FaFacebookF className='text-lg' />Facebook</Link>
          </div>
        </div>
      </div>
    </div>

  );
};
