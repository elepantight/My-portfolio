import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import IF_4909 from './../images/IF_4909.png'

const Navigation = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar">
			<div className='square_1'></div>
			<div className='square_2'></div>
			<div className='square_3'></div>
			<div className='square_4'></div>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
		
				<li className="nav-item">
					<Link to="/portfolio" className="nav-link" onClick={closeMenu}>
						PORTFOLIO
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/resume" className="nav-link" onClick={closeMenu}>
						OBJECTIVES
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/gallery" className="nav-link" onClick={closeMenu}>
						IMG
					</Link>
				</li>
        <li className="nav-item">
					<Link to="/contact" className="nav-link" onClick={closeMenu}>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;




