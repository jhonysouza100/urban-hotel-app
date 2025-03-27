// import Navbar from "@/app/(protected)/ui/Navbar";
// import Sidebar from "@/app/(protected)/ui/Sidebar";

// export default function ProtectedLayout({ children, }: { children: React.ReactNode }) {
//   return (
//     <>
//       <Navbar />
//       <Sidebar />
//       <main className="container mx-auto px-4 py-8">{children}</main>
//     </>
//   )
// }

import * as React from "react";
import { NextAppProvider } from "@toolpad/core/nextjs";
import LinearProgress from "@mui/material/LinearProgress";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { RiUploadCloudLine } from "@remixicon/react";

export const NAVIGATION = [
  // ...
  {
    segment: "uploads",
    title: "Uploads",
    icon: <RiUploadCloudLine />,
  },
  // ...
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <React.Suspense fallback={<LinearProgress />}>
        <NextAppProvider navigation={NAVIGATION}>
          <DashboardLayout>
            <PageContainer>{children}</PageContainer>
          </DashboardLayout>
        </NextAppProvider>
      </React.Suspense>
    </AppRouterCacheProvider>
  );
}
