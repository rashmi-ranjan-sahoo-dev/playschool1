import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { LogIn, Key, Mail } from 'lucide-react';

export function SignInModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignedIn(true);
  };

  const handleReset = () => {
    setSignedIn(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleReset} title="Parent Portal Sign In" maxWidth="max-w-md">
      {!signedIn ? (
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <p className="text-xs text-stone-500 mb-4">
            Sign in to access your child's daily activity journal, CCTV live access permissions, and attendance updates.
          </p>

          <div className="space-y-1">
            <label className="text-xs font-display font-semibold text-stone-700 block">
              Registered Email or Phone
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
              <input
                type="text"
                required
                placeholder="parent@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-sm pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#f57f25] bg-stone-50/50"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-display font-semibold text-stone-700 block">
              Password
            </label>
            <div className="relative">
              <Key className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-sm pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#f57f25] bg-stone-50/50"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full font-script text-xl bg-[#f57f25] hover:bg-[#e06c15] text-white py-3 rounded-full shadow-md transition-all flex items-center justify-center gap-2"
            >
              <LogIn className="w-5 h-5" />
              <span>Sign In to Portal</span>
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center py-6">
          <div className="w-12 h-12 rounded-full bg-[#a9d63b]/20 text-[#a9d63b] flex items-center justify-center mx-auto mb-3">
            <LogIn className="w-6 h-6" />
          </div>
          <h4 className="font-display font-bold text-xl text-stone-800 mb-1">
            Welcome Back!
          </h4>
          <p className="text-xs text-stone-500 mb-6">
            Demo Portal Session initialized for {email || 'Parent'}.
          </p>
          <button
            onClick={handleReset}
            className="font-script text-lg bg-[#f57f25] text-white px-6 py-2 rounded-full"
          >
            Close
          </button>
        </div>
      )}
    </Modal>
  );
}
