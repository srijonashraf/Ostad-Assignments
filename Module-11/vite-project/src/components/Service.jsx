
const Service = () => {
  const handleItemClick = (event) => {
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach((item) => {
      item.classList.remove("active");
    });
    event.target.classList.add("active");
  };

  return (
    <div className="d-flex flex-column gap-2 align-items-center">
      <h1>Services</h1>
      <ul className="list-group">
        <li
          className="list-group-item list-group-item-action active"
          onClick={handleItemClick}
        >
          Web Development
        </li>
        <li
          className="list-group-item list-group-item-action"
          onClick={handleItemClick}
        >
          Mobile Development
        </li>
        <li
          className="list-group-item list-group-item-action"
          onClick={handleItemClick}
        >
          UI/UX Design
        </li>
        <li
          className="list-group-item list-group-item-action"
          onClick={handleItemClick}
        >
          Game Development
        </li>
        <li
          className="list-group-item list-group-item-action"
          onClick={handleItemClick}
        >
          3D Modeling
        </li>
        <li
          className="list-group-item list-group-item-action"
          onClick={handleItemClick}
        >
          Video Editing
        </li>
        <li
          className="list-group-item list-group-item-action"
          onClick={handleItemClick}
        >
          Photography
        </li>
        <li
          className="list-group-item list-group-item-action"
          onClick={handleItemClick}
        >
          Video Editing
        </li>
      </ul>
    </div>
  );
};

export default Service;
