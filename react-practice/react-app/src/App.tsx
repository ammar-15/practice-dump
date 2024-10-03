function MyHeading() {
  return (
    <nav className="nav_heading">
    <h1>This is a heading</h1>
    <div className="nav_items">
    <ul>item1</ul>
    <ul>item2</ul>
    <ul>item3</ul>
    <ul>item4</ul>
    </div>
    </nav>
  );
}

function MyBody() {
  return(
    <body>
      <div className="body_class">
        <button className="button_class">
          This is a button
        </button>
      </div>
    </body>
  );
}


export default function MyApp() {
  return (
    <>
      <MyHeading />
      <MyBody />
    </>
  );
}
