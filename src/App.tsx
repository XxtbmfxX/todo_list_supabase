// @ts-ignore
import { UserProvider, useUser} from './Contexto/UserContext.jsx';

import './App.css';
import Auth from './components/Auth';
import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient.js';
import MainPage from './Pages/MainPage.js';
import { Session } from '@supabase/supabase-js';

function App() {
  //desde el contexto
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
      <UserProvider>
      <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Auth /> : <MainPage key={session.user.id} session={session} />}
    </div>
   
  </UserProvider>

  )
}

export default App
