import DashboardHeader from "../components/Dashboard/DashboardHeader";
import StatsCards from "../components/Dashboard/StatsCards";
import QuickActions from "../components/Dashboard/QuickActions";
import RecentActivity from "../components/Dashboard/RecentActivity";
import WelcomeBanner from "../components/Dashboard/WelcomeBanner";
import LatestProjects from "../components/Dashboard/LatestProjects";

function Dashboard() {
  return (
    <>
  <DashboardHeader />

  <WelcomeBanner />
      
      <StatsCards />

      <QuickActions />

      <RecentActivity />
      
      <LatestProjects />

    </>
  );
}

export default Dashboard;