import { FC } from "react";
import CarouselCustom from "../Carousel/CarouselCustom";
import Img1 from '../../assets/mfm-set1.png';
import Img2 from '../../assets/mfm-set2.png';
import Img3 from '../../assets/mfm-set3.png';
import Img4 from '../../assets/mfm-set4.png';
import { Row } from "react-bootstrap";
const SetsApart: FC = () => {
  const data = [
    {
      img: Img1,
      para: "A community that supports you every step of the way",
    },
    {
      img: Img2,
      para: "Coaching plans for every lifestyle & body type",
    },
    {
      img: Img3,
      para: "500+ expert coaches who have transformed 300,000+ lives",
    },
    {
      img: Img4,
      para: "Methods that are scientific, result driven and sustainable",
    },
  ]
	return (
		<Row className="px-lg-5 px-3">
			<h2>What sets MFM apart?</h2>
      <CarouselCustom data={data}/>
		</Row>
	);
};

export default SetsApart;
