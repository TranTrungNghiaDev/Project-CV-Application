import { useState } from "react";

function Education() {
    const [schoolName, setSchoolName] = useState("");
    const [titleOfStudy, setTitleOfStudy] = useState("");
    const [dateOfStudyFrom, setDateOfStudyFrom] = useState("");
    const [dateOfStudyUntil, setDateOfStudyUntil] = useState("");
    return (
      <>
      <h2>Education</h2>
        <label>
        SchoolName:
          <input
            name="schoolName"
            type="text"
            value={schoolName}
            onChange={(event) => setSchoolName(event.target.value)}
            required
          />
        </label>
  
        <label>
        Title Of Study:
          <input
            name="titleOfStudy"
            type="text"
            value={titleOfStudy}
            onChange={(event) => setTitleOfStudy(event.target.value)}
            required
          />
        </label>
  
        <label>
        Date Of Study:
        <br />
        From:
          <input
            name="dateOfStudyFrom"
            type="date"
            value={dateOfStudyFrom}
            onChange={(event) => setDateOfStudyFrom(event.target.value)}
            required
          />
          Until:
          <input
            name="dateOfStudyUntil"
            type="date"
            value={dateOfStudyUntil}
            onChange={(event) => setDateOfStudyUntil(event.target.value)}
            required
          />
        </label>
      </>
    );
}

export {Education}