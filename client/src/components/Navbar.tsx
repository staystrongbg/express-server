import { ReactNode } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='flex gap-20 w-full pt-8 items-center lg:justify-start justify-between lg:px-0 px-4'>
      <Link to='/' className='text-2xl font-bold text-gray-700 '>
        <div className='flex'>
          <div className='text-5xl font-bold text-blue-500'>L</div>
          <div className='flex flex-col'>
            <div className=''>IBRE</div>
            <div className='-mt-4'>ibrary</div>
          </div>
        </div>
      </Link>
      <ul className='flex gap-8'>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
        <CustomLink to='/contact'>Contact</CustomLink>
        <CustomLink to='/library'>Library</CustomLink>
      </ul>
    </nav>
  );
}

type NavProps = {
  to: string;
  children: ReactNode;
};

function CustomLink({ to, children, ...props }: NavProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'text-blue-400' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
