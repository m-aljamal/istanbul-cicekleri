import React from "react";

const socialMedai = [
  {
    id: 1,
    icon: "fab fa-instagram",
    link: "/",
  },
  {
    id: 2,
    icon: "fab fa-facebook-square",
    link: "/",
  },
  {
    id: 3,
    icon: "fab fa-twitter",
    link: "/",
  },
  {
    id: 4,
    icon: "fab fa-linkedin",
    link: "/",
  },
];

const SocialMedia = () => {
  return (
    <div className="flex space-x-7 justify-center ">
      {socialMedai?.map((item) => (
        <div key={item.id}>
          <a href={item.link} target="_blank">
            <i
              className={`${item.icon} fa-lg text-primary hover:text-secondary transition-all duration-150 ease-out `}
            ></i>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
