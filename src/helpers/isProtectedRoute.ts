const protectedRoutes = ["/"];

export const isProtectedRoute = (pathname: string): boolean => {
  return protectedRoutes.includes(pathname);
};
