import clsx from 'clsx';
import NavBarLinks from './navBarLinks';


export default function DesktopNav() {
  
    return (
        <nav className={clsx("h-full w-full md:flex hidden flex-col gap-4 px-4 py-6 max-w-52")}>
           <NavBarLinks />
        </nav>
    )
}
