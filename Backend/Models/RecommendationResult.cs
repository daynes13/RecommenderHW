
namespace Backend.Models
{
    public class RecommendationResult
    {
        public List<int> Collaborative { get; set; } = new();
        public List<int> Content { get; set; } = new();
        public List<int> Azure { get; set; } = new();
    }
}
