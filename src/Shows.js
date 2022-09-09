import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Shows() {
    const navigate = useNavigate();
    const [shows, setShows] = useState([])

    useEffect(() => {
      fetch("http://localhost:3000/shows")
        .then((r) => r.json())
        .then(setShows)
    }, []);

  return (
    <div>
        <h1>Relativity Technical Assignment</h1>
        <Link to="http://localhost:3001/shows/new"><button>Add a Show</button></Link>
        {shows.length > 0 ? (
        <table border="1" width="80%">
        <thead>
            <tr>
                <th>Show ID</th>
                <th>Show Type</th>
                <th>Title</th>
                <th>Director</th>
                <th>Country</th>
                <th>Date Added</th>
                <th>Release Year</th>
                <th>Rating</th>
                <th>Duration</th>
                <th>Listed In</th>
            </tr>
        </thead>
        <tbody>
            {shows.map(show => (
                <tr 
                  key={show.id}
                  >
                    <td>{show.show_id}</td>
                    <td>{show.show_type}</td>
                    <td onClick={() => navigate(`shows/${show.id}`) }>{show.title}</td>
                    <td>{show.director}</td>
                    <td>{show.country}</td>
                    <td>{show.date_added}</td>
                    <td>{show.release_year}</td>
                    <td>{show.rating}</td>
                    <td>{show.duration}</td>
                    <td>{show.listed_in}</td>
                </tr>
            ))}
        </tbody>
    </table>
        ) : (<h2>No Shows Found</h2>)
      }
    </div>
  )
}

export default Shows