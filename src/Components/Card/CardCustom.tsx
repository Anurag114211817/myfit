import { FC } from "react";
import { AiOutlineLogout } from "react-icons/ai";

type CardCustomType = {
	head: string;
	para: string;
	idx: number;
	active: boolean[];
	setActive: (arg1: boolean[]) => void;
};

const update = (
	idx: number,
	active: boolean[],
	setActive: (arg1: boolean[]) => void
) => {
	const newArr = [...active].map(() => false);
	newArr[idx] = !newArr[idx];
	console.log("clicked");
	setActive(newArr);
};

const CardCustom: FC<CardCustomType> = ({
	head,
	para,
	idx,
	active,
	setActive,
}: CardCustomType) => {
	return (
		<div
			className={`p-3 my-2 hover text-white-50 ${
				active[idx] ? " active" : ""
			} rounded-3`}
			onClick={() => update(idx, active, setActive)} style={{cursor: 'pointer'}}>
			<div className='lh-sm d-flex gap-1 align-items-center' style={{fontSize: 20}}>
				<AiOutlineLogout className='fs-3'/> {head}
			</div>
			<div className='border-light border-bottom lh-sm pb-1' style={{fontSize: 14}}>{para}</div>
		</div>
	);
};

export default CardCustom;
