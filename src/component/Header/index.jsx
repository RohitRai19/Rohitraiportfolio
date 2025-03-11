import React from "react";
import "./Header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import { profile1 } from "../../assets";
import CodeBlock from "../../ui/CodeBlock";

const code = `const developer={
        firstName:"Rohit",
        lastName:"Rai",
        Position:"React Developer || AI Tutor",
        hobby:repeat = () =>{
        //eat();
        // sleep();
        // code();
        // repeat();
        }
         };`

function Header() {
  return (
    <header id="header">
      <div className="section__wrapper">
        <div className="grid upper">
          <div className="column">
            <HeaderTitle />
          </div>
          <div className="column">
            <img
              src={profile1}
              className="profile__photo"
              alt="profile photo"
            />
          </div>
        </div>
        <div className=" card grid lower">
          <CodeBlock language={"JavaScript"} code={code} />
        </div>
      </div>
    </header>
  );
}

export default Header;
