import StatusLable, { Status } from './components/active-lable';

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-xl">Home page</h1>
        <StatusLable status={Status.Active} disabled>
          Active
        </StatusLable>
        <StatusLable status={Status.NonActive} disabled>
          Non Active
        </StatusLable>
        <StatusLable status={Status.Pending} disabled>
          Pending
        </StatusLable>
        <StatusLable status={Status.Suspended} disabled>
          Suspended
        </StatusLable>
      </main>
    </div>
  );
}
