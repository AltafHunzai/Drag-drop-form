import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { FormElements } from "./FormElements";
import SidebarBtnElement from "./SidebarBtnElement";
import useDesigner from "./hooks/useDesigner";
import FormElementsSidebar from "./FormElementsSidebar";
import PropertiesFormSidebar from "./PropertiesFormSidebar";

function DesignerSideBar() {
  const { selectedElement } = useDesigner();
  const droppable = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });
  return (
    <aside className='w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-muted p-4 bg-background overflow-y-auto h-full'>
     {!selectedElement && <FormElementsSidebar/>}
     {selectedElement && <PropertiesFormSidebar/>}
    </aside>
  );
}

export default DesignerSideBar;
