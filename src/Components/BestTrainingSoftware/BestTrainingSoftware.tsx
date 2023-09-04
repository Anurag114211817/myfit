import { FC } from "react";
import { Col, Image, Row } from "react-bootstrap";
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

const BestTrainingSoftware: FC<BestTrainingSoftwareTypes> = ({
	heading,
	tagLine,
	data,
	active,
	setActive,
	images,
	h,
}: BestTrainingSoftwareTypes) => {
	return (
		<>
			<Row className='px-md-5 px-3'>
				<div className='h1  '>{heading}</div>
				<div className='fs-5'>{tagLine}</div>
			</Row>
			<Row className='px-3 mt-5' style={{ overflowX: "hidden" }}>
				<Col md={h !== 55 ? 5 : 6} className='order-1 order-md-0'>
					{data.map((ele, idx) => (
						<CardCustom key={idx} {...ele} {...{ active, idx, setActive }} />
					))}
				</Col>
				<Col
					md={h !== 55 ? 7 : 6}
					className='oder-0 order-md-1 d-flex align-items-center justify-content-center mb-5 mb-lg-0'
					style={{ height: h === 55 ? "100%" : "auto", transform: h !== 55 && window.innerWidth > 768 ? 'translateX(10%)' : 'translateX(0)'}}>
					<Image
						src={images[active.indexOf(true)]}
						style={{ width: `${h}%` }}
						loading="lazy"
					/>
				</Col>
			</Row>
		</>
	);
};

export default BestTrainingSoftware;
