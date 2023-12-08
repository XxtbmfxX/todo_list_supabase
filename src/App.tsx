import { UserProvider, useUser } from './Contexto/UserContext';


import {  useEffect } from 'react'
import { supabase } from './supabase/supabaseClient'

import './App.css';
import Auth from './components/Auth';
import Account from './components/Account';

function App() {
  //desde el contexto
  const { session, setSession } = useUser();

  
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
      {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    </div>

   
  </UserProvider>

  )
}

export default App
