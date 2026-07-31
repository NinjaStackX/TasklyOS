import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsListPage() {
  // Mock Data: Generating 5 projects to match the mockup
  const projects = Array(5).fill({
    title: "Skyline Residence Phase II",
    description:
      "Structural review and aesthetic curation for the high-rise residential complex in the downtown district.",
    date: "12 Oct 2025",
  });

  return (
    <div className="p-8 md:p-10 max-w-[1400px] mx-auto w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
            Projects
          </h1>
          <p className="text-slate-600 text-base">
            Manage and curate your projects
          </p>
        </div>

        <Link
          href="/projects/new"
          className="bg-blue-300 hover:bg-blue-600 text-white text-sm font-bold py-3.5 px-6 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
        >
          <Plus className="w-5 h-5 stroke-[2.5]" />
          Create New Project
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Render Existing Projects */}
        {projects.map((project, idx) => (
          <Link
            href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}/epics`}
            key={idx}
            className="group"
          >
            <div className="bg-white rounded-2xl p-8 flex flex-col h-full min-h-[240px] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-md transition-all border border-transparent hover:border-surface-highest">
              <h2 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-300 transition-colors">
                {project.title}
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex justify-between items-end pt-4">
                <span className="text-[10px] font-bold text-slate-600/70 tracking-widest uppercase">
                  Created At
                </span>
                <span className="text-sm font-semibold text-slate-600">
                  {project.date}
                </span>
              </div>
            </div>
          </Link>
        ))}

        {/* Add Project Card Button */}
        <Link
          href="/projects/new"
          className="bg-white/50 hover:bg-white rounded-2xl border-2 border-dashed border-surface-highest flex flex-col items-center justify-center h-full min-h-[240px] transition-colors group cursor-pointer"
        >
          <div className="w-12 h-12 bg-surface-low text-slate-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-surface-highest group-hover:text-blue-300 transition-colors">
            <Plus className="w-6 h-6 stroke-[2.5]" />
          </div>
          <span className="text-sm font-bold text-slate-900 tracking-widest uppercase group-hover:text-blue-300 transition-colors">
            Add Project
          </span>
        </Link>
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
        <p className="text-sm font-medium text-slate-600">
          Showing 5 of 24 active projects
        </p>

        <div className="flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center border border-surface-highest rounded-md bg-white text-slate-300 hover:text-slate-600 transition-colors shadow-sm">
            <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button className="w-9 h-9 flex items-center justify-center rounded-md bg-blue-600 text-white text-sm font-bold shadow-sm">
            1
          </button>

          <button className="w-9 h-9 flex items-center justify-center border border-surface-highest rounded-md bg-white text-slate-600 text-sm font-bold hover:bg-surface-low transition-colors shadow-sm">
            2
          </button>

          <button className="w-9 h-9 flex items-center justify-center border border-surface-highest rounded-md bg-white text-slate-600 hover:bg-surface-low transition-colors shadow-sm">
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
}
