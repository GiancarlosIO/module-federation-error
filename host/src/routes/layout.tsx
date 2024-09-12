import { Outlet } from '@modern-js/runtime/router';
import * as remote from 'remote/button';

console.log({ remote });
const { ButtonLink, Button } = remote;

export default function Layout() {
  return (
    <div>
      <Button>Hey</Button>
      <ButtonLink href="/example">Modern JS</ButtonLink>
      <ButtonLink href="/">Root</ButtonLink>
      <Outlet />
    </div>
  );
}
