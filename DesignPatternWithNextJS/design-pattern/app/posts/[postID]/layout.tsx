import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const layout = ({ children }: LayoutProps): JSX.Element => {
  return <div>{children}</div>;
};

export default layout;
