using System.ComponentModel.DataAnnotations;

namespace PortfolioWebsiteBackend.Models
{
    public record ProjectDto(
        int Id,
        string Title,
        string? Description,
        string? ImageUrl,
        string? ProjectLink,
        string? GithubLink,
        DateTime CreatedAt
    );

    public record CreateProjectDto(
        [Required] string Title,
        string? Description,
        string? ImageUrl,
        string? ProjectLink,
        string? GithubLink
    );

    public record UpdateProjectDto(
        [Required] string Title,
        string? Description,
        string? ImageUrl,
        string? ProjectLink,
        string? GithubLink
    );
}
