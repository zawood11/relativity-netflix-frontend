import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function ShowCard() {
    const [show, setShow] = useState({})
    const [showEditForm, setShowEditForm] = useState(false)
    const [showType, setShowType] = useState("")
    const [title, setTitle] = useState("")
    const [director, setDirector] = useState("")
    const [country, setCountry] = useState("")
    const [dateAdded, setDateAdded] = useState("")
    const [releaseYear, setReleaseYear] = useState("")
    const [rating, setRating] = useState("")
    const [duration, setDuration] = useState("")
    const [listedIn, setListedIn] = useState("")
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/shows/${id}`)
          .then((r) => r.json())
          .then(setShow)
      }, []);
    
    const handleDeleteShow = () => {
        fetch(`http://localhost:3000/shows/${id}`, {
            method: "DELETE",
          }).then((r) => {
            if (r.ok) {
              navigate("/");
            } else {
              r.json().then((err) => console.log(err.errors))
            }
          });
        }
    
    const toggleEditForm = () => {
        setShowEditForm(!showEditForm)
        setShowType(show.show_type)
        setTitle(show.title)
        setDirector(show.director)
        setCountry(show.country)
        setDateAdded(show.date_added)
        setReleaseYear(show.release_year)
        setRating(show.rating)
        setDuration(show.duration)
        setListedIn(show.listed_in)
    }

    const handleEditShowSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/shows/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
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
            window.location.reload(true);;
          } else {
            r.json().then((err) => console.log(err));
          }
        });
      }

  return (
    <div>
        <h1>{show.title}</h1>
        <p>Type: {show.show_type}</p>
        <p>Director: {show.director}</p>
        <p>Country: {show.country}</p>
        <p>Date Added: {show.date_added}</p>
        <p>Release Year: {show.release_year}</p>
        <p>Rating: {show.rating}</p>
        <p>Duration: {show.duration}</p>
        <p>Listed In: {show.listed_in}</p>
        <button onClick={toggleEditForm}>Edit Show</button>
        <button onClick={handleDeleteShow}>Delete Show</button>
        {showEditForm ? (
            <div>
            <h2>Edit fields below to make changes.</h2>
            <form onSubmit={handleEditShowSubmit}>
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
                <button type="submit">Edit Show</button>
            </form>
        </div>
        ) : (<></>) }
    </div>
    
  )
}

export default ShowCard;