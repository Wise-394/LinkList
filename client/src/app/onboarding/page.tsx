export default function OnBoarding() {
  return (
    <div className="flex flex-1 items-center justify-center p-4">
      <main className="w-full rounded-2xl bg-gray-500 p-4">
        <p className="text-sm">Step 1 of 1</p>
        <h1 className="text-2xl font-bold">Enter your LinkList username</h1>
        <p>
          This will become your public profile address. You cant change this
          username later.
        </p>
        <p className="mt-5 font-bold">USERNAME</p>
      </main>
    </div>
  );
}
