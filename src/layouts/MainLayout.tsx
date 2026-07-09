/** @format */

import { appStore } from "@/base/store/app/App.store";
import HomeHeader from "@/components/Header/HomeHeader";
import { Outlet } from "react-router-dom";

function HeaderComponent({ pageType }: { pageType: string }) {
  switch (pageType) {
    case "home":
      return <HomeHeader />;
    default:
      return null;
  }
}

export default function MainLayout() {
  const { pageType } = appStore();
  return (
    <div className='min-h-screen'>
      {/* Header */}
      <HeaderComponent pageType={pageType} />

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <h1>FOOTER</h1>
    </div>
  );
}
