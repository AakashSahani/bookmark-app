import React from 'react';
import Chrome from '../assets/logo-chrome.svg';
import Firefox from '../assets/logo-firefox.svg';
import Opera from '../assets/logo-opera.svg';

function Downloads() {
	return (
		<section className="text-center min-h-screen flex flex-col justify-evenly space-y-10 py-5">
			<h2 className="text-xl font-bold">Download the extension</h2>
			<p className="text-lg">
				We've got more browsers in the pipeline. Please do let us know if you've
				got a favourite you'd like us to priotize.
			</p>
			<div className="flex flex-col sm:flex-row">
				<div className="flex text-lg my-5 w-[80vw]  sm:w-[400px] h-72 mx-auto text-black shadow-md bg-slate-50 rounded-md flex-col justify-evenly  items-center">
					<img src={Chrome} alt="Chrome" className="w-20" />
					<h3 className="text-xl font-bold">Add to Chrome</h3>
					<span>Minimum version 62</span>
					<button className="btn btn-primary">Add & Install Extension</button>
				</div>
				<div className="flex text-lg my-5 w-[80vw] sm:w-[400px] h-72 mx-auto text-black shadow-md bg-slate-50 rounded-md flex-col justify-evenly  items-center">
					<img src={Firefox} alt="" className="w-20" />
					<h3 className="text-xl font-bold">Add to Firefox</h3>
					<span>Minimum version 55</span>
					<button className="btn btn-primary">Add & Install Extension</button>
				</div>
				<div className="flex text-lg my-5 w-[80vw] sm:w-[400px] h-72 mx-auto text-black  shadow-md bg-slate-50 rounded-md flex-col justify-evenly  items-center">
					<img src={Opera} alt="" className="w-20" />
					<h3 className="text-xl font-bold">Add to Opera</h3>
					<span>Minimum version 46</span>
					<button className="btn btn-primary">Add & Install Extension</button>
				</div>
			</div>
		</section>
	);
}

export default Downloads;
