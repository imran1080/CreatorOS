import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import AIWriter from "./pages/AIWriter";
import Thumbnail from "./pages/Thumbnail";
import Planner from "./pages/Planner";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<DashboardLayout />}>
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/ai-writer" element={<AIWriter />} />
  <Route path="/thumbnail" element={<Thumbnail />} />
  <Route path="/planner" element={<Planner />} />
  <Route path="/settings" element={<Settings />} />
</Route>
    </Routes>
  );
}

export default App;