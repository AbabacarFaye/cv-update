import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { usePuterStore } from '~/lib/puter';


export const meta = () => {[{ title: "Auth" , description: "Auth page for CV Update" }]}
const auth = () => {
    const{isLoading, auth} = usePuterStore();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();
    
    useEffect(() => { if (auth.isAuthenticated) navigate(next)  }, [auth.isAuthenticated, next]);
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
            <div className="flex flex-col gap-2 items-center text-center">
                <h1 className="text-3xl font-bold text-center">Bienvenue</h1>
            <h2 className="text-lg text-center text-gray-600">Connectez-vous pour continuer</h2>
            </div>
            <div>
                {isLoading ? (
                    <button className="auth-button animate-pulse">Connexion...</button>
                ) : (
                    <> {auth.isAuthenticated ? (
                        <button onClick={auth.signOut} className="auth-button">Se déconnecter</button>
                    ) : (
                        <button onClick={auth.signIn} className="auth-button">Se connecter</button>
                    )}
                    </>
                    
                )}
            </div>
        </section>
        </div>
    </main>
  )
}

export default auth
