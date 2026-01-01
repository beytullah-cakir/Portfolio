using System.ComponentModel.DataAnnotations;

namespace PortfolioWebsiteBackend.Models
{
    public class Project
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Title { get; set; } = string.Empty;

        public string? Description { get; set; }

        public string? ImageUrl { get; set; }

        public string? ProjectLink { get; set; }

        public string? GithubLink { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
