using System.ComponentModel.DataAnnotations;

namespace PortfolioWebsiteBackend.Models
{
    public record ProjectDto(
        int Id,
        string Title,
        string? Description,
        string? ImageUrl,
        string? ProjectLink,
        DateTime CreatedAt
    );

    public record CreateProjectDto(
        [Required] string Title,
        string? Description,
        string? ImageUrl,
        string? ProjectLink
    );

    public record UpdateProjectDto(
        [Required] string Title,
        string? Description,
        string? ImageUrl,
        string? ProjectLink
    );
}
