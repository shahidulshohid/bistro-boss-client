const Footer = () => {
  return (
    <footer>
      <div className="flex h-[300px] lg:h-[400px]">
        <div className="bg-gray-800 w-full flex justify-center items-center">
          <div className=" text-white text-center">
            <h1 className="text-5xl font-bold mb-5">Contact Us</h1>
            <p className="font-semibold">123 ABS Street, Uni 21, Bangladesh </p>
            <p className="font-semibold">+88 123456789</p>
            <p className="font-semibold"> Mon - Fri: 08:00 - 22:00</p>
            <p className="font-semibold">Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="bg-gray-900 w-full flex justify-center items-center">
          <div className=" text-white text-center">
            <h1 className="text-5xl font-bold mb-5">Follow Us</h1>
            <p className="font-semibold">Join us on social media</p>
          </div>
        </div>
      </div>
      <div className="footer footer-center bg-black p-4 text-white">
        <aside>
          <p className="text-xl font-semibold">
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
