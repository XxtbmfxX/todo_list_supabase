import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const emailRedirectTo =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_SUPABASE_EMAIL_REDIRECT_DEV
      : import.meta.env.VITE_SUPABASE_EMAIL_REDIRECT_PROD

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: false,
        emailRedirectTo,
      },
    });

    if (error) {
      alert("Error: " + (error.message || "Error desconocido"));
    } else {
      alert("Revisa tu email para hacer login");
    }

    setLoading(false);
  };

  return (
    <main
      className="Main"
      style={{
        display: "grid",
        gap: "20px",
        textAlign: "center",
      }}
    >
      <p
        className="description"
        style={{
          textAlign: "center",
        }}
      >
        Ingresa con un link mágico que llegará a tu correo ( •̀ ω •́ )✧
      </p>
      <form
        className="Form"
        style={{ display: "grid", gap: "20px" }}
        onSubmit={handleLogin}
      >
        <div>
          <input
            className="Input"
            type="email"
            placeholder="Your email"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "5px",
            }}
          />
        </div>
        <div>
          <button className="Singin" style={{
             color: "blue",
             padding: "10px",
             background: "none",
             cursor: "pointer",
          }} disabled={loading}>
            {loading ? <span>Cargando...</span> : <span>Enviar Link</span>}
          </button>
        </div>
      </form>
    </main>
  );
}
