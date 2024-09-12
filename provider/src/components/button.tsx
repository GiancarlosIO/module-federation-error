import { useNavigate } from '@modern-js/runtime/router';

export type TButtonProps = {
  type?: 'button' | 'submit' | 'reset';
};

export const Button = ({ type = 'button' }: TButtonProps) => {
  return <button type={type}>Button</button>;
};

export const ButtonLink = ({ href }: { href: string }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(href);
      }}
    >
      Button Link
    </button>
  );
};
