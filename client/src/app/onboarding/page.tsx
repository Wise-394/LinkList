"use client";
import { Button } from "@/components/ui/button";
export default function OnBoarding() {
  return (
    <div className="flex flex-1 items-center justify-center p-4">
      <main className="w-full max-w-110 rounded-2xl bg-gray-500 p-4">
        <p className="text-sm">Step 1 of 1</p>
        <h1 className="text-2xl font-bold">Enter your LinkList username</h1>
        <p>
          This will become your public profile address. You cant change this
          username later.
        </p>
        <div className="mt-5 flex flex-col">
          <label htmlFor="password" className="mt-5 font-bold">
            USERNAME
          </label>
          <div className="text-1xl flex w-full gap-2 rounded-lg bg-gray-400 p-2">
            <p>linklist.com/</p>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="enter name"
              className="flex-1"
            />
          </div>
          <p>this username is available</p>
          <div className="mt-5">
            <Button label="confirm" onClick={() => {}} />
          </div>
        </div>
      </main>
    </div>
  );
}
