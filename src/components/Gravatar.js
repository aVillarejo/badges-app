import React from "react";
import md5 from "md5";

const Gravatar = ({ email, className }) => {
  const hash = md5(email);
  return (
    <img
      className={className}
      alt="avatar_img"
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
    />
  );
};

export default Gravatar;
