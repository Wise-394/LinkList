import { GuestHeader } from "@/components/features/header/guestHeader";
import { LoginButton } from "@/components/features/button/loginButton";
import { LoginModal } from "@/components/features/modal/loginModal";

export default function Home() {
  return (
    <>
      <div className="flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-black">
        <GuestHeader />
        <main className="flex min-h-full w-full flex-1 grid-cols-2 flex-col md:grid">
          <div className="flex flex-1 flex-col items-center justify-start p-2 pt-[30vh] text-center md:ml-[15%] md:items-start md:text-left">
            <h1 className="text-2xl">
              Just One Link. <br /> For All of your Socials
            </h1>
            <h2 className="text-lg">
              Build a clean page for all your socials in minutes. <br /> No
              code, no clutter, all simplified.
            </h2>
            <div className="mt-5 w-full max-w-70 px-2">
              <LoginButton />
            </div>
          </div>
        </main>
      </div>
      <LoginModal />
    </>
  );
}
