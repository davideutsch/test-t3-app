import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1 pl-5 text-3xl font-bold">
        {session?.user.name ? `Notes for ${session.user.name}` : ""}
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          {session?.user ? (
            <label
              tabIndex={0}
              className="avatar btn btn btn-circle btn-ghost"
              onClick={() => void signOut()}
            >
              <div className="w-10 rounded-full">
                <Image
                  src={session.user.image ?? ""}
                  alt={session.user.name ?? ""}
                  width={40}
                  height={40}
                />
              </div>
            </label>
          ) : (
            <button
              className="btn btn-ghost rounded-btn"
              onClick={() => void signIn()}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
