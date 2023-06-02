import Link from "next/link";
import { useRouter } from "next/router";
import { getAuth, signOut } from "firebase/auth";

const NavBar = () => {
  const router = useRouter();
  const logout = async () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.push("../");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <nav className="w-full bg-gray-800">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <p className="text-white font-bold">My Chat App</p>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="./NavBar">
                <p className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Chat Rooms
                </p>
              </Link>
              <Link href="./NavBar">
                <p className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Profile
                </p>
              </Link>
              <Link href="../" onClick={logout}>
                <p className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Logout
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
