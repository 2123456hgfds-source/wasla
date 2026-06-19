"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

   const { error } = await supabase.auth.signUp({
  email,
  password,
  options: {
    emailRedirectTo: "https://wasla-rouge.vercel.app",
  },
});

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("تم إنشاء الحساب. تحقق من بريدك الإلكتروني.");
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl">
      <h1 className="text-2xl font-bold mb-6">إنشاء حساب</h1>

      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded"
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          إنشاء حساب
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center">
          {message}
        </p>
      )}
    </div>
  );
}
