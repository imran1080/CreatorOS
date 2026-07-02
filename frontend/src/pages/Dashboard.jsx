import DashboardHeader from "../components/Dashboard/DashboardHeader";
import StatsCards from "../components/Dashboard/StatsCards";
import QuickActions from "../components/Dashboard/QuickActions";
import RecentActivity from "../components/Dashboard/RecentActivity";

function Dashboard() {
  return (
    <>
  <DashboardHeader />
      
      <StatsCards />

      <QuickActions />

      <RecentActivity />
    </>
  );
}

export default Dashboard;