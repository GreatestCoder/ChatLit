import { useState } from "react";
import { authStore } from "../lib/store/authStore";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const { signup, isSigningUp } = authStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) signup(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-lg mt-7">

        {/* Card */}
        <div className="backdrop-blur-xl bg-base-100/70 border border-base-300 rounded-3xl p-8 shadow-2xl mt-7">

          <div className="text-center mb-8">
            <div className="mx-auto mb-4 size-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
              <MessageSquare className="size-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold">Welcome to ChatLit</h1>
            <p className="text-primary text-sm font-medium mt-1">Connect • Chat • Collaborate</p>
            <p className="text-base-content/60 mt-2">Create an account and start chatting instantly.
              <div className="flex justify-center gap-3 mt-4 flex-wrap">
                <div className="badge badge-outline">⚡ Real-time </div>
                <div className="badge badge-outline">🔒 Secure </div>
                <div className="badge badge-outline">🌍 Global </div>
              </div>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="label"><span className="label-text">Full Name</span></label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-base-content/40" />
                <input type="text" placeholder="John Doe" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="input w-full pl-12 h-12 rounded-xl bg-base-200/70 border-white/10 focus:border-cyan-400"/>
              </div>
            </div>

            <div>
              <label className="label"><span className="label-text">Email</span></label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-base-content/40" />
                <input type="email" placeholder="you@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="input w-full pl-12 h-12 rounded-xl bg-base-200/70 border-white/10 focus:border-cyan-400"/>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-base-content/40" />
                <input type={showPassword ? "text" : "password"} placeholder="••••••••" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="input w-full pl-12 h-12 rounded-xl bg-base-200/70 border-white/10 focus:border-cyan-400"/>

                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/50" />
                  ) : (
                    <Eye className="size-5 text-base-content/50" />
                  )}
                </button>
              </div>
            </div>

            {/* Button */}
            <button type="submit" disabled={isSigningUp} className="btn w-full h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 border-0 text-white hover:scale-[1.01] transition-transform">
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-base-content/60">Already have an account?{" "}<Link to="/login" className="text-primary font-semibold hover:underline">Log In</Link></p>
          </div>
          
        </div>
      </div>
    </div>
  );
};