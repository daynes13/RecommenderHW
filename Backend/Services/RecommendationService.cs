using Backend.Models;

namespace Backend.Services
{
    public class RecommendationService
    {
        public RecommendationResult GetRecommendations(int userId)
        {
            // Mocking data for now
            return new RecommendationResult
            {
                Collaborative = new List<int> { 101, 102, 103, 104, 105 },
                Content = new List<int> { 201, 202, 203, 204, 205 },
                Azure = new List<int> { 301, 302, 303, 304, 305 }
            };
        }
    }
}
