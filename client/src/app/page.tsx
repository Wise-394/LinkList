import { GuestHeader } from "@/components/features/header/guestHeader";
import { LoginButton } from "@/components/features/button/loginButton";
import { LoginModal } from "@/components/features/modal/loginModal";
import { ProfileCard } from "@/components/features/Profile/profileCard";

export default function Home() {
  const sampleProfileCard = {
    name: "juan dela cruz",
    description: "a very long description for my profile",
    linkItems: [
      {
        id: 1,
        userId: "1",
        label: "Instagram",
        url: "https://instagram.com/juandelacruz",
        icon: "instagram",
        order: 1,
      },
      {
        id: 2,
        userId: "1",
        label: "Twitter",
        url: "https://twitter.com/juandelacruz",
        icon: "twitter",
        order: 2,
      },
      {
        id: 3,
        userId: "1",
        label: "GitHub",
        url: "https://github.com/juandelacruz",
        icon: "github",
        order: 3,
      },
    ],
  };
  return (
    <>
      <div className="flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-black">
        <GuestHeader />
        <main className="flex min-h-full w-full flex-1 flex-col md:grid md:grid-cols-2">
          <div className="flex min-h-[92vh] flex-col items-center justify-start p-2 pt-[30vh] text-center md:mx-[10%] md:min-h-0 md:items-start md:text-left lg:mx-[20%]">
            <h1 className="text-2xl font-bold lg:text-3xl">
              Just One Link. <br /> For All of your Socials
            </h1>
            <h2 className="text-lg lg:text-2xl">
              Build a clean page for all your socials in minutes. <br /> No
              code, no clutter, all simplified.
            </h2>
            <div className="mt-5 w-full max-w-70 px-2">
              <LoginButton />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <div className="h-[60vh] w-80">
              <ProfileCard
                name={sampleProfileCard.name}
                description={sampleProfileCard.description}
                linkItems={sampleProfileCard.linkItems}
              />
            </div>
          </div>
        </main>
      </div>
      <LoginModal />
    </>
  );
}
