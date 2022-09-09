import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function CreateShow() {
    const [showType, setShowType] = useState("TV Show")
    const [title, setTitle] = useState("Westworld")
    const [director, setDirector] = useState("Unknown")
    const [country, setCountry] = useState("United States")
    const [dateAdded, setDateAdded] = useState("9/9/2022")
    const [releaseYear, setReleaseYear] = useState("2016")
    const [rating, setRating] = useState("R")
    const [duration, setDuration] = useState("5 seasons")
    const [listedIn, setListedIn] = useState("Science Fiction")
    const navigate = useNavigate();
    
    const handleSubmitShow = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/shows", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            show_type: showType,
            title: title,
            director: director,
            country: country,
            date_added: dateAdded,
            release_year: releaseYear,
            rating: rating,
            duration: duration,
            listed_in: listedIn,
          }),
        }).then((r) => {
          if (r.ok) {
            navigate("/");
          } else {
            r.json().then((err) => console.log(err));
          }
        });
      }

  return (
    <div>
        <h1>Add a Show</h1>
        <form onSubmit={handleSubmitShow}>
            <p>
            <label type="text" name="showType">Show Type</label>
            <input type="text" id="showType" value={showType} onChange={(e) => setShowType(e.target.value)}/>
            </p>

            <p>
            <label type="text" name="title">Title</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </p>

            <p>
            <label type="text" name="director">Director</label>
            <input type="text" id="director" value={director} onChange={(e) => setDirector(e.target.value)}/>
            </p>

            <p>
            <label type="text" name="country">Country</label>
            <input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)}/>                
            </p>

            <p>
            <label type="text" name="dateAdded">Date Added</label>
            <input type="text" id="dateAdded" value={dateAdded} onChange={(e) => setDateAdded(e.target.value)}/>                
            </p>

            <p>
            <label type="text" name="releaseYear">Release Year</label>
            <input type="text" id="releaseYear" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)}/>                
            </p>

            <p>
            <label type="text" name="rating">Rating</label>
            <input type="text" id="rating" value={rating} onChange={(e) => setRating(e.target.value)}/>               
            </p>

            <p>
            <label type="text" name="duration">Duration</label>
            <input type="text" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)}/>
            </p>

            <p>
            <label type="text" name="listedIn">Listed In</label>
            <input type="text" id="listedIn" value={listedIn} onChange={(e) => setListedIn(e.target.value)}/>
            </p>
            <button type="submit">Submit Show</button>
        </form>
    </div>
  )
}

export default CreateShow