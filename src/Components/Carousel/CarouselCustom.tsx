import { FC } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type CarouselCustomItemType = {
	img: string;
	heading?: string;
	para: string;
	link?: boolean;
};

type CarouselCustomType = {
	data: CarouselCustomItemType[];
};

const CarouselCustom: FC<CarouselCustomType> = ({
	data,
}: CarouselCustomType) => {
	const responsive = {
		tab: {
			breakpoint: { max: 768, min: 576 },
			items: 2,
			slidesToSlide: 2,
		},
		mobile: {
			breakpoint: { max: 576, min: 0 },
			items: 1,
			slidesToSlide: 1,
		},
	};

	return (
		<>
			{window.innerWidth <= 768 && (
				<Carousel
					responsive={responsive}
					autoPlay={true}
					autoPlaySpeed={1000}
					keyBoardControl={true}
					ssr={true}
					infinite={true}
					customTransition='all .5s'
          // centerMode={true}
					transitionDuration={1000}>
					{data.map((ele, idx) => (
						<Card
							key={idx}
							style={{ backgroundColor: "#181818", maxWidth: 270 }}
							className='text-white h-100 rounded-4 mx-2 h-100'>
							<Card.Body className='position-relative'>
								<Image src={ele.img} className='w-100 mb-3' />
								{ele?.heading && <Card.Title>{ele.heading}</Card.Title>}
								<Card.Text>{ele.para}</Card.Text>
								{ele?.link && (
									<a
										href='#'
										className='position-absolute bottom-0 mb-2 text-white'>
										Calculate now
									</a>
								)}
							</Card.Body>
						</Card>
					))}
				</Carousel>
			)}
			{window.innerWidth > 768 && (
				<Row className='px-lg-5 px-3 align-items-lg-stretch'>
					{data.map((ele, idx) => (
						<Col xs={3} key={idx}>
							<Card
								style={{ backgroundColor: "#181818" }}
								className='text-white h-100 rounded-4'>
								<Card.Body className='position-relative'>
									<Image src={ele.img} className='w-100 mb-3' />
									{ele?.heading && <Card.Title>{ele.heading}</Card.Title>}
									<Card.Text>{ele.para}</Card.Text>
									{ele?.link && (
										<a
											href='#'
											className='position-absolute bottom-0 mb-2 text-white'>
											Calculate now
										</a>
									)}
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			)}
		</>
	);
};

export default CarouselCustom;
