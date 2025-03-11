import LoginPage from "@/components/login-page/LoginPage";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <LoginPage />
    </Suspense>
  );
}
