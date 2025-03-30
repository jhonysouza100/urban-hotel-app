import * as React from "react";
import { NextAppProvider } from "@toolpad/core/nextjs";
import LinearProgress from "@mui/material/LinearProgress";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { RiDashboardLine, RiImageLine, RiUploadCloudLine } from "@remixicon/react";
import Image from "next/image";
import SidebarFooterAccount from "../ui/SidebarFooterAccount";

export const NAVIGATION = [
  // ...
  {
    segment: "dashboard/",
    title: "Home",
    icon: <RiDashboardLine />,
  },
  {
    segment: "dashboard/uploads",
    title: "Uploads",
    icon: <RiUploadCloudLine />,
  },
  {
    segment: "dashboard/gallery",
    title: "Gallery",
    icon: <RiImageLine />,
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
        <NextAppProvider 
        navigation={NAVIGATION}
        branding={{
          logo: <Image src="https://www.iguazuurbanhotel.com/android-chrome-192x192.png" alt="Urban Hotel logo" width={200} height={200} />,
          title: '',
          homeUrl: '/',
        }}
        >
          <DashboardLayout 
            slots={{ sidebarFooter: SidebarFooterAccount }}
          >
            <PageContainer>{children}</PageContainer>
          </DashboardLayout>
        </NextAppProvider>
      </React.Suspense>
    </AppRouterCacheProvider>
  );
}
