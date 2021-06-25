import headerStyes from "../styles/Header.module.css";

const Header = () => {
  //   const x = 2;
  return (
    <div>
      <h1 className={headerStyes.title}>
        <span>WebDEv</span> News
      </h1>
      <p className={headerStyes.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa!
      </p>
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
      </style> */}
    </div>
  );
};

export default Header;
