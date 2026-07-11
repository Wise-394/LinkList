import type { ReactNode } from "react";

type OnboardingLayoutProps = {
  children: ReactNode;
};

export default function OnboardingLayout({ children }: OnboardingLayoutProps) {
  return <div className="flex flex-1">{children}</div>;
}
