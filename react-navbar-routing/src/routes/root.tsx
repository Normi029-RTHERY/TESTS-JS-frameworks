import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
        <>
            <div id="sidebar" className='fixed top-0 left-0 h-full max-w-7xl bg-slate-200 border-r border-slate-300 divide-y divide-slate-300'>
                <div className='flex p-6 pt-8 gap-2'>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                            className='p-1 px-4 rounded-lg shadow-md bg-white'
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <form method="post">
                        <button type="submit" className='p-1 px-4 rounded-lg shadow-md bg-white text-sky-500'>New</button>
                    </form>
                </div>
                <nav>
                    <ul className='flex flex-col mb-auto pl-8 py-8 gap-6'>
                        <li>
                            <Link to={'contacts/1'}>Your Name</Link>
                        </li>
                        <li>
                            <Link to={'contacts/2'}>Friend Name</Link>
                        </li>
                    </ul>
                </nav>
                <h1 className='absolute w-full bottom-0 p-6 pl-8 font-semibold'>React Router Contacts</h1>
            </div>
            <div id="detail" className="box-border ml-96 p-8">
                <Outlet />
            </div>
        </>
    );
}