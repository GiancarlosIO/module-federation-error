import { Outlet } from '@modern-js/runtime/router';

console.log({ Outlet });
export default function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
