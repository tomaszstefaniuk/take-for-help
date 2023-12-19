import { DashboardLayout, DashboardPage } from "@/components/templates";
import { withAuth } from "@/hoc";

export default withAuth(DashboardPage, DashboardLayout);
