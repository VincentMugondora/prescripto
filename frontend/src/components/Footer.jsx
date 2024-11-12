import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10"> 
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        {/* ------- Left Section ------- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* ------- Center Section ------- */}
        <div>
          <p>COMPANY</p>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li> Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* ------- Right Section ------- */}
        <div>
          <p>GET IN TOUCH</p>
          <ul>
            <li>+263 777 530 322</li>
            <li>vinmugondora@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ------- Copyright Text ------- */}
      <div>
        <hr />
        <p>Copyright &copy; 2024 Prescripto. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
