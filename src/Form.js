import React, { useState } from "react";

export default function Form() {
  const [userinfo, setUserinfo] = useState({
    username: "",
    email: "",
    passworld: "",
    number: "",
  });

  const [record, setRecord] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserinfo({ ...userinfo, [name]: value });
  };

  const submitBtn = (e) => {
    e.preventDefault(); 
    const newData = { ...userinfo, id : new Date().getTime().toString()};

    console.log(newData);

    setRecord([...record, newData]);

    // setUserinfo({
    // username : "",
    // email : "",
    // passworld : "",
    // number : "",});
  };

  return (
    <div className="MainContainer">
      <div className="form">
        <form action="" onSubmit={submitBtn}>
          <div className="name center">
            <h3>enter name </h3>
            <input
              className="inp"
              type="text"
              name="username"
              autoComplete="off"
              value={userinfo.username}
              onChange={handleInput}
            />
          </div>

          <div className="email center">
            <h3>enter email</h3>
            <input
              className="inp"
              type="email"
              name="email"
              autoComplete="off"
              value={userinfo.email}
              onChange={handleInput}
            />
          </div>

          <div className="passworld center">
            <h3>enter passworld</h3>
            <input
              className="inp"
              type="password"
              name="passworld"
              autoComplete="off"
              value={userinfo.passworld}
              onChange={handleInput}
            />
          </div>

          <div className="phone_num center">
            <h3>emter number</h3>
            <input
              className="inp"
              type="text"
              name="number"
              autoComplete="off"
              value={userinfo.number}
              onChange={handleInput}
            />
          </div>

          <div className="btn_submit center">
            <button type="submit">Submit</button>
          </div>
        </form>
        </div>
        <div className="data">
          
          {record.map((current) => {
            return (
              <div className="showstyle" key={current.id}>
                <p> - name is : " {current.username} " - </p>
                <p>email is : " {current.email}" - </p>
                <p>passworld is :  " {current.passworld} " - </p>
                <p>number is : " {current.number} " </p>
              </div>
            );
          })}
        </div>
      
    </div>
  );
}
