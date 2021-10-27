import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://boiling-caverns-55498.herokuapp.com/services", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("Successfully Added");
          reset();
        }
      });
  };

  return (
    <div className="add-service">
      <h2>Input the service details</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Full Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea placeholder="Description" {...register("description")} />
        <input placeholder="Price" type="number" {...register("price")} />
        <input placeholder="Image URL" {...register("img")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
