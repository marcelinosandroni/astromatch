import { useEffect, useRef, useState } from "react"
import axios from "axios"
import * as S from "../styles/match"

export default function Match() {
  const [profile, setProfile] = useState({})
  const [matchList, setMatchList] = useState([])
  const [enterAnimation, setEnterAnimation] = useState(false)
  const [hideCircle, setHideCircle] = useState(false)
  const [alert, setAlert] = useState({ show: false, msg: "" })
  const enterAudio = useRef()

  const baseUrl =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcelino/"

  useEffect(async function () {
    const r = await axios.get(`${baseUrl}person`)
    setProfile({ ...r.data.profile })
    getMatcheList()
  }, [])

  useEffect(() => {
    enterAudio.current?.play()
  }, [])

  const nextProfile = async () => {
    const r = await axios.get(`${baseUrl}person`)
    setProfile({ ...r.data.profile })
    getMatcheList()
  }

  const itsAMatch = async () => {
    const { id } = profile
    const r = await axios.post(`${baseUrl}choose-person`, {
      id: id,
      choice: true,
    })
    const msg = r.data.isMatch
      ? "Its a Match! Finally ty God!"
      : "Sorry, it's not you, it's me"

    setAlert({ show: true, msg })
    await new Promise(r => setTimeout(() => r("ok"), 3000))
    setAlert({ show: false, msg })
    nextProfile()
  }

  const getMatcheList = async () => {
    const r = await axios.get(`${baseUrl}matches`)
    setMatchList([...r.data.matches])
  }

  const clear = async () => {
    const r = await axios.put(`${baseUrl}clear`)
    setMatchList([])
  }

  const renderMatchList = () =>
    matchList.map(profile => <S.MatchProfile src={profile.photo} />)

  const renderProfile = ({ name, age, photo, bio }) => (
    <>
      <S.InfoContainer>
        <S.Name show>{name}</S.Name>
        <S.Age show>{age}</S.Age>
      </S.InfoContainer>
      <S.Image src={photo} show />
      <S.Bio show>{bio}</S.Bio>
      <S.Heart onClick={itsAMatch} />
      <S.HeartBroken onClick={nextProfile} />
      <S.HeartList />
      <S.MatchList>{renderMatchList()}</S.MatchList>
      <S.Clear onClick={clear} />
    </>
  )

  return (
    <S.Container>
      <audio ref={enterAudio} src='/enterMatchPage.ogg' />
      <S.Box onAnimationEnd={() => setEnterAnimation(true)}>
        {!hideCircle && (
          <S.CrazyCricle onAnimationEnd={() => setHideCircle(true)} />
        )}
        {enterAnimation &&
          Object.keys(profile).length &&
          renderProfile(profile)}
        {alert.show && <S.Alert>{alert.msg}</S.Alert>}
      </S.Box>
    </S.Container>
  )
}
