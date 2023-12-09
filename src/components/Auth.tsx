import { useState } from 'react'
import { supabase } from '../supabaseClient'


const descriptionStyle = {
  textAlign: "center"
}


const authStyle = {
  display: "grid",
  gap: "20px",
  textAlign: "center"
}

const singinStyles = {
  color: "blue",
  padding: "10px",
  background: "none",
  cursor:  'pointer'
}

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const emailRedirectTo =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:5173'
    : import.meta.env.VITE_SUPABASE_EMAIL_REDIRECT;

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
    alert('Revisa tu email para hacer login');
  }

  setLoading(false);
};

  return (
      <main className="Main" style={authStyle} >
        <p className="description" style={descriptionStyle} >Ingresa con un link mágico que llegará a tu correo ( •̀ ω •́ )✧</p>
        <form className="Form" style={{display: "grid", gap: "20px"}} onSubmit={handleLogin}>
          <div>
            <input
              className="Input"
              type="email"
              placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "5px"
              }}
            />
          </div>
          <div>
            <button className='Singin' style={singinStyles} disabled={loading}>
              {loading ? <span>Cargando...</span> : <span>Enviar Link</span>}
            </button>
          </div>
        </form>
      </main>
  )
}