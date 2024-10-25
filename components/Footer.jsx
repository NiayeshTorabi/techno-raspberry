import { FaInstagram, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden bg-accent">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="realtive block fill-white"></path>
        </svg>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-20 p-20 text-primary">
            <div className="flex flex-col gap-5">
                <h2 className="text-3xl mb-4">
                    تکنورزبری
                </h2>
                <p className='text-justify'>
                    تکنورزبری ارائه دهنده خدمات نرم افزاری سایت، طراحی و گرافیک + سخت افزار اینترنت اشیا در جهت هوشمندسازی خانه‌ها
                </p>
            </div>
            <div className="flex flex-col gap-5">
                <h2 className="text-2xl">
                    خدمات
                </h2>
                <ul>
                    <li className="my-4 list-none">سایت</li>
                    <li className="my-4 list-none">طراحی و گرافیک</li>
                    <li className="my-4 list-none">سخت افزار</li>
                </ul>
            </div>
            <div className="flex flex-col gap-5">
                <h2 className="text-2xl">
                    مفید
                </h2>
                <ul>
                    <li className="my-4 list-none">رزومه</li>
                    <li className="my-4 list-none">درباره ما</li>
                    <li className="my-4 list-none">ارتباط با ما</li>
                </ul>
            </div>
            <div className="flex flex-col gap-5">
                <h2 className="text-2xl">
                    ارتباط
                </h2>
                <ul>
                    <li className="my-4 list-none">ایمیل</li>
                    <li className="list-none">شماره</li>
                </ul>
                <div className='flex gap-3'>
                    <a href="/"><FaGithub /></a>
                    <a href="/"><FaInstagram /></a>
                </div>
            </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;