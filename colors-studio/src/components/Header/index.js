import React from 'react';
import "./style.css";
import { Link, useLocation } from 'react-router-dom';
import ButtonNewVideo from '../ButtonNewVideo';

const Header = () => {

  const location = useLocation();

  return (
    <>
    <header className='bg-primary text-white header-bg'>
        <nav className='flex flex-row justify-between container'>
            <Link to="/" className='font-bold text-xl py-5 uppercase no-underline text-white logo'>colors * studios</Link>
            {location.pathname === '/' && (
            <Link to="/novo-video">
              <ButtonNewVideo className="border-2 text-xl rounded font-medium no-underline text-white p-5 cursor-pointer new-video-btn" text="Novo vídeo"/>
            </Link>
          )}
        </nav>
    </header>
    </>
  )
}

export default Header;