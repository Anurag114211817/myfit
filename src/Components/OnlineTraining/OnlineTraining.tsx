import { Col, Image, Row } from "react-bootstrap";
import Img from "../../assets/online-training.png";
import { FC } from "react";

const OnlineTraining: FC = () => {
	return (
		<>
			<Row className='px-md-5 px-3 my-5 py-5'>
				<Col md={6}>
					<Image src={Img} className='w-100 mb-3' loading="lazy"/>
				</Col>
				<Col md={6} className='d-flex align-items-center'>
					<Row className='gap-2'>
						<div className='fs-3'>ONLINE TRAINING</div>
						<div className='display-6 fw-bold lh-sm'>
							Sell More Coaching And Boost Your PT Profits.
						</div>
						<div className='fs-5`'>
							Digitize and centralize your personal training systems easily and
							introduce a new revenue stream by selling online, in-person or
							hybrid memberships.
						</div>
					</Row>
				</Col>
			</Row>
		</>
	);
};

export default OnlineTraining;
