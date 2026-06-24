import { Link } from "react-router-dom";
import { authStore } from "../lib/store/authStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";


export default function Navbar() {
  const { logout, authUser } = authStore();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-base-100/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 transition-all hover:scale-[1.02]">
          <div className="size-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>

          <div>
            <h1 className="font-bold text-xl tracking-tight">ChatLit</h1>
            <p className="text-xs text-base-content/60 hidden md:block">Connect • Chat • Collaborate</p>
          </div>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Link to="/settings" className="btn btn-ghost btn-circle"><Settings className="size-5" /></Link>

          {authUser && (
            <>
              <Link to="/profile" className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-base-200 transition">
                <div className="avatar placeholder">
                  <div className="bg-primary text-primary-content rounded-full w-8">
                    <span>{authUser.fullName?.charAt(0).toUpperCase()}</span>
                  </div>
                </div>
                <span className="hidden md:block font-medium">{authUser.fullName}</span>
              </Link>

              <button onClick={logout} className="btn btn-ghost btn-circle hover:text-error"><LogOut className="size-5" /></button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
