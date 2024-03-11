type requestStatus = "Pending" | "Approved" | "Rejected";

interface holidayRequestsData {
    employeeId: number; // assign an id of emploee
    startDate: number;
    endDate: number;
    status: requestStatus;
}

class holidayRequests implements holidayRequestsData{
    employeeId: number; // assign an id of emploee
    startDate: number;
    endDate: number;
    status: requestStatus; //set a "pending" status as default

    constructor(emploeeId: number, startDate: number, endDate: number, status: requestStatus = "Pending"){
        this.employeeId = emploeeId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
    }
}

export {
    holidayRequests,
}

//console.log(new holidayRequests(1, 12.03, 15.03, "Pending"));
