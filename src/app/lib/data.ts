// ─── Projects ────────────────────────────────────────────────────────────────

export interface Project {
    id: string;
    title: string;
    shortDesc: string;
    longDesc: string;
    technologies: string[];
    liveUrl: string | null;
    githubUrl: string;
    category: 'Full Stack' | 'DevOps' | 'Backend' | 'Desktop' | 'Mobile';
    icon: string;
    gradient: string;
    featured: boolean;
    challenges: string;
    outcome: string;
}

export const projects: Project[] = [
    {
        id: 'mmc-community',
        title: 'MMC – Moroccan Microsoft Community',
        shortDesc:
            'Full-stack community platform built with ASP.NET Core + React using clean architecture, CQRS, microservices, and Azure DevOps CI/CD.',
        longDesc:
            'During the JobInTech Bootcamp at UIR, I contributed to the Moroccan Microsoft Community (MMC) platform — a large-scale web application for managing community events, members, and resources. The backend was built with ASP.NET Core following Clean Architecture, implementing CQRS with MediatR, the Repository Pattern, and organized as microservices. The frontend was built with React. CI/CD was managed via Azure DevOps deploying to Azure Web App.',
        technologies: ['ASP.NET Core', 'React', 'CQRS', 'MediatR', 'Entity Framework', 'SQL Server', 'Azure DevOps', 'Microservices'],
        liveUrl: null,
        githubUrl: 'https://github.com/Zidane-Aboukhalid',
        category: 'Full Stack',
        icon: '🇲🇦',
        gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        featured: true,
        challenges:
            'Organising a complex domain across microservices while keeping the CI/CD pipeline reliable on Azure DevOps. Chose CQRS + MediatR to decouple reads from writes and simplify command handling.',
        outcome:
            'Successfully delivered a production-ready community platform with zero-downtime deployments on Azure and clean modular codebase adopted by the MMC team.',
    },
    {
        id: 'cmms-unibitsoft',
        title: 'CMMS – Computerized Maintenance Management System',
        shortDesc:
            'Enterprise-grade CMMS built with ASP.NET Core 8 Web API for work orders, asset management, and preventive maintenance scheduling.',
        longDesc:
            'At Unibitsoft, I developed a CMMS system from the ground up using ASP.NET Core 8 Web API. The system handles work orders, asset lifecycle management, and preventive maintenance scheduling for industrial clients. I designed all RESTful API endpoints following Clean Architecture and best practices, structuring core modules for scalability and maintainability.',
        technologies: ['ASP.NET Core 8', 'REST API', 'Clean Architecture', 'Entity Framework', 'SQL Server', 'C#'],
        liveUrl: null,
        githubUrl: 'https://github.com/Zidane-Aboukhalid',
        category: 'Backend',
        icon: '🏭',
        gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
        featured: true,
        challenges:
            'Designing a flexible scheduling engine for preventive maintenance that handles recurring tasks, asset dependencies, and technician availability without tight coupling.',
        outcome:
            'Delivered a maintainable and scalable backend system currently in active production use at Unibitsoft for industrial maintenance management.',
    },
    {
        id: 'uir-shop',
        title: 'UIR Shop – E-Commerce Web Application',
        shortDesc:
            'Complete e-commerce application with ASP.NET Core backend and React frontend, using CQRS, mediator pattern, and Entity Framework with SQL Server.',
        longDesc:
            'UIR Shop is a full-stack e-commerce platform built during the JobInTech Bootcamp at UIR. The backend uses ASP.NET Core with a clean layered architecture, CQRS pattern implemented with MediatR, and Entity Framework Core for database access on SQL Server. The React frontend provides a smooth shopping experience with product listings, cart management, and order tracking.',
        technologies: ['ASP.NET Core', 'React', 'CQRS', 'MediatR', 'Entity Framework', 'SQL Server', 'Clean Architecture'],
        liveUrl: null,
        githubUrl: 'https://github.com/Zidane-Aboukhalid',
        category: 'Full Stack',
        icon: '🛒',
        gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
        featured: true,
        challenges:
            'Keeping product inventory consistent across concurrent orders. Used optimistic concurrency checks in EF Core and transactional CQRS commands to prevent overselling.',
        outcome:
            'A fully functional e-commerce platform showcasing clean architecture patterns with proper separation of concerns between UI, application logic, and data access.',
    },
    {
        id: 'telco-recruitment',
        title: 'Recruitment Platform – Blazor Server + SignalR',
        shortDesc:
            'Real-time recruitment platform built with Blazor Server and SignalR, synchronized with Odoo ERP via Web API.',
        longDesc:
            'At Telco Solution, I built a full-featured recruitment platform using Blazor Server for the interactive UI and SignalR for real-time notifications (new applications, interview updates). The backend Web APIs were synchronized with Odoo ERP to manage candidate data and HR workflows. The system was deployed on a VPS using Docker with Jenkins CI/CD pipelines.',
        technologies: ['Blazor Server', 'SignalR', 'ASP.NET Core', 'React.js', 'MUI', 'Docker', 'Jenkins', 'Odoo ERP API'],
        liveUrl: null,
        githubUrl: 'https://github.com/Zidane-Aboukhalid',
        category: 'Full Stack',
        icon: '💼',
        gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
        featured: false,
        challenges:
            'Synchronising real-time Blazor UI state with Odoo ERP data while keeping latency low. Used SignalR hubs to broadcast ERP events and optimistic UI updates.',
        outcome:
            'Reduced recruitment workflow processing time significantly. The Jenkins + Docker pipeline enabled seamless zero-downtime deployments on VPS.',
    },
    {
        id: 'barbershop-management',
        title: 'Barbershop Management – Windows Form App',
        shortDesc:
            'Desktop application built with C# / .NET Framework for reservation, billing, and inventory management, backed by SQL Server.',
        longDesc:
            'A comprehensive Windows Forms desktop application for barbershop management, covering appointment reservations, customer billing, service management, and inventory tracking. Built with C# and .NET Framework, it uses SQL Server as the data store and provides an intuitive UI for receptionist and manager roles with role-based access control.',
        technologies: ['C#', '.NET Framework', 'Windows Forms', 'SQL Server', 'ADO.NET'],
        liveUrl: null,
        githubUrl: 'https://github.com/Zidane-Aboukhalid',
        category: 'Desktop',
        icon: '✂️',
        gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
        featured: false,
        challenges:
            'Designing an intuitive desktop UI for non-technical staff while handling concurrent appointment booking and real-time inventory updates.',
        outcome:
            'Fully operational management system adopted by the barbershop, eliminating paper-based booking and reducing billing errors.',
    },
    {
        id: 'python-android-generator',
        title: 'Python Generator for Android Studio Apps',
        shortDesc:
            'Python script that reads a JSON definition and auto-generates Android Studio widget code, outputting APK and AAB files for Google Play Store.',
        longDesc:
            'A developer productivity tool written in Python that automates Android Studio app scaffolding. It reads a structured JSON configuration file describing the app\'s UI widgets, screens, and logic, then generates the corresponding Java/Kotlin code ready for Android Studio. The output includes both APK and AAB builds compatible with Google Play Store submission.',
        technologies: ['Python', 'Java', 'Android Studio', 'JSON', 'Google Play Store'],
        liveUrl: null,
        githubUrl: 'https://github.com/Zidane-Aboukhalid',
        category: 'Mobile',
        icon: '🤖',
        gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        featured: false,
        challenges:
            'Parsing diverse JSON widget configurations and generating syntactically correct, idiomatic Android code that compiles without errors across different layouts.',
        outcome:
            'Saved hours of repetitive Android boilerplate per project. Successfully generated and published apps to Google Play Store.',
    },
    {
        id: 'wincep-website',
        title: 'Wincep Services Group – Corporate Website',
        shortDesc:
            'Corporate website with subscription management, built with PHP backend and MySQL database for Wincep Services Group.',
        longDesc:
            'Developed the official corporate website for Wincep Services Group, featuring a dynamic content management system, subscription plan management, and a client portal. Built with PHP Native on the backend with MySQL as the database, and a responsive HTML/CSS/JavaScript frontend using Bootstrap.',
        technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        liveUrl: null,
        githubUrl: 'https://github.com/Zidane-Aboukhalid',
        category: 'Full Stack',
        icon: '🌐',
        gradient: 'linear-gradient(135deg, #f97316, #f59e0b)',
        featured: false,
        challenges:
            'Building a flexible subscription management system in pure PHP that handles plan upgrades, billing cycles, and client notifications.',
        outcome:
            'Delivered a professional corporate web presence with an integrated subscription system, improving Wincep\'s client management workflow.',
    },
];

export function getProject(id: string): Project | undefined {
    return projects.find((p) => p.id === id);
}

// ─── Blog Posts ──────────────────────────────────────────────────────────────

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    category: string;
    icon: string;
    gradient: string;
    content: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'clean-architecture-aspnet-core',
        title: 'Clean Architecture in ASP.NET Core 8: A Developer\'s Practical Guide',
        description:
            'How to structure your ASP.NET Core 8 project using Clean Architecture — layers, dependencies, and real-world patterns I use in production.',
        date: 'Feb 20, 2026',
        readTime: '11 min read',
        category: '.NET',
        icon: '⚡',
        gradient: 'linear-gradient(135deg, #a855f7, #6366f1)',
        content: `## What is Clean Architecture?

Clean Architecture, popularised by Robert C. Martin (Uncle Bob), separates your application into concentric layers where dependencies always point inward. In ASP.NET Core 8, this translates to four distinct projects:

- **Domain** — Entities, value objects, domain events, interfaces
- **Application** — Use cases, DTOs, validators (FluentValidation), CQRS commands/queries
- **Infrastructure** — EF Core repositories, external service implementations, email, storage
- **API** — Controllers, middleware, filters, DI registration

## The Dependency Rule

> Inner layers must never reference outer layers.

Your \`Domain\` project has **zero** external NuGet dependencies. Your \`Application\` project depends only on \`Domain\`. Infrastructure depends on Application to implement its interfaces.

## Setting Up the Solution

\`\`\`bash
dotnet new sln -n MyApp
dotnet new classlib -n MyApp.Domain
dotnet new classlib -n MyApp.Application
dotnet new classlib -n MyApp.Infrastructure
dotnet new webapi -n MyApp.API

dotnet sln add **/*.csproj
\`\`\`

## Domain Layer — Pure C# Entities

\`\`\`csharp
// Domain/Entities/WorkOrder.cs
public class WorkOrder
{
    public Guid Id { get; private set; }
    public string Title { get; private set; }
    public WorkOrderStatus Status { get; private set; }

    private WorkOrder() { }

    public static WorkOrder Create(string title)
    {
        return new WorkOrder
        {
            Id = Guid.NewGuid(),
            Title = title,
            Status = WorkOrderStatus.Open
        };
    }

    public void Complete() => Status = WorkOrderStatus.Completed;
}
\`\`\`

## Application Layer — CQRS with MediatR

\`\`\`csharp
// Application/WorkOrders/Commands/CreateWorkOrder.cs
public record CreateWorkOrderCommand(string Title) : IRequest<Guid>;

public class CreateWorkOrderHandler : IRequestHandler<CreateWorkOrderCommand, Guid>
{
    private readonly IWorkOrderRepository _repo;

    public CreateWorkOrderHandler(IWorkOrderRepository repo) => _repo = repo;

    public async Task<Guid> Handle(CreateWorkOrderCommand request, CancellationToken ct)
    {
        var order = WorkOrder.Create(request.Title);
        await _repo.AddAsync(order, ct);
        return order.Id;
    }
}
\`\`\`

## Infrastructure Layer — EF Core Implementation

\`\`\`csharp
// Infrastructure/Repositories/WorkOrderRepository.cs
public class WorkOrderRepository : IWorkOrderRepository
{
    private readonly AppDbContext _ctx;
    public WorkOrderRepository(AppDbContext ctx) => _ctx = ctx;

    public async Task AddAsync(WorkOrder entity, CancellationToken ct)
    {
        await _ctx.WorkOrders.AddAsync(entity, ct);
        await _ctx.SaveChangesAsync(ct);
    }
}
\`\`\`

## Key Takeaways

1. **Domain stays pure** — no EF Core, no ASP.NET, no frameworks
2. **Interfaces live in Application** — Infrastructure implements them
3. **CQRS + MediatR** decouples commands from queries cleanly
4. **Dependency injection** wires everything together in the API layer
5. **Testability** is free — mock the interfaces, test use cases in isolation`,
    },
    {
        slug: 'cqrs-mediatr-dotnet',
        title: 'CQRS & MediatR in .NET: Commands, Queries and Pipeline Behaviours',
        description:
            'A deep dive into the CQRS pattern with MediatR in .NET — how I use it in real projects, with pipeline behaviours for validation and logging.',
        date: 'Feb 10, 2026',
        readTime: '10 min read',
        category: '.NET',
        icon: '🔄',
        gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
        content: `## Why CQRS?

CQRS (Command Query Responsibility Segregation) splits your application operations into two categories:

- **Commands** — change state (Create, Update, Delete)
- **Queries** — read state, never mutate

This separation makes code easier to reason about, scale, and test. Combined with MediatR, it removes direct coupling between your API controllers and business logic.

## MediatR Setup

\`\`\`bash
dotnet add package MediatR
dotnet add package MediatR.Extensions.Microsoft.DependencyInjection
\`\`\`

\`\`\`csharp
// Program.cs
builder.Services.AddMediatR(cfg =>
    cfg.RegisterServicesFromAssembly(typeof(ApplicationAssembly).Assembly));
\`\`\`

## Commands — Mutating State

\`\`\`csharp
// Command
public record CreateAssetCommand(string Name, string SerialNumber) : IRequest<Guid>;

// Handler
public class CreateAssetHandler : IRequestHandler<CreateAssetCommand, Guid>
{
    private readonly IAssetRepository _repo;

    public CreateAssetHandler(IAssetRepository repo) => _repo = repo;

    public async Task<Guid> Handle(CreateAssetCommand cmd, CancellationToken ct)
    {
        var asset = Asset.Create(cmd.Name, cmd.SerialNumber);
        await _repo.AddAsync(asset, ct);
        return asset.Id;
    }
}
\`\`\`

## Queries — Reading State

\`\`\`csharp
// Query
public record GetAssetByIdQuery(Guid AssetId) : IRequest<AssetDto>;

// Handler  
public class GetAssetByIdHandler : IRequestHandler<GetAssetByIdQuery, AssetDto>
{
    private readonly IAssetReadRepository _repo;

    public GetAssetByIdHandler(IAssetReadRepository repo) => _repo = repo;

    public async Task<AssetDto> Handle(GetAssetByIdQuery query, CancellationToken ct)
        => await _repo.GetByIdAsync(query.AssetId, ct)
           ?? throw new NotFoundException(nameof(Asset), query.AssetId);
}
\`\`\`

## Pipeline Behaviours — Cross-Cutting Concerns

Pipeline behaviours are MediatR middleware. Add validation + logging without touching handlers:

\`\`\`csharp
// Validation behaviour with FluentValidation
public class ValidationBehaviour<TRequest, TResponse>
    : IPipelineBehavior<TRequest, TResponse>
    where TRequest : IRequest<TResponse>
{
    private readonly IEnumerable<IValidator<TRequest>> _validators;

    public ValidationBehaviour(IEnumerable<IValidator<TRequest>> validators)
        => _validators = validators;

    public async Task<TResponse> Handle(TRequest request,
        RequestHandlerDelegate<TResponse> next, CancellationToken ct)
    {
        if (_validators.Any())
        {
            var ctx = new ValidationContext<TRequest>(request);
            var failures = _validators
                .Select(v => v.Validate(ctx))
                .SelectMany(r => r.Errors)
                .Where(f => f != null)
                .ToList();

            if (failures.Any())
                throw new ValidationException(failures);
        }

        return await next();
    }
}
\`\`\`

## Controller — Clean and Thin

\`\`\`csharp
[ApiController]
[Route("api/[controller]")]
public class AssetsController : ControllerBase
{
    private readonly IMediator _mediator;
    public AssetsController(IMediator mediator) => _mediator = mediator;

    [HttpPost]
    public async Task<IActionResult> Create(CreateAssetCommand cmd)
        => Ok(await _mediator.Send(cmd));

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> GetById(Guid id)
        => Ok(await _mediator.Send(new GetAssetByIdQuery(id)));
}
\`\`\`

## Key Takeaways

1. Commands mutate state, Queries only read — never mix the two
2. Pipeline behaviours handle cross-cutting concerns without polluting handlers
3. Controllers stay thin — just dispatch and return
4. Each handler is independently testable with a simple mock
5. CQRS makes scaling reads and writes independently much easier`,
    },
    {
        slug: 'signalr-blazor-realtime',
        title: 'Real-Time Web Apps with SignalR and Blazor Server in .NET',
        description:
            'How I built a real-time recruitment platform using Blazor Server and SignalR — architecture decisions, hub design, and deployment on VPS with Docker.',
        date: 'Jan 25, 2026',
        readTime: '12 min read',
        category: '.NET',
        icon: '📡',
        gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
        content: `## Why Blazor Server + SignalR?

When I built the recruitment platform at Telco Solution, the requirement was clear: real-time notifications for new job applications, interview status changes, and live candidate tracking. Blazor Server already runs over a SignalR connection for its UI updates — adding application-level real-time events was a natural fit.

## Blazor Server vs Blazor WASM

| Feature | Blazor Server | Blazor WASM |
|---|---|---|
| Initial load | Fast | Slow (downloads runtime) |
| Latency | Requires connection | Offline-capable |
| Server resources | Higher (stateful) | Minimal |
| Real-time | Native (SignalR) | Manual WebSocket |

For an internal HR tool, Blazor Server was the right choice.

## Setting Up SignalR Hub

\`\`\`csharp
// Hubs/RecruitmentHub.cs
[Authorize]
public class RecruitmentHub : Hub
{
    public async Task JoinRoom(string roomId)
        => await Groups.AddToGroupAsync(Context.ConnectionId, roomId);

    public async Task LeaveRoom(string roomId)
        => await Groups.RemoveFromGroupAsync(Context.ConnectionId, roomId);
}
\`\`\`

\`\`\`csharp
// Program.cs
builder.Services.AddSignalR();
app.MapHub<RecruitmentHub>("/hubs/recruitment");
\`\`\`

## Broadcasting from Application Services

\`\`\`csharp
public class ApplicationService
{
    private readonly IHubContext<RecruitmentHub> _hub;
    private readonly IApplicationRepository _repo;

    public ApplicationService(
        IHubContext<RecruitmentHub> hub,
        IApplicationRepository repo)
    {
        _hub = hub;
        _repo = repo;
    }

    public async Task SubmitApplicationAsync(CreateApplicationDto dto)
    {
        var application = await _repo.CreateAsync(dto);

        // Notify all HR staff in the HR group
        await _hub.Clients
            .Group("hr-team")
            .SendAsync("NewApplication", new {
                application.Id,
                application.CandidateName,
                application.Position,
                application.SubmittedAt
            });
    }
}
\`\`\`

## Blazor Component — Receiving Events

\`\`\`csharp
@page "/dashboard"
@inject NavigationManager Navigation
@implements IAsyncDisposable

<div class="applications-list">
    @foreach (var app in _applications)
    {
        <div class="application-card @(app.IsNew ? "highlight" : "")">
            <span>@app.CandidateName</span>
            <span>@app.Position</span>
        </div>
    }
</div>

@code {
    private HubConnection? _hubConnection;
    private List<ApplicationDto> _applications = new();

    protected override async Task OnInitializedAsync()
    {
        _hubConnection = new HubConnectionBuilder()
            .WithUrl(Navigation.ToAbsoluteUri("/hubs/recruitment"))
            .WithAutomaticReconnect()
            .Build();

        _hubConnection.On<ApplicationNotification>("NewApplication", async (notification) =>
        {
            _applications.Insert(0, new ApplicationDto
            {
                Id = notification.Id,
                CandidateName = notification.CandidateName,
                Position = notification.Position,
                IsNew = true
            });
            await InvokeAsync(StateHasChanged); // Trigger Blazor re-render
        });

        await _hubConnection.StartAsync();
        await _hubConnection.InvokeAsync("JoinRoom", "hr-team");
    }

    public async ValueTask DisposeAsync()
    {
        if (_hubConnection != null)
            await _hubConnection.DisposeAsync();
    }
}
\`\`\`

## Deployment with Docker + Jenkins

\`\`\`dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .
RUN dotnet publish -c Release -o /app/publish

FROM base AS final
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "RecruitmentApp.dll"]
\`\`\`

## Key Takeaways

1. Blazor Server is ideal for internal dashboards needing real-time updates
2. Use IHubContext to broadcast from your application services
3. \`WithAutomaticReconnect()\` handles transient disconnections gracefully
4. Always call \`InvokeAsync(StateHasChanged)\` from SignalR callbacks
5. Docker + Jenkins makes VPS deployment reproducible and fast`,
    },
    {
        slug: 'docker-jenkins-dotnet-cicd',
        title: 'Docker + Jenkins CI/CD Pipeline for .NET Applications on VPS',
        description:
            'A step-by-step guide to setting up a production CI/CD pipeline for .NET apps using Jenkins and Docker on a Linux VPS — from my real-world experience at Telco Solution.',
        date: 'Jan 12, 2026',
        readTime: '14 min read',
        category: 'DevOps',
        icon: '🐳',
        gradient: 'linear-gradient(135deg, #06b6d4, #10b981)',
        content: `## The Goal

Every git push to \`main\` triggers Jenkins to: build the .NET app → run tests → build a Docker image → deploy to VPS. This is the exact pipeline I used at Telco Solution.

## Prerequisites

- Linux VPS (Ubuntu 22.04)
- Docker + Docker Compose installed
- Jenkins installed on VPS or separate server
- Your .NET 8 application in a Git repository

## 1. Multi-Stage Dockerfile for .NET 8

\`\`\`dockerfile
# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY ["src/MyApp.API/MyApp.API.csproj", "src/MyApp.API/"]
COPY ["src/MyApp.Application/MyApp.Application.csproj", "src/MyApp.Application/"]
COPY ["src/MyApp.Domain/MyApp.Domain.csproj", "src/MyApp.Domain/"]
COPY ["src/MyApp.Infrastructure/MyApp.Infrastructure.csproj", "src/MyApp.Infrastructure/"]
RUN dotnet restore "src/MyApp.API/MyApp.API.csproj"

COPY . .
RUN dotnet publish "src/MyApp.API/MyApp.API.csproj" -c Release -o /app/publish

# Stage 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
EXPOSE 80
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "MyApp.API.dll"]
\`\`\`

## 2. docker-compose.yml

\`\`\`yaml
version: '3.8'

services:
  api:
    image: myapp-api:latest
    container_name: myapp-api
    ports:
      - "5000:80"
    environment:
      - ASPNETCORE_ENVIRONMENT=Production
      - ConnectionStrings__Default=\${DB_CONNECTION_STRING}
    depends_on:
      - db
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:80/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  db:
    image: mcr.microsoft.com/mssql/server:2019-latest
    environment:
      SA_PASSWORD: \${SA_PASSWORD}
      ACCEPT_EULA: "Y"
    volumes:
      - sqldata:/var/opt/mssql
    restart: unless-stopped

volumes:
  sqldata:
\`\`\`

## 3. Jenkinsfile

\`\`\`groovy
pipeline {
    agent any
    
    environment {
        IMAGE_NAME = "myapp-api"
        CONTAINER_NAME = "myapp-api"
        VPS_USER = "ubuntu"
        VPS_HOST = credentials('vps-host')
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-credentials',
                    url: 'https://github.com/your-repo.git'
            }
        }
        
        stage('Test') {
            steps {
                sh 'dotnet test --configuration Release --no-build'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh "docker build -t \${IMAGE_NAME}:latest ."
            }
        }
        
        stage('Deploy') {
            steps {
                sshagent(['vps-ssh-key']) {
                    sh """
                        docker save \${IMAGE_NAME}:latest | \\
                        ssh \${VPS_USER}@\${VPS_HOST} 'docker load'
                        
                        ssh \${VPS_USER}@\${VPS_HOST} '
                            docker stop \${CONTAINER_NAME} || true
                            docker rm \${CONTAINER_NAME} || true
                            docker compose up -d --pull never
                        '
                    """
                }
            }
        }
    }
    
    post {
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Pipeline failed. Check logs.'
        }
    }
}
\`\`\`

## 4. Nginx Reverse Proxy

\`\`\`nginx
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection keep-alive;
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
\`\`\`

## Key Takeaways

1. Multi-stage Docker builds keep images small and build dependencies out of production
2. Health checks prevent traffic routing to unhealthy containers
3. Never bake secrets into Docker images — use environment files or secrets manager
4. \`docker save | ssh | docker load\` works great for VPS without a registry
5. Nginx as reverse proxy gives you TLS, HTTP/2, and easy scaling`,
    },
    {
        slug: 'odoo-erp-aspnet-integration',
        title: 'Integrating Odoo ERP with ASP.NET Core Web API: A Practical Approach',
        description:
            'How I built a .NET microservice that synchronizes data with Odoo ERP using its JSON-RPC API — authentication, CRUD operations, and error handling.',
        date: 'Dec 28, 2025',
        readTime: '9 min read',
        category: '.NET',
        icon: '🔗',
        gradient: 'linear-gradient(135deg, #10b981, #3b82f6)',
        content: `## Background

At Telco Solution, I needed to synchronize HR and sales data between our custom ASP.NET Core Web APIs and an existing Odoo ERP installation. Odoo exposes a JSON-RPC API, and here is how I integrated it cleanly.

## Odoo's JSON-RPC API

Odoo uses JSON-RPC 2.0 over HTTP. Authentication happens first (returns a session_id cookie), then all subsequent calls use that session.

\`\`\`
POST /web/client/authenticate  → Login, get session
POST /web/dataset/call_kw     → CRUD operations on models
\`\`\`

## Step 1 – Create the Odoo HTTP Client

\`\`\`csharp
// Infrastructure/Odoo/OdooClient.cs
public class OdooClient
{
    private readonly HttpClient _http;
    private readonly OdooSettings _settings;
    private string? _sessionId;

    public OdooClient(HttpClient http, IOptions<OdooSettings> settings)
    {
        _http = http;
        _settings = settings.Value;
    }

    public async Task AuthenticateAsync()
    {
        var payload = new
        {
            jsonrpc = "2.0",
            method = "call",
            id = 1,
            @params = new
            {
                db = _settings.Database,
                login = _settings.Username,
                password = _settings.Password
            }
        };

        var response = await _http.PostAsJsonAsync(
            "/web/session/authenticate", payload);
        response.EnsureSuccessStatusCode();

        // Store session cookie
        if (response.Headers.TryGetValues("Set-Cookie", out var cookies))
        {
            _sessionId = cookies.FirstOrDefault(c => c.StartsWith("session_id"));
        }
    }
}
\`\`\`

## Step 2 – Search and Read Records

\`\`\`csharp
public async Task<List<OdooEmployee>> GetEmployeesAsync()
{
    var payload = new
    {
        jsonrpc = "2.0",
        method = "call",
        id = 2,
        @params = new
        {
            model = "hr.employee",
            method = "search_read",
            args = new object[] { new object[] { } }, // Empty domain = all records
            kwargs = new
            {
                fields = new[] { "id", "name", "job_title", "work_email", "department_id" },
                limit = 100
            }
        }
    };

    var request = new HttpRequestMessage(HttpMethod.Post, "/web/dataset/call_kw");
    request.Headers.Add("Cookie", _sessionId);
    request.Content = JsonContent.Create(payload);

    var response = await _http.SendAsync(request);
    var result = await response.Content.ReadFromJsonAsync<OdooResponse<List<OdooEmployee>>>();
    
    return result?.Result ?? new List<OdooEmployee>();
}
\`\`\`

## Step 3 – Register in DI with Polly Retry

\`\`\`csharp
// Program.cs
builder.Services.Configure<OdooSettings>(
    builder.Configuration.GetSection("Odoo"));

builder.Services.AddHttpClient<OdooClient>(client =>
{
    client.BaseAddress = new Uri(builder.Configuration["Odoo:BaseUrl"]!);
})
.AddTransientHttpErrorPolicy(policy =>
    policy.WaitAndRetryAsync(3, attempt => TimeSpan.FromSeconds(Math.Pow(2, attempt))));
\`\`\`

## Step 4 – Sync Service (CQRS Command)

\`\`\`csharp
public class SyncEmployeesCommandHandler : IRequestHandler<SyncEmployeesCommand, int>
{
    private readonly OdooClient _odoo;
    private readonly IEmployeeRepository _repo;

    public async Task<int> Handle(SyncEmployeesCommand cmd, CancellationToken ct)
    {
        await _odoo.AuthenticateAsync();
        var odooEmployees = await _odoo.GetEmployeesAsync();

        int synced = 0;
        foreach (var odooEmp in odooEmployees)
        {
            var existing = await _repo.FindByOdooIdAsync(odooEmp.Id, ct);
            if (existing is null)
            {
                await _repo.AddAsync(Employee.FromOdoo(odooEmp), ct);
            }
            else
            {
                existing.UpdateFrom(odooEmp);
                await _repo.UpdateAsync(existing, ct);
            }
            synced++;
        }

        return synced;
    }
}
\`\`\`

## Key Takeaways

1. Always re-authenticate if you get a 401 — Odoo sessions expire
2. Use Polly for transient HTTP error retry logic
3. Map Odoo models to your domain entities — don't bleed Odoo types into your domain
4. Schedule sync via a Hangfire background job for automatic periodic updates
5. Store the Odoo ID on your entity for idempotent upsert operations`,
    },
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find((p) => p.slug === slug);
}
