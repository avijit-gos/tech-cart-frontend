/** @format */

import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className='min-h-screen'>
      {/* Header */}
      <h1>HEADER</h1>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <h1>FOOTER</h1>
    </div>
  );
}
