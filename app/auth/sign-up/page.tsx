import { FaMeta } from 'react-icons/fa6';
import { FaGoogle } from 'react-icons/fa';
import { signup } from './actions';
import { ModeToggle } from '@/components/ModeToggle';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground relative">
      {/* Header with Logo and Mode Toggle */}
      <div className="absolute top-4 left-4 flex justify-between w-full px-6">
        <h1 className="text-4xl font-bold text-blue-600">Tiply</h1>
        <ModeToggle />
      </div>

      {/* Signup Form */}
      <form className="w-full max-w-lg p-8 mt-12 bg-card rounded-lg shadow-lg space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block font-medium text-blue-600 mb-1">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-2 rounded-md border border-input bg-input focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
          <small className="text-sm text-gray-400 dark:text-muted">Enter your full name</small>
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block font-medium text-blue-600 mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 rounded-md border border-input bg-input focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="johndoe@mail.com"
          />
          <small className="text-sm text-gray-400 dark:text-muted">We'll never share your email with anyone else.</small>
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block font-medium text-blue-600 mb-1">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full px-4 py-2 rounded-md border border-input bg-input focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>

        {/* Confirm Password Input */}
        <div>
          <label htmlFor="confirm-password" className="block font-medium text-blue-600 mb-1">Confirm Password</label>
          <input
            id="confirm-password"
            name="confirm-password"
            type="password"
            required
            className="w-full px-4 py-2 rounded-md border border-input bg-input focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
          formAction={signup}
        >
          Sign Up
        </button>

        {/* Social Login Options */}
        <div className="flex items-center justify-between space-x-4 mt-6">
          <button className="flex items-center justify-center w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200 gap-2">
            <FaGoogle />
            Sign up with Google
          </button>
          <button className="flex items-center justify-center w-full py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition duration-200 gap-2">
            <FaMeta />
            Sign up with Meta
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-4">
          <span className="h-px bg-gray-400 dark:bg-muted w-full"></span>
          <span className="px-4 text-sm text-gray-400 dark:text-muted">or</span>
          <span className="h-px bg-gray-400 dark:bg-muted w-full"></span>
        </div>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-gray-400 dark:text-muted">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-blue-600 hover:underline ml-1">
              Login
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}
