import Login from "@/components/login/Login";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <Login />
    </Suspense>
  );
}
