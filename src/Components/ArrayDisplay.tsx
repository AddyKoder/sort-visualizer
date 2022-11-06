import { ReactElement } from "react";

export default function ArrayDisplay({ array, length=array.length}: {array:number[], length?:number}) {
	return (
		<div className="array-display">
			{array.map((item: number): ReactElement => {
				return <div key={item} style={{width: `${100/(1.5*length)}%`, height:`${item/length*100}%`}} className="array-element-display">

				</div>
			})}	
		</div>
	)
}
