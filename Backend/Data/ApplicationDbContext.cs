using Microsoft.EntityFrameworkCore;
using PortfolioWebsiteBackend.Models;

namespace PortfolioWebsiteBackend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Project> Projects { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Mevcut veritabanı tablosu ile eşleşmesi için
            modelBuilder.Entity<Project>(entity =>
            {
                entity.ToTable("projects"); // Tablo adı küçük harf (postgres standardı)

                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.Title).HasColumnName("title");
                entity.Property(e => e.Description).HasColumnName("description");
                entity.Property(e => e.ImageUrl).HasColumnName("image_url");
                entity.Property(e => e.ProjectLink).HasColumnName("project_link");
                entity.Property(e => e.CreatedAt).HasColumnName("created_at");
                entity.Property(e => e.GithubLink).HasColumnName("github_link");
            });
        }
    }
}
