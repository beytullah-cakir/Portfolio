# ================================
# Build stage (.NET 10 Preview)
# ================================
FROM mcr.microsoft.com/dotnet/nightly/sdk:10.0-preview AS build
WORKDIR /app

# csproj kopyala
COPY Backend/*.csproj ./
RUN dotnet restore

# backend dosyalarının TAMAMI
COPY Backend/. .
RUN dotnet publish -c Release -o out

# ================================
# Runtime stage (.NET 10 Preview)
# ================================
FROM mcr.microsoft.com/dotnet/nightly/aspnet:10.0-preview
WORKDIR /app

COPY --from=build /app/out .

ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

ENTRYPOINT ["dotnet", "Portfolio.Server.dll"]
