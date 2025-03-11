import DetailedMetrices from "@/components/dashboard/DetailedMetrices";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense>
      <DetailedMetrices />
    </Suspense>
  );
};

export default page;
