import React, { useState } from 'react';
import AnimatedRing from './AnimatedRing';
import UserIcon from './icons/UserIcon';
import LockIcon from './icons/LockIcon';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    // Add login logic here
  };

  return (
    <div className="relative w-[95vw] max-w-md aspect-square sm:w-[48rem] sm:h-[48rem] sm:max-w-none flex items-center justify-center">
      <AnimatedRing />
      <div className="relative z-10 w-full h-full bg-slate-900/50 rounded-3xl sm:rounded-full flex flex-col items-center justify-center p-6 sm:p-8 space-y-4 sm:space-y-10">
        
        <div className="text-center">
          <h1 className="text-4xl sm:text-7xl font-bold text-cyan-300 tracking-wider">
            Login
          </h1>
          <p className="text-slate-300 mt-2 sm:mt-4 text-base sm:text-xl">Access your secure account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-8 w-full sm:w-[28rem]">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <UserIcon className="h-6 w-6 sm:h-7 sm:w-7 text-slate-500" />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-12 sm:pl-14 pr-4 py-3 sm:py-5 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent focus:shadow-lg focus:shadow-cyan-500/30 transition-all duration-300 text-base sm:text-xl"
              aria-label="Email"
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <LockIcon className="h-6 w-6 sm:h-7 sm:w-7 text-slate-500" />
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-12 sm:pl-14 pr-4 py-3 sm:py-5 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent focus:shadow-lg focus:shadow-cyan-500/30 transition-all duration-300 text-base sm:text-xl"
              aria-label="Password"
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-sm sm:text-lg text-slate-400 hover:text-cyan-300 transition duration-300">
              Forgot password?
            </a>
          </div>
          
          <button 
            type="submit" 
            className="w-full py-3 sm:py-5 bg-cyan-500 text-slate-900 font-bold rounded-lg hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300 ease-in-out text-base sm:text-xl"
          >
            Login
          </button>
        </form>
        
        <div className="text-center">
          <p className="text-sm sm:text-lg text-slate-400">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-cyan-400 hover:text-cyan-300 transition duration-300">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
