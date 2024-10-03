import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return(
        <section className="App">
            <TwitterFollowCard isFollowing userName="joakooriveros_" name="Joaquin Riveros" />
            <TwitterFollowCard isFollowing userName="agustinalvarez12" name="Agustin Alvarez" />
            <TwitterFollowCard isFollowing userName="francormani1" name="Franco Armani" />
            <TwitterFollowCard isFollowing userName="ElonMusk15" name="Elon Musk" />
        </section>
        )
}