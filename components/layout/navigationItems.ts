// components/navigationItems.ts
import { FolderKanban, Layers, CheckSquare, Users, Info } from "lucide-react";

export const menuItems = [
  { name: "Projects", href: "/", icon: FolderKanban },
  { name: "Project Epics", href: "/epics", icon: Layers },
  { name: "Project Tasks", href: "/tasks", icon: CheckSquare },
  { name: "Project Members", href: "/members", icon: Users },
  { name: "Project Details", href: "/details", icon: Info },
];
