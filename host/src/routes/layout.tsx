import { Outlet } from '@modern-js/runtime/router';
import * as remote from 'remote/button';

console.log({ remote });

export default function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
