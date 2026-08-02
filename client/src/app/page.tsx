import { GuestHeader } from "@/components/features/header/guestHeader";
import { LoginButton } from "@/components/features/button/loginButton";
import { LoginModal } from "@/components/features/modal/loginModal";
import { ProfileCard } from "@/components/features/Profile/profileCard";

export default function Home() {
  const sampleProfileCard = {
    name: "juan dela cruz",
    description: "a very long description for my profile",
    profilePhotoURL:
      "https://api.dicebear.com/9.x/notionists/svg?seed=juande&backgroundColor=b6e3f4",
    coverPhotoURL:
      "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              Just <span className="text-cyan-500">One Link.</span> <br /> For
              All of your Socials
            </h1>
            <h2 className="text-lg lg:text-2xl">
              Build a clean page for all your socials in minutes. <br /> No
              code, no clutter, all simplified.
            </h2>
            <div className="mt-5 flex w-full max-w-70 items-center justify-center px-2 md:justify-start">
              <LoginButton />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <div className="h-[60vh] w-full max-w-80">
              <ProfileCard
                profilePhoto={sampleProfileCard.profilePhotoURL}
                coverPhoto={sampleProfileCard.coverPhotoURL}
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
