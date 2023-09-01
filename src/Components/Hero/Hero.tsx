import { FC } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BackgroundVideo from "../../assets/mfm1.mp4";

const Hero: FC = () => {
	return (
		<Container fluid>
			<Row>
				<Col
					md={6}
					className='d-flex align-items-center order-1 order-md-0'
					style={{ minHeight: "100svh" }}>
					<Row className='m-auto gap-4 pe-3' style={{ width: "80%" }}>
						<h1>The #1 coaching app to better engage your clients.</h1>
						<p>
							Take your coaching online and deliver an experience like nothing
							your clients have ever seen before. With fitness, nutrition, and
							habit-coaching features, plus in-app messaging, progress tracking,
							and more — it's everything you need to motivate and inspire.
						</p>
						<div>
							<Button variant='outline-light px-4 py-2 rounded-4'>Login</Button>
							<Button variant='outline-light px-4 py-2 rounded-4 ms-4'>
								Get Started
							</Button>
						</div>
					</Row>
				</Col>
				<Col
					md={6}
					style={{ height: "100svh", overflow: "hidden" }}
					className='position-relative order-0 order-md-1'>
					<video autoPlay loop muted style={{ height: "100%", transform: 'translateX(-15%)'}}>
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
		</Container>
	);
};

export default Hero;
