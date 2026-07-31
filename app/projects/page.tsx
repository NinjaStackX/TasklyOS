import { Lightbulb, Target } from "lucide-react";
import Link from "next/link";

export default function AddNewProjectPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      {/* Breadcrumbs */}
      <div className="text-xs font-bold text-slate-300 tracking-wider mb-6 flex items-center gap-2">
        <span className="text-slate-600">PROJECTS</span>
        <span>›</span>
        <span className="text-slate-900">ADD NEW PROJECT</span>
      </div>

      <h1 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">
        Add New Project
      </h1>

      <div className="bg-white rounded-2xl shadow-sm border border-surface-highest overflow-hidden">
        {/* Header Section */}
        <div className="flex items-start gap-4 p-8 border-b border-surface-highest">
          <div className="w-12 h-12 rounded-xl bg-surface-low flex items-center justify-center text-blue-300 flex-shrink-0">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Initialize New Project
            </h2>
            <p className="text-slate-600 mt-1">
              Define the scope and foundational details of your project.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              Project Title <span className="text-semantic-error">*</span>
            </label>
            <input
              type="text"
              defaultValue="Pr"
              className="w-full bg-surface-low border border-semantic-error/30 rounded-lg p-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-semantic-error"
            />
            <p className="text-xs text-semantic-error font-medium flex items-center gap-1 mt-2">
              <span className="inline-block w-4 h-4 text-center border border-semantic-error rounded-full leading-3">
                !
              </span>
              Project name must be at least 3 characters.
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
              placeholder="Provide a high-level overview of the project's architectural objectives and key milestones..."
              className="w-full bg-surface-low border-none rounded-lg p-4 text-slate-900 placeholder:text-slate-600/60 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
            />
            <div className="text-right text-xs text-slate-600">
              0 / 500 characters
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between p-8 pt-0">
          <Link
            href="/projects"
            className="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Back
          </Link>
          <button className="bg-blue-300 hover:bg-blue-600 text-white text-sm font-bold py-3 px-6 rounded-lg transition-colors">
            Create Project
          </button>
        </div>
      </div>

      {/* Pro Tip */}
      <div className="mt-6 bg-surface-bg p-4 rounded-xl flex items-start gap-3 border border-surface-highest">
        <Lightbulb className="w-5 h-5 text-slate-600 mt-0.5" />
        <p className="text-sm text-slate-600">
          <span className="font-bold text-slate-900">Pro Tip:</span> You can
          invite project members and assign epics immediately after the initial
          creation process.
        </p>
      </div>
    </div>
  );
}
