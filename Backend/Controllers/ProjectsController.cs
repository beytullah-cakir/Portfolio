using Microsoft.AspNetCore.Mvc;
using PortfolioWebsiteBackend.Models;
using PortfolioWebsiteBackend.Services;

namespace PortfolioWebsiteBackend.Controllers
{
    [ApiController]
    [Route("api/projects")]
    public class ProjectsController : ControllerBase
    {
        private readonly IProjectService _projectService;

        public ProjectsController(IProjectService projectService)
        {
            _projectService = projectService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProjectDto>>> GetAll()
        {
            var projects = await _projectService.GetAllAsync();
            var dtos = projects.Select(p => new ProjectDto(
                p.Id, p.Title, p.Description, p.ImageUrl, p.ProjectLink, p.CreatedAt));
            return Ok(dtos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProjectDto>> GetById(int id)
        {
            var project = await _projectService.GetByIdAsync(id);
            if (project == null) return NotFound();

            return Ok(new ProjectDto(
                project.Id, project.Title, project.Description, project.ImageUrl, project.ProjectLink, project.CreatedAt));
        }

        [HttpPost]
        public async Task<ActionResult<ProjectDto>> Create(CreateProjectDto dto)
        {
            var project = new Project
            {
                Title = dto.Title,
                Description = dto.Description,
                ImageUrl = dto.ImageUrl,
                ProjectLink = dto.ProjectLink
            };

            var createdProject = await _projectService.CreateAsync(project);
            
            return CreatedAtAction(nameof(GetById), new { id = createdProject.Id }, new ProjectDto(
                createdProject.Id, createdProject.Title, createdProject.Description, createdProject.ImageUrl, createdProject.ProjectLink, createdProject.CreatedAt));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, UpdateProjectDto dto)
        {
            var project = await _projectService.GetByIdAsync(id);
            if (project == null) return NotFound();

            project.Title = dto.Title;
            project.Description = dto.Description;
            project.ImageUrl = dto.ImageUrl;
            project.ProjectLink = dto.ProjectLink;

            await _projectService.UpdateAsync(project);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deleted = await _projectService.DeleteAsync(id);
            if (!deleted) return NotFound();

            return NoContent();
        }
    }
}
