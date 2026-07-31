import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function AddNewEpicPage({
  params,
}: {
  params: { projectName: string };
}) {
  const displayProjectName = "Alpha Project"

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
          href={`/projects/${params.projectName}/epics`}
          className="text-slate-600"
        >
          EPICS
        </Link>
        <span>›</span>
        <span className="text-slate-900">NEW EPIC</span>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
          Create New Epic
        </h1>
        <p className="text-slate-600 text-lg max-w-xl">
          Define a major project phase or high-level milestone to group related
          tasks and track architectural progress.
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
              placeholder="e.g. Structural Foundation Phase"
              className="w-full bg-surface-low border border-none rounded-lg p-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {/* Displayed error based on mockup */}
            <p className="text-xs text-semantic-error font-bold flex items-center gap-1 mt-1">
              <span className="inline-block w-4 h-4 text-center border border-semantic-error rounded-full leading-3">
                !
              </span>
              TITLE IS REQUIRED (MINIMUM 3 CHARACTERS)
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                Description
              </label>
              <span className="text-xs text-slate-300">Optional</span>
            </div>
            <textarea
              rows={4}
              placeholder="Describe the scope and objectives of this epic..."
              className="w-full bg-surface-low border-none rounded-lg p-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
            />
            <div className="text-right text-xs text-slate-600">
              0 / 500 characters
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                Assignee
              </label>
              <div className="relative">
                <select className="w-full bg-surface-low border-none rounded-lg p-4 text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300">
                  <option value="" disabled selected>
                    Select a member...
                  </option>
                  <option value="1">Alice Moore</option>
                </select>
                <ChevronDown className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                Deadline
              </label>
              <input
                type="date"
                className="w-full bg-surface-low border-none rounded-lg p-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-6 mt-10 pt-6 border-t border-surface-highest">
          <Link
            href={`/projects/${params.projectName}/epics`}
            className="text-sm font-bold text-slate-600 hover:text-slate-900"
          >
            Cancel
          </Link>
          <button className="bg-blue-300 hover:bg-blue-600 text-white text-sm font-bold py-3 px-8 rounded-lg transition-colors shadow-md">
            Create Epic
          </button>
        </div>
      </div>
    </div>
  );
}
