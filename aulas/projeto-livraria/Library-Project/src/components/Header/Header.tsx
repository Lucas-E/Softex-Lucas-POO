import React from "react";
import GroupMask from "../../assets/images/MaskGroup.png";

const Header = () => {
	return (
		<React.Fragment>
			<div className="bg-HeaderImage bg-no-repeat h-screen bg-blur lg:bg-none">
				<div className="h-screen flex flex-row flex-1 flex-wrap justify-between bg-white/50 backdrop-blur-md">
					<div className="p-5 flex-1 flex flex-col items-center justify-center lg:bg-gradient-to-r from-gray-400 to-white">
						<div className="flex flex-col h-100 justify-center w-10/12">
							<h1 className="text-6xl text-projectBlue font-bold my-8 drop-shadow-md">
								Biblioteca Softex
							</h1>
							<p className="leading-loose text-projectBlue text-xl">
								Este projeto é parte da formação Softex. Este
								projeto simula o funcionamento de uma biblioteca
								utilizando POO. Neste projeto foi utilizado
								React, Typescript e Tailwindcss.
							</p>
							<button className="mt-4 px-5 py-3 rounded border border-projectBlue text-projectBlue w-auto hover:translate-y-1 hover:bg-projectBlue hover:text-white bg-none  transition-transform hover:transition-transform">
								Read More
							</button>
						</div>
					</div>
					<div className="flex-1 hidden lg:block ">
						<img src={GroupMask} alt="" className="w-[713px]" />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Header;
