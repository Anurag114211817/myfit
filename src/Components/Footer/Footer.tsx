import { FC } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Img1 from "../../assets/app-store.png";
import Img2 from "../../assets/google-play.png";
import BrandName from "../../assets/myfit-logo.png";

const Footer: FC = () => {
	return (
		<>
			<div className='px-5 d-flex justify-content-center gap-4 flex-column align-items-center flex-md-row'>
				<h2>Available at</h2>
				<div className='d-flex gap-3'>
					<Image src={Img1} />
					<Image src={Img2} />
				</div>
			</div>
			<Row className='px-lg-5 px-3 mx-lg-5 py-5'>
				<Col md={3} xs={12}>
					<Image src={BrandName} className='w-50 mb-3' />
					<p>
						At MFM, we make group workouts fun, daily food healthy & tasty,
						mental fitness easy with yoga & meditation, Medical & lifestyle care
						hassle-
						<br />
						free.#BeBetterEveryDay
					</p>
				</Col>
				<Col md={3} xs={6} className='ps-md-5'>
					<div className='fw-bold mb-4'>Company</div>
					<div>
						<ul className='list-unstyled'>
							<li>Home</li>
							<li>About Us</li>
							<li>Features</li>
							<li>Blogs</li>
							<li>Contact Us</li>
							<li>Career</li>
						</ul>
					</div>
				</Col>
				<Col md={3} xs={6}>
					<div className='fw-bold mb-4'>Tools</div>
					<div>
						<ul className='list-unstyled'>
							<li>BMR Calculator</li>
							<li>Macro Calculator</li>
							<li>Body Fat Calculator</li>
							<li>1RM Calculator</li>
						</ul>
					</div>
				</Col>
				<Col md={3} xs={6}>
					<ul className='list-unstyled'>
						<li>Privacy Policy</li>
						<li>Terms & Condition</li>
						<li>Help & Support</li>
					</ul>
				</Col>
				<hr className='m-auto mt-4' style={{ width: "85%" }} />
			</Row>
      <div className="text-center pb-5">Copyright &copy; 2015 - 2023 All Rights Reserved.</div>
		</>
	);
};

export default Footer;
