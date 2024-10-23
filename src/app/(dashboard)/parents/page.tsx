import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";
import React from "react";

const page = () => {
	return (
		<div className=" p-4 flex gap-4 flex-col xl:flex-row ">
			{/* Left  */}
			<div className="w-full xl:w-2/3 flex flex-col gap-8">
				<div className="h-full">
					<h1 className=" text-xl font-semibold">Schedule For Teachers</h1>
					<div>
						<BigCalendar />
					</div>
				</div>
			</div>
			{/* Right  */}
			<div className="w-full xl:w-1/3 flex flex-col gap-8">
				<EventCalendar />
				<Announcements />
			</div>
		</div>
	);
};

export default page;
