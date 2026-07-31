import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function AddNewTaskPage({
  params,
}: {
  params: { projectName: string };
}) {
  const displayProjectName = "Alpha Projects";
  //  params.projectName
  //   .replace(/-/g, " ")
  //   .toUpperCase();

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="text-xs font-bold text-slate-300 tracking-wider mb-6 flex items-center gap-2">
        <Link href="/projects" className="text-slate-600">
          PROJECTS
        </Link>
        <span>›</span>
        <span className="text-slate-600">{displayProjectName}</span>
        <span>›</span>
        <Link
          href={`/projects/${params.projectName}/tasks`}
          className="text-slate-600"
        >
          TASKS
        </Link>
        <span>›</span>
        <span className="text-slate-900">NEW TASK</span>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
          Create New Task
        </h1>
        <p className="text-slate-600 text-lg max-w-xl">
          Initialize a new work item within the Architectural Workspace
          ecosystem.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-surface-highest p-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              Title <span className="text-semantic-error">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g., Finalize structural schematics"
              className="w-full bg-surface-low border-none rounded-lg p-4 text-slate-900 placeholder:text-slate-600/50 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                Status <span className="text-semantic-error">*</span>
              </label>
              <div className="relative">
                <select className="w-full bg-surface-low border-none rounded-lg p-4 text-slate-900 appearance-none font-bold focus:outline-none focus:ring-2 focus:ring-blue-300">
                  <option value="todo">TO DO</option>
                  <option value="in_progress">IN PROGRESS</option>
                  <option value="done">DONE</option>
                </select>
                <ChevronDown className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                Assignee
              </label>
              <div className="relative">
                <select className="w-full bg-surface-low border-none rounded-lg p-4 text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300">
                  <option value="" disabled selected>
                    Select Team Member
                  </option>
                  <option value="1">Alice Moore</option>
                </select>
                <ChevronDown className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              Epic
            </label>
            <div className="relative">
              <select className="w-full bg-surface-low border-none rounded-lg p-4 text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300">
                <option value="" disabled selected>
                  Select Epic Link
                </option>
                <option value="1">Sustainable Materials Integration</option>
              </select>
              <ChevronDown className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              Due Date
            </label>
            <input
              type="date"
              className="w-full bg-surface-low border-none rounded-lg p-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-300 text-slate-600"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              Description
            </label>
            <textarea
              rows={4}
              placeholder="Provide detailed context for this task..."
              className="w-full bg-surface-low border-none rounded-lg p-4 text-slate-900 placeholder:text-slate-600/50 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-6 mt-10">
          <Link
            href={`/projects/${params.projectName}/tasks`}
            className="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Back
          </Link>
          <button className="bg-blue-300 hover:bg-blue-600 text-white text-sm font-bold py-3 px-8 rounded-lg transition-colors">
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
}
