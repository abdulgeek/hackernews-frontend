import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-[#CC5202] text-white p-4">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-xl">Hacker News</h1>
                <nav>
                    <Link href="/" legacyBehavior><a className="mx-2">Home</a></Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
