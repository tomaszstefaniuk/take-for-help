import { NextPage } from "next";
import { FC, ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
};

type WithLayoutProps<P> = P & LayoutProps;

export const withLayout = <P extends Record<string, unknown>>(
  Component: NextPage<P>,
  LayoutComponent: FC<WithLayoutProps<P>>
): NextPage<P> => {
  const WrappedComponent: NextPage<P> = (props) => {
    return (
      <LayoutComponent {...props}>{<Component {...props} />}</LayoutComponent>
    );
  };

  return WrappedComponent;
};
