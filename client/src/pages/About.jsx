import React, { useState, useEffect } from "react";

function About() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('/users')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setMsg(data.msg);
      })
  }, []);

  return (
    <>
      <div>{msg}</div>
    </>
  );
}

export default About;
