import React from "react";
import { Button } from "./ui/button";
import { Heart, CarFront, Layout, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";

const Header = async ({ isAdminPage = false }) => {
  const user = await checkUser();
  const isAdmin = user?.role === "ADMIN";

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href={isAdminPage ? "/admin" : "/"} className="flex items-center gap-3 relative">

          {/* 🔥 subtle car shadow behind logo */}
          <div className="absolute -left-4 -top-3 text-5xl opacity-10 blur-[1px]">
            🚗
          </div>

          {/* brand name */}
          <div className="flex items-center font-extrabold text-xl tracking-tight relative z-10">

            <span className="text-blue-600 drop-shadow-sm">Auto</span>

            <span className="text-black relative">
              Nexa

              {/* underline glow effect */}
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-blue-500/40 via-purple-500/30 to-transparent blur-[1px]"></span>
            </span>
          </div>

          {/* AI tag */}
          <span className="text-[10px] text-gray-500 mt-1 z-10">AI</span>

          {isAdminPage && (
            <span className="text-xs font-extralight ml-2">admin</span>
          )}
        </Link>

        {/* ACTION BUTTONS */}
        <div className="flex items-center space-x-4">

          {isAdminPage ? (
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft size={18} />
                <span>Back to App</span>
              </Button>
            </Link>
          ) : (
            <SignedIn>
              {!isAdmin && (
                <Link
                  href="/reservations"
                  className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
                >
                  <Button variant="outline">
                    <CarFront size={18} />
                    <span className="hidden md:inline">My Reservations</span>
                  </Button>
                </Link>
              )}

              <a href="/saved-cars">
                <Button className="flex items-center gap-2">
                  <Heart size={18} />
                  <span className="hidden md:inline">Saved Cars</span>
                </Button>
              </a>

              {isAdmin && (
                <Link href="/admin">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Layout size={18} />
                    <span className="hidden md:inline">Admin Portal</span>
                  </Button>
                </Link>
              )}
            </SignedIn>
          )}

          <SignedOut>
            {!isAdminPage && (
              <SignInButton forceRedirectUrl="/">
                <Button variant="outline">Login</Button>
              </SignInButton>
            )}
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>

        </div>
      </nav>
    </header>
  );
};

export default Header;