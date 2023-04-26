import { LayoutContainer } from './Styled';

type LayoutProps = {
  children: React.ReactNode
};

export function Layout({ children }: LayoutProps) {
  return <LayoutContainer>{children}</LayoutContainer>
};
