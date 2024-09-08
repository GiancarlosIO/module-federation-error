export type TButtonProps = {
  type?: 'button' | 'submit' | 'reset';
};

export const Button = ({ type = 'button' }: TButtonProps) => {
  return <button type={type}>Button</button>;
};

export const ButtonLink = ({ href }: { href: string }) => {
  return <a href={href}>Button Link</a>;
};
