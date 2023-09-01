import { FC } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import CardCustom from "../Card/CardCustom";

type BestTrainingSoftwareTypes = {
	heading: string;
	tagLine: string;
	data: {
					head: string;
					para: string;
				}[];
	active: boolean[];
	setActive: (arg: boolean[]) => void;
	images: string[];
	h: number;
};

const BestTrainingSoftware: FC<BestTrainingSoftwareTypes> = ({heading, tagLine, data, active, setActive, images, h}: BestTrainingSoftwareTypes) => {
	return (
		<Container fluid>
			<Row className='px-md-5 px-3'>
				<div className='h1  '>
					{heading}
				</div>
				<div className='fs-5'>
					{tagLine}
				</div>
			</Row>
			<Row className='px-4 mt-5' style={{ overflowX: "hidden" }}>
				<Col md={h===120 ? 5 : 6} className="order-1 order-md-0">
					{data.map((ele, idx) => (
						<CardCustom key={idx} {...ele} {...{ active, idx, setActive }} />
					))}
				</Col>
				<Col md={h===120 ? 7 : 6} className='oder-0 order-md-1 d-flex align-items-center justify-content-center' style={{height: '100%'}}>
					<Image
						src={images[active.indexOf(true)]}
						style={{ width: `${h}%` }}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default BestTrainingSoftware;
