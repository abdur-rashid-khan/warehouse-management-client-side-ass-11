import { TrashIcon } from "@heroicons/react/outline";
import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [delivery, setDelivery] = useState([]);

  useEffect(() => {
    const getDelivery = async () => {
      const email = user.email;
      const url = `http://localhost:5000/delivery?email=${email}`;
      const { data } = await axios.get(url);
      setDelivery(data);
    };
    getDelivery();
  }, [user]);
  return (
    <div className="container mx-auto px-4 pt-16 ">
      <h1 className="text-2xl">Selected Items {delivery.length}</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
        {delivery.map((p) => (
          <div className="" key={p._id}>
            <div className="bg-slate-100 border-2 rounded-lg">
              <div className="" style={{ height: "300px" }}>
                <img
                  className="m-auto"
                  src={p.img}
                  alt=""
                  style={{ height: "100%" }}
                />
              </div>
              <div className="p-2">
                <strong>Name : {p.title.slice(0,25)}....</strong>
                <p className="py-4">price : {p.price}</p>
                <p className="">{p.about.slice(0,100)}...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
