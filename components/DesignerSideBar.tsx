import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { FormElements } from "./FormElements";
import SidebarBtnElement from "./SidebarBtnElement";

function DesignerSideBar() {
  const droppable = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });
  return (
    <aside className='w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-muted p-4 bg-background overflow-y-auto h-full'>
      Elements
      <SidebarBtnElement formElement={FormElements.TextField} />
    </aside>
  );
}

export default DesignerSideBar;
