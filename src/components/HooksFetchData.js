// DataComponent.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux";

const DataComponent = () => {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector((state) => state.api); // Make sure `state.api` is used here

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <p>Name : {user.name}</p> 
            <p>Username :({user.username}) </p>
            <p>Email :{user.email} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataComponent;
