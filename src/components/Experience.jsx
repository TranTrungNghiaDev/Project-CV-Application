import { useState } from "react";

function Experience() {
    const [companyName, setCompanyName] = useState("");
    const [positionTitle, setPositionTitle] = useState("");
    const [mainJob, setMainJob] = useState("");
    const [dateOfWorkFrom, setDateOfWorkFrom] = useState("");
    const [dateOfWorkUntil, setDateOfWorkUntil] = useState("");
    return (
      <>
      <h2>Education</h2>
        <label>
        Company Name:
          <input
            name="companyName"
            type="text"
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
            required
          />
        </label>
  
        <label>
        Position Title:
          <input
            name="positionTitle"
            type="text"
            value={positionTitle}
            onChange={(event) => setPositionTitle(event.target.value)}
            required
          />
        </label>

        <label>
        Main Job:
          <input
            name="mainJob"
            type="text"
            value={mainJob}
            onChange={(event) => setMainJob(event.target.value)}
            required
          />
        </label>
  
        <label>
        Date Of Work:
        <br />
        From:
          <input
            name="dateOfWorkFrom"
            type="date"
            value={dateOfWorkFrom}
            onChange={(event) => setDateOfWorkFrom(event.target.value)}
            required
          />
          Until:
          <input
            name="dateOfWorkUntil"
            type="date"
            value={dateOfWorkUntil}
            onChange={(event) => setDateOfWorkUntil(event.target.value)}
            required
          />
        </label>
      </>
    );
}

export {Experience}