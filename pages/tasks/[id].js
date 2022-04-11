import { withSSRContext } from "aws-amplify";
import { Task } from "../../src/models";
import { useRouter } from "next/router";

export default function TaskComponent({ task }) {
  console.log({ task });
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{task.name}</h1>
      <h2>
        Done: <code>{`${task.done}`}</code>
      </h2>
      <h3>
        ID: <code>{task.id}</code>
      </h3>
    </div>
  );
}

export async function getStaticPaths(req) {
  const { DataStore } = withSSRContext(req);
  const tasks = await DataStore.query(Task);
  const paths = tasks.map((task) => ({ params: { id: task.id } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(req) {
  const { DataStore } = withSSRContext(req);
  const { params } = req;
  const { id } = params;
  const task = await DataStore.query(Task, id);
  console.log({ task });

  return {
    props: {
      task: JSON.parse(JSON.stringify(task)),
    },
    revalidate: 1,
  };
}
