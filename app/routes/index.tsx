import Sidebar from "~/components/sidebar";
import { Outlet } from "remix";

export default function Index() {
  return (
    <main className="grid grid-cols-6 gap-4 grid-flow-col p-6">
      <Sidebar />
      <div className="m-4 col-span-5 ">
        <Outlet />
      </div>
    </main>
  );
}
