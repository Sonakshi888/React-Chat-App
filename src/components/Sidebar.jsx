import React, { useEffect, useRef, useState } from "react";
import { Divider } from "rsuite";
import CreateRoomBtnModal from "./dashboard/CreateRoomBtnModal";
import DashboardToggle from "./dashboard/DashboardToggle";
import ChatRoomList from "./rooms/ChatRoomList";

const Sidebar = () => {
  const topSideBar = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (topSideBar.current) {
      setHeight(topSideBar.current.scrollHeight);
    }
  }, [topSideBar]);

  return (
    <div className="h-100 pt-2">
      <div ref={topSideBar}>
        <DashboardToggle />
        <CreateRoomBtnModal />
        <Divider>Join Conversation</Divider>
      </div>
      <ChatRoomList aboveElHeight={height} />
    </div>
  );
};

export default Sidebar;
