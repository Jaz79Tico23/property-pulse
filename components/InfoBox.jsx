import Link from "next/link"

const InfoBox = ({ title, buttonInfo, subtitle, background }) => {
	return (
		<div className={`${background} p-6 rounded-lg shadow-md`}>
			<h2 className="text-2xl font-bold">For {title}</h2>
			<p className="mt-2 mb-4">{subtitle}</p>
			<Link
				href={buttonInfo.link}
				className={`inline-block ${buttonInfo.color} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
			>
				{buttonInfo.text}
			</Link>
		</div>
	)
}

export default InfoBox
