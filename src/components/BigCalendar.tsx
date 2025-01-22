"use client";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { calendarEvents } from "@/lib/data";

// Initialize moment localizer
const localizer = momentLocalizer(moment);

const BigCalendar = () => {
	return (
		// <Calendar
		// 	localizer={localizer}
		// 	events={calendarEvents} // Event data passed correctly
		// 	startAccessor="start" // Define event start time
		// 	endAccessor="end" // Define event end time
		// 	views={[Views.WORK_WEEK, Views.DAY]} // Define available views
		// 	view={view} // Use state to track current view
		// 	onView={handleOnChangeView} // Handle view changes
		// 	style={{ height: "98%" }} // Set height for calendar display
		// 	// min={new Date(1970, 1, 1, 8, 0, 0)} // Start at 8:00 AM every day
		// 	// max={new Date(1970, 1, 1, 17, 0, 0)} // End at 5:00 PM every day
		// />

		<div>
			<Calendar
				localizer={localizer}
				events={calendarEvents}
				startAccessor="start"
				endAccessor="end"
				style={{ height: 500 }}
			/>
		</div>
	);
};

export default BigCalendar;
