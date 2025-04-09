

import AlertComponent from "@/components/AlertComponent";
import { LoginForm } from "@/components/login-form";



export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-9 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <AlertComponent />
      <LoginForm />
    </div>
  );
}
