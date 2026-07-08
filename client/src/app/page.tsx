import { GuestHeader } from "@/components/guestHeader";

export default function Home() {
  return (
    <div className="flex flex-col flex-1  bg-zinc-50 font-sans dark:bg-black">
      <GuestHeader />
      <h1>Hello World!</h1>
    </div>
  );
}
