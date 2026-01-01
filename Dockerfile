# ================================
# Build stage (.NET 10 Preview)
# ================================
FROM mcr.microsoft.com/dotnet/nightly/sdk:10.0-preview AS build
WORKDIR /app

# csproj kopyala
COPY Backend/Portfolio.API/*.csproj ./
RUN dotnet restore

# backend dosyalarını kopyala
COPY Backend/Portfolio.API/. .
RUN dotnet publish -c Release -o out

# ================================
# Runtime stage (.NET 10 Preview)
# ================================
FROM mcr.microsoft.com/dotnet/nightly/aspnet:10.0-preview
WORKDIR /app

COPY --from=build /app/out .

ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

ENTRYPOINT ["dotnet", "Portfolio.API.dll"]
