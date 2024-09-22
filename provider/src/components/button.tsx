import { useNavigate } from '@modern-js/runtime/router';

export type TButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
};

export const Button = ({ type = 'button', children }: TButtonProps) => {
  return <button type={type}>{children}</button>;
};

export const ButtonLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(href);
      }}
    >
      {children}
    </button>
  );
};
