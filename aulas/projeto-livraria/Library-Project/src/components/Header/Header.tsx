import React from "react";
import GroupMask from "../../assets/images/MaskGroup.png";

const Header = () => {
	return (
		<React.Fragment>
			<div className="flex flex-row flex-1 flex-wrap justify-between bg-HeaderImage bg-no-repeat backdrop-blur-md h-screen">
				<div className="p-5 flex-1 flex flex-col items-center justify-center lg:bg-gradient-to-r from-gray-400 to-white">
					<div className="flex flex-col h-100 justify-center w-10/12">
						<h1 className="text-6xl text-projectBlue font-bold my-8 drop-shadow-md">
							Ipsum Dolor Si
						</h1>
						<p className="leading-loose text-projectBlue text-xl">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Cumque, sequi. Odit id impedit sapiente,
							eveniet, quaerat quis placeat molestias corrupti
							repellendus culpa sint, dolores expedita veniam
							natus alias illo sequi.
						</p>
						<button className="px-5 py-3 rounded border border-projectBlue text-projectBlue w-auto hover:translate-y-1  transition-transform hover:transition-transform">
							Read More
						</button>
					</div>
				</div>
				<div className="flex-1 hidden lg:block ">
					<img src={GroupMask} alt="" className="w-[713px]" />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Header;
