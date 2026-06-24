import { useState } from "react";
import { authStore } from "../lib/store/authStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = authStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-lg mt-7">
        <div className="backdrop-blur-xl bg-base-100/70 border border-base-300 rounded-3xl p-8 shadow-2xl mt-7">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 size-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
              <MessageSquare className="size-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-primary text-sm font-medium mt-2">Continue your conversations</p>
            <p className="text-base-content/60 mt-3">Sign in to access your account.</p>

            {/* Feature Badges */}
            <div className="flex justify-center gap-2 mt-5 flex-wrap">
              <div className="badge badge-outline"> 💬 Messages </div>
              <div className="badge badge-outline"> ⚡ Real-time </div>
              <div className="badge badge-outline"> 🔒 Secure </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="label"><span className="label-text">Email</span></label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-base-content/40" />
                <input type="email" placeholder="you@example.com" value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="input w-full h-12 pl-12 rounded-xl bg-base-200/70 border-white/10"/>
              </div>
            </div>

            <div>
              <label className="label"><span className="label-text">Password</span></label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-base-content/40" />
                <input type={showPassword ? "text" : "password"} placeholder="••••••••" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="input w-full h-12 pl-12 rounded-xl bg-base-200/70 border-white/10"/>
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/50" />
                  ) : (
                    <Eye className="size-5 text-base-content/50" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" disabled={isLoggingIn}
              className="btn w-full h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 border-0 text-white hover:scale-[1.01] transition-transform">
              {isLoggingIn ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-base-content/60">Don't have an account?{" "}<Link to="/signup" className="text-primary font-semibold hover:underline">Create Account</Link></p>
          </div>

        </div>
      </div>
    </div>
  );
};