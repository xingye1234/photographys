import { useState } from "react";
import { Dropdown, Modal } from "antd";

export default function Modals({
  children,
  title,
  content,
}: {
  children: React.ReactNode;
  title: string;
  content: any;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <span onClick={showModal}>{children}</span>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {content}
      </Modal>
    </>
  );
}
