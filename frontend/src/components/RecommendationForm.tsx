import React, { useState } from "react";
import axios from "axios";

interface Recommendations {
    collaborative: number[];
    content: number[];
    azure: number[];
}

const RecommendationForm: React.FC = () => {
    const [userID, setUserID] = useState<string>("");
    const [recommendations, setRecommendations] = useState<Recommendations | null>(null);

    const getRecommendations = async () => {
        try {
            const response = await axios.get<Recommendations>(
                `http://localhost:5000/api/recommendations/${userID}`
            );
            setRecommendations(response.data);
        } catch (error) {
            console.error("Error fetching recommendations:", error);
        }
    };

    return (
        <div>
            <h1>News Recommendation</h1>
            <input
                type="text"
                placeholder="Enter User ID"
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
            />
            <button onClick={getRecommendations}>Get Recommendations</button>

            {recommendations && (
                <div>
                    <h3>Collaborative Filtering:</h3>
                    <p>{recommendations.collaborative.join(", ")}</p>

                    <h3>Content Filtering:</h3>
                    <p>{recommendations.content.join(", ")}</p>

                    <h3>Azure ML:</h3>
                    <p>{recommendations.azure.join(", ")}</p>
                </div>
            )}
        </div>
    );
};

export default RecommendationForm;
