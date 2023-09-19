import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Modal } from "antd";
import { useAuth } from "../../context/AuthContext";
function LoginSignupModal() {
  const { isClickedLogin, modalOpen, setModalOpen } = useAuth();

  return (
    <div>
      <>
        {isClickedLogin ? (
          <Modal
            title="Vertically centered modal dialog"
            centered
            open={modalOpen}
            onCancel={() => setModalOpen(false)}
            footer={null}
          >
            <SignupForm />
          </Modal>
        ) : (
          <Modal
            title="Vertically centered modal dialog"
            centered
            open={modalOpen}
            onCancel={() => setModalOpen(false)}
            footer={null}
          >
            <LoginForm />
          </Modal>
        )}
      </>
    </div>
  );
}

export default LoginSignupModal;
