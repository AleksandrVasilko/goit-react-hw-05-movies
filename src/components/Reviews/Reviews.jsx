import { fetchMovieReviews } from "services/fetchMovies";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import s from './Reviews.module.css';

const Reviews = () => { 
    const { id } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        fetchMovieReviews(id).then(setReviews);
    }, [id]);

    return (
        <>
            {reviews && reviews.total_results === 0 && (
                <p></p>
            )}    
        </>
    )
}