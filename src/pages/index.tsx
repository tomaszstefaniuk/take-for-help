import { DashboardLayout, HomePage } from "@/components/templates";
import { withAuth } from "@/hoc";

HomePage.Layout = DashboardLayout;

export default withAuth(HomePage);
