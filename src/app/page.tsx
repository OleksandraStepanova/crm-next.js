import StatusLable, { Status } from './components/active-lable';

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-xl">Home page</h1>
        <StatusLable status={Status.Active}>Active</StatusLable>
        <StatusLable status={Status.NonActive}>Non Active</StatusLable>
        <StatusLable status={Status.Pending}>Pending</StatusLable>
        <StatusLable status={Status.Suspended}>Suspended</StatusLable>
      </main>
    </div>
  );
}
