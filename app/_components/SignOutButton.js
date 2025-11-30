import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

function SignOutButton() {
  return (
    <button className='py-3 px-5 hover:bg-neutral-900 hover:text-neutral-100 transition-colors flex items-center gap-4 font-semibold text-neutral-200 w-full'>
      <ArrowRightOnRectangleIcon className='h-5 w-5 text-neutral-600' />
      <span>Sign out</span>
    </button>
  );
}

export default SignOutButton;
