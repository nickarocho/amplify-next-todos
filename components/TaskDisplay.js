// import { CheckboxField } from "@aws-amplify/ui-react";

import Link from "next/link";

const TaskDisplay = ({ task, submit }) => {
  console.log({ task, submit });
  return (
    <li>
      <form
        method="put"
        action={`/task/${task.id}`}
        style={{ marginBottom: "10px" }}
      >
        {/* this is causing a weird React error, using primitive */}
        {/* <CheckboxField
          checked={task.done}
          onChange={async (e) => {
            // submit(e.currentTarget.form);
          }}
          label="hey"
        /> */}
        <div>
          <input
            type="checkbox"
            name={task.name}
            id={task.id}
            onChange={() => {
              console.log("hiiii");
            }}
          />
          <label htmlFor={task.id}>
            <Link href={`tasks/${task.id}`}>
              <a>{task.name}</a>
            </Link>
          </label>
        </div>
      </form>
      {/* <CheckboxField label="Subscribe" name="subscribe" value="yes" />; */}
    </li>
  );
};

export default TaskDisplay;
