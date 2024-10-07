import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCards from "@/components/UserCards";
import React from "react";

const AdminPage = () => {
	return (
		<div className=" p-4 flex gap-4 flex-col md:flex-row ">
			{/* Left  */}
			<div className="w-full lg:w-2/3 flex flex-col gap-8">
				{/* USER CARDS  */}
				<div className="flex gap-4 justify-between flex-wrap">
					<UserCards type="student" />
					<UserCards type="teacher" />
					<UserCards type="parent" />
					<UserCards type="staff" />
				</div>
				{/* MIDDLE CHART  */}
				<div className="w-full flex gap-4 flex-col lg:flex-row">
					<div className="w-full lg:w-1/3 h-[450px]">
						<CountChart />
					</div>
					<div className="w-full lg:w-2/3 h-[450px]">
						<AttendanceChart />
					</div>
				</div>
				{/* BOTTOM CHART  */}
				<div className=" w-full h-[500px]">
					<FinanceChart />
				</div>
			</div>
			{/* Right  */}
			<div className="w-full lg:w-1/3 flex flex-col gap-8">
				<EventCalendar />
				<Announcements />
			</div>
		</div>
	);
};

export default AdminPage;
