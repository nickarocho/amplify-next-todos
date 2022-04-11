// import { Form } from "remix";
// import { TextField, Button } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { Task } from "../src/models";

export default function CreateTask() {
  const createTask = async (e) => {
    e.preventDefault();
    await DataStore.save(
      new Task({
        name: e.target[0].value,
      })
    );
  };

  return (
    <form onSubmit={createTask}>
      <input type="text" label="Create a task" id="create-new-task" />
      <label htmlFor="create-new-task"></label>
      <input type="submit" name="submit" id="submit-btn" />
    </form>
  );
}
