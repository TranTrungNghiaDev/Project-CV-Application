import { useState } from "react";

function GeneralInformation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
    <h2>General Information</h2>
      <label>
        Name:
        <input
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>

      <label>
        Phone number:
        <input
          name="phone"
          type="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
      </label>
    </>
  );
}

export {GeneralInformation}