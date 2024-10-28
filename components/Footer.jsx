import { FaInstagram, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="relative mt-10 ripple-background">
        <div className="absolute top-0 left-0 overflow-hidden bg-accent">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="realtive block fill-white"></path>
        </svg>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-2 xl:gap-14 xl:px-20 gap-1 p-5 text-primary">
            <div className="flex flex-col gap-2 col-span-2 xl:col-span-1">
                <h2 className="xl:text-2xl text-1xl mb-4">
                    تکنورزبری<sup className='text-sm bg-gradient-to-r bg-clip-text text-transparent 
            from-white via-accent to-[#eee]
            animate-text'>خدمتی نوین</sup>
                </h2>
                <p className='text-justify mb-3'>
                تکنورزبری ارائه دهنده خدماتی نوین؛ نرم‌افزاری، سخت‌افزاری و طراحی گرافیکی در سطح ایران و بین‌الملل<br /><span>✨با خیال راحت پروژتو به ما بسپار</span>
                </p>
            </div>
            <div className="flex flex-col gap-2 border p-3 rounded-md border-white/30 hover:border-white duration-500">
                <h2 className="xl:text-2xl text-1xl">
                    خدمات
                </h2>
                <ul>
                    <li className="my-4 list-none">سایت</li>
                    <li className="my-4 list-none">طراحی و گرافیک</li>
                    <li className="my-4 list-none">سخت افزار</li>
                </ul>
            </div>
            <div className="flex flex-col gap-2 border p-3 rounded-md border-white/30 hover:border-white duration-500">
                <h2 className="xl:text-2xl text-1xl">
                    مفید
                </h2>
                <ul>
                    <li className="my-4 list-none">پورتفولیو</li>
                    <li className="my-4 list-none">درباره ما</li>
                    <li className="my-4 list-none">ارتباط با ما</li>
                    <li className="my-4 list-none">وبلاگ</li>
                </ul>
            </div>
            <div className="flex flex-col gap-2 border p-3 rounded-md border-white/30 hover:border-white duration-500">
                <h2 className="xl:text-2xl text-1xl">
                    ارتباط
                </h2>
                <ul>
                    <li className="my-4 list-none flex items-center gap-2"><FaEnvelope />ایمیل</li>
                    <li className="list-none flex items-center gap-2"><FaPhone />شماره</li>
                </ul>
                <div className='flex gap-3'>
                    <a href="/"><FaGithub /></a>
                    <a href="/"><FaInstagram /></a>
                </div>
            </div>
            <div className="flex flex-col gap-2 border p-3 rounded-md border-white/30 hover:border-white duration-500">
                <h2 className="xl:text-2xl text-1xl">
                    نماد
                </h2>
                <ul>
                    <li className="my-4 list-none">ای‌نماد</li>
                </ul>
            </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;