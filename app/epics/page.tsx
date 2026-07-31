import {
  Search,
  Plus,
  MoreVertical,
  User,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function ProjectEpicsList({
  params,
}: {
  params: { projectName: string };
}) {
  // Mock Data
  const epics = Array(6).fill({
    id: "EPIC-102",
    title: "Sustainable Materials Integration",
    assignee: "Alice Moore",
    initials: "AM",
    creator: "Sarah Jenkins",
    date: "22 Oct 2025",
  });

  const displayProjectName = "Alpha Project";
  // params.projectName
  //   .replace(/-/g, " ")
  //   .toUpperCase();

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <div className="text-xs font-bold text-slate-300 tracking-wider mb-6 flex items-center gap-2">
        <Link href="/projects" className="text-slate-600 hover:text-slate-900">
          PROJECTS
        </Link>
        <span>›</span>
        <span className="text-slate-600">{displayProjectName}</span>
        <span>›</span>
        <span className="text-slate-900">EPICS</span>
      </div>

      {/* Header Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Project Epics
        </h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" />
            <input
              type="text"
              placeholder="Search epics..."
              className="pl-10 pr-4 py-2.5 bg-surface-low border-none rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-slate-300"
            />
          </div>
          <Link
            href={`/projects/${params.projectName}/epics/new`}
            className="bg-blue-300 hover:bg-blue-600 text-white text-sm font-bold py-2.5 px-4 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus className="w-5 h-5" />
            New Epic
          </Link>
        </div>
      </div>

      {/* Epics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {epics.map((epic, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 border border-surface-highest shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="bg-semantic-success/20 text-emerald-800 text-xs font-black px-2.5 py-1 rounded-md tracking-wide">
                {epic.id}
              </span>
              <button className="text-slate-300 hover:text-slate-600">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-6">
              {epic.title}
            </h3>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-semantic-success/30 flex items-center justify-center text-emerald-900 font-bold text-sm">
                {epic.initials}
              </div>
              <div>
                <p className="text-xs text-slate-600 mb-0.5">Assignee</p>
                <p className="text-sm font-bold text-slate-900">
                  {epic.assignee}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-surface-low text-xs font-medium text-slate-600">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-slate-300" />
                Created by: {epic.creator}
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-300" />
                {epic.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between pt-4">
        <p className="text-sm font-medium text-slate-600">
          Showing 6 of 24 epics
        </p>
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 flex items-center justify-center border border-surface-highest rounded bg-white text-slate-300 hover:text-slate-600">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-blue-600 text-white text-sm font-bold">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-surface-highest rounded bg-white text-slate-600 text-sm font-bold hover:bg-surface-low">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-surface-highest rounded bg-white text-slate-600 hover:bg-surface-low">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
