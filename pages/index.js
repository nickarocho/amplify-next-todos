import { DataStore } from "aws-amplify";
// import { json, useLoaderData, useSubmit } from "remix";
import { Heading, Button, Text } from "@aws-amplify/ui-react";
import { Task } from "../src/models";
// import { serializeModel } from "@aws-amplify/datastore/ssr";

import CreateTask from "../components/CreateTask";
import TaskDisplay from "../components/TaskDisplay";
import { useEffect, useState } from "react";

function Index({ signOut, user }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
    async function fetchTasks() {
      const taskData = await DataStore.query(Task);
      console.log({ taskData });
      setTasks(taskData);
    }
    DataStore.observe(Task).subscribe(() => fetchTasks());
  }, []);

  const submit = () => {
    console.log("submit...");
  };

  return (
    <div style={{ maxWidth: "60%", margin: "0 auto" }}>
      {/* <Heading level={1} textAlign="center">
        To Do
      </Heading> */}
      <ul>
        {tasks.length &&
          tasks.map((task) => (
            <TaskDisplay submit={submit} key={task.id} task={task} />
          ))}
      </ul>
      <CreateTask />
    </div>
  );
}

export default Index;
