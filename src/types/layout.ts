export type PageWithLayout = {
  Layout?: React.FC<any>;
};

export type AppWithLayout = {
  Component: PageWithLayout;
};
