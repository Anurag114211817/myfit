import { Col, Container, Image, Row } from "react-bootstrap";
import Img from "../../assets/linkedin-sales.png";

const BusinessGrowth = () => {
	return (
		<Container fluid className="mt-5 pt-5">
			<Row className='px-5'>
				<Col md={6}>
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
				<Col md={6}>
					<div className='overflow-hidden rounded-5' style={{ height: "75%" }}>
						<Image src={Img} className='w-100' />
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default BusinessGrowth;
