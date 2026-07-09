import { GuestHeader } from "@/components/features/header/guestHeader";
import { LoginModal } from "@/components/features/modal/loginModal";

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1  bg-zinc-50 font-sans dark:bg-black">
        <GuestHeader />
        <main></main>
      </div>
      <LoginModal />
    </>
  );
}
