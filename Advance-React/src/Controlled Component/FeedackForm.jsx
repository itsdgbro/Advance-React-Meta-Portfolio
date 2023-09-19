import { useState } from "react";

// Define CSS styles as variables
const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

const formStyles = {
    width: "100%",
    maxWidth: "400px",
};

const fieldsetStyles = {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "20px",
};

const legendStyles = {
    fontWeight: "bold",
};

const flexContainerStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

const labelStyles = {
    marginRight: "10px",
};

function FeedbackForm() {
    const [score, setScore] = useState("10");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Score:", score);
        console.log("Comment Length:", comment.length);
        // handle low rate
        if(Number(score)<=5 || comment.length<= 10){
            alert("Comment rate length too low")
            return;
        }

        console.log("submitted");
        setScore("10");
        setComment("");
    }

    return (
        <div style={containerStyles}>
            <form style={formStyles} onSubmit={handleSubmit}>
                <fieldset style={fieldsetStyles}>
                    <legend style={legendStyles}>Rate Us</legend>
                    <div style={flexContainerStyles}>
                        <label htmlFor="range" style={labelStyles}>Stars:</label>
                        <span>{score}⭐</span>
                    </div>
                    <input
                        type="range"
                        name="range"
                        id="range"
                        min="0"
                        max="10"
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                    />
                    <div>
                        <label htmlFor="comment">Comment 📖</label>
                    </div>
                    <textarea 
                        name="comment" 
                        id="comment" cols="30" rows="5"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}    
                    ></textarea>
                    <div style={{ textAlign: "center" }}>
                        <button type="submit">Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default FeedbackForm;
