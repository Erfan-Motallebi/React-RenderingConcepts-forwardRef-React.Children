import React from "react";

function ChildFactory({
  factoryInfo: { name, expireTime, dateOfBirth, owner },
}) {
  console.info("ChildFactory Rendered");
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Child Factory Info</h1>
      <ul>
        <h3>
          <li>{name}</li>
        </h3>
        <h3>
          <li>{expireTime}</li>
        </h3>
        <h3>
          <li>{dateOfBirth}</li>
        </h3>
        <h3>
          <li>{owner}</li>
        </h3>
      </ul>
    </div>
  );
}

export default React.memo(ChildFactory);
