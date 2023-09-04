import { FC } from "react";
import { Button, Image } from "react-bootstrap";
import Img1 from "../../assets/bannerImg1.png";
import Img2 from "../../assets/bannerImg2.png";
import Img3 from "../../assets/bannerImg4.png";
import Img4 from "../../assets/bannerImg5.png";
import Aos from "aos";

const OneForAll: FC = () => {
	Aos.init();
	return (
		<>
			<div className='d-flex w-75 justify-content-between m-auto mt-5 pt-5'>
				<Image src={Img1} data-aos='zoom-in-up' data-aos-offset='200' data-aos-delay='300' style={{maxWidth: '43%'}}/>
				<Image src={Img2} data-aos='zoom-in-up' data-aos-offset='200' data-aos-delay='300' style={{maxWidth: '43%'}}/>
			</div>
			<div
				style={{ width: window.innerWidth > 768 ? "60%" : "80%" }}
				className='m-auto text-center mt-5'
				data-aos='fade-down' data-aos-offset='100' data-aos-delay='200'>
				<h2 style={{ fontSize: 36 }}>One app for your all fitness need</h2>
				<p>
					Whether you're looking to lose weight, build muscle, or simply get in
					shape, the One App for All Your Fitness Needs feature provides
					everything you need, all in one convenient place. With features like
					customized diet and workout plans, 500+ exercise videos made by
					experts, 500+ delicious quantified recipes, nutrition facts for 1
					million+ food items, free tools to track your progress, a friendly and
					strong community, and much more, you'll have everything you
				</p>
				<Button variant='outline-light' className='px-4'>
					Get Started
				</Button>
			</div>
			<div className='d-flex w-75 justify-content-between m-auto mt-5 pt-5'>
				<Image src={Img3} data-aos='fade-right' data-aos-offset='200' data-aos-delay='200' style={{maxWidth: '43%'}}/>
				<Image src={Img4} data-aos='fade-left' data-aos-offset='200' data-aos-delay='200' style={{maxWidth: '43%'}}/>
			</div>
		</>
	);
};

export default OneForAll;
