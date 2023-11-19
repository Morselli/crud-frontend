import lawImg from '../../assets/law.png'
import './styles.css'

export default function HomeCard({isLogin}) {
  return (
    <>
    <section className="form-container">
        <div className="logon-image">
          <img src={lawImg} alt="Law"></img>
        </div>
        <div className="logon-form">

            {isLogin ? (
              <form>
                <h1>CRUD Project</h1>
                <h2 >Entre na sua conta</h2>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>

                <button className="button" type="submit">Login</button>
            </form>
            ) : (
              <h1 style={{marginTop: 180 + "px"}}>CRUD Project</h1>
            )}
        </div>
      </section>
    </>
  )
}

