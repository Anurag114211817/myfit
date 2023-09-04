import { Col, Image, Row } from "react-bootstrap";
import Img from "../../assets/linkedin-sales.png";
import { FC } from "react";

const BusinessGrowth: FC = () => {
	return (
		<>
			<Row className='px-md-5 px-3 py-5 my-5'>
				<Col md={6} className="order-1 order-md-0">
					<div className='h4'>BUSINESS GROWTH</div>
					<div className='display-4 fw-medium mt-3'>
						Get and keep more clients.
					</div>
					<div className='fs-6 mt-3'>
						Keep clients, trainers and programming in one place and streamline
						your business operations. With integrated payments, appointments,
						and one-click automation you can sell and market our services and PT
						packages easier, always providing the best experience to your
						clients.
					</div>
				</Col>
				<Col md={6} className="order-0 order-md-1">
					<div className='overflow-y-hidden rounded-5' style={{ height: "75%" }}>
						<Image src={Img} className='w-100' loading="lazy"/>
					</div>
				</Col>
			</Row>
		</>
	);
};

export default BusinessGrowth;
