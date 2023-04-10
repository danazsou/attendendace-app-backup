import { Link } from 'react-router-dom';

export const Portal = () => {
  return (
    <div>
      <h1 class="subtitle-dashboard"> Attendance Dashboard </h1>
     <Link to="/create">
          <button  class="create">
            Create Class
          </button>
          </Link>
  

      <div class="grid-container">
        <form action="/add/:id" method="post">
          <button type="submit" class="absent">
            Absent
          </button>
        </form>
        <form action="/add/:id" method="post">
          <button type="submit" class="present">
            Present
          </button>
        </form>
      </div>
    </div>
  );
};
