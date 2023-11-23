import { FC, PropsWithChildren } from "react";

export const CleanLayout: FC<PropsWithChildren<unknown>> = ({
  children,
}: PropsWithChildren<unknown>) => {
  return (
    <div>
      ALO123
      <main>{children}</main>
    </div>
  );
};
