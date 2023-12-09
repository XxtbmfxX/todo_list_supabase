import React, { useState } from "react";
import { useUser } from "../Contexto/UserContext";
import { PostTodo } from "../api/PostTodo";

const Modal: React.FC = () => {
  const { setNumber, userData } = useUser();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setInputValue("");
  };

  const handleConfirm = async () => {
    try {
      // Llama a la función PostTodo para enviar la tarea a la base de datos
      const createdTodo = await PostTodo(inputValue, userData?.id); // Reemplaza 'userID' con la lógica para obtener el ID del usuario
      if (createdTodo) {
        console.log("Tarea creada exitosamente:", createdTodo);
      } else {
        console.error("Error al crear la tarea.");
      }
    } catch (error: any) {
      console.error("Error al crear la tarea:", error.message);
    }

    // Cierra el modal después de confirmar
    closeModal();
    setNumber(Math.random());
  };

  return (
    <div>
      <button
        style={{
          position: "absolute",
          bottom: "50px",
          right: "20px",
          borderRadius: "100%",
          padding: "20px",
          background: "none",
          cursor: "pointer",
        }}
        onClick={openModal}
      >
        ➕
      </button>

      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "49",
          }}
        >
          <div
            className="Modal Screen"
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "400px",
              width: "100%",
              zIndex: "50",
            }}
          >
            <h2>Agregar tarea</h2>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{
                width: "100%",
                marginBottom: "10px",
                padding: "8px",
                boxSizing: "border-box",
              }}
              placeholder="Tocar pasto"
            />
            <div 
              style={{
                display:"flex",
                justifyContent: "center",
                gap :"10px"
              }}
            >
              <button
                onClick={handleConfirm}
                style={{
                  marginRight: "10px",
                  padding: "20px",
                  background: "none",
                  cursor: "pointer",
                  borderRadius: "100%"
                }}
              >
                👌
              </button>
              <button onClick={closeModal}
                style={{
                  marginRight: "10px",
                  padding: "20px",
                  background: "none",
                  cursor: "pointer",
                  borderRadius: "100%"
                }}
              >✖️</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
