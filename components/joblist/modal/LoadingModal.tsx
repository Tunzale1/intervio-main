"use client";

import React, { useEffect, useState } from "react";
import { Modal, Button, Progress } from "antd";
import Image from "next/image";
interface LoadingModalProps {
  isVisible: boolean;
  onCancel: () => void;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ isVisible, onCancel }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isVisible) {
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 30); // Fills the progress bar in 3 seconds (3000ms / 100 steps = 30ms per step)
    } else {
      setProgress(0); // Reset progress when modal is hidden
    }

    return () => {
      clearInterval(timer);
    };
  }, [isVisible]);

  return (
    <Modal
      open={isVisible}
      onCancel={onCancel}
      footer={null}
      centered
    >
      <div className="text-center"> 
      <Image
      src={"/imgs/sparkles.svg"}
      alt="Sparkles"
      width={64}
      height={64}
      className="mb-4 mx-auto"
/>
        <h2>Intervio AI is analyzing your job post...</h2>
        <p>Sit back and relax while we analyze your data. This shouldn take a lot.</p>
        <Progress percent={progress} status="active" showInfo={false} />
        <Button onClick={onCancel} className="mt-4">Cancel</Button>
      </div>
    </Modal>
  );
};

export default LoadingModal;
