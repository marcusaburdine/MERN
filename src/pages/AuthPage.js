import LoginForm from "../components/LoginForm"
import SignUpForm from "../components/SignUpForm"

export default function AuthPage ({setUser}) {
  return (
    <main>
      <h1>Auth Page</h1>
      <SignUpForm setUser={setUser}/>
      <LoginForm setUser={setUser}/>
    </main>
  )
}