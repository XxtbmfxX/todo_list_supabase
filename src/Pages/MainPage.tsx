import { Session } from "@supabase/supabase-js";
import { useEffect } from "react";
import { useUser } from "../Contexto/UserContext";

import { useGetUser } from "../api/GetUser";
import TodoList from "../components/TodoList";
import Modal from "../components/Modal";

interface MainPageProps {
  session: Session | null; // Puedes ajustar esto según tus necesidades
}

const MainPage: React.FC<MainPageProps> = ({ session }) => {
  const { userData, setUserData } = useUser();

  const userId = session?.user.id;

  useEffect(() => {
    if (userId) {
      useGetUser(userId)
        .then((usuario) => {
          setUserData(usuario);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }, [userId]);

  return (
    <>
      {userData ? (
        <main
          className="Main"
          style={{
            margin: "20px",
          }}
        >
          <TodoList />
        </main>
      ) : (
        <p>loading...</p>
      )}

    <Modal/>

    </>
  );
};

export default MainPage;
