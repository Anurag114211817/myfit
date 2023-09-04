import { FC, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import BackgroundVideo from "../../assets/mfm1.mp4";
import Poster from "../../assets/poster.png";

const Hero: FC = () => {
	const [width, setWidth] = useState(window.innerWidth)
	useEffect(() => {
		window.addEventListener("resize", () => {
			setWidth(window.innerWidth);
		});
		return () => {
			window.removeEventListener("resize", () => {
				setWidth(window.innerWidth);
			});
		};
	}, []);
	return (
		<>
			<Row>
				<Col
					md={6}
					className='d-md-flex align-items-md-center order-1 order-md-0'>
					<Row className='mx-auto pe-3 mt-5 mt-lg-0' style={{ width: "90%" }}>
						<h1>The #1 coaching app to better engage your clients.</h1>
						<p className='mt-4'>
							Take your coaching online and deliver an experience like nothing
							your clients have ever seen before. With fitness, nutrition, and
							habit-coaching features, plus in-app messaging, progress tracking,
							and more — it's everything you need to motivate and inspire.
						</p>
						<div className='mt-4'>
							<Button variant='outline-light px-4'>Login</Button>
							<Button variant='outline-light px-4 ms-4'>Get Started</Button>
						</div>
					</Row>
				</Col>
				<Col
					md={6}
					style={{
						height: width < 768 ? "29rem" : 688,
						overflow: "hidden",
					}}
					className='position-relative order-0 order-md-1'>
					<video
						autoPlay
						loop
						poster={Poster}
						muted
						style={{
							height: "100%",
							transform:
								width < 768 ? "translateX(-15%)" : "translateX(20)",
						}}>
						<source src={BackgroundVideo} type='video/mp4' />
					</video>
					<div
						className='z-1 position-absolute start-0 top-0'
						style={{
							backgroundImage: "radial-gradient(transparent,black)",
							height: "100%",
							width: "100%",
						}}></div>
				</Col>
			</Row>
		</>
	);
};

export default Hero;
