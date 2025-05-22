import { AnimatedRoutes } from "./components/Layout/AnimatedRoutes";

/*
  ========================================
  APP
  ======================================== */

export default function App() {
  return (
    <main className="h-full w-screen overflow-x-hidden flex flex-col">
      <AnimatedRoutes />
    </main>
  );
}
