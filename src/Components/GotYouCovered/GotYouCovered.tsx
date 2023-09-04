import { FC } from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import Img from "../../assets/bannerImg.png";

const GotYouCovered: FC = () => {
	return (
		<Row className='px-lg-5 px-3 py-5 my-5'>
			<Card
				style={{ backgroundColor: "#181818" }}
				className='text-white rounded-4'>
				<Row>
					<Col
						md={6}
						className='d-flex flex-column justify-content-center align-items-start gap-3 ps-md-5 my-5 px-5'>
						<h2>
							No matter what you <br />
							need, we've got you covered.
						</h2>
						<p>
							Take your coaching online and deliver an experience like nothing
							your clients have ever seen before. With fitness, nutrition, and
							habit-coaching features, plus in-app messaging, progress tracking,
							and more - it's everything you need to motivate and inspire.
						</p>
						<Button variant='outline-light'>Get Started</Button>
					</Col>
					<Col
						md={6}
						className='d-flex align-items-end justify-content-md-start'>
						<Image
							src={Img}
							className='w-100 m-sm-5 mt-0 m-md-0 mt-md-5'
							style={{ maxWidth: 500 }}
						/>
					</Col>
				</Row>
			</Card>
		</Row>
	);
};

export default GotYouCovered;
