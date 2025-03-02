import Link from "next/link"
import InfoBox from "./InfoBox"

const InfoBoxes = () => {
	return (
		<section>
			<div className="container-xl lg:container m-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
					<InfoBox
						title="Renters"
						subtitle="Find your dream rental property. Bookmark properties and contact owners."
						background="bg-gray-100"
						buttonInfo={{
							text: "Browse Properties",
							color: "bg-black",
							link: "/properties",
						}}
					/>
					<InfoBox
						title="Property Owners"
						subtitle="List your properties and reach potential tenants. Rent as an airbnb or long term."
						background="bg-blue-100"
						buttonInfo={{
							text: "Property Owners",
							color: "bg-blue-500",
							link: "/properties/add",
						}}
					/>
				</div>
			</div>
		</section>
	)
}

export default InfoBoxes
