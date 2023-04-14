import { Link } from 'react-router-dom';

export const Portal = () => {
  return (
    <div>
      <h1 className="subtitle-dashboard"> Attendance Dashboard </h1>
     <Link to="/create">
          <button  className="create">
            Create Class
          </button>
          </Link>
  

      <div className="grid-container">
        <form action="/add/:id" method="post">
          <button type="submit" className="absent">
            Absent
          </button>
        </form>
        <form action="/add/:id" method="post">
          <button type="submit" className="present">
            Present
          </button>
        </form>
      </div>
    </div>
  );
};
