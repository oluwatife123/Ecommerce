import React, { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import { TfiMenu, TfiClose } from "react-icons/tfi"; // Import icons
import { Link } from "react-router-dom";

export default function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<div className="">
				{/* Navbar Container */}
				<div className="lg:pl-44 items-center px-4 py-3 border border-[white] lg:py-2 lg:px-6 z-10 fixed top-0 shadow-xl w-full text-white flex justify-between text-xl bg-[#E7272D]">
					<Logo />

					{/* Desktop Menu */}
					<div className="hidden lg:flex w-[30%] justify-center">
						<ul className="flex gap-6 font-normal">
							<li className="hover:border hover:shadow-xl px-2 rounded">
								<Link to="/" onClick={() => setIsMenuOpen(false)}>
									Home
								</Link>
							</li>
							<li className="hover:border hover:shadow-xl px-2 rounded">
								<Link to="/about" onClick={() => setIsMenuOpen(false)}>
									About
								</Link>
							</li>
							<li className="hover:border hover:shadow-xl px-2 rounded">
								<Link to="/orderpage" onClick={() => setIsMenuOpen(false)}>
									Order Now
								</Link>
							</li>
						</ul>
					</div>

					{/* Login Button (Desktop Only) */}
					<div className="hidden lg:block">
						<Link to="/login">
							<Button text="Refresh" width="100%" />
						</Link>
					</div>

					{/* Mobile Menu Toggle */}
					<div
						className="lg:hidden block cursor-pointer text-3xl"
						onClick={() => setIsMenuOpen(!isMenuOpen)}>
						{isMenuOpen ? <TfiClose /> : <TfiMenu />}
						{/* Mobile Menu */}
						<div
							className={`absolute top-12 left-0 w-full bg-[#e5e0e0] flex flex-col items-center gap-6 font-semibold text-lg transition-transform duration-300 ease-in-out ${
								isMenuOpen
									? "translate-y-0 opacity-100"
									: "-translate-y-10 opacity-0 hidden"
							}`}>
							<ul className="w-full text-center">
								<li className="list-none p-4 hover:bg-[#E7272D] hover:text-white text-black text-lg transition-all cursor-pointer">
									<Link to="/" onClick={() => setIsMenuOpen(false)}>
										Home
									</Link>
								</li>
								<li className="list-none p-4 hover:bg-[#E7272D] hover:text-white text-black text-lg transition-all cursor-pointer">
									<Link to="/about" onClick={() => setIsMenuOpen(false)}>
										About
									</Link>
								</li>
								<li className="list-none p-4 hover:bg-[#E7272D] hover:text-white text-black text-lg transition-all cursor-pointer">
									<Link to="/orderpage" onClick={() => setIsMenuOpen(false)}>
										Order Now
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
