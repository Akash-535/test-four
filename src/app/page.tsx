import Login from "@/components/auth/Login";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <Login />
    </Suspense>
  );
}
