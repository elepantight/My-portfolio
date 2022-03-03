import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
			<Link to="/" className="nav-logo">
					</Link>
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
						RESUME
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/gallery" className="nav-link" onClick={closeMenu}>
						IMAGES
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




